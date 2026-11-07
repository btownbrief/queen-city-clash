// Maple Creemee: Scarf Kid's full pose set (round 2). Angles: degrees, clockwise, relative to the painted pose.
// Made with an IK helper: hands and ankles were placed on Scarf Kid's pose targets and the move hitboxes,
// feet kept flat on grounded poses. armF_sh slides the far shoulder forward (see heroic.js) so the far arm can reach.
extendFighter("heroic", {
  poses: {
    // takeoff: stretched, knees tucked, fists high
    jump: { root: [0, -30], sq: [0.94, 1.07], torso: -5, head: -8, armN_up: 17.4, armN_lo: -26.2, armF_up: -52.6, armF_lo: 105.1, legR_up: -21.1, legR_lo: 78, legL_up: 29, legL_lo: -82.7, footL: 68.7, footR: -31.9 },
    // falling: arms up, legs dangling
    fall: { root: [0, -10], sq: [1.03, 0.97], torso: 3, head: 6, armN_up: -131.8, armN_lo: 80.2, armF_up: 130.2, armF_lo: -87.1, legR_up: -6.9, legR_lo: 27.3, legL_up: 8.9, legL_lo: -56.9, footL: 68, footR: 4.6 },
    // jab: near fist straight out, far fist guarding the chin, body lunging
    punch: { root: [35, 8], sq: [1.05, 0.97], torso: 15, head: 4, armN_up: -14.4, armN_lo: 9.8, armF_up: -47.1, armF_lo: 107.2, legR_up: -3.6, legR_lo: -3.5, legL_up: 7.4, legL_lo: -16.1, footL: 8.7, footR: 7.1 },
    // cross: the far fist drives out past the cone, near fist pulled back
    punch2: { root: [45, 12], sq: [1.05, 0.97], torso: 18, head: 6, armF_sh: 20, armF_up: -101, armF_lo: 113.6, armN_up: 170.8, armN_lo: -4.3, legR_up: -5.1, legR_lo: -3.7, legL_up: 8.7, legL_lo: -14.4, footL: 5.7, footR: 8.8 },
    // kick chamber: front knee pulled high, leaning back, fists up
    chamber: { root: [-20, 0], torso: -10, head: -4, armN_up: 18.3, armN_lo: -11.6, armF_up: -82.6, armF_lo: 175.8, legR_up: -49.2, legR_lo: 89.6, legL_up: -4.8, legL_lo: -42.1, footL: 46.9, footR: -5.4 },
    // front kick: leg snaps out level, body leaning away
    kick: { root: [50, 10], torso: -18, head: 8, armN_up: 66.4, armN_lo: -41.6, armF_up: -56.3, armF_lo: 16.1, legR_up: -76.7, legR_lo: -33.6, legL_up: 6.3, legL_lo: -43.7, footL: 37.4, footR: 40.3 },
    // big high kick: leg swung up past head height, arms flung back
    spark: { root: [30, 20], torso: -30, head: 14, armF_sh: -4, armN_up: 90.7, armN_lo: -39.3, armF_up: 162.4, armF_lo: -57.1, legR_up: -98.4, legR_lo: -35, legL_up: 6.8, legL_lo: -54, footL: 47.2, footR: 23.4 },
    // uppercut: near fist driven straight up, body stretching up
    upper: { root: [10, -4.087], sq: [0.94, 1.08], torso: -10, head: -16, armN_up: -93.9, armN_lo: 71.3, armF_up: -49, armF_lo: -159.4, legR_up: 6.7, legR_lo: -31.1, legL_up: 1.9, legL_lo: -15.4, footL: 13.5, footR: 24.4 },
    // rising recovery: near fist up, knees tucked, stretched
    rise: { root: [0, -40], sq: [0.92, 1.1], torso: -6, head: -12, armN_up: -96.2, armN_lo: 57.2, armF_up: -28, armF_lo: 176.3, legR_up: -15.7, legR_lo: 63, legL_up: 26.2, legL_lo: -86.5, footL: 80.3, footR: -22.3 },
    // down stomp: both legs driven straight down, both arms up
    spike: { root: [0, 10], sq: [0.95, 1.06], head: 8, armN_up: -111.2, armN_lo: 65.5, armF_up: 134.5, armF_lo: -87.3, legR_up: 24.7, legR_lo: -33.5, legL_up: -24, legL_lo: 5.3, footL: 28.7, footR: 18.8 },
    // spread-eagle: arms and legs out to both sides
    nair: { root: [0, -20], sq: [1.05, 0.97], armN_up: -29.1, armN_lo: 27.1, armF_up: 24.5, armF_lo: -13.3, legR_up: -71.5, legR_lo: 22, legL_up: 17.8, legL_lo: 101.1, footL: -68.9, footR: -0.5 },
    // back kick: back leg thrust behind, body leaning away, looking back
    bair: { root: [-20, -20], torso: 24, head: -14, armN_up: -86.3, armN_lo: -30.8, armF_up: -32.9, armF_lo: 101, legR_up: -35.1, legR_lo: 81.7, legL_up: 82.2, legL_lo: 5.3, footL: -27.5, footR: -26.6 },
    // shield: hunched, both fists up in front of the face
    guard: { root: [0, 45], sq: [1.04, 0.95], torso: 6, head: 8, armF_sh: 8, armN_up: -93.2, armN_lo: -5, armF_up: -92.1, armF_lo: 112.1, legR_up: -16.2, legR_lo: 30.2, legL_up: 21.8, legL_lo: -58.7, footL: 36.9, footR: -14 },
    // knocked down: lying face down along the floor, head forward, arms flopped ahead
    down: { root: [0, 51.6], hip: 88, head: 4, armN_up: -89.6, armN_lo: -0.6, armF_up: -119.6, armF_lo: -150.2, legR_up: 31.2, legR_lo: -44.5, legL_up: -42.9, legL_lo: 15.9, footR: -70, footL: -80 },
    // deep crouch: squashed low, knees wide, fists low and ready
    crouch: { root: [0, 130], sq: [1.06, 0.9], torso: 8, head: -6, armN_up: 41.6, armN_lo: -49.1, armF_up: -49.1, armF_lo: 139.7, legR_up: -40.5, legR_lo: 64.2, legL_up: 48, legL_lo: -94.1, footL: 46.1, footR: -23.7 },
    // low sweep: front leg slid out along the floor, body low and leaning back
    sweep: { root: [-50, 200], torso: -18, head: 6, armN_up: 47, armN_lo: 97.2, armF_up: -42.8, armF_lo: -102.1, legR_up: -42.2, legR_lo: -35, legL_up: 59, legL_lo: -128.6, footL: 69.6, footR: 67.2 },
    // hanging from a ledge: both arms straight up, body hanging below the hands
    ledge: { root: [0, -10], sq: [0.97, 1.04], armF_sh: -3, armN_up: -138.5, armN_lo: 101.7, armF_up: 148.1, armF_lo: -109.3, legR_up: 6.8, legR_lo: 42.9, legL_up: 1.2, legL_lo: -54.8, footL: 83.6, footR: -19.7 },
    // hurt: knocked back, arms flung, head thrown back
    hit: { root: [-30, -10], sq: [0.95, 1.05], torso: -18, head: -14, armN_up: 59.3, armN_lo: 68.5, armF_up: 111.2, armF_lo: 8.2, legR_up: 4.4, legR_lo: -33.3, legL_up: -3.9, legL_lo: -12.1, footL: 16, footR: 13.9 },
    // big windup: far fist cocked way back, leaning back
    windup: { root: [-35, 22.095], sq: [1.04, 0.96], torso: -16, head: -6, armF_sh: -6, armN_up: 21.1, armN_lo: -8.2, armF_up: 156.9, armF_lo: -9.7, legR_up: -1.7, legR_lo: -33.1, legL_up: 14.1, legL_lo: -43.5, footL: 29.4, footR: 34.8 },
    // two-handed shove: both palms thrust straight out
    blast: { root: [35, 5], torso: 12, head: 4, armF_sh: 12, armN_up: -8, armN_lo: 0.8, armF_up: -88.7, armF_lo: 159.7, legR_up: -1.2, legR_lo: -13.4, legL_up: 3.2, legL_lo: -3.5, footL: 0.3, footR: 14.6 },
    // haymaker: far fist hurled forward, lunging deep, near fist pulled back
    super: { root: [60, 48.364], sq: [1.06, 0.96], torso: 22, head: 8, armF_sh: 16, armF_up: -171.7, armF_lo: -154.7, armN_up: 118.5, armN_lo: 73.2, legR_up: -18.6, legR_lo: 7.5, legL_up: 14.2, legL_lo: 4.9, footL: -19.1, footR: 11.1 },
    // victory: near fist thrust to the sky, chest out
    win: { root: [0, -5], sq: [1.02, 1.03], torso: -8, head: -14, armN_up: -105.9, armN_lo: 76.3, armF_up: -31.1, armF_lo: -169.4, legR_up: 2.6, legR_lo: -11, legL_up: 1.5, legL_lo: -16.4, footL: 14.9, footR: 8.4 },
    // ground slam: both fists smashed onto the floor in front, deep squat
    slam: { root: [30, 110], sq: [1.05, 0.94], torso: 40, head: -22, armF_sh: 10, armN_up: 2.8, armN_lo: 116.3, armF_up: -69.1, armF_lo: -142.3, legR_up: -36, legR_lo: 54.3, legL_up: 45.4, legL_lo: -76.5, footL: 31.1, footR: -18.3 },
    // lunging head-first: body thrown forward, head jutting out, hands clawing forward
    bite: { root: [50, 51.746], torso: 30, head: 14, armF_sh: 8, armN_up: -54, armN_lo: -25.1, armF_up: -73.2, armF_lo: 166.5, legR_up: -20.2, legR_lo: 15.7, legL_up: 14.9, legL_lo: 4.9, footL: -19.8, footR: 4.5 },
    // both arms straight up overhead, stretched tall
    pillar: { root: [0, -10], sq: [0.95, 1.06], head: -6, armF_sh: -3, armN_up: -141.7, armN_lo: 116.2, armF_up: 124.8, armF_lo: -92.7, legR_up: 9.4, legR_lo: -32.2, legL_up: -1.5, legL_lo: -12.9, footL: 14.4, footR: 22.8 },
    // belly flop: body laid flat in the air, face down, arms and legs spread
    flop: { root: [0, -79.7], hip: 90, head: 6, armN_up: -85.9, armN_lo: 18.5, armF_up: -101.4, armF_lo: 157.7, legR_up: 21.5, legR_lo: -44.4, legL_up: -43.2, legL_lo: 16, footR: -80, footL: -90 },
    // diving kick: front leg stabbing down-forward, back knee tucked, arms up
    dive: { root: [10, -40], torso: -16, head: 6, armN_up: -15.5, armN_lo: -43.6, armF_up: 110.2, armF_lo: 9.2, legR_up: -3.5, legR_lo: -34.2, legL_up: 21.2, legL_lo: -100, footL: 108.8, footR: 7.7 },
    // headbutt: head driving up, body stretched, arms swept back
    headbutt: { root: [20, 2.55], sq: [0.92, 1.1], torso: 8, head: -22, armF_sh: -5, armN_up: 80.6, armN_lo: 116.5, armF_up: -41.4, armF_lo: -99.2, legR_up: 4.7, legR_lo: -33.1, legL_up: -0.2, legL_lo: 4.1, footL: -3.9, footR: 28.4 },
    // high swipe: near arm swung up and forward over the head
    slash: { root: [30, 0], torso: 10, head: -6, armN_up: -94, armN_lo: 77.6, armF_up: -74.9, armF_lo: -144.6, legR_up: 4.5, legR_lo: -29, legL_up: -1.5, legL_lo: 4.9, footL: -3.4, footR: 24.5 },
    // dodge: ducked and leaning away, fists tucked
    dodge: { root: [-30, 50], sq: [0.95, 0.94], torso: -22, head: -10, armN_up: 57, armN_lo: -20, armF_up: -90.1, armF_lo: -164.2, legR_up: -19.1, legR_lo: 7.2, legL_up: 23.8, legL_lo: -60.3, footL: 36.5, footR: 11.9 },
    // grab: both arms reaching out to clutch
    grab: { root: [35, 15], torso: 14, head: 6, armF_sh: 12, armN_up: -12.7, armN_lo: -10, armF_up: -80.9, armF_lo: 137.3, legR_up: -4.4, legR_lo: -14.7, legL_up: 10.9, legL_lo: -19.7, footL: 8.8, footR: 19.1 },
    // throw: both arms hurled up and forward overhead, follow-through
    throw: { root: [30, 5], torso: 8, head: -10, armF_sh: 10, armN_up: -130.8, armN_lo: 112.1, armF_up: 177.6, armF_lo: -143.6, legR_up: -0.3, legR_lo: -17.6, legL_up: 4.7, legL_lo: -9, footL: 4.3, footR: 17.9 },
    // rocket punch: deep lunge, both fists driven straight ahead
    special: { root: [70, 93.947], sq: [1.07, 0.94], torso: 24, head: 6, armF_sh: 14, armN_up: -70.2, armN_lo: 19.4, armF_up: -119.4, armF_lo: 123.7, legR_up: -33.6, legR_lo: 30.9, legL_up: 25.3, legL_lo: 4.9, footL: -30.2, footR: 2.7 },
  },
  hit: {
    punch: ["armN_lo", 765, 440],
    punch2: ["armF_lo", 180, 440],
    kick: ["footR", 728, 1105],
    spark: ["footR", 728, 1105],
    upper: ["armN_lo", 765, 440],
    rise: ["armN_lo", 765, 440],
    spike: ["footR", 630, 1138],
    nair: ["footR", 728, 1105],
    bair: ["footL", 168, 1095],
    sweep: ["footR", 728, 1105],
    blast: ["armN_lo", 765, 440],
    super: ["armF_lo", 180, 440],
    slam: ["armN_lo", 765, 440],
    bite: ["head", 615, 300],
    pillar: ["armN_lo", 765, 440],
    flop: ["torso", 430, 650],
    dive: ["footR", 630, 1138],
    headbutt: ["head", 440, 40],
    slash: ["armN_lo", 765, 440],
    grab: ["armN_lo", 765, 440],
    special: ["armN_lo", 765, 440],
    strike: ["armN_lo", 765, 440],
  },
});
