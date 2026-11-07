// The Filing Cabinet: Scarf Kid's full pose set (round 2). Angles: degrees, clockwise, relative to the painted pose.
// Generated from a pose source that aims limbs by world direction; edit the numbers freely.
// armR (the stamp arm) is drawn in front of the body and head, with the stamp on its own wrist bone (armR_hand).
// The legs are short and tuck under the box, so kicks tip the whole cabinet (hip) to bring a boot out.
extendFighter("cabinet", {
  poses: {
    // takeoff: stretched, knees tucked up, arms up
    jump: { root: [0, -20], sq: [0.94, 1.08], torso: -4, head: -5, armR_up: -67, armR_lo: 13.5, armR_hand: 12.5, armL_up: 48, armL_lo: 87, legL_up: -51, legL_lo: 67, legR_up: -55, legR_lo: 126 },
    // falling: arms flung up high, legs dangling apart
    fall: { root: [0, -6], sq: [1.03, 0.97], torso: 3, head: 4, armR_up: -69, armR_lo: 23.5, armR_hand: -22.5, armL_up: 81, armL_lo: 87, legL_up: 14, legL_lo: -3, legR_up: -15, legR_lo: 21 },
    // jab: the stamp thrust forward and up to head height, body stepping in
    punch: { root: [40, -1], torso: 8, head: 3, armR_up: -104, armR_lo: 53.5, armR_hand: 47.5, armL_up: 16, armL_lo: -13, legL_up: 9, legR_up: -13 },
    // jab 2: the other fist crosses in front of the chest
    punch2: { root: [55, 3], torso: 16, head: 4, armR_up: 38, armR_lo: 63.5, armR_hand: 57.5, armL_up: -176, armL_lo: 55, legL_up: 14, legR_up: -15 },
    // kick windup: leans back on the back foot, front knee up, stamp drawn back low
    chamber: { root: [-30, -73], hip: -14, head: -4, armR_up: 88, armR_lo: 83.5, armR_hand: 7.5, armL_up: 18, armL_lo: 27, legL_up: -2, legL_lo: -8, legR_up: -86, legR_lo: 131 },
    // kick: the box tips back and the front boot shoots out
    kick: { root: [10, -154], hip: -48, head: -6, armR_up: -38, armR_lo: 23.5, armR_hand: 37.5, armL_up: 82, armL_lo: 57, legL_up: 27, legL_lo: -8, legR_up: -41, legR_lo: 26 },
    // spark: a high kick, tipped right back
    spark: { root: [0, -180], sq: [0.97, 1.03], hip: -70, head: -8, armR_up: 4, armR_lo: 23.5, armR_hand: 47.5, armL_up: 114, armL_lo: 67, legL_up: 54, legL_lo: -8, legR_up: -40, legR_lo: 26 },
    // uppercut: the stamp swung up past the face
    upper: { root: [15, -20], sq: [0.95, 1.07], torso: -8, head: -10, armR_up: -96, armR_lo: 29.5, armR_hand: 9.5, armL_up: -18, armL_lo: 27, legL_up: 7, legR_up: -5 },
    // rising: both arms straight up, fist leading, legs dangling
    rise: { root: [0, -60], sq: [0.92, 1.1], hip: 16, head: -8, armR_up: -117, armR_lo: 28.5, armR_hand: 27.5, armL_up: 100, armL_lo: 51, legL_up: -27, legL_lo: -8, legR_up: -6, legR_lo: 11 },
    // stomp: both boots driven straight down, arms thrown up
    spike: { root: [0, -10], sq: [0.95, 1.07], head: -6, armR_up: -101, armR_lo: 26.5, armR_hand: 9.5, armL_up: 74, armL_lo: 77, legL_up: -26, legL_lo: -3, legR_up: 20, legR_lo: 11 },
    // neutral air: a star, all four limbs out
    nair: { root: [0, -20], sq: [1.04, 1], armR_up: -66, armR_lo: 38.5, armR_hand: 32.5, armL_up: 34, armL_lo: 62, legL_up: 49, legL_lo: -3, legR_up: -60, legR_lo: 21 },
    // back kick: the box tips forward and the back boot shoots out behind
    bair: { root: [20, -60], hip: 48, head: 6, armR_up: -44, armR_lo: 13.5, armR_hand: 17.5, armL_up: -94, armL_lo: 37, legL_up: 36, legL_lo: -13, legR_up: -13, legR_lo: 46 },
    // guard: the stamp held up as a shield, fist up beside it, knees bent
    guard: { root: [-8, -8], sq: [1.03, 0.96], torso: -4, head: 4, armR_up: -102, armR_lo: -56.5, armR_hand: -2.5, armL_up: 168, armL_lo: 27, legL_up: 29, legL_lo: -48, legR_up: -30, legR_lo: 56 },
    // knocked down: flat on the floor, head forward, limbs limp
    down: { root: [-200, -267], hip: 90, head: 6, armR_up: 39, armR_lo: 38.5, armR_hand: -62.5, armL_up: 64, armL_lo: 117, legL_up: -26, legL_lo: -8, legR_up: 20, legR_lo: 19 },
    // crouch: squashed low, knees out, both arms ready in front
    crouch: { root: [0, 24], sq: [1.07, 0.88], torso: 4, head: 6, armR_up: 10, armR_lo: -16.5, armR_hand: -12.5, armL_up: -130, armL_lo: 17, legL_up: 64, legL_lo: -88, legR_up: -70, legR_lo: 101 },
    // getup sweep: low, the stamp swept flat out in front, front leg out
    sweep: { root: [20, 32], sq: [1.06, 0.9], torso: 6, head: 4, armR_up: -62, armR_lo: 33.5, armR_hand: 32.5, armL_up: -22, armL_lo: 67, legL_up: 64, legL_lo: -88, legR_up: -60, legR_lo: 31 },
    // hanging from a ledge: both arms straight up, legs dangling
    ledge: { root: [0, -35], sq: [0.95, 1.06], hip: -6, head: -10, armR_up: -102, armR_lo: 27.5, armR_hand: 5.5, armL_up: 105, armL_lo: 57, legL_lo: -3, legR_up: 16, legR_lo: 36 },
    // hit: knocked back, head snapped, arms flung
    hit: { root: [-20, -10], sq: [0.95, 1.05], hip: -14, head: -12, armR_up: 28, armR_lo: 73.5, armR_hand: 67.5, armL_up: 58, armL_lo: 47, legL_up: 28, legL_lo: -18, legR_up: -11, legR_lo: 6 },
    // windup: leans back, the stamp hauled down and back, fist cocked
    windup: { root: [-30, -3], sq: [1.04, 0.96], torso: -14, head: -6, armR_up: 93, armR_lo: 83.5, armR_hand: 52.5, armL_up: 68, armL_lo: 97, legL_up: 4, legR_up: -15 },
    // blast: both arms thrust straight out in front
    blast: { root: [35, 3], torso: 10, head: 3, armR_up: -68, armR_lo: 33.5, armR_hand: 34.5, armL_up: -161, armL_lo: 54, legL_up: 14, legR_up: -13 },
    // super: a full lunge, the stamp driven far forward, the fist thrown back
    super: { root: [60, 14], sq: [1.05, 0.96], torso: 18, head: 4, armR_up: -79, armR_lo: 36.5, armR_hand: 31.5, armL_up: -19, armL_lo: 57, legL_up: 29, legL_lo: -23, legR_up: -35, legR_lo: 46 },
    // win: fist pumped straight up, stamp shown off at the side
    win: { root: [0, -3], torso: -6, head: -10, armR_up: -20, armR_lo: -26.5, armR_hand: -2.5, armL_up: 105, armL_lo: 60, legL_up: 4, legR_up: -5 },
    // slam: squashed flat, both arms hammered down to the floor
    slam: { root: [0, 19], sq: [1.1, 0.84], torso: -6, head: 10, armR_up: 40, armR_lo: 33.5, armR_hand: 37.5, armL_up: -68, armL_lo: 57, legL_up: 59, legL_lo: -78, legR_up: -65, legR_lo: 96 },
    // bite: the whole box lunges forward head first, both arms reaching
    bite: { root: [60, 3], torso: 26, head: 10, armR_up: -52, armR_lo: 23.5, armR_hand: 17.5, armL_up: -132, armL_lo: 37, legL_up: 24, legR_up: -20, legR_lo: 31 },
    // pillar: both arms straight up, stretched tall
    pillar: { root: [0, -5], sq: [0.95, 1.06], head: -8, armR_up: -108, armR_lo: 23.5, armR_hand: 9.5, armL_up: 102, armL_lo: 57 },
    // belly flop: lying flat in the air, arms out in front, legs kicked up behind
    flop: { root: [-200, -283], hip: 90, head: 4, armR_up: -106, armR_lo: 18.5, armR_hand: -17.5, armL_up: 84, armL_lo: 67, legL_up: -1, legL_lo: 2, legR_up: 5, legR_lo: 16 },
    // dive kick: tipped back, the front boot stabbing down and forward
    dive: { root: [0, -60], hip: -30, head: -6, armR_up: -71, armR_lo: 18.5, armR_hand: -2.5, armL_up: 84, armL_lo: 47, legL_up: 79, legL_lo: -113, legR_up: 5, legR_lo: 26 },
    // headbutt: stretched up, the head drawer driving up, arms swung back
    headbutt: { root: [0, -5], sq: [0.94, 1.09], torso: -6, head: -16, armR_up: 70, armR_lo: 43.5, armR_hand: 37.5, armL_up: -20, armL_lo: 47 },
    // slash: a high swipe, the stamp raised high and tilted like a blade
    slash: { root: [30, 3], torso: -4, head: -6, armR_up: -117, armR_lo: 28.5, armR_hand: 47.5, armL_up: -12, armL_lo: 7, legL_up: 14, legR_up: -15 },
    // dodge: ducked and shrunk back, arms tucked in
    dodge: { root: [-25, 14], sq: [0.93, 0.9], torso: -14, head: 8, armR_up: 83, armR_lo: 103.5, armR_hand: 52.5, armL_up: -92, armL_lo: -33, legL_up: 54, legL_lo: -78, legR_up: -60, legR_lo: 91 },
    // grab: lunging in, both hands reaching forward
    grab: { root: [35, 3], torso: 14, armR_up: -60, armR_lo: 33.5, armR_hand: 37.5, armL_up: -166, armL_lo: 53, legL_up: 14, legR_up: -15 },
    // throw: heaving back, the stamp swung up high, fist following through
    throw: { root: [-10, -7], torso: -12, head: -8, armR_up: -69, armR_lo: 28.5, armR_hand: -12.5, armL_up: -134, armL_lo: 77, legL_up: -1, legR_up: -5 },
    // stamp special: leaps up, the stamp raised high, fist up
    special: { root: [0, -70], sq: [0.93, 1.1], hip: -10, head: -12, armR_up: -86, armR_lo: 8.5, armR_hand: -17.5, armL_up: 94, armL_lo: 87, legL_up: -31, legL_lo: 67, legR_up: -25, legR_lo: 106 },
  },
  hit: {
    punch: ["armR_hand", 1045, 415],
    punch2: ["armL_lo", 372, 462],
    kick: ["legR_lo", 895, 700],
    spark: ["legR_lo", 875, 702],
    upper: ["armR_hand", 1100, 415],
    rise: ["armL_lo", 350, 490],
    spike: ["legL_lo", 455, 727],
    nair: ["armR_hand", 990, 420],
    bair: ["legL_lo", 415, 712],
    sweep: ["armR_hand", 1045, 415],
    blast: ["armR_hand", 1045, 415],
    super: ["armR_hand", 1045, 415],
    slam: ["armR_hand", 1060, 470],
    bite: ["head", 850, 95],
    pillar: ["armL_lo", 372, 490],
    flop: ["torso", 650, 600],
    dive: ["legR_lo", 895, 700],
    headbutt: ["head", 850, 95],
    slash: ["armR_hand", 1100, 415],
    grab: ["armL_lo", 372, 462],
    special: ["armR_hand", 1100, 415],
    strike: ["armR_hand", 1100, 415],
  },
});
