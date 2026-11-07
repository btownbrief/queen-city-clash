// The Flying Monkey: Scarf Kid's full pose set for Queen City Clash. Angles: degrees, clockwise, relative to the painted pose.
// Generated from a pose spec (IK targets in Scarf Kid units); feet ride their own ankle bones (footL, footR).
extendFighter("monkey", {
  poses: {
    // upstroke: wings swept high, knees tucked, fists up
    jump: { root: [0, -40], sq: [0.95, 1.06], torso: -6, head: -6, wingN: 24, wingF: -22, armR_up: 7, armR_lo: -44, armL_up: 174, armL_lo: -26, legR_up: -31, legR_lo: 46, legL_up: -67, legL_lo: 115, footR: 25, footL: -18 },
    // wings flung up, arms up, legs reaching down
    fall: { root: [0, -24], torso: 2, head: 6, wingN: 36, wingF: -32, armR_up: -110, armR_lo: 48, armL_up: -172, armL_lo: 30, legR_up: 31, legR_lo: -24, legL_up: -39, legL_lo: 44, footR: 13, footL: -15 },
    // jab: near-side arm (armR) shoots out straight at shoulder height, body lunges
    punch: { root: [30, 24], sq: [1.05, 0.97], torso: 8, head: -6, wingN: -6, wingF: 4, armR_up: -77, armR_lo: 84, armL_up: -34, armL_lo: 15, legL_up: -12, legL_lo: 41, legR_up: -13, legR_lo: 17, footL: -29, footR: -4 },
    // second jab: the chest arm (armL) punches straight out low, armR pulls back to the chin
    punch2: { root: [40, 40], sq: [1.04, 0.97], torso: 12, head: -16, wingN: -12, wingF: 8, armL_up: -120, armL_lo: 95, armR_up: -130, armR_lo: 51, legL_up: -13, legL_lo: 50, legR_up: -22, legR_lo: 24, footL: -37, footR: -2 },
    // knee chambered high, body tipped back, guard up
    chamber: { root: [-16, -6], torso: -12, head: 8, wingN: 12, wingF: -10, armR_up: -24, armR_lo: -10, armL_up: -86, armL_lo: 28, legR_up: -86, legR_lo: 68, legL_up: -21, legL_lo: 36, footR: 78, footL: -15 },
    // front kick snapped out at hip height, foot pointed, body leaning away
    kick: { root: [-24, 0], torso: -20, head: 12, wingN: 14, wingF: -12, armR_up: -14, armR_lo: -39, armL_up: -94, armL_lo: -4, legR_up: -63, legR_lo: -73, legL_up: -30, legL_lo: 52, footR: 128, footL: -22 },
    // big high kick: leg swung up head-high, body thrown far back, arms flung up behind
    spark: { root: [-30, 20], torso: -40, head: 22, wingN: 44, wingF: -30, armR_up: -51, armR_lo: -18, armL_up: -158, armL_lo: 57, legR_up: -86, legR_lo: -73, legL_up: -34, legL_lo: 69, footR: 109, footL: -35 },
    // uppercut / up air: fist driven straight up, body stretched
    upper: { root: [0, -90], sq: [0.94, 1.08], torso: -12, head: -14, wingN: 20, wingF: -18, armR_up: -71, armR_lo: 22, armL_up: -9, armL_lo: 22, legR_up: 20, legR_lo: -22, legL_up: -30, legL_lo: 14, footR: 32, footL: 26 },
    // recovery: whole body stretched up, fist leading, wings swept up, legs trailing
    rise: { root: [0, -120], sq: [0.92, 1.1], torso: -4, head: -12, wingN: 42, wingF: -36, legR_up: 20, legR_lo: 30, legL_up: 24, legL_lo: 10, armR_up: -109, armR_lo: 46, armL_up: 68, armL_lo: -21, footR: 10, footL: 6 },
    // stomp: near foot driven straight down, back knee tucked, arms thrown up
    spike: { root: [0, -100], sq: [0.96, 1.05], torso: 4, head: 10, wingN: 38, wingF: -32, armR_up: -106, armR_lo: 30, armL_up: 172, armL_lo: 18, legR_up: 57, legR_lo: -73, legL_up: 11, legL_lo: -43, footR: 76, footL: 12 },
    // star: arms and legs flung out in every direction, wings wide
    nair: { root: [0, -50], torso: -4, head: -4, wingN: 30, wingF: -28, armR_up: -30, armR_lo: 14, armL_up: 145, armL_lo: 30, legR_up: -29, legR_lo: -21, legL_up: 18, legL_lo: -1, footR: 20, footL: 3 },
    // back kick: far leg thrust out behind, body tipped forward, looking back
    bair: { root: [16, -40], torso: 20, head: -26, hip: 10, wingN: 4, wingF: -4, legL_up: 70, legL_lo: -20, armR_up: -40, armR_lo: -55, armL_up: 23, armL_lo: -8, legR_up: -16, legR_lo: 40, footL: -20, footR: 6 },
    // dive kick: near leg stabbed down and forward, other knee tucked, arms up
    dive: { root: [0, -40], torso: -14, head: 10, wingN: 30, wingF: -26, armR_up: -77, armR_lo: 0, armL_up: -154, armL_lo: 16, legR_up: 12, legR_lo: -41, legL_up: -92, legL_lo: 149, footR: 79, footL: -27 },
    // belly flop: body laid flat in the air, face down, arms and legs spread wide
    flop: { root: [40, -60], hip: 66, head: -36, wingN: -14, wingF: 6, armR_up: -110, armR_lo: 50, armL_up: -80, armL_lo: 30, legR_up: 50, legR_lo: -50, legL_up: -20, legL_lo: -20, footR: 24, footL: 44 },
    // braced block: crouched, both forearms raised in front of the face
    guard: { root: [-10, 60], sq: [1.03, 0.97], torso: -4, head: 8, wingN: 14, wingF: -10, armR_up: -62, armR_lo: 10, armL_up: -100, armL_lo: 40, legL_up: -26, legL_lo: 80, legR_up: -30, legR_lo: 36, footL: -54, footR: -6 },
    // deep squat, everything coiled, wings folded in
    crouch: { root: [0, 130], sq: [1.06, 0.92], torso: 12, head: -10, wingN: -10, wingF: 6, armR_up: -35, armR_lo: -52, armL_up: -24, armL_lo: 11, legL_up: 71, legL_lo: -88, legR_up: -76, legR_lo: 66, footL: 17, footR: 10 },
    // low sweep: dropped to the floor, near leg swept forward along the ground
    sweep: { root: [-20, 150], torso: -16, head: 8, wingN: 46, wingF: -26, armR_up: 152, armR_lo: -10, armL_up: 25, armL_lo: 42, legR_up: -25, legR_lo: -73, legL_up: 81, legL_lo: -108, footR: 92, footL: 27 },
    // hanging from the edge: both arms straight up, legs dangling limp
    ledge: { root: [-10, 0], torso: -6, head: 16, wingN: -16, wingF: 8, armR_up: -136, armR_lo: 92, armL_up: 173, armL_lo: 44, legR_up: 42, legR_lo: -18, legL_up: -58, legL_lo: 67, footR: 16, footL: 11 },
    // knocked back: head snapped back, arms flung, wings jolted open
    hit: { root: [-26, -12], sq: [0.95, 1.05], torso: -22, head: -18, wingN: 28, wingF: -26, armR_up: 151, armR_lo: -32, armL_up: 109, armL_lo: 15, legR_up: 14, legR_lo: -65, legL_up: -14, legL_lo: 14, footR: 31, footL: 20 },
    // wind-up: whole body coiled back and low, chest fist cocked low
    windup: { root: [-40, 50], sq: [1.04, 0.96], torso: -18, head: 6, wingN: 16, wingF: -14, armR_up: -118, armR_lo: 5, armL_up: -41, armL_lo: 25, legL_up: -44, legL_lo: 96, legR_up: -23, legR_lo: 34, footL: -52, footR: -11 },
    // two-handed shove: both fists driven forward
    blast: { root: [30, 30], torso: 8, head: -14, wingN: 8, wingF: -6, armR_up: -56, armR_lo: 36, armL_up: -116, armL_lo: 108, legL_up: -13, legL_lo: 44, legR_up: -16, legR_lo: 17, footL: -31, footR: -1 },
    // lunging haymaker: chest arm thrown out long, body stretched forward low
    super: { root: [60, 70], sq: [1.06, 0.95], torso: 18, head: -22, wingN: 18, wingF: -14, armL_up: -116, armL_lo: 75, armR_up: 162, armR_lo: 55, legL_up: -8, legL_lo: 58, legR_up: -38, legR_lo: 38, footL: -50, footR: 0 },
    // victory: fist pumped high, chest out, wings spread
    win: { root: [0, 0], torso: -10, head: -14, wingN: 30, wingF: -26, armR_up: -128, armR_lo: 92, armL_up: -11, armL_lo: 12, legL_up: -7, legL_lo: 14, legR_up: 0, legR_lo: 0, footL: -7, footR: 0 },
    // double-fist slam: bent low, both fists hammered into the floor in front
    slam: { root: [30, 100], torso: 34, head: -26, wingN: 34, wingF: -26, armR_up: 129, armR_lo: -46, armL_up: -57, armL_lo: 81, legL_up: -17, legL_lo: 87, legR_up: -48, legR_lo: 55, footL: -70, footR: -7 },
    // lunging bite: head and jaw thrust forward low, arms back
    bite: { root: [36, 50], torso: 30, head: 10, wingN: 14, wingF: -10, armR_up: -147, armR_lo: -39, armL_up: 43, armL_lo: 39, legL_up: -13, legL_lo: 55, legR_up: -27, legR_lo: 25, footL: -42, footR: 2 },
    // both arms thrust straight up, standing tall
    pillar: { root: [0, -10], sq: [0.95, 1.06], torso: -8, head: -10, wingN: 30, wingF: -26, armR_up: -130, armR_lo: 92, armL_up: 176, armL_lo: 68, legL_up: -18, legL_lo: 26, legR_up: 9, legR_lo: -8, footL: -8, footR: -1 },
    // headbutt: springing up tall, crown driven up, arms swept down and back
    headbutt: { root: [20, -50], sq: [0.94, 1.07], torso: -30, head: 6, wingN: 26, wingF: -22, armR_up: 143, armR_lo: 40, armL_up: 60, armL_lo: 28, legL_up: -14, legL_lo: 14, legR_up: 37, legR_lo: -73, footL: 0, footR: 36 },
    // high swipe: near arm whipped high and forward, body twisting into it
    slash: { root: [30, 20], torso: 14, head: -12, wingN: 10, wingF: -8, armR_up: -129, armR_lo: 92, armL_up: 40, armL_lo: -5, legL_up: -7, legL_lo: 28, legR_up: -12, legR_lo: 9, footL: -21, footR: 3 },
    // knocked flat: lying face down along the floor, arms out in front, wings folded up off the back
    down: { root: [40, 98], hip: 62, head: -20, wingN: -35, wingF: 14, armR_up: -70, armR_lo: 20, armL_up: -50, armL_lo: 30, legR_up: 80, legR_lo: -10, legL_up: -15, legL_lo: 0, footR: -60, footL: -106 },
    // evasive tuck: curled small, leaning away, wings wrapped in
    dodge: { root: [-30, 10], sq: [0.94, 0.94], torso: -20, head: 14, wingN: 16, wingF: -10, armR_up: 96, armR_lo: -76, armL_up: -40, armL_lo: 25, legR_up: -40, legR_lo: 53, legL_up: -52, legL_lo: 88, footR: 7, footL: -26 },
    // grab: both arms lunging forward at chest height
    grab: { root: [34, 40], torso: 12, head: -16, wingN: 6, wingF: -4, armR_up: -50, armR_lo: 19, armL_up: -109, armL_lo: 100, legL_up: -11, legL_lo: 47, legR_up: -22, legR_lo: 19, footL: -36, footR: 3 },
    // throw follow-through: both arms whipped up and over, body bent forward
    throw: { root: [30, 30], torso: 24, head: -18, wingN: 34, wingF: -28, armR_up: -150, armR_lo: 92, armL_up: -155, armL_lo: 39, legL_up: -13, legL_lo: 44, legR_up: -17, legR_lo: 14, footL: -31, footR: 3 },
    // GLIDE: body laid forward under fully spread wings, fist leading, legs trailing
    special: { root: [30, -50], hip: 48, head: -40, wingN: 40, wingF: -40, armR_up: -60, armR_lo: 30, armL_up: -30, armL_lo: 10, legR_up: 30, legR_lo: -10, legL_up: 10, legL_lo: 0, footR: 2, footL: 2 },
  },
  hit: {
    punch: ["armR_lo", 1030, 290],
    punch2: ["armL_lo", 700, 360],
    kick: ["footR", 890, 700],
    spark: ["footR", 890, 700],
    upper: ["armR_lo", 1030, 290],
    rise: ["armR_lo", 1030, 290],
    spike: ["footR", 760, 705],
    nair: ["armR_lo", 1030, 290],
    bair: ["footL", 410, 725],
    sweep: ["footR", 890, 700],
    blast: ["armR_lo", 1030, 290],
    super: ["armL_lo", 700, 360],
    slam: ["armR_lo", 1030, 290],
    bite: ["head", 845, 312],
    pillar: ["armR_lo", 1030, 290],
    flop: ["armR_lo", 1030, 290],
    dive: ["footR", 890, 700],
    headbutt: ["head", 765, 135],
    slash: ["armR_lo", 1030, 290],
    grab: ["armR_lo", 1030, 290],
    special: ["armR_lo", 1030, 290],
    strike: ["armR_lo", 1030, 290],
  },
});
