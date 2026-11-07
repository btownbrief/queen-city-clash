// Queen City Clash: fighter cards and stages. The engine (index.html, copied from Scarf Kid) reads this
// instead of its own CARDS / STAGES. Everything here is data; the moves themselves come from the engine's
// STYLES (brawler, blob, speedster, heavy, showoff) plus the overrides below.
//
// A card:
//   id       must match the painted rig's id in fighters/<file>.js (registerFighter)
//   style    the Scarf Kid move style it starts from
//   power    stars on the select screen (1-6)
//   stats    from the rig file's stats (speed, weight, power, airJumps), turned into engine physics by statsFor()
//   sp       names of the 4 specials: neutral, side, up, down
//   sup      name of the super
//   names    names of the normal attacks
//   moves    overrides of the style's moves; `sig` names a signature special handled in index.html (SIG)
//   desc     the 3 lines on the select screen ({U} {R} {D} {A} {S} are button names)
(() => {
  // Physics from the rig's simple stats. Scarf Kid's fighters sit in these ranges, so the feel carries over.
  function statsFor(st) {
    const sp = st.speed, w = st.weight, p = st.power;
    return {
      run: +(2.2 + sp * 0.17).toFixed(2), dash: +((2.2 + sp * 0.17) * 1.16).toFixed(2), air: +(2.2 + sp * 0.08).toFixed(2),
      airAcc: +(0.27 + sp * 0.008).toFixed(3), weight: Math.round(50 + w * 52), dm: +(0.6 + p * 0.42).toFixed(2),
      jumps: st.airJumps, jump: +(10.6 - w * 1.1).toFixed(2), fall: +(4.6 + w * 1.8).toFixed(2), grav: +(0.6 + w * 0.35).toFixed(2),
    };
  }
  // Round 4: every fighter has its own kit. `stats` overrides the style's movement (before the round 3/4 jump
  // and speed boosts in qcc-engine.js), `feel` scales its normal attacks (speed < 1 = faster, reach, power),
  // and all 4 specials are set here. Down-specials marked ai: 'close' / 'range' are used by the CPU.
  const RISE = (o) => Object.assign({ rise: 1, st: 3, ac: 16, rc: 0, p0: "rise", p1: "rise" }, o);
  const NO_COUNTER = { counter: 0 }, NO_SHOT = { proj: 0, charge: 0 };
  const cards = [
    { id: "heroic", style: "brawler", name: "MAPLE CREEMEE", aura: "#ffd27a", shotCol: ["#f2c27a", "#fff6e0"],
      sp: ["CREEMEE SWIRL", "SPRINKLE RUSH", "CONE ROCKET", "BRAIN FREEZE"], sup: "DOUBLE SCOOP",
      names: { jab: "CONE JABS", side: "MAPLE PUNCH", upa: "SOFT-SERVE UPPER", downa: "DRIP SWEEP", nair: "SWIRL SPIN", fair: "WAFFLE KICK", uair: "SPRINKLE FLURRY", dair: "CONE STOMP" },
      moves: {
        sspec: { st: 6, ac: 16, rc: 16, dash: 1, multi: 4, dmg: 2.5, hb: [2, -42, 26, 30], bkb: 2, kbg: 0, ang: 50, last: { dmg: 5, bkb: 3.6, kbg: 4.6, ang: 38 }, p0: "windup", p1: "super" },
        uspec: RISE({ multi: 4, dmg: 2.5, hb: [-8, -64, 30, 32], bkb: 2.4, kbg: 0, ang: 90, last: { dmg: 5, bkb: 3.4, kbg: 5, ang: 80 } }),
        dspec: { counter: 1, cm: { freeze: 70 } } },
      desc: ["The all-rounder. Good at everything.", "{R}+{S}: SPRINKLE RUSH, a flurry dash.", "{D}+{S}: BRAIN FREEZE freezes attackers."] },
    { id: "brawler", style: "heavy", name: "THE BRAWLER", aura: "#ff6a2a", shotCol: ["#ff6a2a", "#fff0a0"],
      stats: { run: 3.2, dash: 3.8, weight: 116, dm: 1.25 }, feel: { power: 1.18 },
      sp: ["BAR NAPKIN", "HAYMAKER", "RISING HOOK", "LAST WORD"], sup: "LAST CALL",
      names: { jab: "QUICK JABS", side: "IRON CROSS", upa: "HEADBUTT", downa: "FLOOR STOMP", nair: "SPIN", fair: "HAMMER FIST", uair: "SKY HOOK", dair: "ELBOW DROP" },
      moves: {
        sspec: { sig: "haymaker", st: 6, ac: 12, rc: 20, dmg: 18, hb: [6, -40, 30, 22], bkb: 5, kbg: 6.4, ang: 38, armor: 1, charge: 1, chargeBtn: "special", lunge: 0, dash: 1, p0: "windup", p1: "special" },
        uspec: RISE({ st: 4, ac: 14, dmg: 12, hb: [-2, -64, 26, 28], bkb: 4.2, kbg: 6.2, ang: 80, armor: 1, p1: "upper" }),
        dspec: { counter: 1, cm: { k: 1.4 }, ac: 20, rc: 22 } },
      desc: ["Hits hardest. Armored smashes.", "{R}+{S}: HAYMAKER. Hold {S} to charge.", "{D}+{S}: LAST WORD, the strongest counter."] },
    { id: "champ", style: "blob", name: "CHAMP", aura: "#4fd1c5", shotCol: ["#4fd1c5", "#e0fffb"],
      stats: { weight: 130, grav: 0.72, fall: 4.8, run: 2.5, dash: 3.0, air: 2.6, jumps: 2, sdash: 7 }, feel: { reach: 1.15, power: 1.05 },
      sp: ["LAKE WAVE", "LAKE SLIDE", "GEYSER UP", "UNDERTOW"], sup: "THE BIG GULP",
      names: { jab: "FIN SLAPS", side: "TAIL WHIP", upa: "GEYSER", downa: "LAKE SPLASH", nair: "WHIRLPOOL", fair: "FIN SPLAT", uair: "HEAD BONK", dair: "BELLY FLOP" },
      moves: {
        nspec: { sig: "lakewave", proj: 0, charge: 1, chargeBtn: "special", st: 12, ac: 1, rc: 18, p0: "special", p1: "slam" },
        sspec: { dash: 1, st: 5, ac: 18, rc: 16, dmg: 10, hb: [0, -26, 36, 26], bkb: 4, kbg: 4, ang: 70, p0: "crouch", p1: "dive" },
        uspec: RISE({ ac: 18, multi: 4, dmg: 2.5, hb: [-14, -80, 36, 80], bkb: 2.4, kbg: 0, ang: 90, last: { dmg: 5, bkb: 3.6, kbg: 5.2, ang: 88 }, fx: "column", fxCol: "#4fd1c5" }),
        dspec: { counter: 0, sig: "undertow", st: 8, ac: 34, rc: 18, dmg: 12, bkb: 5, kbg: 5.4, ang: 80, ai: "close", aiCD: 200, p0: "special", p1: "special" } },
      desc: ["The lake monster. Floatiest of all. 3 jumps.", "{S}: LAKE WAVE. Hold {S} for a bigger one.", "{D}+{S}: UNDERTOW drags them in."] },
    { id: "monkey", style: "speedster", name: "FLYING MONKEY", aura: "#ffb347", shotCol: null,
      stats: { tele: false, jumps: 2, run: 4.6, dash: 5.2, air: 3.4, airAcc: 0.42, grav: 1.0, fall: 6.8, weight: 78, rise: 9.6 }, feel: { speed: 0.85, reach: 1.1, power: 0.9 },
      sp: ["GLIDE", "BANANA DASH", "WING FLAP", "BANANA PEEL"], sup: "MONKEY BUSINESS",
      names: { jab: "QUICK SLAPS", side: "SWING CUT", upa: "TAIL FLIP", downa: "LOW SWIPE", nair: "BARREL ROLL", fair: "TRIPLE SCRATCH", uair: "SKY KICK", dair: "DIVE KICK" },
      moves: {
        nspec: { sig: "glide", tele: 0, follow: null, proj: 0, charge: 1, chargeBtn: "special", st: 4, ac: 80, rc: 6, p0: "jump", p1: "special" },
        sspec: { dash: 1, st: 5, ac: 14, rc: 14, multi: 5, dmg: 2, hb: [2, -40, 24, 26], bkb: 1.8, kbg: 0, ang: 50, last: { dmg: 4, bkb: 3.4, kbg: 4, ang: 40 }, p0: "crouch", p1: "kick" },
        uspec: RISE({ free: 1, ac: 12, rc: 4, dmg: 5, hb: [-14, -56, 44, 24], bkb: 3, kbg: 3, ang: 80, p0: "jump" }),
        dspec: { counter: 0, sig: "toss", st: 6, ac: 1, rc: 14, ai: "range", aiCD: 220, p0: "windup", p1: "blast",
          toss: { look: "banana", v: [2.6, -3], g: 0.3, r: 7, life: 120, one: true, m: { dmg: 5, bkb: 4.2, kbg: 1.2, ang: 82 }, trap: { type: "trip", life: 600 }, col: "#ffd23d" } } },
      desc: ["Quick on its feet, long arms. 3 jumps.", "{S} in the air: GLIDE. Hold it.", "{D}+{S}: BANANA PEEL. They slip on it."] },
    { id: "catamount", style: "speedster", name: "THE CATAMOUNT", aura: "#c9a26b", shotCol: null,
      stats: { run: 4.7, dash: 5.4, air: 3.1, grav: 1.2, fall: 8.2, weight: 86, sdash: 8, rise: 12 }, feel: { speed: 0.82, power: 0.95 },
      sp: ["SHADOW STEP", "POUNCE", "TREE CLIMB", "COUNTER"], sup: "NINE LIVES",
      names: { jab: "PAW SWIPES", side: "CLAW CUT", upa: "UPDRAFT SLASH", downa: "TAIL SWEEP", nair: "SPIN CLAW", fair: "TRIPLE CLAW", uair: "SKY BITE", dair: "DIVE CLAW" },
      moves: {
        sspec: { sig: "pounce", st: 6, ac: 14, rc: 16, dmg: 11, hb: [0, -40, 34, 26], bkb: 3.6, kbg: 4.6, ang: 40, dash: 0, vel: [7.6, -1.2], p0: "crouch", p1: "special" },
        uspec: RISE({ ac: 14, multi: 3, dmg: 3, hb: [-6, -62, 30, 30], bkb: 2.4, kbg: 0, ang: 90, last: { dmg: 5, bkb: 3.4, kbg: 5.4, ang: 80 }, p1: "slash" }) },
      desc: ["Fastest runner. Falls fast.", "{S} teleports behind them.", "{R}+{S}: POUNCE across the stage."] },
    { id: "cabinet", style: "heavy", name: "FILING CABINET", aura: "#9fb4c8", shotCol: ["#c7d4e0", "#ffffff"],
      stats: { run: 2.5, dash: 2.9, air: 2.2, airAcc: 0.26, weight: 138, fall: 8.0, grav: 1.2, dm: 1.3, sdash: 4.6 }, feel: { speed: 1.18, reach: 1.25, power: 1.18 },
      sp: ["STAMP SLAM", "DRAWER RUSH", "PAPER STORM", "PAPERWORK"], sup: "AUDIT",
      names: { jab: "DRAWER JABS", side: "DRAWER SLAM", upa: "TOP DRAWER", downa: "QUAKE STOMP", nair: "SPIN", fair: "HAMMER DRAWER", uair: "UPPER FILE", dair: "ANVIL DROP" },
      moves: {
        nspec: { sig: "stamp", proj: 0, charge: 1, chargeBtn: "special", st: 6, ac: 30, rc: 20, dmg: 15, hb: [-24, -20, 48, 22], bkb: 5, kbg: 5.2, ang: 60, armor: 1, p0: "special", p1: "slam" },
        sspec: { dash: 1, armor: 1, st: 8, ac: 12, rc: 20, dmg: 13, hb: [4, -40, 40, 26], bkb: 4.6, kbg: 5, ang: 38, p0: "windup", p1: "punch" },
        uspec: RISE({ ac: 18, multi: 4, dmg: 2, hb: [-24, -72, 48, 62], bkb: 2.4, kbg: 0, ang: 90, last: { dmg: 5, bkb: 3.6, kbg: 5, ang: 85 }, fx: "column", fxCol: "#e8edf2" }),
        dspec: { counter: 0, sig: "toss", st: 10, ac: 1, rc: 22, ai: "range", aiCD: 150, p0: "windup", p1: "blast",
          toss: { look: "paper", v: [2.4, 0], g: 0, r: 11, life: 150, m: { dmg: 9, bkb: 3.6, kbg: 4.2, ang: 45 }, col: "#ffffff" } } },
      desc: ["Slowest and heaviest. Huge reach.", "{S}: STAMP SLAM shockwaves.", "{D}+{S}: PAPERWORK flutters at them."] },
    { id: "whale", style: "blob", name: "WHALE TAILS", aura: "#5b8fd6", shotCol: ["#5b8fd6", "#e0f0ff"],
      stats: { weight: 136, run: 2.6, dash: 3.1, air: 2.3, grav: 0.85, fall: 5.6, jumps: 2, dm: 1.15 }, feel: { reach: 1.2, speed: 1.1 },
      sp: ["BURROW", "TAIL SLIDE", "BREACH", "FLUKE SMASH"], sup: "DEEP DIVE",
      names: { jab: "TAIL TAPS", side: "TAIL SLAP", upa: "SPOUT", downa: "FLUKE SWEEP", nair: "ROLL", fair: "SPLASH", uair: "TAIL FLIP", dair: "BELLY FLOP" },
      moves: {
        nspec: { sig: "burrow", proj: 0, charge: 1, chargeBtn: "special", st: 6, ac: 40, rc: 18, dmg: 13, bkb: 4.6, kbg: 6.2, ang: 85, p0: "special", p1: "rise" },
        sspec: { dash: 1, st: 7, ac: 14, rc: 18, dmg: 13, hb: [0, -40, 44, 34], bkb: 4.8, kbg: 5.6, ang: 30, p0: "windup", p1: "bair" },
        uspec: RISE({ ac: 14, dmg: 8, hb: [-12, -58, 40, 34], bkb: 4, kbg: 4.6, ang: 80, fx: "column", fxCol: "#5b8fd6" }),
        dspec: { counter: 0, st: 12, ac: 5, rc: 24, dmg: 14, hb: [-50, -30, 100, 30], bkb: 4.6, kbg: 6, ang: 70, quake: 1, armor: 1, ai: "close", aiR: 60, aiCD: 150, p0: "windup", p1: "slam" } },
      desc: ["Two whales, one big fighter. 3 jumps.", "{S}: BURROW under, burst up.", "{D}+{S}: FLUKE SMASH hits both sides."] },
    { id: "outback", style: "brawler", name: "THE OUTBACK", aura: "#8fd46a", shotCol: ["#8fd46a", "#f0ffe0"],
      stats: { run: 3.7, dash: 4.3, air: 2.6, weight: 110, fall: 7.0, grav: 1.05, dm: 1.05, trac: 0.48, rise: 11, sdash: 5.2 }, feel: { speed: 1.1, reach: 1.1, power: 1.12 },
      sp: ["HEADLIGHTS", "MUD SEASON RUSH", "ROOF RACK ROCKET", "SPIN OUT"], sup: "ROAD TRIP",
      names: { jab: "BUMPER JABS", side: "FENDER PUNCH", upa: "HOOD POP", downa: "MUD SWEEP", nair: "DONUT SPIN", fair: "FLYING KICK", uair: "ROOF RACK", dair: "STOMP" },
      moves: {
        nspec: { proj: 0, charge: 1, chargeBtn: "special", sig: "flash", st: 10, ac: 4, rc: 24, p0: "windup", p1: "special" },
        sspec: { sig: "mudrush", st: 6, ac: 20, rc: 16, dmg: 11, hb: [4, -40, 26, 30], bkb: 4, kbg: 4.4, ang: 35, dash: 1, armor: 1, p0: "crouch", p1: "special" },
        uspec: RISE({ dmg: 7, hb: [-6, -62, 24, 26], bkb: 3.4, kbg: 3, ang: 80 }),
        dspec: { counter: 0, st: 5, ac: 24, rc: 16, multi: 6, dmg: 2.5, hb: [-30, -38, 60, 38], bkb: 2.4, kbg: 0, ang: 60, last: { dmg: 5, bkb: 4, kbg: 4.8, ang: 40 }, vel: [1.2, 0], ai: "close", aiR: 60, aiCD: 160, p0: "crouch", p1: "nair" } },
      desc: ["Sturdy, grippy, never quits.", "{S}: HEADLIGHTS dazzle. Hold for HIGH BEAMS.", "{R}+{S}: MUD SEASON RUSH (armored)."] },
    { id: "syrup", style: "blob", name: "THE SYRUP JUG", aura: "#d98a2b", shotCol: ["#c8781f", "#ffe0a8"],
      stats: { weight: 112, run: 2.9, dash: 3.4, air: 2.4, grav: 0.8, fall: 5.0, jumps: 2, trac: 0.55, rise: 10.6, sdash: 4 }, feel: { reach: 1.25, speed: 1.12, power: 0.9 },
      sp: ["STICKY PUDDLE", "SYRUP SLIDE", "SUGAR RUSH", "MAPLE TAP"], sup: "SUGARING SEASON",
      names: { jab: "JUG JABS", side: "BIG POUR", upa: "MAPLE GEYSER", downa: "SPILL", nair: "JUG SPIN", fair: "SPLAT", uair: "CAP BONK", dair: "BELLY FLOP" },
      moves: {
        nspec: { sig: "puddle", proj: 0, charge: 1, chargeBtn: "special", st: 6, ac: 2, rc: 18, p0: "special", p1: "special" },
        sspec: { dash: 1, sig: "syrupslide", st: 5, ac: 26, rc: 16, dmg: 9, hb: [0, -26, 34, 26], bkb: 3.6, kbg: 3.8, ang: 50, p0: "crouch", p1: "dive" },
        uspec: RISE({ multi: 3, dmg: 3, hb: [-8, -66, 30, 34], bkb: 2.4, kbg: 0, ang: 90, last: { dmg: 5, bkb: 3.4, kbg: 5.4, ang: 85 } }),
        dspec: { counter: 0, grab: 1, st: 7, ac: 6, rc: 26, hb: [4, -46, 44, 28], ai: "close", aiCD: 150, p0: "windup", p1: "grab" } },
      desc: ["Grade A sticky. Longest reach. 3 jumps.", "{S}: STICKY PUDDLE. Hold {S} to fling it far.", "{D}+{S}: MAPLE TAP grabs from far away."] },
    { id: "snow", style: "showoff", name: "SUGAR ON SNOW", aura: "#bfe6ff", shotCol: ["#bfe6ff", "#ffffff"],
      stats: { run: 3.7, dash: 4.5, trac: 0.16, weight: 90 }, feel: { speed: 0.92, power: 0.95 },
      sp: ["PICKLE + DONUT", "SNOW REPEL", "SUGAR PILLAR", "SNOWBALL"], sup: "SUGAR HIGH",
      names: { jab: "SNOW PATS", side: "REPEL", upa: "PILLAR OF SUGAR", downa: "SNOW DRIFT", nair: "FLURRY", fair: "FLYING KICK", uair: "SKY KICK", dair: "FALLING SNOW" },
      moves: {
        nspec: { sig: "assist", proj: 0, charge: 1, chargeBtn: "special", st: 12, ac: 1, rc: 18, p0: "windup", p1: "special" },
        sspec: { dash: 1, st: 6, ac: 14, rc: 16, dmg: 8, hb: [4, -40, 26, 30], bkb: 5, kbg: 6, ang: 22, p0: "windup", p1: "blast" },
        uspec: RISE({ dmg: 8, hb: [-10, -110, 30, 110], bkb: 3.6, kbg: 5, ang: 88, fx: "column", fxCol: "#bfe6ff", p1: "pillar" }),
        dspec: { counter: 0, sig: "snowball", st: 10, ac: 1, rc: 20, ai: "range", aiCD: 180, p0: "windup", p1: "sweep" } },
      desc: ["Slides on snow. Brings friends.", "{S}: a pickle and a donut charge in.", "{D}+{S}: a SNOWBALL that grows. Shots bounce off."] },
    { id: "tow", style: "heavy", name: "THE TOW TRUCK", aura: "#f2a01e", shotCol: ["#f2a01e", "#fff0c0"],
      stats: { run: 3.0, dash: 3.6, weight: 128, dm: 1.15, trac: 0.3, sdash: 7.6 }, feel: { reach: 1.22, speed: 1.1 },
      sp: ["HOOK SHOT", "TOW RUSH", "BOOM LIFT", "BOOT CLAMP"], sup: "IMPOUND",
      names: { jab: "CLAW JABS", side: "WRECKER", upa: "BOOM SWING", downa: "QUAKE STOMP", nair: "SPIN", fair: "HAMMER FIST", uair: "BOOM JAB", dair: "ANVIL DROP" },
      moves: {
        nspec: { sig: "hook", proj: 0, charge: 1, chargeBtn: "special", st: 12, ac: 1, rc: 22, p0: "windup", p1: "special" },
        sspec: { dash: 1, armor: 1, st: 7, ac: 14, rc: 18, dmg: 11, hb: [4, -42, 34, 32], bkb: 4.4, kbg: 4.8, ang: 35, p0: "windup", p1: "punch" },
        uspec: RISE({ st: 4, dmg: 9, hb: [-14, -96, 46, 52], bkb: 3.8, kbg: 5.6, ang: 45, p1: "upper" }),
        dspec: { counter: 0, sig: "toss", st: 8, ac: 1, rc: 20, ai: "range", aiCD: 220, p0: "windup", p1: "blast",
          toss: { look: "boot", v: [3.2, -3.5], g: 0.3, r: 8, life: 150, one: true, m: { dmg: 4, bkb: 2, kbg: 1, ang: 60 }, trap: { type: "stuck", stun: 70, life: 540 }, col: "#f2a01e" } } },
      desc: ["Huge, armored, and it grabs.", "{S}: HOOK SHOT. Hold {S} to throw it farther.", "{D}+{S}: BOOT CLAMP traps the floor."] },
    { id: "bus", style: "showoff", name: "THE ELECTRIC BUS", aura: "#7fe0ff", shotCol: ["#4f7bff", "#d8f6ff"],
      stats: { run: 3.1, dash: 3.6, air: 2.6, weight: 116, grav: 1.05, fall: 6.8, dm: 1.1, deflect: false }, feel: { power: 1.12, reach: 1.1, speed: 1.08 },
      sp: ["SPARK ORB", "BATTERY CHARGE", "PANTOGRAPH", "REGEN BRAKE"], sup: "FULL CHARGE",
      names: { jab: "DOOR JABS", side: "REPEL", upa: "PANTOGRAPH", downa: "BRAKE SLAM", nair: "HALO", fair: "FLYING KICK", uair: "SKY KICK", dair: "FALLING STAR" },
      moves: {
        sspec: { sig: "battery", st: 6, ac: 14, rc: 16, dmg: 12, hb: [4, -42, 30, 34], bkb: 4.4, kbg: 5, ang: 35, dash: 1, armor: 1, charge: 1, chargeBtn: "special", p0: "special", p1: "special" },
        uspec: RISE({ multi: 3, dmg: 3, hb: [-22, -70, 52, 50], bkb: 2.4, kbg: 0, ang: 90, last: { dmg: 6, bkb: 4, kbg: 5.6, ang: 70 }, fx: "ring" }),
        dspec: { counter: 1, cm: { meter: 30, k: 0.85 } } },
      desc: ["Heavy, electric and quiet. Hits hard.", "{S}: SPARK ORB pulls them in.", "{D}+{S}: REGEN BRAKE counters and charges super."] },
    { id: "crow", style: "speedster", name: "THE CROW SWARM", aura: "#9a7fd6", shotCol: null,
      stats: { tele: false, jumps: 4, run: 3.8, dash: 4.3, air: 3.6, airAcc: 0.46, grav: 0.85, fall: 5.6, weight: 70, dm: 0.85 }, feel: { speed: 0.8, power: 0.82, reach: 0.95 },
      sp: ["SCATTER", "SWOOP CUT", "UPDRAFT", "CAW!"], sup: "THE FLOCK",
      names: { jab: "PECKS", side: "SWOOP CUT", upa: "UPDRAFT", downa: "TALON SWEEP", nair: "FLUTTER", fair: "TRIPLE PECK", uair: "SKY PECK", dair: "DIVE BOMB" },
      moves: {
        nspec: { sig: "scatter", tele: 0, follow: null, proj: 0, charge: 1, chargeBtn: "special", st: 3, ac: 22, rc: 14, p0: "dodge", p1: "special" },
        sspec: { dash: 1, st: 5, ac: 12, rc: 14, dmg: 9, hb: [-4, -44, 36, 22], bkb: 3.4, kbg: 4.6, ang: 40, p0: "guard", p1: "slash" },
        uspec: RISE({ multi: 4, dmg: 4, hb: [-18, -60, 46, 50], bkb: 2, kbg: 0, ang: 90, last: { dmg: 4, bkb: 3.4, kbg: 4.6, ang: 85 } }),
        dspec: { counter: 0, sig: "caw", st: 6, ac: 6, rc: 16, dmg: 2, hb: [-46, -58, 92, 58], bkb: 5.6, kbg: 0.6, ang: 25, ai: "close", aiR: 62, aiCD: 140, p0: "special", p1: "special" } },
      desc: ["Lightest of all. 5 jumps.", "{S}: SCATTER into birds, fly, reform.", "{D}+{S}: CAW! blows shots and fighters away."] },
  ];

  // Stages, drawn the Scarf Kid way: a flat gradient sky with a soft sun or moon, flat silhouette layers
  // (back to front), and Scarf Kid's platform slabs. layout = which of Scarf Kid's 6 stage shapes it uses:
  // 0 three platforms, 1 a sliding platform + passing train, 2 two platforms + flame jets,
  // 3 three bobbing platforms, 4 flat (no platforms), 5 a five-platform tower.
  // Layer y values are in the sky canvas (480 x 270; the floor sits near y 180). The landmark is a flat
  // silhouette cut from stages/lm-<id>.png (made by tools/make-landmarks.py).
  const LM = (id, x, w, c, more) => Object.assign({ t: "landmark", src: `stages/lm-${id}.png`, x, y: 258, w, c }, more || {});   // w = width in the sky canvas
  const stages = [
    // open from the start
    { id: "waterfront", name: "THE WATERFRONT · 7:12 PM", layout: 0,   // Stephen's favourite painting, kept as the sky (its dock and planks painted out)
      sky: ["#2b1d4f", "#4a2560", "#7a3068", "#b8455f", "#e8714f", "#f7a656"], clouds: 0,
      layers: [{ t: "painting", src: "stages/waterfront-sky.webp", y0: -22, wash: "#3a1f50", a: 0.14 }, { t: "haze", y: 262, c: "#3a1f50", a: 0.35 }],
      slab: "#3b2b40", slabTop: "#c9a27a", slabD: "#22172a", plank: "#6b5370", plankTop: "#e8c49a" },
    { id: "church-street", name: "CHURCH STREET · 9:40 PM", layout: 3,
      sky: ["#0e1430", "#1c2a52", "#2a3a66", "#3d4c7a", "#566296", "#7a78a8"], orb: { x: 400, y: 46, r: 14, c: "#fff0d0" }, stars: 40, cloud: "#4a5a8a",
      layers: [{ t: "haze", y: 250, c: "#7a78a8", a: 0.3 }, LM("church-street", 240, 436, "#2e3a62", { y: 215, rim: "#4a5a8a", glow: "#ffd27a", gy: 0.2 }), { t: "lights", x0: 30, x1: 450, y: 34, sag: 14, c: "#ffd27a" },
        { t: "near", c: "#222c50", win: "#ffcf6b", h: 46, skip: [190, 290] }],
      slab: "#3a2a3a", slabTop: "#e0b09a", slabD: "#1c1420", plank: "#6a3a44", plankTop: "#f0b8a0" },
    { id: "frozen-lake", name: "FROZEN LAKE · 1:13 AM", layout: 4,
      sky: ["#070a18", "#0c1430", "#142048", "#1e3058", "#2a3f6e", "#3a5486"], orb: { x: 96, y: 52, r: 16, c: "#e6eeff" }, stars: 80, clouds: 0,
      layers: [{ t: "mountains", y: 150, h: 30, c: "#243a66", c2: "#203460" }, { t: "lake", y: 158, c: "#3a5486", line: "#bfe6ff", glint: true }, { t: "hills", y: 170, c: "#4a6496" },
        LM("frozen-lake", 240, 405, "#2a3f6e", { y: 200, rim: "#6a8aba" })],
      slab: "#22324e", slabTop: "#bfe6ff", slabD: "#11182a", plank: "#3a5a80", plankTop: "#e0f6ff" },
    // round 3: open from the start too, so the train and the flame jets (Scarf Kid's hazards) are there from the first game
    { id: "flynn", name: "THE FLYNN · 10:05 PM", layout: 2,
      sky: ["#0c0818", "#160f2c", "#24183f", "#3a2350", "#5a2f5f", "#7a3f68"], stars: 40, clouds: 3, cloud: "#4a3060",
      layers: [{ t: "city", y: 262, h: 70, c: "#3a2852", win: "#8a6aac" }, LM("flynn", 240, 327, "#4a3466", { y: 215, rim: "#6a4a86", glow: "#ffd27a", gy: 0.45 }),
        { t: "blade", x: 214, y: 40, w: 22, h: 120, c: "#4a3466", lit: "#e8b860" }, { t: "near", c: "#24163a", win: "#ffd27a", h: 36, skip: [170, 310] }],
      slab: "#2a2030", slabTop: "#ffd27a", slabD: "#140e1a", plank: "#4a3050", plankTop: "#ffe0a0" },
    { id: "union-station", name: "UNION STATION · 5:50 PM", layout: 1,
      sky: ["#3a2448", "#6a3a5a", "#a8505a", "#e07a50", "#f8a850", "#ffd88a"], orb: { x: 380, y: 62, r: 24, c: "#ffe0a0" },
      layers: [{ t: "mountains", y: 140, h: 30, c: "#9a5a6e", c2: "#8a4e62" }, { t: "lake", y: 150, c: "#8a4e6a", line: "#ffd88a", glint: true }, LM("union-station", 240, 312, "#6a3a52", { y: 205, rim: "#b06a70" })],
      slab: "#3a2a30", slabTop: "#d8b090", slabD: "#20161a", plank: "#5a4040", plankTop: "#e8c8a0" },
    // unlocked one at a time through Arcade and Battle
    { id: "city-hall-park", name: "CITY HALL PARK · 7:45 PM", layout: 5,
      sky: ["#1b2a4a", "#24406a", "#2f5f86", "#4a8aa0", "#79b8a8", "#e8c890"], orb: { x: 410, y: 60, r: 18, c: "#fff3c0" },
      layers: [{ t: "haze", y: 250, c: "#79b8a8", a: 0.3 }, LM("city-hall-park", 250, 296, "#2e5a6a", { y: 215, rim: "#4a7a8a", glow: "#ffe9a8", gy: 0.35 }), { t: "trees", n: 7, y: 262, r: 22, c: "#2e5a6a", x0: 0, x1: 480 }],
      slab: "#3b2b40", slabTop: "#d8c0a0", slabD: "#22172a", plank: "#6b5370", plankTop: "#ecd4b0" },
    { id: "south-end", name: "SOUTH END · 6:20 PM", layout: 0,
      sky: ["#4a1420", "#8a2a2a", "#b0402e", "#d0582e", "#e8703a", "#f8a050"], orb: { x: 110, y: 120, r: 26, c: "#ffd27a", stripes: true },
      layers: [{ t: "city", y: 262, h: 60, c: "#8a3a36", win: "#ffb070" }, LM("south-end", 250, 374, "#6a2a2c", { y: 215, rim: "#b05040" }), { t: "near", c: "#4a1a20", win: "#ffcf6b", h: 40 }],
      slab: "#3a2424", slabTop: "#d8a070", slabD: "#1e1212", plank: "#5a3a30", plankTop: "#f0c080" },
    { id: "whale-tails", name: "WHALE TAILS · NOON", layout: 4,
      sky: ["#2f7ac8", "#4a92d8", "#68aae4", "#8ac0ee", "#b0d6f4", "#dceefa"], orb: { x: 384, y: 58, r: 22, c: "#fff3b0" }, cloud: "#ffffff",
      layers: [{ t: "mountains", y: 168, h: 50, c: "#6a8a7a", c2: "#5a7a6a" }, { t: "hills", y: 196, c: "#8ab86a" }, LM("whale-tails", 240, 405, "#3a4652", { y: 206, rim: "#6a7a8a" }), { t: "hills", y: 236, c: "#6a9a50" }],
      slab: "#4a5a3a", slabTop: "#c0e08a", slabD: "#2a3420", plank: "#7a6a40", plankTop: "#f0d890" },
    { id: "uvm-green", name: "THE UVM GREEN · 4:30 PM", layout: 5,
      sky: ["#2a2448", "#4a3a68", "#7a4a6a", "#c0706a", "#f0a060", "#f8d090"], orb: { x: 380, y: 52, r: 20, c: "#fff0c0" },
      layers: [{ t: "haze", y: 250, c: "#f0a060", a: 0.25 }, LM("uvm-green", 240, 358, "#5a3456", { y: 215, rim: "#8a5068" }), { t: "trees", n: 10, y: 264, r: 20, c: "#9a3a24", cs: ["#a04024", "#b05a24", "#8a3420", "#c0702a"], x0: 0, x1: 480 }],
      slab: "#4a2a26", slabTop: "#e0b090", slabD: "#24120e", plank: "#6a3a2a", plankTop: "#f0c8a0" },
    { id: "battery-park", name: "BATTERY PARK · 7:30 PM", layout: 3,
      sky: ["#4a2450", "#6b2f5a", "#a04a5a", "#d0704a", "#f2a050", "#ffd890"], orb: { x: 250, y: 120, r: 26, c: "#fff0c0" },
      layers: [{ t: "mountains", y: 150, h: 30, c: "#8a4a62", c2: "#7a4258" }, { t: "lake", y: 160, c: "#8a5068", line: "#ffd890", glint: true }, LM("battery-park", 240, 366, "#7a4a6a", { y: 222, rim: "#a06a80" })],
      slab: "#3a3440", slabTop: "#d8cab0", slabD: "#201c26", plank: "#5a4a3a", plankTop: "#e8d0a8" },
  ];
  window.QCC_DATA = { cards, stages, statsFor };
})();
