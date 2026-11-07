// The Catamount: Scarf Kid's full pose set for Queen City Clash. Angles: degrees, clockwise, relative to the painted pose.
// Generated from a pose spec (IK targets in Scarf Kid units); hind feet ride their own hock bones (footL, footR).
extendFighter("catamount", {
  poses: {
    // springing up: knees tucked, claws up, tail swept down
    jump: { root: [0, -40], sq: [0.95, 1.06], torso: -6, head: -6, tail1: 20, tail2: 20, armR_up: 21, armR_lo: -43, armL_up: -9, armL_lo: -3, legR_up: -17, legR_lo: 34, legL_up: -54, legL_lo: 66, footR: 23, footL: 18 },
    // dropping: arms up, legs reaching down, tail streaming up
    fall: { root: [0, -24], torso: 2, head: 6, tail1: -30, tail2: -30, armR_up: -100, armR_lo: 30, armL_up: -161, armL_lo: 35, legR_up: 13, legR_lo: -17, legL_up: -31, legL_lo: 10, footR: 24, footL: 11 },
    // jab: near claw (armR) shot straight out at shoulder height, body lunging
    punch: { root: [36, 24], sq: [1.05, 0.97], torso: 10, head: -6, tail1: -10, tail2: -10, armR_up: -23, armR_lo: -5, armL_up: 40, armL_lo: -31, legL_up: 4, legL_lo: 8, legR_up: -8, legR_lo: 16, footL: -12, footR: -8 },
    // second jab: the chest arm (armL) spears straight out, armR pulled back
    punch2: { root: [40, 36], sq: [1.04, 0.97], torso: 14, head: -12, tail1: -14, tail2: -6, armL_up: -138, armL_lo: 118, armR_up: -135, armR_lo: 5, legL_up: 7, legL_lo: 10, legR_up: -13, legR_lo: 21, footL: -17, footR: -8 },
    // knee chambered high, body tipped back, claws up on guard
    chamber: { root: [-16, -6], torso: -12, head: 8, tail1: 16, tail2: 10, armR_up: -6, armR_lo: -18, armL_up: -63, armL_lo: 72, legR_up: -63, legR_lo: 70, legL_up: -8, legL_lo: 9, footR: 53, footL: -1 },
    // front kick snapped straight out at hip height, paw pointed, body upright
    kick: { root: [-20, 0], torso: -10, head: 6, tail1: 14, tail2: 10, armR_up: 7, armR_lo: -50, armL_up: -30, armL_lo: 11, legR_up: -58, legR_lo: -83, legL_up: -12, legL_lo: 17, footR: 111, footL: -5 },
    // big high kick: leg swung up head-high, body thrown far back, arms flung behind
    spark: { root: [-40, 24], torso: -46, head: 26, tail1: 36, tail2: 24, armR_up: -121, armR_lo: -44, armL_up: -112, armL_lo: 9, legR_up: -97, legR_lo: -83, legL_up: -19, legL_lo: 37, footR: 110, footL: -18 },
    // rising claw: near arm driven straight up, body stretched
    upper: { root: [0, -90], sq: [0.94, 1.08], torso: -12, head: -14, tail1: 24, tail2: 20, armR_up: -57, armR_lo: -2, armL_up: 8, armL_lo: 26, legR_up: 11, legR_lo: -35, legL_up: -15, legL_lo: -38, footR: 54, footL: 63 },
    // recovery leap: whole body stretched up, claw leading, legs trailing
    rise: { root: [0, -120], sq: [0.92, 1.1], torso: -4, head: -12, tail1: 34, tail2: 24, legR_up: 20, legR_lo: 30, legL_up: 24, legL_lo: 10, armR_up: -79, armR_lo: -5, armL_up: 82, armL_lo: -31, footR: 10, footL: 6 },
    // stomp: near foot driven straight down, back knee tucked, arms thrown up
    spike: { root: [0, -90], sq: [0.96, 1.05], torso: 4, head: 10, tail1: -30, tail2: -24, armR_up: -85, armR_lo: -1, armL_up: -152, armL_lo: 6, legR_up: 45, legR_lo: -83, legL_up: 33, legL_lo: -113, footR: 88, footL: 60 },
    // star: arms and legs flung out in every direction, tail out
    nair: { root: [0, -50], torso: -4, head: -4, tail1: -20, tail2: 10, armR_up: -24, armR_lo: 23, armL_up: 149, armL_lo: 27, legR_up: -31, legR_lo: -23, legL_up: 41, legL_lo: -62, footR: 14, footL: 51 },
    // back kick: far leg thrust out behind, body tipped forward, looking back
    bair: { root: [16, -40], torso: 22, head: -26, hip: 10, tail1: -40, tail2: -20, legL_up: 62, legL_lo: -40, armR_up: 3, armR_lo: -94, armL_up: 84, armL_lo: -31, legR_up: -18, legR_lo: 35, footL: 28, footR: 13 },
    // dive kick: near leg stabbed down and forward, other knee tucked, arms up
    dive: { root: [0, -40], torso: -14, head: 10, tail1: -30, tail2: -20, armR_up: -45, armR_lo: -45, armL_up: -102, armL_lo: -9, legR_up: 4, legR_lo: -53, legL_up: -71, legL_lo: 98, footR: 69, footL: 3 },
    // belly flop: body laid flat in the air, face down, arms and legs spread wide
    flop: { root: [60, -40], hip: 70, head: -40, tail1: -50, tail2: -20, armR_up: -90, armR_lo: 30, armL_up: -80, armL_lo: 30, legR_up: 30, legR_lo: -20, legL_up: -10, legL_lo: -10, footR: 10, footL: 20 },
    // braced block: crouched, both forearms raised in front of the face
    guard: { root: [-10, 60], sq: [1.03, 0.97], torso: -6, head: 8, tail1: 10, tail2: 10, armR_up: -45, armR_lo: -2, armL_up: -104, armL_lo: 67, legL_up: -5, legL_lo: 39, legR_up: -15, legR_lo: 34, footL: -34, footR: -19 },
    // deep squat, coiled to spring, tail low
    crouch: { root: [0, 140], sq: [1.06, 0.92], torso: 14, head: -12, tail1: 10, tail2: 14, armR_up: -31, armR_lo: -66, armL_up: 2, armL_lo: -9, legL_up: 14, legL_lo: 58, legR_up: -8, legR_lo: 82, footL: -72, footR: -74 },
    // low sweep: dropped to the floor, near leg swept forward along the ground
    sweep: { root: [-20, 170], torso: -16, head: 8, tail1: 20, tail2: 10, armR_up: 89, armR_lo: 32, armL_up: 30, armL_lo: 51, legR_up: -60, legR_lo: -3, legL_up: 13, legL_lo: 79, footR: 43, footL: -92 },
    // hanging from the edge: both arms straight up, legs dangling limp
    ledge: { root: [-10, 0], torso: -6, head: 14, tail1: 20, tail2: 10, armR_up: -124, armR_lo: 75, armL_up: -171, armL_lo: 51, legR_up: 25, legR_lo: -23, legL_up: -46, legL_lo: 25, footR: 38, footL: 41 },
    // knocked back: head snapped back, arms flung, tail whipped
    hit: { root: [-26, -12], sq: [0.95, 1.05], torso: -22, head: -18, tail1: 30, tail2: 30, armR_up: 57, armR_lo: 60, armL_up: 105, armL_lo: 25, legR_up: -7, legR_lo: -52, legL_up: 2, legL_lo: -38, footR: 39, footL: 56 },
    // wind-up: whole body coiled back and low, claw drawn far behind
    windup: { root: [-40, 50], sq: [1.04, 0.96], torso: -18, head: 6, tail1: 24, tail2: 16, armR_up: -114, armR_lo: -34, armL_up: -32, armL_lo: 33, legL_up: -21, legL_lo: 55, legR_up: -10, legR_lo: 31, footL: -34, footR: -21 },
    // two-handed shove: both palms driven forward
    blast: { root: [30, 30], torso: 10, head: -12, tail1: -10, tail2: -10, armR_up: -38, armR_lo: 4, armL_up: -139, armL_lo: 138, legL_up: 3, legL_lo: 11, legR_up: -10, legR_lo: 16, footL: -14, footR: -6 },
    // lunging slash: chest arm thrown out long, body stretched forward low
    super: { root: [60, 70], sq: [1.06, 0.95], torso: 20, head: -22, tail1: 6, tail2: 0, armL_up: -126, armL_lo: 94, armR_up: 132, armR_lo: 75, legL_up: 10, legL_lo: 22, legR_up: -22, legR_lo: 39, footL: -32, footR: -17 },
    // victory: claw raised high, chest out, tail curled up
    win: { root: [0, 0], torso: -10, head: -14, tail1: 24, tail2: 40, armR_up: -114, armR_lo: 75, armL_up: 19, armL_lo: 7, legL_up: 0, legL_lo: 0, legR_up: 0, legR_lo: 0, footL: 0, footR: 0 },
    // double-claw slam: bent low, both arms hammered onto the floor in front, tail up
    slam: { root: [30, 110], torso: 36, head: -26, tail1: 24, tail2: 24, armR_up: 64, armR_lo: -7, armL_up: -91, armL_lo: 136, legL_up: 7, legL_lo: 44, legR_up: -17, legR_lo: 58, footL: -51, footR: -41 },
    // lunging bite: head and jaws thrust forward low, arms back
    bite: { root: [40, 60], torso: 32, head: 12, tail1: 4, tail2: 0, armR_up: 156, armR_lo: -32, armL_up: 47, armL_lo: 44, legL_up: 5, legL_lo: 22, legR_up: -19, legR_lo: 30, footL: -27, footR: -11 },
    // both arms thrust straight up, standing tall
    pillar: { root: [0, -10], sq: [0.95, 1.06], torso: -8, head: -10, tail1: 20, tail2: 20, armR_up: -121, armR_lo: 75, armL_up: 171, armL_lo: 88, legL_up: -7, legL_lo: 0, legR_up: 8, legR_lo: -10, footL: 7, footR: 2 },
    // headbutt: springing up tall, crown driven up, arms swept down and back
    headbutt: { root: [20, -50], sq: [0.94, 1.07], torso: -26, head: 4, tail1: 20, tail2: 20, armR_up: 91, armR_lo: 75, armL_up: 45, armL_lo: 58, legL_up: 9, legL_lo: -38, legR_up: 17, legR_lo: -47, footL: 29, footR: 30 },
    // high swipe: near claw whipped high and forward, body twisting into it
    slash: { root: [30, 20], torso: 14, head: -12, tail1: -14, tail2: -10, armR_up: -115, armR_lo: 75, armL_up: 109, armL_lo: -31, legL_up: 5, legL_lo: 3, legR_up: -9, legR_lo: 10, footL: -8, footR: -1 },
    // knocked flat: lying face down along the floor, arms out in front, tail limp
    down: { root: [60, 140], hip: 66, head: -20, tail1: -40, tail2: -20, armR_up: -70, armR_lo: 20, armL_up: -50, armL_lo: 30, legR_up: 60, legR_lo: -10, legL_up: -10, legL_lo: 0, footR: -26, footL: 4 },
    // evasive tuck: curled small, leaning away
    dodge: { root: [-30, 10], sq: [0.94, 0.94], torso: -20, head: 14, tail1: 30, tail2: 40, armR_up: 85, armR_lo: -48, armL_up: -33, armL_lo: 35, legR_up: -26, legR_lo: 38, legL_up: -37, legL_lo: 38, footR: 8, footL: 9 },
    // grab: both arms lunging forward at chest height
    grab: { root: [34, 40], torso: 14, head: -14, tail1: -14, tail2: -10, armR_up: -36, armR_lo: -6, armL_up: -137, armL_lo: 138, legL_up: 5, legL_lo: 12, legR_up: -15, legR_lo: 20, footL: -17, footR: -5 },
    // throw follow-through: both arms whipped up and over, body bent forward
    throw: { root: [30, 30], torso: 24, head: -18, tail1: -20, tail2: -20, armR_up: -143, armR_lo: 75, armL_up: -159, armL_lo: 55, legL_up: 3, legL_lo: 11, legR_up: -13, legR_lo: 15, footL: -14, footR: -2 },
    // POUNCE: launched flat forward, both claws reaching ahead, hind legs kicked back, tail streaming
    special: { root: [50, -60], hip: 55, head: -45, tail1: -40, tail2: -20, armR_up: -40, armR_lo: 10, armL_up: -20, armL_lo: 0, legR_up: 40, legR_lo: -10, legL_up: 20, legL_lo: 0, footR: 5, footL: -15 },
  },
  hit: {
    punch: ["armR_lo", 1070, 230],
    punch2: ["armL_lo", 795, 285],
    kick: ["footR", 945, 705],
    spark: ["footR", 945, 705],
    upper: ["armR_lo", 1070, 230],
    rise: ["armR_lo", 1070, 230],
    spike: ["footR", 800, 640],
    nair: ["armR_lo", 1070, 230],
    bair: ["footL", 465, 750],
    sweep: ["footR", 945, 705],
    blast: ["armR_lo", 1070, 230],
    super: ["armL_lo", 795, 285],
    slam: ["armR_lo", 1070, 230],
    bite: ["head", 905, 195],
    pillar: ["armR_lo", 1070, 230],
    flop: ["armR_lo", 1070, 230],
    dive: ["footR", 945, 705],
    headbutt: ["head", 850, 62],
    slash: ["armR_lo", 1070, 230],
    grab: ["armR_lo", 1070, 230],
    special: ["armR_lo", 1070, 230],
    strike: ["armR_lo", 1070, 230],
  },
});
