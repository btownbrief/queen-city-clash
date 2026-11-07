// The Tow Truck: Scarf Kid's full pose set (game/tools/scarf-ref.json), posed on the round-2 rig (separate boom,
// raised fist arm). Angles: degrees, clockwise, relative to the painted pose; hip leans the whole truck, torso and
// head add to it. Planted feet were solved numerically (sole flat on the floor) by the round-2 helper's gen.js.
extendFighter("tow", {
  poses: {
    // the game's generic strike (fallback for punch-like moves): same as punch
    strike: { root: [60, 0], hip: 8, torso: 4, head: 3, armR_up: -27, armR_lo: 6, armL_up: -20, armL_lo: 15, boom: -15, hook: 20, legL_up: -8, legL_lo: -1, legR_up: -5, legR_lo: -12 },
    // big pull-back: truck rocks back, fist cocked high behind the grille, claw drawn back, boom tipped back
    windup: { root: [-50, 10], sq: [1.04, 0.96], hip: -16, torso: -6, head: -5, armR_up: -110, armR_lo: -30, armL_up: 50, armL_lo: -20, boom: -35, hook: 25, legL_up: 34, legL_lo: -30, legR_up: 17, legR_lo: -9 },
    // stretched up, knees tucked, fist and claw thrown up
    jump: { root: [0, -30], sq: [0.95, 1.07], hip: -6, torso: -3, head: -4, legL_up: -30, legL_lo: 40, legR_up: -40, legR_lo: 50, armL_up: 30, armL_lo: -10, armR_up: -45, armR_lo: -10, boom: -15, hook: 15 },
    // arms flung up, boots dangling
    fall: { hip: 4, torso: 2, head: 4, legL_up: 10, legL_lo: 14, legR_up: -10, legR_lo: 18, armL_up: 70, armL_lo: -30, armR_up: -60, armR_lo: -20, boom: 20, hook: -20 },
    // straight jab: body lunges in, fist drives out level at the cab's eyes, claw pulled back
    punch: { root: [60, 0], hip: 8, torso: 4, head: 3, armR_up: -27, armR_lo: 6, armL_up: -20, armL_lo: 15, boom: -15, hook: 20, legL_up: -8, legL_lo: -1, legR_up: -5, legR_lo: -12 },
    // second jab: a low hook, the truck dips and twists in and the fist drives into the belly, claw thrown up behind
    punch2: { root: [70, 30], hip: 14, torso: 6, head: 2, armR_up: 2, armR_lo: 20, armL_up: 150, armL_lo: -120, boom: -25, hook: 25, legL_up: -2, legL_lo: -11, legR_up: -27, legR_lo: 11 },
    // kick chamber: weight back, front knee pulled high, fist guarding
    chamber: { root: [-30, -10], hip: -12, torso: -4, head: -4, legR_up: -75, legR_lo: 60, armR_up: -30, armR_lo: -20, armL_up: 30, armL_lo: -10, boom: -20, legL_up: 21, legL_lo: -25 },
    // front kick: truck leans way back, the front boot drives out straight at bumper height
    kick: { root: [50, 0], hip: -22, torso: -6, head: -4, legR_up: -29, legR_lo: -19, armR_up: -20, armR_lo: -30, armL_up: 40, armL_lo: -10, boom: -30, hook: 30, legL_up: 30, legL_lo: -10 },
    // big high kick: leaning far back, front boot swung up past the grille
    spark: { root: [50, 0], hip: -32, torso: -8, head: -6, legR_up: -32, legR_lo: -19, armR_up: 30, armR_lo: 10, armL_up: 60, armL_lo: -20, boom: -40, hook: 40, legL_up: 44, legL_lo: -16 },
    // uppercut: the fist rips straight up past the lightbar, truck stretches up off the back boot
    upper: { root: [20, -20], sq: [0.95, 1.07], hip: -14, torso: -6, head: -6, armR_up: -75, armR_lo: -10, armL_up: 40, armL_lo: -10, boom: -25, hook: 20, legL_up: 8, legL_lo: 7, legR_up: 22, legR_lo: -13 },
    // rising strike: stretched, fist and claw both driving straight up above the cab, legs trailing
    rise: { root: [0, -40], sq: [0.94, 1.08], hip: -12, torso: -4, head: -6, armR_up: -82, armR_lo: -5, armL_up: 170, armL_lo: -135, legL_up: 20, legL_lo: 25, legR_up: 15, legR_lo: 30, boom: -10, hook: 20 },
    // spike: both boots stamped straight down, arms flung up
    spike: { root: [0, -10], sq: [0.96, 1.05], head: 4, legL_up: -38, legL_lo: 20, legR_up: 34, legR_lo: -14, armR_up: -70, armR_lo: -20, armL_up: 120, armL_lo: -30, boom: 20, hook: -20 },
    // neutral air: spread-eagle spin, fist out front, claw out back, boots kicked wide
    nair: { root: [0, -20], hip: 10, armR_up: 20, armR_lo: 15, armL_up: 70, armL_lo: -70, legL_up: 40, legL_lo: -10, legR_up: -55, boom: -40, hook: 30 },
    // back kick: truck pitches forward and the back boot thrusts out behind
    bair: { root: [20, -10], hip: 26, torso: 2, head: -4, legL_up: 52, legL_lo: -20, legR_up: -30, legR_lo: 40, armR_up: 30, armR_lo: 10, armL_up: -30, armL_lo: 20, boom: -20, hook: 30 },
    // braced block: low and squat, the claw crosses in front of the grille, fist tucked up beside the cab
    guard: { root: [0, 40], sq: [1.04, 0.96], hip: -6, torso: -2, head: -3, armL_up: -70, armL_lo: 150, armR_up: -25, armR_lo: -40, boom: -10, legL_up: 30, legL_lo: -27, legR_up: -9, legR_lo: 15 },
    // knocked flat: tipped over onto its back and squashed, grille to the sky, legs out along the floor, boom and claw flat behind
    down: { root: [0, -48.885], sq: [1.1, 0.8], hip: -90, head: 4, boom: 40, hook: 140, armR_up: 150, armR_lo: 10, armL_lo: 40, legL_up: -22, legL_lo: 15, legR_up: 28, legR_lo: -10 },
    // deep crouch (wind-up for the jumping strikes): squashed down, knees bent wide, arms low
    crouch: { root: [0, 110], sq: [1.06, 0.92], hip: 4, torso: 3, head: -3, armR_up: 25, armR_lo: 10, armL_up: -15, armL_lo: 20, boom: 15, hook: -10, legL_up: 48, legL_lo: -54, legR_up: -52, legR_lo: 48 },
    // getup sweep: dropped low, the front boot slides out along the floor and the fist swings across low
    sweep: { root: [-20, 170], sq: [1.05, 0.94], hip: -6, torso: 4, head: -3, legR_up: -70, legR_lo: 30, armR_up: 10, armR_lo: -10, armL_up: 20, armL_lo: -20, boom: -20, legL_up: 85, legL_lo: -77 },
    // hanging from a ledge: claw and fist both hooked up overhead, boots dangling
    ledge: { root: [-10, 40], hip: 6, head: 6, armL_up: 170, armL_lo: -125, armR_up: -95, armR_lo: -10, legL_up: -20, legL_lo: 20, legR_up: 20, legR_lo: 15, boom: 30, hook: -20 },
    // hit recoil: head snapped back, truck rocked back on its heels, arms flung
    hit: { root: [-30, 0], sq: [0.96, 1.04], hip: -14, torso: -6, head: -10, armR_up: -50, armR_lo: 30, armL_up: 60, armL_lo: -30, boom: -25, hook: 40, legL_up: 21, legL_lo: -10, legR_up: 14, legR_lo: -5 },
    // two-handed shove: lunging in, fist straight out high and claw thrust forward under the bumper
    blast: { root: [60, 10], hip: 12, torso: 4, head: 2, armR_up: -20, armR_lo: 5, armL_up: -90, armL_lo: -130, boom: -20, hook: 20, legL_up: -8, legL_lo: -4, legR_up: -15, legR_lo: -5 },
    // super lunge: a long low lunge, the whole truck behind a straight fist, boom swung forward
    super: { root: [100, 60], sq: [1.05, 0.95], hip: 18, torso: 6, head: 4, armR_up: -30, armL_up: -40, armL_lo: 30, boom: 30, hook: -60, legL_up: -2, legL_lo: -4, legR_up: -43, legR_lo: 15 },
    // victory: claw raised high, fist pumped over the cab, chest out
    win: { hip: -8, torso: -3, head: -6, armL_up: 168, armL_lo: -130, armR_up: -95, armR_lo: -10, boom: 15, hook: -10, legL_up: 12, legL_lo: -6, legR_up: 14, legR_lo: -8 },
    // slam: squashed down and pitched forward, the fist and claw both smash the floor in front
    slam: { root: [50, 120], sq: [1.07, 0.92], hip: 22, torso: 6, head: -6, armR_up: 45, armR_lo: -15, armL_up: -62, armL_lo: -175, boom: 30, hook: -20, legL_up: 27, legL_lo: -46, legR_up: -78, legR_lo: 60 },
    // lunging bite: the cab (and its grille jaw) thrusts forward, arms swept back
    bite: { root: [150, 0], hip: 12, torso: 6, head: 10, armR_up: 60, armR_lo: 20, armL_up: 60, armL_lo: -30, boom: -30, hook: 30, legL_up: -16, legL_lo: 14, legR_up: -10, legR_lo: -3 },
    // pillar: both arms straight up over the cab, stretched tall
    pillar: { root: [0, -10], sq: [0.96, 1.05], hip: -6, torso: -4, head: -4, armL_up: 175, armL_lo: -140, armR_up: -100, boom: -10, legL_up: 4, legL_lo: 1, legR_up: 18, legR_lo: -15 },
    // belly flop: the truck thrown flat out in the air, face down, fist and claw reaching forward, boots trailing
    flop: { root: [0, -37.135], hip: 85, head: 4, armR_up: -80, armR_lo: -5, armL_up: 20, armL_lo: 25, legL_up: -10, legL_lo: 5, legR_up: 15, legR_lo: -10, boom: 30, hook: -60 },
    // diving kick: front boot driven down and forward, body leaning back over it
    dive: { root: [0, -20], hip: -26, torso: -4, head: 6, legR_up: 10, legR_lo: -20, legL_up: -40, legL_lo: 70, armR_up: -60, armR_lo: -20, armL_up: 90, armL_lo: -30, boom: -40, hook: 40 },
    // headbutt: the whole truck drives up cab-first, lightbar leading, arms swept down and back
    headbutt: { root: [10, -40], sq: [0.93, 1.1], hip: 4, torso: -2, head: -8, armR_up: 60, armR_lo: 20, armL_up: 40, armL_lo: -20, boom: -30, hook: 30, legL_up: -11, legL_lo: 8, legR_up: 5, legR_lo: -12 },
    // high swipe: the claw is raised high over the cab and rakes forward, body leaning into it, fist pulled down
    slash: { root: [40, 0], hip: 10, torso: 4, armL_up: 172, armL_lo: -102, armR_up: 40, armR_lo: 20, boom: -20, hook: 20, legL_up: -11, legL_lo: 1, legR_up: -8, legR_lo: -9 },
    // dodge: ducked and leaning away, arms tucked
    dodge: { root: [-30, 40], sq: [0.97, 0.97], hip: -20, torso: -6, head: -6, armR_up: 40, armR_lo: -40, armL_up: 20, armL_lo: 30, boom: -40, legL_up: 48, legL_lo: -33, legR_up: 8, legR_lo: 11 },
    // grab: lunging in, the fist reaches out and clamps down in front, the claw raised over the cab ready to drag
    grab: { root: [50, 20], hip: 10, torso: 3, head: 2, armR_up: -8, armR_lo: 30, armL_up: 150, armL_lo: -115, boom: -20, hook: 20, legL_lo: -11, legR_up: -18, legR_lo: 6 },
    // throw: the claw heaves up and back over the boom, fist cocked high, truck twisting back
    throw: { root: [-10, 20], hip: -16, torso: -4, head: -4, armL_up: 120, armL_lo: -60, armR_up: -80, armR_lo: -20, boom: -30, hook: 30, legL_up: 34, legL_lo: -23, legR_up: 13, legR_lo: -2 },
    // Hook Shot: pitched forward, the boom whips up and over and the hook is flung out front
    special: { root: [60, 40], hip: 32, torso: 4, head: -6, boom: 50, hook: -135, armR_up: 40, armR_lo: 10, armL_up: -20, armL_lo: 30, legL_up: -18, legL_lo: -13, legR_up: -51, legR_lo: 14 },
  },
  hit: {
    strike: ["armR_lo", 1120, 250],
    punch: ["armR_lo", 1120, 250],
    punch2: ["armR_lo", 1100, 250],
    kick: ["legR_lo", 960, 700],
    spark: ["legR_lo", 960, 700],
    upper: ["armR_lo", 1100, 180],
    rise: ["armR_lo", 1100, 180],
    spike: ["legL_lo", 470, 745],
    nair: ["armR_lo", 1120, 250],
    bair: ["legL_lo", 400, 735],
    sweep: ["armR_lo", 1100, 300],
    blast: ["armR_lo", 1120, 250],
    super: ["armR_lo", 1120, 250],
    slam: ["armR_lo", 1100, 300],
    bite: ["head", 900, 380],
    pillar: ["armR_lo", 1100, 180],
    flop: ["head", 800, 300],
    dive: ["legR_lo", 900, 708],
    headbutt: ["head", 760, 80],
    slash: ["armL_lo", 240, 170],
    grab: ["armR_lo", 1100, 250],
    special: ["hook", 432, 270],
  },
});
