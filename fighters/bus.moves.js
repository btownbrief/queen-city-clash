// The Electric Bus: Scarf Kid's full pose set (game/tools/scarf-ref.json), posed on the round-2 art (the bus side under
// the glowing fist and the thigh tops repainted, so both arms swing freely). Angles: degrees, clockwise, relative to the
// painted pose; armL is the glowing front fist, armR the raised fist on the facing side. Planted feet were solved
// numerically (soles flat on the floor) by the round-2 helper's gen.js.
extendFighter("bus", {
  poses: {
    // the game's generic strike (fallback for punch-like moves): same as punch
    strike: { root: [50, 0], torso: 6, armR_up: -52, armR_lo: 93, armL_up: -15, armL_lo: -8, legL_up: 10, legL_lo: -13, legR_up: 16, legR_lo: -25 },
    // jab: the raised fist snaps straight out at windshield height, body lunging in, glowing fist pulled to the chest
    punch: { root: [50, 0], torso: 6, armR_up: -52, armR_lo: 93, armL_up: -15, armL_lo: -8, legL_up: 10, legL_lo: -13, legR_up: 16, legR_lo: -25 },
    // cross: the glowing fist drives straight out from the bus side, the raised fist drawn back down
    punch2: { root: [70, 10], torso: 8, armL_up: -90, armL_lo: 119, armR_up: 30, armR_lo: -17, legL_up: 20, legL_lo: -23, legR_up: 9, legR_lo: -17 },
    // big pull-back: the bus rocks back on its rear foot, the raised fist cocked up by the mirror, the glowing fist drawn far back
    windup: { root: [-50, 10], sq: [1.04, 0.96], torso: -12, armR_up: -70, armR_lo: 48, armL_up: 35, armL_lo: -98, legL_up: -47, legL_lo: 57, legR_up: 10, legR_lo: -19 },
    // springing up: knees tucked, both fists thrown up
    jump: { root: [0, -30], sq: [0.95, 1.07], torso: -6, legL_up: -30, legL_lo: 40, legR_up: -40, legR_lo: 50, armR_up: -65, armR_lo: 48, armL_up: 5, armL_lo: -88 },
    // falling: both fists flung up, feet dangling
    fall: { torso: 4, legL_up: 10, legL_lo: 14, legR_up: -10, legR_lo: 18, armR_up: -70, armR_lo: 38, armL_up: -175, armL_lo: 72 },
    // kick chamber: weight back on the rear foot, front knee pulled high, fists up
    chamber: { root: [-30, -10], torso: -10, legR_up: -85, legR_lo: 70, armR_up: -70, armR_lo: 43, armL_up: 15, armL_lo: -98, legL_up: -51, legL_lo: 51 },
    // front kick: the bus leans back and the front foot drives straight out at bumper height
    kick: { root: [30, 0], hip: -4, torso: -14, legR_up: -50, legR_lo: -30, armR_up: -70, armR_lo: 43, armL_up: 35, armL_lo: -78, legL_up: 25, legL_lo: -29 },
    // big high kick: leaning far back, the front foot swung up past the windshield
    spark: { root: [30, 0], hip: -6, torso: -20, legR_up: -45, legR_lo: -40, armR_lo: 43, armL_up: 45, armL_lo: -68, legL_up: 33, legL_lo: -38 },
    // uppercut: the raised fist rips straight up above the roof, bus stretched up and rocked back
    upper: { root: [10, -20], sq: [0.95, 1.07], torso: -8, armR_up: -90, armR_lo: 61, armL_up: -5, armL_lo: -18, legL_up: -8, legL_lo: 7, legR_up: 25, legR_lo: -33 },
    // rising strike: stretched tall, both fists driving straight up above the roof, legs trailing
    rise: { root: [0, -40], sq: [0.94, 1.08], torso: -8, armR_up: -90, armR_lo: 61, armL_up: -195, armL_lo: 117, legL_up: 20, legL_lo: 25, legR_up: 15, legR_lo: 30 },
    // spike: both feet stamped straight down, fists flung up
    spike: { root: [0, -10], sq: [0.96, 1.05], legL_up: -30, legL_lo: 5, legR_up: 30, legR_lo: -20, armR_up: -80, armR_lo: 58, armL_up: -185, armL_lo: 82 },
    // neutral air: spread-eagle, raised fist out front, glowing fist punched out behind, feet kicked wide
    nair: { root: [0, -20], torso: 4, armR_up: -40, armR_lo: 93, armL_up: 45, armL_lo: 142, legL_up: 45, legL_lo: -10, legR_up: -60 },
    // back kick: the bus pitches forward and the rear foot thrusts straight out behind
    bair: { root: [20, -10], hip: 18, torso: 2, legL_up: 55, legL_lo: 5, legR_up: -30, legR_lo: 40, armR_up: -20, armR_lo: 33, armL_up: 35, armL_lo: -58 },
    // braced block: crouched, the glowing fist held up across the windshield, the raised fist guarding high
    guard: { root: [0, 60], sq: [1.04, 0.96], torso: -6, armL_up: -105, armL_lo: 37, armR_up: -110, armR_lo: 53, legL_up: 62, legL_lo: -69, legR_up: -23, legR_lo: 24 },
    // knocked flat: the bus slammed down on its belly, nose on the floor, legs splayed out behind, fists flopped
    down: { root: [0, 165.269], sq: [1.08, 0.88], torso: 4, legL_up: 54, legL_lo: 5, legR_up: 136, legR_lo: -40, armR_up: -20, armR_lo: 78, armL_up: -55, armL_lo: 72 },
    // deep crouch (wind-up for the jumping strikes): squashed low, knees bent wide, fists low and ready
    crouch: { root: [0, 110], sq: [1.06, 0.92], torso: 4, armR_lo: 33, armL_up: 15, armL_lo: -18, legL_up: 95, legL_lo: -97, legR_up: -50, legR_lo: 50 },
    // getup sweep: dropped low, the front foot slides out along the floor, fists braced
    sweep: { root: [-20, 150], sq: [1.05, 0.94], torso: -4, legR_up: -60, legR_lo: -10, armR_up: -10, armR_lo: 33, armL_up: 35, armL_lo: -28, legL_up: 125, legL_lo: -120 },
    // hanging from a ledge: both fists hooked overhead, feet dangling
    ledge: { root: [-10, 40], torso: -6, armR_up: -75, armR_lo: 46, armL_up: -190, armL_lo: 107, legL_up: -20, legL_lo: 20, legR_up: 20, legR_lo: 15 },
    // hit recoil: the bus rocked back on its heels, nose up, both fists flung out loose
    hit: { root: [-30, -10], sq: [0.95, 1.05], torso: -16, armR_up: 10, armR_lo: 73, armL_up: -75, armL_lo: 212, legL_up: -4, legL_lo: 4, legR_up: 4, legR_lo: -11 },
    // two-handed shove: lunging in, both fists thrust straight out at chest height
    blast: { root: [60, 10], torso: 8, armR_up: -45, armR_lo: 93, armL_up: -90, armL_lo: 119, legL_up: 20, legL_lo: -23, legR_up: 9, legR_lo: -18 },
    // super lunge: a long low lunge, the glowing fist driving forward low, the raised fist swung back over the roof
    super: { root: [100, 50], sq: [1.05, 0.95], torso: 12, armL_up: -83, armL_lo: 118, armR_up: -70, armR_lo: 53, legL_up: 25, legL_lo: -10, legR_up: -15, legR_lo: 7 },
    // victory: the raised fist pumped high, the glowing fist flexed up in front of the side, chest out
    win: { torso: -6, armR_up: -65, armR_lo: 38, armL_up: -35, armL_lo: -38, legL_up: 10, legL_lo: -13, legR_up: 17, legR_lo: -22 },
    // slam: the bus nose-dives and both fists smash the floor in front
    slam: { root: [50, 120], sq: [1.07, 0.92], torso: 20, armR_up: -25, armR_lo: 83, armL_up: -55, armL_lo: 142, legL_up: 95, legL_lo: -92, legR_up: -57, legR_lo: 62 },
    // lunging bite: the whole front of the bus thrusts forward and down, bumper first, fists swept back
    bite: { root: [120, 30], torso: 24, armR_up: 20, armR_lo: 153, armL_up: 25, armL_lo: 152, legL_up: 16, legL_lo: -4, legR_up: -4 },
    // pillar: both fists straight up over the roof, stretched tall
    pillar: { root: [0, -10], sq: [0.96, 1.05], torso: -4, armR_up: -90, armR_lo: 58, armL_up: -203, armL_lo: 128, legL_up: -5, legL_lo: 5, legR_up: 25, legR_lo: -31 },
    // belly flop: the bus flat out in the air, fists reaching forward, legs trailing straight back
    flop: { root: [0, -60], sq: [1.04, 0.96], torso: 6, legL_up: 59, legL_lo: 5, legR_up: 131, legR_lo: -30, armR_up: -35, armR_lo: 93, armL_up: -90, armL_lo: 117 },
    // diving kick: the front foot driven down and forward, the bus leaning back over it
    dive: { root: [0, -20], torso: -12, legR_up: 15, legR_lo: -40, legL_up: -40, legL_lo: 60, armR_up: -120, armR_lo: 53, armL_up: -155, armL_lo: 62 },
    // headbutt: the bus drives up nose-first, roof leading, fists swept down and back
    headbutt: { root: [10, -40], sq: [0.93, 1.1], torso: -28, armR_up: 40, armR_lo: 133, armL_up: 35, armL_lo: 142, legL_up: -3, legL_lo: 3, legR_up: 13, legR_lo: -18 },
    // high swipe: lunging in, the raised fist rakes forward high over the windshield, glowing fist flung back
    slash: { root: [60, 0], torso: 10, armR_up: -80, armR_lo: 103, armL_up: 55, armL_lo: -58, legL_up: 2, legL_lo: 1, legR_up: 16, legR_lo: -22 },
    // dodge: ducked and leaning away, fists tucked in
    dodge: { root: [-30, 50], sq: [0.97, 0.97], torso: -14, armR_up: 20, armR_lo: -27, armL_up: 35, armL_lo: -58, legL_up: 56, legL_lo: -64, legR_up: -17, legR_lo: 16 },
    // grab: lunging in, both fists reach out low to clamp on
    grab: { root: [50, 20], torso: 8, armR_up: -25, armR_lo: 93, armL_up: -95, armL_lo: 132, legL_up: 31, legL_lo: -36, legR_up: 3, legR_lo: -10 },
    // throw: the bus twists back and the glowing fist heaves up and back over the roof, raised fist low in front
    throw: { root: [-10, 20], torso: -14, armR_lo: 63, armL_up: -235, armL_lo: 92, legL_up: 34, legL_lo: -42, legR_up: 3, legR_lo: -10 },
    // battery ram: charged and leaning hard into the ram, bumper first, glowing fist braced out front, raised fist pulled back
    special: { root: [70, 30], torso: 12, armL_up: -75, armL_lo: 114, armR_up: 20, armR_lo: 13, legL_up: 29, legL_lo: -26, legR_up: -3, legR_lo: -6 },
  },
  hit: {
    strike: ["armR_lo", 1100, 245],
    punch: ["armR_lo", 1100, 245],
    punch2: ["armL_lo", 730, 345],
    kick: ["legR_lo", 975, 694],
    spark: ["legR_lo", 975, 694],
    upper: ["armR_lo", 1100, 245],
    rise: ["armR_lo", 1100, 245],
    spike: ["legR_lo", 905, 694],
    nair: ["armR_lo", 1100, 245],
    bair: ["legL_lo", 470, 716],
    sweep: ["legR_lo", 975, 694],
    blast: ["armL_lo", 730, 345],
    super: ["armL_lo", 730, 345],
    slam: ["armR_lo", 1100, 245],
    bite: ["torso", 955, 400],
    pillar: ["armR_lo", 1100, 245],
    flop: ["torso", 950, 300],
    dive: ["legR_lo", 975, 694],
    headbutt: ["torso", 880, 90],
    slash: ["armR_lo", 1100, 245],
    grab: ["armL_lo", 730, 345],
    special: ["torso", 960, 380],
  },
});
