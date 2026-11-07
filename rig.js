// Queen City Clash copy of v2/rig.js. Changes from v2:
// - parts load as .webp (downscaled copies made by tools/copy-fighters.py), from window.QCC_BASE + raster
// - colour variants are baked lazily with pixel math instead of ctx.filter (Safari on iPhone ignores canvas
//   filters, and baking every costume of every part up front costs phones too much memory)
// - extendFighter() adds the game's extra poses and hit points (fighters/<id>.moves.js)
// - stepTo(), poseOf(), pointAt(), bounds() let the game engine drive and measure poses
// - draw() options: hide (a Set of parts to skip) and solid ([hex, strength] colour wash)
// - bone order is computed on first use, so poses can be measured before the art loads
//
// Drawn-parts rig, the way cut-out fighting games animate characters.
//
// Each fighter is one SVG illustration in its rest pose, split into part groups
// (<g id="torso">, <g id="armUp">, ...). At load time every part is rasterized once.
// A skeleton of bones (each with a parent and a pivot point in the SVG's coordinates)
// carries the parts; animation only rotates bones around their pivots, so the drawn
// art never deforms. Far-side limbs reuse the near-side art, shifted and darkened.

const FIGHTERS = {};
const FIGHTER_ORDER = [];
function registerFighter(def) {
  FIGHTERS[def.id] = def;
  if (!FIGHTER_ORDER.includes(def.id)) FIGHTER_ORDER.push(def.id);
}
// game/fighters/<id>.moves.js: extra poses for the full move set, and where each attack pose's
// business end is (bone + point in painting pixels) so hitboxes sit on the art.
function extendFighter(id, ext) {
  const def = FIGHTERS[id];
  if (!def) throw new Error("extendFighter: no fighter " + id);
  Object.assign(def.anims, ext.poses || {});
  def.hitAt = Object.assign(def.hitAt || {}, ext.hit || {});
  if (ext.set) Object.assign(def, ext.set);
}

const RIG = (() => {
  const RES = 3;            // raster pixels per SVG unit
  const PAD = 6;            // room for outlines around each part's box
  const FAR = "brightness(0.7) saturate(0.85)";
  const EXPRS = ["blink", "fierce", "hurt"];
  // Costume 0 is the drawn colours; the others are colour shifts of it.
  const COSTUMES = ["none", "hue-rotate(-28deg) saturate(1.45)", "hue-rotate(160deg) saturate(1.2)", "saturate(0.2) brightness(1.15)"];
  const smooth = (t) => t * t * (3 - 2 * t);

  // ---------- loading ----------

  // Image.decode() can reject spuriously when many images load at once; the load event is reliable.
  // Retries a few times: the simple local dev server sometimes drops a request when many arrive at once.
  function loadImg(src, tries = 4) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => {
        if (tries > 1) setTimeout(() => loadImg(src, tries - 1).then(resolve, reject), 150);
        else reject(new Error("could not load " + src.slice(0, 80)));
      };
      img.src = src;
    });
  }

  async function fetchJson(url, tries = 5) {
    for (let i = 0; ; i++) {
      try {
        const r = await fetch(url);
        if (r.ok) return await r.json();
        throw new Error(`${r.status} ${url}`);
      } catch (e) {
        if (i >= tries - 1) throw e;
        await new Promise((res) => setTimeout(res, 200));
      }
    }
  }

  // Painted fighters: each part is a PNG cut from one painting; parts.json gives each
  // part's box [x, y, w, h] in the painting's pixels, which serve as the rig's units.
  async function loadRaster(def) {
    const root = (window.QCC_BASE || "") + def.raster;
    const meta = await fetchJson(`${root}/parts.json`);
    def.art = {};
    // expression variants (<part>-blink, -fierce, -hurt) are listed in parts.json and swap in automatically
    const base = [...new Set(def.parts.map((p) => p.art))];
    const ids = [...base, ...base.flatMap((id) => EXPRS.map((e) => `${id}-${e}`)).filter((id) => meta[id])];
    await Promise.all(ids.map(async (id) => {
      const img = await loadImg(`${root}/${id}.${def.ext || "webp"}`);
      def.art[id] = lazyArt(img, meta[id]);
    }));
    def.boneOrder = sortBones(def.bones);
    def.ready = true;
  }

  async function load(def) {
    if (def.raster) return loadRaster(def);
    const text = await (await fetch(def.svg)).text();
    const host = document.createElement("div");
    host.style.cssText = "position:absolute;left:-20000px;top:0;";
    host.innerHTML = text;
    document.body.appendChild(host);
    const svg = host.querySelector("svg");
    const defs = svg.querySelector("defs");
    const defsXml = defs ? new XMLSerializer().serializeToString(defs) : "";
    def.art = {};
    const ids = [...new Set(def.parts.map((p) => p.art))];
    await Promise.all(ids.map(async (id) => {
      const el = svg.querySelector("#" + CSS.escape(id));
      if (!el) throw new Error(`${def.id}: missing part <g id="${id}">`);
      const bb = el.getBBox();
      const vb = [bb.x - PAD, bb.y - PAD, bb.width + PAD * 2, bb.height + PAD * 2];
      const clone = el.cloneNode(true);
      clone.removeAttribute("opacity");
      const w = Math.ceil(vb[2] * RES), h = Math.ceil(vb[3] * RES);
      const src = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(" ")}" width="${w}" height="${h}">${defsXml}${new XMLSerializer().serializeToString(clone)}</svg>`;
      const img = await loadImg("data:image/svg+xml;charset=utf-8," + encodeURIComponent(src));
      // Pre-bake every colour variant once: normal, far-side (darker), hit flash (white),
      // and each alternate costume, so drawing never runs a filter per frame.
      const art = { vb, base: [tinted(img, w, h, "none")], far: [tinted(img, w, h, FAR)], flash: tinted(img, w, h, "brightness(0) invert(1)") };
      COSTUMES.forEach((f, i) => {
        if (!i) return;
        art.base[i] = tinted(img, w, h, f);
        art.far[i] = tinted(img, w, h, `${f} ${FAR}`);
      });
      def.art[id] = art;
    }));
    host.remove();
    def.boneOrder = sortBones(def.bones);
    def.ready = true;
  }

  // Colour variants (far-side darker, hit flash, costumes, solid tints) are baked the first time they are
  // drawn. They use pixel math (colour matrices), not ctx.filter, because Safari on iPhone ignores canvas
  // filters. Matrices follow the CSS filter definitions (hue-rotate, saturate, brightness).
  const I3 = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  const mul = (a, b) => [0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => a[r * 3] * b[c] + a[r * 3 + 1] * b[3 + c] + a[r * 3 + 2] * b[6 + c]));
  const sat = (v) => [0.213 + 0.787 * v, 0.715 - 0.715 * v, 0.072 - 0.072 * v, 0.213 - 0.213 * v, 0.715 + 0.285 * v, 0.072 - 0.072 * v, 0.213 - 0.213 * v, 0.715 - 0.715 * v, 0.072 + 0.928 * v];
  const hue = (deg) => { const a = deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
    return [0.213 + c * 0.787 - s * 0.213, 0.715 - c * 0.715 - s * 0.715, 0.072 - c * 0.072 + s * 0.928,
      0.213 - c * 0.213 + s * 0.143, 0.715 + c * 0.285 + s * 0.140, 0.072 - c * 0.072 - s * 0.283,
      0.213 - c * 0.213 - s * 0.787, 0.715 - c * 0.715 + s * 0.715, 0.072 + c * 0.928 + s * 0.072]; };
  const bri = (v) => [v, 0, 0, 0, v, 0, 0, 0, v];
  // same looks as COSTUMES / FAR above
  const COSTUME_M = [I3, mul(sat(1.45), hue(-28)), mul(sat(1.2), hue(160)), mul(bri(1.15), sat(0.2))];
  const FAR_M = mul(sat(0.85), bri(0.7));
  function bake(img, w, h, fn) {
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const x = c.getContext("2d", { willReadFrequently: true });
    x.drawImage(img, 0, 0);
    try { const d = x.getImageData(0, 0, w, h); fn(d.data); x.putImageData(d, 0, 0); } catch (e) { /* tainted canvas: keep plain colours */ }
    return c;
  }
  const byMatrix = (m) => (d) => {
    for (let i = 0; i < d.length; i += 4) {
      if (!d[i + 3]) continue;
      const r = d[i], g = d[i + 1], b = d[i + 2];
      d[i] = m[0] * r + m[1] * g + m[2] * b; d[i + 1] = m[3] * r + m[4] * g + m[5] * b; d[i + 2] = m[6] * r + m[7] * g + m[8] * b;
    }
  };
  const solidFill = (hex) => { const n = parseInt(hex.slice(1), 16), R = n >> 16, Gc = (n >> 8) & 255, B = n & 255;
    return (d) => { for (let i = 0; i < d.length; i += 4) { d[i] = R; d[i + 1] = Gc; d[i + 2] = B; } }; };
  function lazyArt(img, vb) {
    const w = img.naturalWidth, h = img.naturalHeight, cache = {};
    const get = (key, fn) => cache[key] || (cache[key] = bake(img, w, h, fn));
    const art = { vb, img };
    art.base = new Proxy([], { get: (_, i) => (i === "length" ? COSTUME_M.length : +i === 0 ? img : COSTUME_M[+i] ? get("b" + i, byMatrix(COSTUME_M[+i])) : undefined) });
    art.far = new Proxy([], { get: (_, i) => (i === "length" ? COSTUME_M.length : COSTUME_M[+i] ? get("f" + i, byMatrix(mul(FAR_M, COSTUME_M[+i]))) : undefined) });
    Object.defineProperty(art, "flash", { get: () => get("flash", solidFill("#ffffff")) });
    art.solid = (hex) => get("s" + hex, solidFill(hex));
    return art;
  }

  function tinted(img, w, h, filter) {
    const c = document.createElement("canvas");
    c.width = w; c.height = h;
    const x = c.getContext("2d");
    x.filter = filter;
    x.drawImage(img, 0, 0);
    return c;
  }

  function sortBones(bones) {
    const out = [], seen = new Set();
    const visit = (n) => {
      if (seen.has(n)) return;
      if (bones[n].parent) visit(bones[n].parent);
      seen.add(n); out.push(n);
    };
    Object.keys(bones).forEach(visit);
    return out;
  }

  // ---------- poses ----------
  // A pose: { boneName: degrees (clockwise, relative to rest), root: [dx, dy], sq: [sx, sy] }.

  function lerpPose(a, b, t) {
    const out = { root: [0, 0], sq: [1, 1] };
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const k of keys) {
      if (k === "root" || k === "sq") continue;
      out[k] = (a[k] || 0) + ((b[k] || 0) - (a[k] || 0)) * t;
    }
    const ar = a.root || [0, 0], br = b.root || [0, 0], as = a.sq || [1, 1], bs = b.sq || [1, 1];
    out.root = [ar[0] + (br[0] - ar[0]) * t, ar[1] + (br[1] - ar[1]) * t];
    out.sq = [as[0] + (bs[0] - as[0]) * t, as[1] + (bs[1] - as[1]) * t];
    return out;
  }
  function loop(keys, u) {
    const n = keys.length, x = (((u % 1) + 1) % 1) * n, i = Math.floor(x);
    return lerpPose(keys[i], keys[(i + 1) % n], smooth(x - i));
  }

  // anim: { state, t (seconds), runPhase, attackP (0..1), vx, vy }
  function target(def, a) {
    const A = def.anims;
    switch (a.state) {
      case "hit": return lerpPose(A.hit, A.hit, 0);
      case "jump": return lerpPose(A.jump, A.jump, 0);
      case "fall": return lerpPose(A.fall, A.fall, 0);
      case "run": return loop(A.run, a.runPhase * (def.runRate || 0.06));
      case "attack": {
        const [w1, w2] = def.attackTiming || [0.3, 0.5], p = a.attackP;
        if (p < w1) return lerpPose(A.idle[0], A.windup, smooth(p / w1));
        if (p < w2) return lerpPose(A.windup, A.strike, smooth(Math.min(1, ((p - w1) / (w2 - w1)) * 2.5)));
        return lerpPose(A.strike, A.idle[0], smooth((p - w2) / (1 - w2)));
      }
      default: return loop(A.idle, a.t / (def.idleTime || 1.4));
    }
  }

  // Ease the fighter's current pose toward the target and apply spring bones.
  function step(def, anim, a) {
    const tgt = target(def, a);
    const k = a.state === "attack" ? 0.6 : a.state === "hit" ? 0.55 : a.state === "run" ? 0.4 : 0.25;
    if (!anim.pose) anim.pose = tgt;
    const p = anim.pose;
    for (const key in tgt) {
      if (key === "root" || key === "sq") continue;
      // bones with lag < 1 trail behind the body (head, hands, tips): overlapping action
      const lag = (def.bones[key] && def.bones[key].lag) || 1;
      p[key] = (p[key] || 0) + (tgt[key] - (p[key] || 0)) * k * lag;
    }
    p.root = [p.root[0] + (tgt.root[0] - p.root[0]) * k, p.root[1] + (tgt.root[1] - p.root[1]) * k];
    p.sq = [p.sq[0] + (tgt.sq[0] - p.sq[0]) * k, p.sq[1] + (tgt.sq[1] - p.sq[1]) * k];
    // spring bones lag behind motion (tips, tails, antennae)
    anim.spring = anim.spring || {};
    for (const name in def.bones) {
      const sp = def.bones[name].spring;
      if (!sp) continue;
      const want = Math.max(-sp.max, Math.min(sp.max, -(a.vx || 0) * sp.vx - (a.vy || 0) * sp.vy))
        + Math.sin(a.t * (sp.wobble || 3)) * (sp.amp || 3);
      anim.spring[name] = (anim.spring[name] || 0) + (want - (anim.spring[name] || 0)) * 0.15;
    }
    return p;
  }

  // ---------- drawing ----------

  function matrices(def, pose, spring) {
    const M = {};
    for (const name of def.boneOrder || (def.boneOrder = sortBones(def.bones))) {
      const b = def.bones[name];
      const parent = b.parent ? M[b.parent] : new DOMMatrix().translate(pose.root[0], pose.root[1]);
      const ang = (pose[name] || 0) + ((spring && spring[name]) || 0);
      M[name] = parent.translate(b.pivot[0], b.pivot[1]).rotate(ang).translate(-b.pivot[0], -b.pivot[1]);
    }
    return M;
  }

  function baseMatrix(def, pose, x, y, k, facing, extra = [1, 1]) {
    return new DOMMatrix().translate(x, y).scale(k * facing * pose.sq[0] * extra[0], k * pose.sq[1] * extra[1]).translate(-def.origin[0], -def.origin[1]);
  }

  // Head icon (portraits, stock lives): parts marked `icon` drawn in their rest pose.
  function icon(ctx, def, x, y, size, costume = 0) {
    if (!def.ready) return;
    const [cx, cy, span] = def.icon;
    const s = size / span;
    for (const part of def.parts) {
      if (!part.icon || (part.expr && part.expr !== "open")) continue;
      const art = def.art[part.art];
      ctx.save();
      ctx.translate(x, y); ctx.scale(s, s); ctx.translate(-cx, -cy);
      if (part.offset) ctx.translate(part.offset[0], part.offset[1]);
      ctx.drawImage(art.base[costume] || art.base[0], art.vb[0], art.vb[1], art.vb[2], art.vb[3]);
      ctx.restore();
    }
  }

  // Screen position of the fighter's strike point (its fist, claw, hook...) for hit checks.
  function strikePoint(def, anim, x, y, k, facing) {
    if (!def.boneOrder || !anim.pose || !def.strikePoint) return null;
    const [bone, px, py] = def.strikePoint;
    const M = matrices(def, anim.pose, anim.spring);
    const pt = baseMatrix(def, anim.pose, x, y, k, facing).multiply(M[bone]).transformPoint(new DOMPoint(px, py));
    return [pt.x, pt.y];
  }

  // Draw at feet position (x, y) with screen scale k; facing 1 or -1.
  // opts: { expr, flash (0..1), costume (index into COSTUMES), squash: [sx, sy] }
  function draw(ctx, def, anim, x, y, k, facing, opts = {}) {
    if (!def.ready || !anim.pose) return null;
    const pose = anim.pose, M = matrices(def, pose, anim.spring);
    const base = baseMatrix(def, pose, x, y, k, facing, opts.squash);
    for (const part of def.parts) {
      if (part.expr && part.expr !== (opts.expr || "open")) continue;
      if (opts.hide && opts.hide.has(part.art)) continue;
      const expr = opts.expr || "open";
      const art = (expr !== "open" && def.art[`${part.art}-${expr}`]) || def.art[part.art];
      let m = base.multiply(M[part.bone]);
      if (part.offset) m = m.translate(part.offset[0], part.offset[1]);
      const c = opts.costume || 0;
      ctx.save();
      ctx.transform(m.a, m.b, m.c, m.d, m.e, m.f);
      ctx.drawImage((part.far ? art.far : art.base)[c] || art.base[0], art.vb[0], art.vb[1], art.vb[2], art.vb[3]);
      if (opts.flash > 0) {
        const a0 = ctx.globalAlpha;
        ctx.globalAlpha = a0 * opts.flash * 0.7;
        ctx.drawImage(art.flash, art.vb[0], art.vb[1], art.vb[2], art.vb[3]);
        ctx.globalAlpha = a0;
      }
      if (opts.solid) {   // a colour wash over the part: [hex, strength 0..1]
        const a0 = ctx.globalAlpha;
        ctx.globalAlpha = a0 * opts.solid[1];
        ctx.drawImage(art.solid(opts.solid[0]), art.vb[0], art.vb[1], art.vb[2], art.vb[3]);
        ctx.globalAlpha = a0;
      }
      ctx.restore();
    }
  }

  // Engine-driven animation: ease toward an explicit target pose (k = ease 0..1), with spring bones.
  // a: { t (seconds), vx, vy } for the springs.
  function stepTo(def, anim, tgt, k, a) {
    tgt = { root: tgt.root || [0, 0], sq: tgt.sq || [1, 1], ...tgt };
    if (!anim.pose) anim.pose = lerpPose(tgt, tgt, 0);
    const p = anim.pose;
    const keys = new Set([...Object.keys(p), ...Object.keys(tgt)]);
    for (const key of keys) {
      if (key === "root" || key === "sq") continue;
      const lag = (def.bones[key] && def.bones[key].lag) || 1;
      const want = tgt[key] || 0;
      p[key] = (p[key] || 0) + (want - (p[key] || 0)) * Math.min(1, k * lag);
    }
    p.root = [p.root[0] + (tgt.root[0] - p.root[0]) * k, p.root[1] + (tgt.root[1] - p.root[1]) * k];
    p.sq = [p.sq[0] + (tgt.sq[0] - p.sq[0]) * k, p.sq[1] + (tgt.sq[1] - p.sq[1]) * k];
    anim.spring = anim.spring || {};
    for (const name in def.bones) {
      const sp = def.bones[name].spring;
      if (!sp) continue;
      const want = Math.max(-sp.max, Math.min(sp.max, -(a.vx || 0) * sp.vx - (a.vy || 0) * sp.vy)) + Math.sin(a.t * (sp.wobble || 3)) * (sp.amp || 3);
      anim.spring[name] = (anim.spring[name] || 0) + (want - (anim.spring[name] || 0)) * 0.15;
    }
    return p;
  }
  // A named pose, with idle/run loops sampled at u (0..1).
  function poseOf(def, key, u = 0) {
    const A = def.anims[key];
    if (!A) return null;
    return Array.isArray(A) ? loop(A, u) : lerpPose(A, A, 0);
  }
  // Point (bone, px, py in painting pixels) in a pose, relative to the feet, in painting pixels, facing right.
  function pointAt(def, pose, bone, px, py) {
    const P = lerpPose(pose, pose, 0);
    const M = matrices(def, P, null);
    const pt = new DOMMatrix().translate(-def.origin[0], -def.origin[1]).multiply(M[bone]).transformPoint(new DOMPoint(px, py));
    return [pt.x * P.sq[0], pt.y * P.sq[1]];
  }
  // Box around all parts in a pose (painting pixels relative to the feet): [x0, y0, x1, y1].
  function bounds(def, pose) {
    const P = lerpPose(pose, pose, 0), M = matrices(def, P, null);
    const base = new DOMMatrix().translate(-def.origin[0], -def.origin[1]);
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const part of def.parts) {
      if (part.expr && part.expr !== "open") continue;
      const art = def.art && def.art[part.art];
      const vb = art ? art.vb : null;
      if (!vb) continue;
      let m = base.multiply(M[part.bone]);
      if (part.offset) m = m.translate(part.offset[0], part.offset[1]);
      for (const [x, y] of [[vb[0], vb[1]], [vb[0] + vb[2], vb[1]], [vb[0], vb[1] + vb[3]], [vb[0] + vb[2], vb[1] + vb[3]]]) {
        const q = m.transformPoint(new DOMPoint(x, y));
        x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y);
      }
    }
    return [x0, y0, x1, y1];
  }

  return { load, step, stepTo, poseOf, pointAt, bounds, draw, icon, target, strikePoint, COSTUMES };
})();
