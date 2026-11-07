// The Outback: Scarf Kid's full pose set (round 2). Angles: degrees, clockwise, relative to the painted pose.
// Generated from a pose source that aims limbs by world direction; edit the numbers freely.
// armR (the far arm, raised fist) and armL (the near arm, mud glove in front of the car) both throw strikes.
// The car is torso and head together; down lies it flat on its side, nose forward (round 1 had it flipped onto its roof).
extendFighter("outback", {
  poses: {
    // takeoff: stretched, knees tucked, fists up
    jump: { root: [0, -20], sq: [0.95, 1.07], torso: -6, armR_up: -92.7, armR_lo: 67.7, armL_up: -26, armL_lo: 22, legL_up: -49, legL_lo: 91, legR_up: -34, legR_lo: 51.4 },
    // falling: both arms flung up, legs dangling apart
    fall: { root: [0, -6], sq: [1.03, 0.97], torso: 4, armR_up: -122.7, armR_lo: 72.7, armL_up: 74, armL_lo: 142, legL_up: -9, legL_lo: 1, legR_up: 26, legR_lo: -23.6 },
    // jab: the far fist snaps straight out, the car leaning in
    punch: { root: [30, -3], torso: 8, armR_up: -58.7, armR_lo: 103.7, armL_up: 20, armL_lo: -68, legL_up: 6, legL_lo: -6, legR_up: -4, legR_lo: 3.4 },
    // jab 2: the near glove crosses straight out in front of the car
    punch2: { root: [40, 1], torso: 12, armR_up: 19.3, armR_lo: -2.3, armL_up: -90, armL_lo: 86, legL_up: 9, legL_lo: -7, legR_up: -6, legR_lo: 3.4 },
    // kick windup: leans back, front knee pulled up high, fists guarding
    chamber: { root: [-20, -42], hip: -8, torso: -8, armR_up: -62.7, armR_lo: 37.7, armL_up: 24, armL_lo: -58, legL_up: -1, legL_lo: 1, legR_up: -66, legR_lo: 61.4 },
    // kick: tipped back, the front boot driven straight out at chest height
    kick: { root: [10, -56], hip: -10, torso: -10, armR_up: -78.7, armR_lo: 47.7, armL_up: 98, armL_lo: 112, legL_up: -9, legL_lo: 6, legR_up: -22, legR_lo: -46.6 },
    // spark: a huge high kick, the car tipped right back
    spark: { root: [0, -72], hip: -22, torso: -10, armR_up: -106.7, armR_lo: 67.7, armL_up: 120, armL_lo: 122, legL_up: 3, legL_lo: 6, legR_up: -28, legR_lo: -46.6 },
    // uppercut: the far fist driven straight up, the near glove dropped
    upper: { root: [10, -30], sq: [0.95, 1.07], torso: -8, armR_up: -122.7, armR_lo: 109.7, armL_up: 36, armL_lo: 32, legL_up: -4, legL_lo: 1, legR_up: 16, legR_lo: -8.6 },
    // rising: both fists thrown straight up, legs trailing
    rise: { root: [0, -45], sq: [0.92, 1.1], torso: -8, armR_up: -130.7, armR_lo: 112.7, armL_up: -144, armL_lo: 87, legL_up: -14, legL_lo: 16, legR_up: 41, legR_lo: -28.6 },
    // stomp: both boots driven straight down, arms thrown up
    spike: { root: [0, -10], sq: [0.95, 1.07], torso: -4, armR_up: -104.7, armR_lo: 67.7, armL_up: -138, armL_lo: 62, legL_up: -24, legL_lo: 8, legR_up: 48, legR_lo: -42.6 },
    // neutral air: a star, fists and boots flung out
    nair: { root: [0, -20], sq: [1.04, 1], armR_up: -68.7, armR_lo: 97.7, armL_up: 78, armL_lo: 122, legL_up: 31, legL_lo: 21, legR_up: -14, legR_lo: -38.6 },
    // back kick: tips forward and drives the back boot out behind
    bair: { root: [10, -40], hip: 18, torso: 4, armR_up: -40.7, armR_lo: 47.7, armL_up: -34, armL_lo: 2, legL_up: 51, legL_lo: 13, legR_up: 18, legR_lo: -18.6 },
    // guard: hunkered down, glove and fist both raised in front of the car
    guard: { root: [-5, -2], sq: [1.02, 0.97], torso: -4, armR_up: -94.7, armR_lo: 37.7, armL_up: -98, armL_lo: 22, legL_up: 16, legL_lo: -24, legR_up: 11, legR_lo: -8.6 },
    // knocked down: collapsed flat, the car belly-down on the floor nose first, legs and arms sprawled out
    down: { root: [0, 134], hip: 10, armR_up: -38.7, armR_lo: 117.7, armL_up: -42, armL_lo: 62, legL_up: 53, legL_lo: 7, legR_up: -42, legR_lo: -44.6 },
    // crouch: squashed low, knees bent wide, fists ready
    crouch: { root: [0, 43], sq: [1.06, 0.88], torso: 6, armR_up: -34.7, armR_lo: 37.7, armL_up: -18, armL_lo: -8, legL_up: 41, legL_lo: -49, legR_up: -19, legR_lo: 26.4 },
    // sweep: dropped low, the front boot swept out flat along the floor
    sweep: { root: [10, 53], sq: [1.05, 0.92], torso: -6, armR_up: 7.3, armR_lo: 47.7, armL_up: 34, armL_lo: 32, legL_up: 46, legL_lo: -54, legR_up: -20, legR_lo: -40.6 },
    // hanging on a ledge: both arms straight up, legs dangling
    ledge: { root: [0, -29], sq: [0.95, 1.06], torso: -6, armR_up: -127.7, armR_lo: 110.7, armL_up: -151, armL_lo: 87, legL_up: -9, legL_lo: 6, legR_up: 26, legR_lo: -18.6 },
    // hit: knocked back, the car snapped back, arms flung
    hit: { root: [-20, -10], sq: [0.95, 1.05], hip: -8, torso: -14, armR_up: -36.7, armR_lo: 67.7, armL_up: 120, armL_lo: 122, legL_up: 19, legL_lo: 1, legR_up: 14, legR_lo: -18.6 },
    // windup: leans back, the near glove hauled back behind the car, the fist cocked
    windup: { root: [-30, -2], sq: [1.04, 0.96], torso: -14, armR_up: -104.7, armR_lo: 37.7, armL_up: 92, armL_lo: 132, legL_up: 11, legL_lo: -14, legR_up: -4, legR_lo: 6.4 },
    // blast: both fists thrust straight out in front
    blast: { root: [30, 1], torso: 8, armR_up: -54.7, armR_lo: 105.7, armL_up: -82, armL_lo: 86, legL_up: 9, legL_lo: -7, legR_up: -6, legR_lo: 3.4 },
    // super: a full lunge, the near glove thrown in a huge haymaker
    super: { root: [60, 33], sq: [1.05, 0.96], torso: 18, armR_up: 63.3, armR_lo: 147.7, armL_up: -114, armL_lo: 96, legL_up: 26, legL_lo: -9, legR_up: -19, legR_lo: 6.4 },
    // win: the fist pumped straight up, glove on the hip
    win: { root: [0, -10], torso: -6, armR_up: -127.7, armR_lo: 112.7, armL_up: 34, armL_lo: -108, legR_lo: 0.4 },
    // slam: squashed flat, both fists hammered into the floor
    slam: { root: [10, 43], sq: [1.08, 0.88], torso: 14, armR_up: 2.3, armR_lo: 114.7, armL_up: -1, armL_lo: 87, legL_up: 41, legL_lo: -49, legR_up: -19, legR_lo: 26.4 },
    // bite: the car lunges nose first, grille leading, arms reaching
    bite: { root: [50, 11], torso: 24, armR_up: -32.7, armR_lo: 77.7, armL_up: -46, armL_lo: 52, legL_up: 16, legL_lo: -12, legR_up: -9, legR_lo: 6.4 },
    // pillar: both fists straight up, stretched tall
    pillar: { root: [0, -10], sq: [0.95, 1.07], torso: -4, armR_up: -126.7, armR_lo: 109.7, armL_up: -156, armL_lo: 88, legR_lo: 0.4 },
    // belly flop: flat out in the air, nose tipped down, arms thrown forward, legs kicked up behind
    flop: { root: [0, -95], sq: [1.04, 0.97], hip: 16, armR_up: -59.7, armR_lo: 102.7, armL_up: -73, armL_lo: 72, legL_up: 65, legL_lo: 21, legR_up: 120, legR_lo: -33.6 },
    // dive kick: tipped back, the front boot stabbing down and forward
    dive: { root: [0, -50], hip: -22, torso: -6, armR_up: -120.7, armR_lo: 67.7, armL_up: -174, armL_lo: 52, legL_up: 63, legL_lo: -79, legR_up: 33, legR_lo: -48.6 },
    // headbutt: stretched up, the car's nose driven up, arms swung back
    headbutt: { root: [0, -10], sq: [0.94, 1.08], torso: -22, armR_up: 83.3, armR_lo: 67.7, armL_up: 90, armL_lo: 112, legR_lo: 0.4 },
    // slash: the far fist swiped high and across, the car twisting into it
    slash: { root: [30, 1], torso: 12, armR_up: -120.7, armR_lo: 147.7, armL_up: 66, armL_lo: 122, legL_up: 9, legL_lo: -7, legR_up: -6, legR_lo: 3.4 },
    // dodge: ducked and shrunk back, arms tucked in
    dodge: { root: [-20, 53], sq: [0.94, 0.9], torso: -12, armR_up: 33.3, armR_lo: -32.3, armL_up: 10, armL_lo: -38, legL_up: 46, legL_lo: -54, legR_up: -19, legR_lo: 26.4 },
    // grab: lunging in, both hands reaching forward
    grab: { root: [25, 3], torso: 14, armR_up: -42.7, armR_lo: 97.7, armL_up: -76, armL_lo: 87, legL_up: 11, legL_lo: -9, legR_up: -9, legR_lo: 6.4 },
    // throw: heaving back, the far fist up high, the near glove swinging through low
    throw: { root: [-10, -3], torso: -12, armR_up: -96.7, armR_lo: 57.7, armL_up: 40, armL_lo: 22, legL_up: 6, legL_lo: -6, legR_up: -4, legR_lo: 4.4 },
    // mud rush: a low shoulder charge, the car's nose leading, arms tucked
    special: { root: [50, 39], sq: [1.06, 0.94], torso: 28, armR_up: 93.3, armR_lo: 77.7, armL_up: -50, armL_lo: 32, legL_up: 31, legL_lo: -19, legR_up: -14, legR_lo: 1.4 },
  },
  hit: {
    punch: ["armR_lo", 1050, 290],
    punch2: ["armL_lo", 800, 405],
    kick: ["legR_lo", 945, 700],
    spark: ["legR_lo", 945, 700],
    upper: ["armR_lo", 1050, 290],
    rise: ["armR_lo", 1040, 360],
    spike: ["legL_lo", 455, 740],
    nair: ["armR_lo", 1000, 400],
    bair: ["legL_lo", 455, 740],
    sweep: ["legR_lo", 945, 700],
    blast: ["armR_lo", 1050, 290],
    super: ["armL_lo", 800, 405],
    slam: ["armR_lo", 1050, 290],
    bite: ["torso", 960, 290],
    pillar: ["armR_lo", 1050, 290],
    flop: ["torso", 700, 420],
    dive: ["legR_lo", 945, 700],
    headbutt: ["torso", 960, 290],
    slash: ["armR_lo", 1050, 290],
    grab: ["armR_lo", 1050, 290],
    special: ["torso", 960, 290],
    strike: ["armR_lo", 1050, 290],
  },
});
