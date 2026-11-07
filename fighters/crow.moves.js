// The Crow Swarm: Scarf Kid's full pose set for Queen City Clash. Angles: degrees, clockwise, relative to the painted pose.
// Generated from a pose spec (IK targets in Scarf Kid units). armF is the far talon arm (a darkened copy of armR behind the body);
// poses that do not move it apart keep it hidden behind armR. Feet ride their own ankle bones (footL, footR).
extendFighter("crow", {
  poses: {
    // launch: talons up, knees tucked, shoulder crows flared
    jump: { root: [0, -40], sq: [0.95, 1.06], torso: -6, head: -6, crowsTop: -14, armL_up: -30, armL_lo: 20, armR_up: 67, armR_lo: -62, armF_up: -55, armF_lo: -61, legR_up: -47, legR_lo: 103, legL_up: 35, legL_lo: -112, footR: -26, footL: 47 },
    // dropping: talons flung up, legs reaching down
    fall: { root: [0, -24], torso: 2, head: 6, crowsTop: 14, armL_up: -50, armL_lo: 30, armR_up: -67, armR_lo: -9, armF_up: -116, armF_lo: 25, legR_up: 1, legR_lo: 40, legL_up: 11, legL_lo: -77, footR: -21, footL: 46 },
    // jab: near talon shot straight out at head height, body lunging
    punch: { root: [36, 24], sq: [1.05, 0.97], torso: 10, head: -6, crowsTop: 8, armL_up: 10, armL_lo: -6, armR_up: -36, armR_lo: 80, armF_up: -131, armF_lo: -35, legL_up: -7, legL_lo: 25, legR_up: -22, legR_lo: 34, footL: -18, footR: -12 },
    // second jab: the far talon spears out low, the near one pulled back high
    punch2: { root: [40, 36], sq: [1.04, 0.97], torso: 14, head: -12, crowsTop: 10, armL_up: 16, armL_lo: -10, armF_up: -12, armF_lo: 38, armR_up: -119, armR_lo: 7, legL_up: -1, legL_lo: 19, legR_up: -29, legR_lo: 41, footL: -18, footR: -12 },
    // knee chambered high, body tipped back, talons up
    chamber: { root: [-16, -6], torso: -12, head: 8, crowsTop: -10, armL_up: -20, armR_up: 27, armR_lo: -41, armF_up: -33, armF_lo: -80, legR_up: -145, legR_lo: 152, legL_up: -16, legL_lo: 29, footR: 43, footL: -13 },
    // front kick: taloned foot snapped straight out at hip height, body upright
    kick: { root: [-20, 0], torso: -10, head: 6, crowsTop: -8, armL_up: -16, armR_up: 23, armR_lo: -60, armF_up: -89, armF_lo: -59, legR_up: -101, legR_lo: 36, legL_up: -20, legL_lo: 39, footR: 55, footL: -19 },
    // big high kick: talons swung up head-high, body thrown far back, arms flung behind
    spark: { root: [-40, 24], torso: -40, head: 22, crowsTop: -24, armL_up: -40, armL_lo: 20, armR_up: -46, armR_lo: -52, armF_up: -98, armF_lo: -14, legR_up: -114, legR_lo: -12, legL_up: -28, legL_lo: 60, footR: 86, footL: -32 },
    // rising talon: near arm driven straight up, body stretched
    upper: { root: [0, -90], sq: [0.94, 1.08], torso: -12, head: -14, crowsTop: -18, armR_up: -40, armR_lo: -13, armF_up: 165, armF_lo: -4, legR_up: 0, legR_lo: 38, legL_up: -1, legL_lo: -64, footR: -8, footL: 55 },
    // recovery: the swarm streaks upward, talons leading, legs trailing
    rise: { root: [0, -120], sq: [0.92, 1.1], torso: -4, head: -12, crowsTop: -30, legR_up: 20, legR_lo: 30, legL_up: 24, legL_lo: 10, armL_up: -40, armR_up: -65, armR_lo: -13, armF_up: -112, armF_lo: -13, footR: 0, footL: -4 },
    // stomp: near foot driven straight down, back knee tucked, talons thrown up
    spike: { root: [0, -90], sq: [0.96, 1.05], torso: 4, head: 10, crowsTop: 20, armL_up: -40, armR_up: -59, armR_lo: -29, armF_up: -127, armF_lo: 14, legR_up: 36, legR_lo: -12, legL_up: 28, legL_lo: -104, footR: 26, footL: 56 },
    // star: talons and legs flung out in every direction
    nair: { root: [0, -50], torso: -4, head: -4, crowsTop: -20, armL_up: -60, armL_lo: 30, armR_up: -16, armR_lo: 64, armF_up: 88, armF_lo: 49, legR_up: -42, legR_lo: 51, legL_up: 25, legL_lo: -44, footR: -39, footL: 49 },
    // back kick: far leg thrust out behind, body tipped forward, looking back
    bair: { root: [16, -40], torso: 22, head: -26, hip: 10, crowsTop: 10, armL_up: 20, armR_up: -116, armR_lo: -65, armF_up: -173, armF_lo: -24, legR_up: -45, legR_lo: 101, legL_up: 56, legL_lo: -52, footL: 6, footR: -26 },
    // dive kick: near leg stabbed down and forward, other knee tucked, talons up
    dive: { root: [0, -40], torso: -14, head: 10, crowsTop: 20, armL_up: -40, armR_up: -27, armR_lo: -50, armF_up: -101, armF_lo: -21, legR_up: -18, legR_lo: 35, legL_up: 48, legL_lo: -137, footR: -7, footL: 109 },
    // belly flop: the swarm laid flat in the air, face down, limbs spread wide
    flop: { root: [60, -40], hip: 70, head: -40, crowsTop: 30, armR_up: -80, armR_lo: 30, armF_up: -110, armF_lo: 40, armL_up: -40, armL_lo: 20, legR_up: 30, legR_lo: -20, legL_up: -10, legL_lo: -10, footR: 10, footL: 20 },
    // braced block: crouched, both talon arms crossed up in front of the face
    guard: { root: [-10, 60], sq: [1.03, 0.97], torso: -6, head: 8, crowsTop: -10, armL_up: -10, armR_up: -20, armR_lo: -25, armF_up: -7, armF_lo: -60, legL_up: -17, legL_lo: 57, legR_up: -42, legR_lo: 60, footL: -40, footR: -18 },
    // deep squat, the swarm bunched and coiled
    crouch: { root: [0, 120], sq: [1.06, 0.92], torso: 14, head: -12, crowsTop: 10, armL_up: 10, armR_up: -59, armR_lo: -57, armF_up: -128, armF_lo: -45, legL_up: 51, legL_lo: -72, legR_up: -74, legR_lo: 94, footL: 21, footR: -20 },
    // low sweep: dropped to the floor, near leg raked forward along the ground
    sweep: { root: [-20, 150], torso: -16, head: 8, crowsTop: -16, armR_up: 135, armR_lo: -3, armF_up: 146, armF_lo: 21, legR_up: -81, legR_lo: 53, legL_up: 63, legL_lo: -93, footR: 18, footL: 30 },
    // hanging from the edge: both talon arms straight up, legs dangling limp
    ledge: { root: [-10, 0], torso: -6, head: 14, crowsTop: 10, armL_up: 30, armR_up: -59, armR_lo: 20, armF_up: -149, armF_lo: 91, legR_up: -2, legR_lo: 57, legL_up: 15, legL_lo: -103, footR: -15, footL: 68 },
    // knocked back: head snapped back, arms flung, shoulder crows jolted up
    hit: { root: [-26, -12], sq: [0.95, 1.05], torso: -22, head: -18, crowsTop: -30, armL_up: -50, armR_up: 110, armR_lo: 12, armF_up: -100, armF_lo: -28, legR_up: -32, legR_lo: 40, legL_up: 11, legL_lo: -50, footR: -28, footL: 59 },
    // wind-up: whole body coiled back and low, near talon drawn far behind
    windup: { root: [-40, 50], sq: [1.04, 0.96], torso: -18, head: 6, crowsTop: -12, armL_up: -30, armR_up: -102, armR_lo: -13, armF_up: -179, armF_lo: -61, legL_up: -31, legL_lo: 75, legR_up: -37, legR_lo: 57, footL: -44, footR: -20 },
    // two-handed shove: both talons driven forward
    blast: { root: [30, 30], torso: 10, head: -12, crowsTop: 10, armL_up: 10, armR_up: -46, armR_lo: 91, armF_up: -5, armF_lo: 54, legL_up: -4, legL_lo: 22, legR_up: -25, legR_lo: 34, footL: -18, footR: -9 },
    // lunging rake: far talon thrown out long, body stretched forward low
    super: { root: [60, 70], sq: [1.06, 0.95], torso: 20, head: -22, crowsTop: 14, armL_up: 20, armF_up: -20, armF_lo: 26, armR_up: -151, armR_lo: 39, legL_up: -3, legL_lo: 35, legR_up: -48, legR_lo: 63, footL: -32, footR: -15 },
    // victory: talon raised high, chest out, shoulder crows flared
    win: { root: [0, 0], torso: -10, head: -14, crowsTop: -24, armL_up: -30, armR_up: -95, armR_lo: 84, armF_up: -169, armF_lo: -42, legL_up: -3, legL_lo: 6, legR_up: 0, legR_lo: 0, footL: -3, footR: 0 },
    // double-talon slam: bent low, both arms hammered onto the floor in front
    slam: { root: [30, 110], torso: 36, head: -26, crowsTop: 20, armL_up: 30, armR_up: 97, armR_lo: -1, armF_up: 107, armF_lo: 14, legL_up: -9, legL_lo: 60, legR_up: -67, legR_lo: 87, footL: -51, footR: -20 },
    // lunging peck: head and beak thrust forward low, arms swept back
    bite: { root: [40, 60], torso: 32, head: 12, crowsTop: 14, armL_up: 30, armR_up: 153, armR_lo: 27, armF_up: 125, armF_lo: 91, legL_up: -5, legL_lo: 35, legR_up: -42, legR_lo: 53, footL: -30, footR: -11 },
    // both talon arms thrust straight up, standing tall
    pillar: { root: [0, -10], sq: [0.95, 1.06], torso: -8, head: -10, crowsTop: -20, armL_up: -40, armR_up: -82, armR_lo: 46, armF_up: -133, armF_lo: 83, legL_up: -13, legL_lo: 20, legR_up: 10, legR_lo: -12, footL: -7, footR: 2 },
    // headbutt: springing up tall, crown driven up, talons swept down and back
    headbutt: { root: [20, -50], sq: [0.94, 1.07], torso: -26, head: 4, crowsTop: -20, armL_up: 20, armR_up: 130, armR_lo: 51, armF_up: 127, armF_lo: 91, legL_up: -9, legL_lo: 6, legR_up: 8, legR_lo: -12, footL: 3, footR: 4 },
    // high swipe: near talon whipped high and forward, body twisting into it
    slash: { root: [30, 20], torso: 14, head: -12, crowsTop: 10, armL_up: 10, armR_up: -81, armR_lo: 91, armF_up: -175, armF_lo: -1, legL_up: 2, legL_lo: 6, legR_up: -17, legR_lo: 21, footL: -8, footR: -4 },
    // knocked flat: lying face down along the floor, legs stretched out behind, talons out in front
    down: { root: [0, 87], hip: 84, head: -30, crowsTop: 30, armL_up: -30, armL_lo: 20, armR_up: -162, armR_lo: 91, armF_up: -148, armF_lo: 56, legL_up: -69, legL_lo: -6, legR_up: 24, legR_lo: -12, footR: 4, footL: 71 },
    // evasive tuck: the swarm pulls in small, leaning away
    dodge: { root: [-30, 20], sq: [0.94, 0.94], torso: -20, head: 14, crowsTop: 20, armL_up: 20, armR_up: 117, armR_lo: -57, armF_up: -158, armF_lo: -62, legR_up: -75, legR_lo: 115, legL_up: 35, legL_lo: -113, footR: -20, footL: 68 },
    // grab: both talon arms lunging forward at chest height
    grab: { root: [34, 40], torso: 14, head: -14, crowsTop: 10, armL_up: 10, armR_up: -44, armR_lo: 80, armF_up: -1, armF_lo: 40, legL_up: -3, legL_lo: 22, legR_up: -30, legR_lo: 38, footL: -19, footR: -8 },
    // throw follow-through: both talons whipped up and over, body bent forward
    throw: { root: [30, 30], torso: 24, head: -18, crowsTop: -20, armL_up: -20, armR_up: -125, armR_lo: 72, armF_up: -121, armF_lo: 34, legL_up: -4, legL_lo: 22, legR_up: -24, legR_lo: 29, footL: -18, footR: -5 },
    // SCATTER: the swarm bursts apart, every limb and the shoulder crows flung outward, body stretched wide
    special: { root: [0, -40], sq: [1.14, 0.9], torso: -10, head: -30, crowsTop: -70, armR_up: -110, armR_lo: 40, armF_up: 60, armF_lo: -50, armL_up: -100, armL_lo: 60, legR_up: -60, legR_lo: -20, legL_up: 50, legL_lo: -30, footR: 0, footL: 60 },
  },
  hit: {
    punch: ["armR_lo", 950, 170],
    punch2: ["armF_lo", 950, 170],
    kick: ["footR", 885, 735],
    spark: ["footR", 885, 735],
    upper: ["armR_lo", 950, 170],
    rise: ["armR_lo", 950, 170],
    spike: ["footR", 800, 740],
    nair: ["armR_lo", 950, 170],
    bair: ["footL", 262, 735],
    sweep: ["footR", 885, 735],
    blast: ["armR_lo", 950, 170],
    super: ["armF_lo", 950, 170],
    slam: ["armR_lo", 950, 170],
    bite: ["head", 835, 215],
    pillar: ["armR_lo", 950, 170],
    flop: ["armR_lo", 950, 170],
    dive: ["footR", 885, 735],
    headbutt: ["head", 720, 150],
    slash: ["armR_lo", 950, 170],
    grab: ["armR_lo", 950, 170],
    special: ["armR_lo", 950, 170],
    strike: ["armR_lo", 950, 170],
  },
});
