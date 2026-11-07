// The Brawler: Scarf Kid's full pose set (round 2). Angles: degrees, clockwise, relative to the painted pose.
// Made with an IK helper: fists and ankles were placed on Scarf Kid's pose targets and the move hitboxes, boots
// kept flat on grounded poses. armR (behind the body, on the facing side) leads; armL crosses in front.
extendFighter("brawler", {
  poses: {
    // takeoff: stretched, knees tucked, fists high
    jump: { root: [0, -20], sq: [0.95, 1.06], torso: -5, head: -6, armR_up: -0.3, armR_lo: 14.1, armL_up: -43.2, armL_lo: 54, legR_up: -27.7, legR_lo: 53.9, legL_up: 19.6, legL_lo: -44.2, footL: 9.6, footR: -6.2 },
    // falling: both arms flung up, legs dangling
    fall: { root: [0, -5], sq: [1.03, 0.97], torso: 3, head: 6, armR_up: -91.4, armR_lo: 79.6, armL_up: 164.2, armL_lo: -170.2, legR_up: -4.1, legR_lo: 13.5, legL_up: 6, legL_lo: -13.7, footL: -12.3, footR: 10.6 },
    // jab: lead fist snapped straight out, cross fist guarding the chin
    punch: { root: [15, 4], sq: [1.05, 0.97], torso: 6, head: 5, armR_up: -22.8, armR_lo: 66.9, armL_up: -20.4, armL_lo: 4.1, legR_up: 16, legR_lo: -43.2, legL_up: -5.7, legL_lo: 28.6, footL: -22.9, footR: 27.2 },
    // cross: the front arm swings off the chest and drives forward, lead fist pulled back
    punch2: { root: [45, 17.763], sq: [1.05, 0.97], torso: 18, head: 6, armL_up: -87.8, armL_lo: 119.2, armR_up: -114.5, armR_lo: 19, legR_up: 4, legR_lo: -3.3, legL_up: 0.6, legL_lo: 34.1, footL: -34.7, footR: -0.7 },
    // kick chamber: lead knee pulled high, leaning back, fists up
    chamber: { root: [-15, 0], torso: -8, head: -4, armR_up: -8.1, armR_lo: 17.2, armL_up: -41.3, armL_lo: 47.1, legR_up: -68.8, legR_lo: 79.2, legL_up: -6.2, legL_lo: -2.2, footL: 8.4, footR: 19.6 },
    // front kick: boot driven straight out, body leaning back
    kick: { root: [30, 6], torso: -16, head: 8, armR_up: -9.4, armR_lo: -16.5, armL_up: -139.8, armL_lo: -90.2, legR_up: -88.9, legR_lo: -3.3, legL_up: -0.6, legL_lo: 6.8, footL: -6.2, footR: 32.2 },
    // big high kick: boot swung up to head height, arms flung back
    spark: { root: [20, 12], torso: -28, head: 12, armR_up: -47.8, armR_lo: 19.4, armL_up: 155, armL_lo: -72.9, legR_up: -110.9, legR_lo: -45.1, legL_up: 1.6, legL_lo: -12.7, footL: 11.1, footR: 61 },
    // uppercut: lead fist driven straight up, body stretching
    upper: { root: [10, 6.101], sq: [0.94, 1.08], torso: -8, head: -14, armR_up: -70.9, armR_lo: 65.5, armL_up: 1.2, armL_lo: 36.9, legR_up: 11.9, legR_lo: -33.1, legL_up: -5.6, legL_lo: 34, footL: -28.4, footR: 21.2 },
    // rising recovery: lead fist up, knees tucked, stretched
    rise: { root: [0, -40], sq: [0.92, 1.1], torso: -6, head: -10, armR_up: -67.8, armR_lo: 42.1, armL_up: 23, armL_lo: 23, legR_up: -9.5, legR_lo: 32.6, legL_up: 10.1, legL_lo: -22.8, footL: -2.3, footR: -3.1 },
    // down stomp: both boots driven straight down, both arms up
    spike: { root: [0, 16], sq: [0.95, 1.06], head: 8, armR_up: -68.1, armR_lo: 49.7, armL_up: 159.3, armL_lo: -146.3, legR_up: 19.1, legR_lo: -23.5, legL_up: -17, legL_lo: 20.4, footL: -11.4, footR: 12.4 },
    // spread-eagle: arms and legs thrown out to both sides
    nair: { root: [0, -20], sq: [1.05, 0.97], armR_up: 3.9, armR_lo: 20.3, armL_up: 33.1, armL_lo: -104.6, legR_up: -65.4, legR_lo: 32.8, legL_up: 19, legL_lo: 81.2, footL: -60.2, footR: -12.4 },
    // back kick: rear boot thrust behind, body leaning away
    bair: { root: [-20, -20], torso: 22, head: -12, armR_up: -33.8, armR_lo: -5.7, armL_up: -29.8, armL_lo: 36.8, legR_up: -19.6, legR_lo: 47.2, legL_up: 65.6, legL_lo: 35.2, footL: -150.8, footR: -7.6 },
    // shield: hunched, both fists up in front of the face
    guard: { root: [0, 30], sq: [1.04, 0.95], torso: 6, head: 8, armR_up: -56.8, armR_lo: 6.5, armL_up: -69.7, armL_lo: 60.6, legR_up: -4.5, legR_lo: 7.4, legL_up: 12.8, legL_lo: -20.9, footL: 8.1, footR: -2.9 },
    // knocked down: lying face down along the floor, head forward, arms flopped ahead
    down: { root: [0, -7.3], hip: 88, head: 4, armR_up: -63.3, armR_lo: -8.5, armL_up: -48.8, armL_lo: 49.7, legR_up: 40.6, legR_lo: -56.1, legL_up: -51.9, legL_lo: 46.5, footR: -80, footL: -90 },
    // deep crouch: squashed low, knees wide, fists low and ready
    crouch: { root: [0, 85], sq: [1.06, 0.9], torso: 8, head: -6, armR_up: -20.4, armR_lo: -26.3, armL_up: -13.5, armL_lo: 16.6, legR_up: -30.9, legR_lo: 45.3, legL_up: 38, legL_lo: -50.1, footL: 12.1, footR: -14.4 },
    // low sweep: lead boot slid out along the floor, body low and leaning back
    sweep: { root: [-30, 120], torso: -18, head: 6, armR_up: 93.6, armR_lo: 46.3, armL_up: -22.5, armL_lo: -160.2, legR_up: -38.7, legR_lo: -44.9, legL_up: 47.9, legL_lo: -78.5, footL: 30.6, footR: 75.6 },
    // hanging from a ledge: both arms straight up, body hanging below the fists
    ledge: { root: [0, 0], sq: [0.97, 1.04], armR_up: -125.8, armR_lo: 124.3, armL_up: -142.4, armL_lo: 119.7, legR_up: -0.9, legR_lo: 27.4, legL_up: 5.4, legL_lo: -34.1, footL: 8.7, footR: -6.5 },
    // hurt: knocked back, arms flung, head thrown back
    hit: { root: [-30, -10], sq: [0.95, 1.05], torso: -18, head: -14, armR_up: -22.3, armR_lo: 71.8, armL_up: 152.1, armL_lo: -95.5, legR_up: 6.4, legR_lo: -43.6, legL_up: -17.2, legL_lo: 34, footL: -16.8, footR: 25.2 },
    // big windup: the front arm cocked way back, leaning back
    windup: { root: [-30, 21.082], sq: [1.04, 0.96], torso: -16, head: -6, armR_up: 8.1, armR_lo: 20.4, armL_up: 128.4, armL_lo: -96.2, legR_up: 3.2, legR_lo: -43.3, legL_up: 7.9, legL_lo: -15.6, footL: 7.7, footR: 40.1 },
    // two-handed shove: both fists thrust straight out at chest height
    blast: { root: [30, 11.915], torso: 12, head: 4, armR_up: 37.3, armR_lo: -4.4, armL_up: -60.4, armL_lo: 120.3, legR_up: 6.2, legR_lo: -16.2, legL_up: -2.1, legL_lo: 34, footL: -31.9, footR: 10 },
    // lunging cross: front fist hurled forward, deep lunge, lead fist pulled back
    super: { root: [60, 51.419], sq: [1.06, 0.96], torso: 24, head: 8, armL_up: -95.6, armL_lo: 119.1, armR_up: -157.8, armR_lo: 36.6, legR_up: -14.7, legR_lo: 25.9, legL_up: 13.2, legL_lo: 34, footL: -47.2, footR: -11.2 },
    // victory: double biceps flex, chest out
    win: { root: [0, 2.869], sq: [1.02, 1.03], torso: -6, head: -12, armR_up: -39.4, armR_lo: 45.2, armL_up: 138.6, armL_lo: -132, legR_up: 17, legR_lo: -43.2, legL_up: -3.5, legL_lo: 15.5, footL: -12, footR: 26.2 },
    // ground slam: both fists hammered onto the floor in front, deep squat
    slam: { root: [20, 80], sq: [1.05, 0.94], torso: 36, head: -18, armR_up: 70, armR_lo: 46.2, armL_up: -30.2, armL_lo: 120.7, legR_up: -24.4, legR_lo: 47.8, legL_up: 37.2, legL_lo: -34.9, footL: -2.3, footR: -23.4 },
    // lunging head-first: body thrown forward, head jutting out, fists clawing forward
    bite: { root: [55, 69.302], torso: 32, head: 14, armR_up: 16.5, armR_lo: -25.3, armL_up: -58.4, armL_lo: 119.6, legR_up: -20, legR_lo: 41.1, legL_up: 19.1, legL_lo: 34.1, footL: -53.2, footR: -21.1 },
    // both arms straight up overhead, stretched tall
    pillar: { root: [0, 5.185], sq: [0.95, 1.06], head: -6, armR_up: -119.6, armR_lo: 124.5, armL_up: -145.2, armL_lo: 119.8, legR_up: 14, legR_lo: -43.3, legL_up: -2.8, legL_lo: 19.9, footL: -17.1, footR: 29.3 },
    // belly flop: body laid flat in the air, face down, arms and legs spread
    flop: { root: [0, -103.2], hip: 90, head: 6, armR_up: -50.1, armR_lo: -0.5, armL_up: -49.1, armL_lo: 41.3, legR_up: 27.9, legR_lo: -56.1, legL_up: -56.6, legL_lo: 46.5, footR: -80, footL: -90 },
    // diving kick: lead boot stabbing down-forward, rear knee tucked, arms up
    dive: { root: [10, -40], torso: -16, head: 6, armR_up: -16.7, armR_lo: 6.1, armL_up: -177.1, armL_lo: -123.7, legR_up: 5.5, legR_lo: -44.9, legL_up: 11.4, legL_lo: -63.7, footL: 77.3, footR: 14.4 },
    // headbutt: head driving up, body stretched, arms swept down and back
    headbutt: { root: [10, 7.133], sq: [0.92, 1.1], torso: -6, head: -22, armR_up: 146.9, armR_lo: 7.9, armL_up: -12.8, armL_lo: -143.2, legR_up: 10.9, legR_lo: -33.2, legL_up: -4.9, legL_lo: 34, footL: -29.1, footR: 22.3 },
    // high swipe: lead arm swung up and forward over the head
    slash: { root: [30, 13.6], torso: 10, head: -6, armR_up: -91.2, armR_lo: 89.7, armL_up: 21, armL_lo: 8.3, legR_up: 5, legR_lo: -13.4, legL_up: -1.9, legL_lo: 34, footL: -32.1, footR: 8.4 },
    // dodge: ducked and leaning away, fists tucked
    dodge: { root: [-30, 40], sq: [0.95, 0.94], torso: -22, head: -10, armR_up: 32, armR_lo: -4.1, armL_up: -69.1, armL_lo: 118.7, legR_up: -13.4, legR_lo: -10.7, legL_up: 16.4, legL_lo: -32.4, footL: 16, footR: 24.1 },
    // grab: both arms reaching out to clutch
    grab: { root: [30, 13.387], torso: 14, head: 6, armR_up: 61.8, armR_lo: -22.9, armL_up: -56.4, armL_lo: 119.7, legR_up: 4.5, legR_lo: -19.8, legL_up: -1.9, legL_lo: 34, footL: -32.1, footR: 15.3 },
    // throw: both arms hurled up and forward overhead, follow-through
    throw: { root: [25, 9.516], torso: 8, head: -10, armR_up: -96, armR_lo: 89.8, armL_up: -119.9, armL_lo: 119.4, legR_up: 8, legR_lo: -23.4, legL_up: -3.5, legL_lo: 34, footL: -30.5, footR: 15.4 },
    // haymaker: lead fist swung round in a huge hook, whole body thrown into it
    special: { root: [60, 60.74], sq: [1.07, 0.94], torso: 26, head: 8, armR_up: -24.3, armR_lo: -8.5, armL_up: 24, armL_lo: -132.4, legR_up: -17.9, legR_lo: 33.8, legL_up: 16.6, legL_lo: 34.1, footL: -50.7, footR: -15.9 },
  },
  hit: {
    punch: ["armR_lo", 925, 112],
    punch2: ["armL_lo", 700, 250],
    kick: ["footR", 910, 705],
    spark: ["footR", 910, 705],
    upper: ["armR_lo", 925, 112],
    rise: ["armR_lo", 925, 112],
    spike: ["footR", 830, 722],
    nair: ["footR", 910, 705],
    bair: ["footL", 440, 712],
    sweep: ["footR", 910, 705],
    blast: ["armR_lo", 925, 112],
    super: ["armL_lo", 700, 250],
    slam: ["armR_lo", 925, 112],
    bite: ["head", 812, 170],
    pillar: ["armR_lo", 925, 112],
    flop: ["torso", 700, 400],
    dive: ["footR", 830, 722],
    headbutt: ["head", 705, 30],
    slash: ["armR_lo", 925, 112],
    grab: ["armR_lo", 925, 112],
    special: ["armR_lo", 985, 190],
    strike: ["armR_lo", 925, 112],
  },
});
