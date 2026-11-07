// Champ: Scarf Kid's full pose set (round 2). Angles: degrees, clockwise, relative to the painted pose.
// Made with an IK helper: fists and ankles were placed on Scarf Kid's pose targets and the move hitboxes, feet
// kept flat on grounded poses. armR_sh / armL_sh slide the short arms' shoulders (see champ.js) for overhead reaches.
extendFighter("champ", {
  poses: {
    // takeoff: stretched, legs tucked, fists up, tail trailing
    jump: { root: [0, -20], sq: [0.95, 1.06], torso: -5, neck: -5, head: -4, tail: 15, armR_up: -22.2, armR_lo: 17.7, armL_up: -151.9, armL_lo: -93.7, legR_up: -9, legR_lo: 100.5, legL_up: 47.3, legL_lo: -138.9, footL: 76.6, footR: -71.5 },
    // falling: arms flung up, legs dangling, tail curling up
    fall: { root: [0, -5], sq: [1.03, 0.97], torso: 3, neck: 4, head: 6, tail: -13, armR_sh: -3, armR_up: -91.1, armR_lo: 70.8, armL_up: 162.9, armL_lo: 67.7, legR_up: -10.5, legR_lo: 49.5, legL_up: 40.3, legL_lo: -125.9, footL: 65.6, footR: -19 },
    // jab: raised fist snapped straight out, body lunging
    punch: { root: [20, 4], sq: [1.05, 0.97], torso: 8, neck: 4, head: 4, tail: -14, armR_up: -51.9, armR_lo: 71.2, armL_up: -142.2, armL_lo: -87.2, legR_up: -6.9, legR_lo: 12.9, legL_up: 30.3, legL_lo: -78.2, footL: 47.9, footR: -6 },
    // cross: the front arm swings off the chest and drives out low, raised fist pulled back
    punch2: { root: [35, 8], sq: [1.05, 0.97], torso: 14, neck: 6, head: 6, tail: -22, armL_up: -96, armL_lo: 88.2, armR_up: -123.2, armR_lo: 54.9, legR_up: -7.7, legR_lo: 21.2, legL_up: 32.4, legL_lo: -80.1, footL: 47.7, footR: -13.5 },
    // kick chamber: front knee pulled high, leaning back, tail braced
    chamber: { root: [-15, 0], torso: -8, neck: -4, head: -4, tail: 16, armR_up: 2.3, armR_lo: 1.7, armL_up: -132.6, armL_lo: -114.2, legR_up: -128.1, legR_lo: 138.9, legL_up: 28.1, legL_lo: -91.8, footL: 63.7, footR: 19.2 },
    // front kick: clawed foot driven straight out, body leaning back
    kick: { root: [20, 6], torso: -16, neck: -6, head: 8, tail: 28, armR_up: -5.1, armR_lo: -36.8, armL_up: -134.6, armL_lo: -72.6, legR_up: -118.2, legR_lo: -22.3, legL_up: 30.5, legL_lo: -72.7, footL: 42.2, footR: 80.5 },
    // big high kick: foot swung up to head height, arms flung back, tail swung down
    spark: { root: [10, 12], torso: -28, neck: -10, head: 14, tail: 48, armR_up: -60.9, armR_lo: 8.4, armL_up: 136.4, armL_lo: -39.6, legR_up: -155.8, legR_lo: -24.9, legL_up: 34.8, legL_lo: -96.4, footL: 61.6, footR: 85.7 },
    // uppercut: raised fist driven straight up, neck stretched
    upper: { root: [10, 11.993], sq: [0.94, 1.08], torso: -6, neck: -8, head: -12, armR_sh: -5, armR_up: -72.9, armR_lo: 70.6, armL_up: -111.1, armL_lo: -117.8, legR_up: -19, legR_lo: 29.6, legL_up: 34.2, legL_lo: -79.2, tail: 6, footL: 45, footR: -10.6 },
    // rising recovery: raised fist up, legs tucked, stretched
    rise: { root: [0, -40], sq: [0.92, 1.1], torso: -6, neck: -6, head: -10, armR_sh: -5, tail: 16, armR_up: -35.6, armR_lo: 9.5, armL_up: -93.3, armL_lo: -114.4, legR_up: -6.4, legR_lo: 53.1, legL_up: 38.9, legL_lo: -119.4, footL: 65.5, footR: -26.7 },
    // down stomp: both feet driven straight down, both arms up
    spike: { root: [0, 16], sq: [0.95, 1.06], neck: 4, head: 8, tail: -8, armR_sh: -4, armL_sh: -2, armR_up: -69.3, armR_lo: 60.9, armL_up: -177.6, armL_lo: 31.8, legR_up: 12.4, legR_lo: -20.8, legL_up: 22, legL_lo: -105.8, footL: 75.8, footR: 16.4 },
    // spread-eagle spin: arms and legs flung out, tail straight out behind
    nair: { root: [0, -20], sq: [1.05, 0.97], tail: 14, armR_up: -48.4, armR_lo: 70.9, armL_up: 161.2, armL_lo: 28.6, legR_up: -107.8, legR_lo: 57.5, legL_up: 42.1, legL_lo: 13.1, footL: -15.2, footR: 5.3 },
    // tail lash: tail whipped round behind, body twisting forward, looking back
    bair: { root: [10, -15], torso: 18, neck: -18, head: -12, tail: -40, armR_up: -49.6, armR_lo: 27.2, armL_up: -157.7, armL_lo: -106.1, legR_up: -22.3, legR_lo: 65.6, legL_up: 38.2, legL_lo: -139.9, footL: 81.7, footR: -23.3 },
    // shield: hunched, both fists up in front of the face, neck pulled in
    guard: { root: [0, 25], sq: [1.04, 0.95], torso: 6, neck: 14, head: 8, armL_sh: -2, armR_up: -92.3, armR_lo: 70.9, armL_up: -76.8, armL_lo: 9.7, legR_up: -21.2, legR_lo: 50.6, legL_up: 40.4, legL_lo: -110.3, tail: -6, footL: 69.9, footR: -29.4 },
    // knocked down: lying face down, neck along the floor, arms flopped ahead
    down: { root: [0, 18.4], hip: 82, neck: 8, head: 6, tail: -78, armR_up: -125.7, armR_lo: 71.3, armL_up: -68.6, armL_lo: -32.5, legR_up: 32.3, legR_lo: -34.4, legL_up: -27.2, legL_lo: -32.2, footR: -80, footL: -90 },
    // deep crouch: squashed low, knees wide, fists low, tail flat
    crouch: { root: [0, 80], sq: [1.06, 0.9], torso: 8, neck: 10, head: -6, tail: -14, armR_up: -41.5, armR_lo: -8.2, armL_up: -156.5, armL_lo: -85.3, legR_up: -39.2, legR_lo: 115.5, legL_up: 65.1, legL_lo: -134, footL: 68.9, footR: -76.3 },
    // low sweep: front foot slid out along the floor, body low and leaning back
    sweep: { root: [-30, 110], torso: -16, neck: -6, head: 6, tail: 26, armR_up: 107.6, armR_lo: -11.3, armL_up: 24.1, armL_lo: 44.6, legR_up: -74.9, legR_lo: -23.4, legL_up: 75, legL_lo: -157.4, footL: 82.4, footR: 90.3 },
    // hanging from a ledge: both arms stretched high, the body hanging below the fists, head tipped back between them
    ledge: { root: [0, 40], sq: [0.96, 1.05], torso: -4, neck: -12, head: -22, armR_sh: -8, armL_sh: -5, tail: 18, armR_up: -51.9, armR_lo: 71.8, armL_up: -172.6, armL_lo: 50.4, legR_up: -2.8, legR_lo: 46.6, legL_up: 36.3, legL_lo: -119.1, footL: 62.8, footR: -18.8 },
    // hurt: knocked back, neck whipped back, arms flung
    hit: { root: [-30, -10], sq: [0.95, 1.05], torso: -14, neck: -12, head: -16, tail: 28, armR_up: -32.5, armR_lo: 71.4, armL_up: -106.3, armL_lo: -53.1, legR_up: -16.6, legR_lo: -10.5, legL_up: 19.9, legL_lo: -77.7, footL: 57.8, footR: 15.1 },
    // big windup: raised fist cocked back, body coiled, tail braced
    windup: { root: [-30, 10], sq: [1.04, 0.96], torso: -12, neck: -6, head: -6, tail: 22, armR_up: -64.8, armR_lo: -1.7, armL_up: -125.1, armL_lo: -95, legR_up: -25.7, legR_lo: 19.4, legL_up: 31.6, legL_lo: -106.4, footL: 74.8, footR: 6.3 },
    // two-fisted shove: both fists thrust out at chest height
    blast: { root: [30, 4], torso: 12, neck: 6, head: 4, tail: -20, armR_up: -47.5, armR_lo: 71.3, armL_up: -86.9, armL_lo: 94.3, legR_up: -11.4, legR_lo: 13.7, legL_up: 29.4, legL_lo: -71.9, footL: 42.5, footR: -2.3 },
    // lunging cross: front fist hurled forward, deep lunge, tail stretched behind
    super: { root: [50, 20], sq: [1.06, 0.96], torso: 20, neck: 8, head: 6, tail: -32, armL_up: -98.6, armL_lo: 82.3, armR_up: -99, armR_lo: -4.3, legR_up: -21, legR_lo: 43.1, legL_up: 39, legL_lo: -91.2, footL: 52.2, footR: -22.1 },
    // victory: both fists raised high, neck proud, tail up
    win: { root: [0, -4], sq: [1.02, 1.03], torso: -6, neck: -8, head: -12, tail: -4, armR_sh: -5, armL_sh: -3, armR_up: -54.7, armR_lo: 71.1, armL_up: -158.1, armL_lo: 26, legR_up: 1.1, legR_lo: -15.1, legL_up: 25.2, legL_lo: -69.7, footL: 44.5, footR: 14 },
    // ground slam: both fists hammered onto the floor, deep squat, tail slapping down
    slam: { root: [20, 85], sq: [1.05, 0.94], torso: 30, neck: 10, head: -14, tail: -18, armR_up: 52.3, armR_lo: 25.2, armL_up: -48.8, armL_lo: 116.5, legR_up: -17, legR_lo: 128.2, legL_up: 67.9, legL_lo: -130, footL: 62.1, footR: -111.2 },
    // lunging bite: neck thrown forward, jaws out, fists clawing forward
    bite: { root: [40, 25], torso: 20, neck: 30, head: 10, tail: -32, armR_up: -1.6, armR_lo: -4.4, armL_up: -46, armL_lo: 49.8, legR_up: -22.3, legR_lo: 50.5, legL_up: 41, legL_lo: -87.4, footL: 46.4, footR: -28.2 },
    // both arms thrust straight up overhead, neck stretched tall
    pillar: { root: [0, -2.46], sq: [0.95, 1.06], torso: -2, neck: -6, head: -8, armR_sh: -6, armL_sh: -3, tail: 8, armR_up: -65, armR_lo: 71.3, armL_up: -177.3, armL_lo: 37.9, legR_up: -6.2, legR_lo: -6.1, legL_up: 22.3, legL_lo: -53.2, footL: 30.9, footR: 12.3 },
    // belly flop: body laid flat in the air, face down, arms and legs spread
    flop: { root: [0, -73.7], hip: 86, neck: 6, head: 6, tail: -92, armR_up: -114.8, armR_lo: 71.5, armL_up: -77.7, armL_lo: -34.6, legR_up: 16.8, legR_lo: -34.5, legL_up: -34.9, legL_lo: -32.3, footR: -80, footL: -90 },
    // diving stomp: front foot stabbing down-forward, back knee tucked, arms up
    dive: { root: [10, -40], torso: -14, neck: -4, head: 6, tail: 28, armR_up: -22.5, armR_lo: -1, armL_up: -95.1, armL_lo: -34.6, legR_up: -27.7, legR_lo: -23.5, legL_up: 44.9, legL_lo: -154.6, footL: 134.7, footR: 26.2 },
    // headbutt: head driving straight up on the long neck, arms swept back
    headbutt: { root: [10, 12.17], sq: [0.92, 1.1], torso: -6, neck: -14, head: -26, tail: 14, armR_up: 162.8, armR_lo: -45.3, armL_up: -40.3, armL_lo: -147.8, legR_up: -20.6, legR_lo: 29.4, legL_up: 33.7, legL_lo: -75.4, footL: 41.7, footR: -8.8 },
    // high claw swipe: raised arm swung up and forward over the head
    slash: { root: [25, 0], torso: 10, neck: 4, head: -6, armR_sh: -5, tail: -16, armR_up: -69.1, armR_lo: 71.6, armL_up: -107.8, armL_lo: -106.4, legR_up: -9.9, legR_lo: 2.5, legL_up: 27.4, legL_lo: -71, footL: 43.6, footR: 7.4 },
    // dodge: ducked and leaning away, neck pulled in
    dodge: { root: [-30, 40], sq: [0.95, 0.94], torso: -18, neck: 14, head: -10, tail: 28, armR_up: 40.3, armR_lo: -30.4, armL_up: -129.6, armL_lo: -125.7, legR_up: -46.4, legR_lo: 57.8, legL_up: 46.4, legL_lo: -121.8, footL: 75.4, footR: -11.4 },
    // grab: both arms reaching out to clutch
    grab: { root: [25, 10], torso: 12, neck: 6, head: 6, tail: -20, armR_up: -37.3, armR_lo: 70.5, armL_up: -73, armL_lo: 83.7, legR_up: -17.2, legR_lo: 26.1, legL_up: 33.8, legL_lo: -84.1, footL: 50.3, footR: -8.9 },
    // throw: both arms hurled up and forward overhead, follow-through
    throw: { root: [20, 4], torso: 6, neck: -6, head: -10, armR_sh: -5, armL_sh: -3, armR_up: -68.7, armR_lo: 71.7, armL_up: -131.5, armL_lo: 31.3, legR_up: -10.6, legR_lo: 13.7, legL_up: 29.1, legL_lo: -69.7, footL: 40.6, footR: -3.1 },
    // lake wave: rears back, both fists raised high, tail coiled, ready to crash down
    special: { root: [-20, 3.595], sq: [0.96, 1.05], torso: -14, neck: -10, head: -8, armR_sh: -6, armL_sh: -3, tail: 30, armR_up: -49.8, armR_lo: 70.5, armL_up: -118.8, armL_lo: 20.7, legR_up: -20.9, legR_lo: 1.3, legL_up: 30, legL_lo: -76.9, footL: 46.9, footR: 19.6 },
  },
  hit: {
    punch: ["armR_lo", 1045, 305],
    punch2: ["armL_lo", 895, 385],
    kick: ["footR", 1000, 698],
    spark: ["footR", 1000, 698],
    upper: ["armR_lo", 1045, 305],
    rise: ["armR_lo", 1045, 305],
    spike: ["footR", 925, 712],
    nair: ["footR", 1000, 698],
    bair: ["tail", 222, 440],
    sweep: ["footR", 1000, 698],
    blast: ["armR_lo", 1045, 305],
    super: ["armL_lo", 895, 385],
    slam: ["armR_lo", 1045, 305],
    bite: ["head", 1035, 130],
    pillar: ["armR_lo", 1045, 305],
    flop: ["torso", 800, 540],
    dive: ["footR", 925, 712],
    headbutt: ["head", 880, 30],
    slash: ["armR_lo", 1045, 305],
    grab: ["armR_lo", 1045, 305],
    special: ["armR_lo", 1045, 305],
    strike: ["armR_lo", 1045, 305],
  },
});
