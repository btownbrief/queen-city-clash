// Whale Tails (painted): two black-granite whale-tail creatures fighting as a tag team, cut into parts
// (fighters/whale/slice.json) and animated on bones. Units are the painting's pixels (1408 x 768); feet at y ~692.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// Twin "a" (left, fierce, orange eyes) and twin "b" (right, smirking, yellow eyes) each have their own
// sub-skeleton under the shared root. b's right arm (armR, the facing side) throws the punch.
//
// The engine only rotates bones, so each twin gets two "lift" bones whose pivot sits far off to the right:
// a tiny rotation then moves that twin almost straight up or down (0.1 degree is about 5 painting px).
//   <t>_lift moves the whole twin (hops in the run), <t>_sink moves only its body (breathing dips):
//   positive lifts up, negative sinks down.
//   <t>_slide (pivot far above) moves the whole twin sideways: negative slides right, toward the opponent.

(() => {
  const FAR = 3000;   // lift pivot distance
  const P = {
    hip: [705, 560],
    a_hip: [390, 560], a_tail: [305, 215],
    a_shoulderL: [260, 365], a_elbowL: [172, 405], a_shoulderR: [505, 455], a_elbowR: [595, 460],
    a_thighL: [295, 545], a_kneeL: [255, 605], a_thighR: [480, 560], a_kneeR: [490, 615],
    b_hip: [1040, 565], b_tail: [970, 215],
    b_shoulderL: [905, 370], b_elbowL: [850, 410], b_shoulderR: [1165, 455], b_elbowR: [1252, 460],
    b_thighL: [925, 545], b_kneeL: [905, 610], b_thighR: [1140, 560], b_kneeR: [1155, 615],
  };

  // one twin's bones, prefixed with t ("a" or "b")
  const twinBones = (t, wobble) => ({
    [`${t}_slide`]: { parent: "hip", pivot: [P[`${t}_hip`][0], P[`${t}_hip`][1] - FAR] },
    [`${t}_lift`]: { parent: `${t}_slide`, pivot: [P[`${t}_hip`][0] + FAR, P[`${t}_hip`][1]] },
    [`${t}_sink`]: { parent: `${t}_lift`, pivot: [P[`${t}_hip`][0] + FAR, P[`${t}_hip`][1]] },
    [`${t}_body`]: { parent: `${t}_sink`, pivot: P[`${t}_hip`] },
    [`${t}_tail`]: { parent: `${t}_body`, pivot: P[`${t}_tail`], spring: { vx: 0.8, vy: 0.5, max: 8, wobble, amp: 2.5 } },
    [`${t}_armL_up`]: { parent: `${t}_body`, pivot: P[`${t}_shoulderL`], lag: 0.85 },
    [`${t}_armL_lo`]: { parent: `${t}_armL_up`, pivot: P[`${t}_elbowL`], lag: 0.75 },
    [`${t}_armR_up`]: { parent: `${t}_body`, pivot: P[`${t}_shoulderR`] },
    [`${t}_armR_lo`]: { parent: `${t}_armR_up`, pivot: P[`${t}_elbowR`], lag: 0.8 },
    [`${t}_legL_up`]: { parent: `${t}_lift`, pivot: P[`${t}_thighL`] },
    [`${t}_legL_lo`]: { parent: `${t}_legL_up`, pivot: P[`${t}_kneeL`] },
    [`${t}_legR_up`]: { parent: `${t}_lift`, pivot: P[`${t}_thighR`] },
    [`${t}_legR_lo`]: { parent: `${t}_legR_up`, pivot: P[`${t}_kneeR`] },
  });

  // prefix a twin pose's keys: pre("a", { body: 4 }) -> { a_body: 4 }
  const pre = (t, pose) => Object.fromEntries(Object.entries(pose).map(([k, v]) => [`${t}_${k}`, v]));
  // a looping cycle sampled at n keys; twin b runs `lagB` keys behind twin a so they read as two characters
  const cycle = (n, fa, fb, lagB, shared = () => ({})) => Array.from({ length: n }, (_, i) => ({
    ...shared(i / n), ...pre("a", fa(i / n)), ...pre("b", fb(((i - lagB) / n + 1) % 1)),
  }));
  const S = (u) => Math.sin(u * Math.PI * 2), C = (u) => Math.cos(u * Math.PI * 2);

  // breathing: body dips and shoulders roll, depth 0..1 over the cycle
  const breathe = (amp, tail) => (u) => {
    const d = (1 - C(u)) / 2;
    return { sink: -0.3 * amp * d, body: 2 * d, tail: tail * d, armL_up: 5 * d, armL_lo: -5 * d, armR_up: -5 * d, armR_lo: 6 * d,
      legL_up: 2 * d, legR_up: -2 * d };
  };
  // stubby run: legs alternate, a hop at each passing step, arms pump opposite, body leans in
  const run = (stride) => (u) => {
    const s = S(u), hop = (1 + C(u * 2)) / 2;
    return { lift: 0.5 * hop, body: 8 + 4 * S(u * 2), tail: -3 + 5 * S(u * 2 + 0.25),
      legL_up: stride * s, legL_lo: 8 + 22 * Math.max(0, -s), legR_up: -stride * s, legR_lo: 8 + 22 * Math.max(0, s),
      armL_up: -22 * s, armL_lo: 10 * s, armR_up: 22 * s, armR_lo: -10 * s };
  };

  registerFighter({
    id: "whale", name: "WHALE TAILS",
    raster: "fighters/whale",
    origin: [705, 692],
    scale: 0.42,
    box: [1280, 600],
    stats: { speed: 8.5, weight: 1.1, power: 1.1, airJumps: 2 },
    strikePoint: ["b_armR_lo", 1305, 465],
    splash: ["#ffd36b", "#ff8a2a", "#9fd8d0"],
    runRate: 0.0028, idleTime: 2.2, attackTiming: [0.3, 0.5],
    icon: [705, 380, 1340],

    bones: { hip: { parent: null, pivot: P.hip }, ...twinBones("a", 3.1), ...twinBones("b", 2.5) },

    // back to front (the slicing order): twin a, then twin b in front
    parts: ["a", "b"].flatMap((t) => [
      { art: `${t}_tail`, bone: `${t}_tail`, icon: true },
      { art: `${t}_armL_up`, bone: `${t}_armL_up` },
      { art: `${t}_armL_lo`, bone: `${t}_armL_lo` },
      { art: `${t}_armR_up`, bone: `${t}_armR_up` },
      { art: `${t}_armR_lo`, bone: `${t}_armR_lo` },
      { art: `${t}_legL_up`, bone: `${t}_legL_up` },
      { art: `${t}_legL_lo`, bone: `${t}_legL_lo` },
      { art: `${t}_legR_up`, bone: `${t}_legR_up` },
      { art: `${t}_legR_lo`, bone: `${t}_legR_lo` },
      { art: `${t}_body`, bone: `${t}_body`, icon: true },
    ]),

    anims: {
      // each twin breathes on its own beat: b is a quarter-cycle behind a, and a bit calmer
      idle: cycle(4, breathe(1, -4), breathe(0.8, 3), 1),
      // b trails a by an eighth of a stride
      run: cycle(8, run(28), run(26), 1),
      jump: { root: [0, -10], sq: [0.96, 1.05],
        ...pre("a", { body: -5, tail: 3, armL_up: 22, armL_lo: 10, armR_up: -26, armR_lo: -10, legL_up: 18, legL_lo: 22, legR_up: -16, legR_lo: 26 }),
        ...pre("b", { lift: 0.15, body: -3, tail: 2, armL_up: 18, armL_lo: 12, armR_up: -22, armR_lo: -8, legL_up: 14, legL_lo: 26, legR_up: -20, legR_lo: 22 }) },
      fall: { root: [0, 0],
        ...pre("a", { lift: 0.1, body: 3, tail: -5, armL_up: 34, armL_lo: 18, armR_up: -36, armR_lo: -16, legL_up: -6, legL_lo: 8, legR_up: 8, legR_lo: 8 }),
        ...pre("b", { body: 2, tail: -4, armL_up: 28, armL_lo: 22, armR_up: -30, armR_lo: -20, legL_up: -8, legL_lo: 6, legR_up: 6, legR_lo: 10 }) },
      // b cocks its right fist back by its face; a hypes it up with a raised fist
      windup: { root: [-24, 6], sq: [1.03, 0.97],
        ...pre("a", { sink: -0.15, body: -6, armR_up: -30, armR_lo: -20, armL_up: 8, armL_lo: -6, legL_up: 4, legR_up: -4 }),
        ...pre("b", { slide: 0.4, sink: -0.2, body: -10, tail: 6, armR_up: 40, armR_lo: -95, armL_up: -10, armL_lo: 8, legL_up: 6, legR_up: -6 }) },
      // straight punch: b's arm is already level in the painting (rest angles 3.5 and 5.4), so it just
      // snaps straight out as the pair lunges; the body lean is cancelled at the shoulder
      strike: { root: [40, 0], sq: [1.06, 0.96],
        ...pre("a", { slide: -0.3, body: 6, tail: -6, armR_up: -16, armR_lo: -4, armL_up: -8, armL_lo: 6, legL_up: 10, legR_up: -10 }),
        ...pre("b", { slide: -0.9, body: 10, tail: -8, armR_up: -14, armR_lo: -2, armL_up: 10, armL_lo: -8, legL_up: 12, legR_up: -14, legR_lo: 6 }) },
      hit: { root: [-14, -8], sq: [0.95, 1.04],
        ...pre("a", { lift: 0.12, body: -12, tail: 6, armL_up: 26, armL_lo: 14, armR_up: -30, armR_lo: -18, legL_up: 14, legL_lo: 16, legR_up: -12, legR_lo: 18 }),
        ...pre("b", { lift: 0.06, body: -15, tail: 7, armL_up: 22, armL_lo: 18, armR_up: -34, armR_lo: -14, legL_up: 10, legL_lo: 20, legR_up: -16, legR_lo: 14 }) },
    },
  });
})();
