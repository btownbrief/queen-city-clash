// Whale Tails: Scarf Kid's full pose set (round 2). Angles: degrees, clockwise, relative to the painted pose.
// Generated from a pose source that aims limbs by world direction and gives both twins the same move; edit the numbers freely.
// Bones are per twin (a_ = left twin, b_ = right twin). <t>_lift / <t>_sink / <t>_slide are the far-pivot "move" bones from
// whale.js (0.1 degree is about 5 painting px): grounded poses use <t>_lift to keep each twin's feet on the floor, and the
// lying poses (down, flop, special) tip both twins with hip and use b_slide / b_lift to set b back beside a.
extendFighter("whale", {
  poses: {
    // takeoff: both stretched, knees tucked, arms swept up
    jump: { root: [0, -20], sq: [0.95, 1.07], a_body: -6, a_tail: 10, a_armL_up: 70.4, a_armL_lo: 46, a_armR_up: -42.2, a_armR_lo: -31.8, a_legL_up: -63.7, a_legL_lo: 73.9, a_legR_up: -54.7, a_legR_lo: 82.2, b_lift: 0.4, b_body: -4, b_tail: 10, b_armL_up: 79.6, b_armL_lo: 47.4, b_armR_up: -44.7, b_armR_lo: -27.1, b_legL_up: -47.4, b_legL_lo: 64, b_legR_up: -50.1, b_legR_lo: 71.8 },
    // falling: arms flung up, legs dangling, tails flicked down
    fall: { sq: [1.03, 0.97], a_lift: 0.3, a_body: 4, a_tail: -10, a_armL_up: 85.1, a_armL_lo: 51, a_armR_up: -77.5, a_armR_lo: -31.8, a_legL_up: -9, a_legL_lo: -1.1, a_legR_up: -10, a_legR_lo: 12.2, b_body: 4, b_tail: -10, b_armL_up: 97, b_armL_lo: 52.4, b_armR_up: -77.3, b_armR_lo: -27.1, b_legL_up: 8, b_legL_lo: -11, b_legR_up: -4.7, b_legR_lo: 1.8 },
    // jab: both front fists snap out and up, leaning in
    punch: { root: [20, 0], a_lift: -0.12, a_body: 8, a_tail: -6, a_armL_up: 11.4, a_armL_lo: 1, a_armR_up: -49.2, a_armR_lo: -2.8, a_legL_up: 11.3, a_legR_up: -17.7, b_lift: -0.18, b_body: 8, b_tail: -6, b_armL_up: 23, b_armL_lo: 2.4, b_armR_up: -49.3, b_armR_lo: 1.9, b_legL_up: 28, b_legR_up: -12.7 },
    // jab 2: both front fists thrown high, up past the face, back fists dropped
    punch2: { root: [10, 0], sq: [0.97, 1.04], a_lift: -0.03, a_body: -6, a_tail: 12, a_armL_up: -39.6, a_armL_lo: 6, a_armR_up: -63.2, a_armR_lo: -2.8, a_legL_up: 4.3, a_legR_up: -13.7, b_lift: -0.07, b_body: -6, b_tail: 12, b_armL_up: -28, b_armL_lo: 7.4, b_armR_up: -63.3, b_armR_lo: 1.9, b_legL_up: 21, b_legR_up: -8.7 },
    // kick windup: both lean back on the back foot, front knees up, fists pulled back
    chamber: { root: [-15, 0], a_lift: 0.56, a_body: -12, a_tail: 10, a_armL_up: 56.4, a_armL_lo: -14, a_armR_up: 128.8, a_armR_lo: 33.2, a_legL_up: -15.7, a_legL_lo: 0.9, a_legR_up: -99.7, a_legR_lo: 92.2, b_lift: 0.19, b_body: -12, b_tail: 10, b_armL_up: 68, b_armL_lo: -12.6, b_armR_up: 128.7, b_armR_lo: 37.9, b_legL_up: 1, b_legL_lo: -9, b_legR_up: -94.7, b_legR_lo: 81.8 },
    // kick: both tip back on the back foot and snap the front foot straight out
    kick: { root: [165, 1805], hip: -36, a_body: -4, a_tail: 14, a_armL_up: 94.4, a_armL_lo: 46, a_armR_up: -63.2, a_armR_lo: -36.8, a_legL_up: 7.3, a_legL_lo: 5.9, a_legR_up: -55.7, a_legR_lo: 6.2, b_body: -4, b_tail: 14, b_armL_up: 106, b_armL_lo: 47.4, b_armR_up: -63.3, b_armR_lo: -32.1, b_legL_up: 24, b_legL_lo: -4, b_legR_up: -50.7, b_legR_lo: -4.2, a_slide: -29.46, a_lift: 29.46, b_slide: -24.1, b_lift: 24.1 },
    // spark: a big high kick from both, tipped right back
    spark: { root: [419, 1000], hip: -55, a_body: -6, a_tail: 22, a_armL_up: 125.4, a_armL_lo: 56, a_armR_up: -152.2, a_armR_lo: -36.8, a_legL_up: 31.3, a_legL_lo: 3.9, a_legR_up: -72.7, a_legR_lo: 6.2, b_body: -6, b_tail: 22, b_armL_up: 137, b_armL_lo: 57.4, b_armR_up: -152.3, b_armR_lo: -32.1, b_legL_up: 48, b_legL_lo: -6, b_legR_up: -67.7, b_legR_lo: -4.2, a_slide: -21.3, a_lift: 21.3, b_slide: -13.25, b_lift: 13.25 },
    // uppercut: both back fists (b's is the inner one) driven straight up, front arms down
    upper: { root: [0, -40], sq: [0.94, 1.08], a_lift: 3, a_body: -6, a_tail: 24, a_armL_up: 112.4, a_armL_lo: 29, a_armR_up: 99.8, a_armR_lo: 23.2, a_legL_up: -16.7, a_legL_lo: 18.9, a_legR_up: -22.7, a_legR_lo: 22.2, b_lift: 3.6, b_body: -6, b_tail: 24, b_armL_up: 123.4, b_armL_lo: 30.4, b_armR_up: 99.1, b_armR_lo: 27.9, b_legL_up: -0.6, b_legL_lo: 9, b_legR_up: -18.3, b_legR_lo: 11.8 },
    // rising: both shoot up, all four arms thrown up in a V, legs trailing
    rise: { root: [0, -60], sq: [0.92, 1.1], a_lift: 2.2, a_body: -4, a_tail: -16, a_armL_up: 86.2, a_armL_lo: 36, a_armR_up: -61.4, a_armR_lo: -16.8, a_legL_up: -10.9, a_legL_lo: 13.9, a_legR_up: 13.1, a_legR_lo: 7.2, b_lift: 2.8, b_body: -4, b_tail: -16, b_armL_up: 97.2, b_armL_lo: 37.4, b_armR_up: -62.1, b_armR_lo: -12.1, b_legL_up: 5.2, b_legL_lo: 4, b_legR_up: 17.5, b_legR_lo: -3.2 },
    // stomp: both drive both feet straight down, arms thrown up
    spike: { root: [0, -10], sq: [0.95, 1.07], a_body: -4, a_tail: 12, a_armL_up: 98.4, a_armL_lo: 36, a_armR_up: -69.2, a_armR_lo: -16.8, a_legL_up: -28.7, a_legL_lo: 5.9, a_legR_up: 8.3, a_legR_lo: 6.2, b_body: -4, b_tail: 12, b_armL_up: 110, b_armL_lo: 37.4, b_armR_up: -69.3, b_armR_lo: -12.1, b_legL_up: -12, b_legL_lo: -4, b_legR_up: 13.3, b_legR_lo: -4.2 },
    // neutral air: both spread into stars, all limbs out
    nair: { root: [0, -20], sq: [1.04, 1], a_slide: -0.4, a_tail: -8, a_armL_up: 44.8, a_armL_lo: 26, a_armR_up: -22.8, a_armR_lo: -1.8, a_legL_up: 26.7, a_legL_lo: 18.9, a_legR_up: -49.3, a_legR_lo: -7.8, b_slide: 0.4, b_tail: -8, b_armL_up: 55.6, b_armL_lo: 27.4, b_armR_up: -23.7, b_armR_lo: 2.9, b_legL_up: 42.6, b_legL_lo: 9, b_legR_up: -45.1, b_legR_lo: -18.2 },
    // back kick: both tip forward and kick the back foot out behind
    bair: { root: [-3236, 2835], hip: 34, a_body: 4, a_tail: -16, a_armL_up: -73.6, a_armL_lo: 16, a_armR_up: -1.2, a_armR_lo: -26.8, a_legL_up: 37.3, a_legL_lo: 11.9, a_legR_up: -13.7, a_legR_lo: 12.2, b_body: 4, b_tail: -16, b_armL_up: -62, b_armL_lo: 17.4, b_armR_up: -1.3, b_armR_lo: -22.1, b_legL_up: 54, b_legL_lo: 2, b_legR_up: -8.7, b_legR_lo: 1.8, a_slide: -59.18, a_lift: 59.18, b_slide: -64.38, b_lift: 64.38 },
    // guard: both hunker down, fists raised in front of their faces
    guard: { sq: [1.02, 0.97], a_sink: -0.6, a_body: -4, a_tail: 6, a_armL_up: 59, a_armL_lo: 116, a_armR_up: -53.6, a_armR_lo: -76.8, a_legL_up: 16.3, a_legL_lo: -26.1, a_legR_up: -29.7, a_legR_lo: 32.2, b_lift: -0.36, b_sink: -0.6, b_body: -4, b_tail: 6, b_armL_up: 70.6, b_armL_lo: 117.4, b_armR_up: -53.7, b_armR_lo: -72.1, b_legL_up: 33, b_legL_lo: -36, b_legR_up: -24.7, b_legR_lo: 21.8 },
    // knocked down: both flat on their fronts, side by side, heads forward
    down: { root: [-168, 5904], hip: 90, a_tail: -10, a_armL_up: 134.4, a_armL_lo: 16, a_armR_up: -98.2, a_armR_lo: -1.8, a_legL_up: -28.7, a_legL_lo: 3.9, a_legR_up: 5.3, a_legR_lo: -2.8, b_tail: -10, b_armL_up: 146, b_armL_lo: 17.4, b_armR_up: -98.3, b_armR_lo: 2.9, b_legL_up: -12, b_legL_lo: -6, b_legR_up: 10.3, b_legR_lo: -13.2, a_slide: 83.58, a_lift: -83.58, b_slide: 95.97, b_lift: -95.97 },
    // crouch: both squashed low, knees bent, fists ready
    crouch: { sq: [1.05, 0.9], a_lift: -0.1, a_sink: -1.2, a_body: 6, a_tail: -6, a_armL_up: -25.4, a_armL_lo: -9, a_armR_up: 22, a_armR_lo: -46.8, a_legL_up: 26.3, a_legL_lo: -41.1, a_legR_up: -34.7, a_legR_lo: 42.2, b_lift: -0.44, b_sink: -1.2, b_body: 6, b_tail: -6, b_armL_up: -13.8, b_armL_lo: -7.6, b_armR_up: 21.9, b_armR_lo: -42.1, b_legL_up: 43, b_legL_lo: -51, b_legR_up: -29.7, b_legR_lo: 31.8 },
    // getup sweep: both low, front fists swept out flat, front legs out
    sweep: { root: [15, 0], sq: [1.05, 0.93], a_lift: -0.1, a_sink: -1, a_body: 12, a_tail: -10, a_armL_up: -6.6, a_armL_lo: 16, a_armR_up: -42.2, a_armR_lo: -2.8, a_legL_up: 26.3, a_legL_lo: -41.1, a_legR_up: -59.7, a_legR_lo: 12.2, b_lift: -0.44, b_sink: -1, b_body: 12, b_tail: -10, b_armL_up: 5, b_armL_lo: 17.4, b_armR_up: -42.3, b_armR_lo: 1.9, b_legL_up: 43, b_legL_lo: -51, b_legR_up: -54.7, b_legR_lo: 1.8 },
    // hanging on a ledge: both reach both arms up, legs dangling
    ledge: { sq: [0.95, 1.06], a_lift: 0.25, a_body: -6, a_tail: -14, a_armL_up: 110.4, a_armL_lo: 34, a_armR_up: -77.2, a_armR_lo: -14.8, a_legL_up: -8.7, a_legL_lo: 3.9, a_legR_up: 0.3, a_legR_lo: 7.2, b_lift: -0.04, b_body: -6, b_tail: -14, b_armL_up: 122, b_armL_lo: 35.4, b_armR_up: -77.3, b_armR_lo: -10.1, b_legL_up: 8, b_legL_lo: -6, b_legR_up: 5.3, b_legR_lo: -3.2 },
    // hit: both knocked back, heads snapped, arms flung
    hit: { root: [-20, -10], sq: [0.95, 1.05], a_lift: 0.3, a_body: -16, a_tail: 12, a_armL_up: 50.1, a_armL_lo: 46, a_armR_up: -47.5, a_armR_lo: 33.2, a_legL_up: 6, a_legL_lo: 3.9, a_legR_up: -20, a_legR_lo: -7.8, b_lift: 0.3, b_body: -16, b_tail: 12, b_armL_up: 61.7, b_armL_lo: 47.4, b_armR_up: -47.6, b_armR_lo: 37.9, b_legL_up: 22.7, b_legL_lo: -6, b_legR_up: -15, b_legR_lo: -18.2 },
    // windup: both lean back, front fists cocked far back by the face
    windup: { root: [-25, 0], sq: [1.03, 0.97], a_lift: 0.35, a_sink: -0.2, a_body: -14, a_tail: 10, a_armL_up: 48.6, a_armL_lo: 6, a_armR_up: -139, a_armR_lo: -66.8, a_legL_up: -8.7, a_legR_up: -19.7, b_lift: 0.02, b_sink: -0.2, b_body: -14, b_tail: 10, b_armL_up: 60.2, b_armL_lo: 7.4, b_armR_up: -139.1, b_armR_lo: -62.1, b_legL_up: 8, b_legR_up: -14.7 },
    // blast: both thrust both fists straight out in front
    blast: { root: [25, 0], a_lift: -0.12, a_body: 8, a_tail: -10, a_armL_up: 166.4, a_armL_lo: 28, a_armR_up: -47.2, a_armR_lo: -4.8, a_legL_up: 11.3, a_legR_up: -19.7, b_lift: -0.18, b_body: 8, b_tail: -10, b_armL_up: 178, b_armL_lo: 29.4, b_armR_up: -47.3, b_armR_lo: -0.1, b_legL_up: 28, b_legR_up: -14.7 },
    // super: both lunge with a huge haymaker, back fists flung behind
    super: { root: [45, 0], sq: [1.05, 0.96], a_lift: -0.31, a_sink: -0.3, a_body: 16, a_tail: -14, a_armL_up: -1.3, a_armL_lo: 31, a_armR_up: -58.9, a_armR_lo: -2.8, a_legL_up: 21.3, a_legL_lo: -6.1, a_legR_up: -39.7, a_legR_lo: 22.2, b_lift: -0.36, b_sink: -0.3, b_body: 16, b_tail: -14, b_armL_up: 10.3, b_armL_lo: 32.4, b_armR_up: -59, b_armR_lo: 1.9, b_legL_up: 38, b_legL_lo: -16, b_legR_up: -34.7, b_legR_lo: 11.8 },
    // win: both pump a fist straight up
    win: { a_body: -6, a_tail: 8, a_armL_up: -19.6, a_armL_lo: -24, a_armR_up: -85.2, a_armR_lo: -10.8, a_legL_up: 0.3, a_legR_up: -3.7, b_lift: -0.03, b_body: -6, b_tail: 8, b_armL_up: 127, b_armL_lo: 32.4, b_armR_up: 22.7, b_armR_lo: -62.1, b_legL_up: 17, b_legR_up: 1.3 },
    // slam: both squash flat and hammer both fists into the floor
    slam: { sq: [1.08, 0.88], a_lift: -0.1, a_sink: -1.3, a_body: 10, a_tail: -14, a_armL_up: -64.3, a_armL_lo: 21, a_armR_up: 38.1, a_armR_lo: 5.2, a_legL_up: 26.3, a_legL_lo: -41.1, a_legR_up: -39.7, a_legR_lo: 47.2, b_lift: -0.44, b_sink: -1.3, b_body: 10, b_tail: -14, b_armL_up: -52.7, b_armL_lo: 22.4, b_armR_up: 38, b_armR_lo: 9.9, b_legL_up: 43, b_legL_lo: -51, b_legR_up: -34.7, b_legR_lo: 36.8 },
    // bite: both lunge face first, mouths leading, arms reaching
    bite: { root: [40, 0], a_lift: -0.21, a_body: 26, a_tail: -18, a_armL_up: -121.6, a_armL_lo: 6, a_armR_up: 0.8, a_armR_lo: -26.8, a_legL_up: 16.3, a_legR_up: -24.7, b_lift: -0.23, b_body: 26, b_tail: -18, b_armL_up: -110, b_armL_lo: 7.4, b_armR_up: 0.7, b_armR_lo: -22.1, b_legL_up: 33, b_legR_up: -19.7 },
    // pillar: both stretch tall with all arms straight up
    pillar: { sq: [0.94, 1.08], a_body: -2, a_tail: 18, a_armL_up: 114.4, a_armL_lo: 28, a_armR_up: -89.2, a_armR_lo: -8.8, a_legL_up: 0.3, a_legR_up: -3.7, b_lift: -0.03, b_body: -2, b_tail: 18, b_armL_up: 126, b_armL_lo: 29.4, b_armR_up: -89.3, b_armR_lo: -4.1, b_legL_up: 17, b_legR_up: 1.3 },
    // belly flop: both lying flat in the air, arms out front, legs kicked up behind
    flop: { root: [-197, 5829], hip: 90, a_tail: 12, a_armL_up: 104.4, a_armL_lo: 31, a_armR_up: -118.2, a_armR_lo: -1.8, a_legL_up: 1.3, a_legL_lo: 23.9, a_legR_up: 30.3, a_legR_lo: 12.2, b_tail: 12, b_armL_up: 116, b_armL_lo: 32.4, b_armR_up: -118.3, b_armR_lo: 2.9, b_legL_up: 18, b_legL_lo: 14, b_legR_up: 35.3, b_legR_lo: 1.8, a_slide: 83.58, a_lift: -83.58, b_slide: 95.97, b_lift: -95.97 },
    // dive kick: both tipped back, the front foot stabbing down and forward
    dive: { root: [-124, 2264], hip: -26, a_body: -6, a_tail: 16, a_armL_up: 86.4, a_armL_lo: 6, a_armR_up: -91.2, a_armR_lo: -36.8, a_legL_up: 52.3, a_legL_lo: -81.1, a_legR_up: -11.7, a_legR_lo: 2.2, b_body: -6, b_tail: 16, b_armL_up: 98, b_armL_lo: 7.4, b_armR_up: -91.3, b_armR_lo: -32.1, b_legL_up: 69, b_legL_lo: -91, b_legR_up: -6.7, b_legR_lo: -8.2, a_slide: -33.72, a_lift: 33.72, b_slide: -29.83, b_lift: 29.83 },
    // headbutt: both stretch up and drive their heads up, arms swung back
    headbutt: { sq: [0.94, 1.08], a_body: -16, a_tail: 26, a_armL_up: 10.4, a_armL_lo: 16, a_armR_up: 122.8, a_armR_lo: 3.2, a_legL_up: 0.3, a_legR_up: -3.7, b_lift: -0.03, b_body: -16, b_tail: 26, b_armL_up: 22, b_armL_lo: 17.4, b_armR_up: 122.7, b_armR_lo: 7.9, b_legL_up: 17, b_legR_up: 1.3 },
    // slash: both swipe a front fist high and across
    slash: { root: [25, 0], a_lift: -0.12, a_body: 6, a_tail: -8, a_armL_up: -11.6, a_armL_lo: -14, a_armR_up: -79.2, a_armR_lo: 23.2, a_legL_up: 11.3, a_legR_up: -17.7, b_lift: -0.18, b_body: 6, b_tail: -8, b_armL_lo: -12.6, b_armR_up: -79.3, b_armR_lo: 27.9, b_legL_up: 28, b_legR_up: -12.7 },
    // dodge: both duck and shrink back, arms tucked
    dodge: { root: [-20, 0], sq: [0.94, 0.9], a_lift: -0.08, a_sink: -0.7, a_body: -14, a_tail: 10, a_armL_up: -40.9, a_armL_lo: -14, a_armR_up: 71.5, a_armR_lo: -126.8, a_legL_up: 16.3, a_legL_lo: -23.1, a_legR_up: -34.7, a_legR_lo: 42.2, b_lift: -0.44, b_sink: -0.7, b_body: -14, b_tail: 10, b_armL_up: -29.3, b_armL_lo: -12.6, b_armR_up: 71.4, b_armR_lo: -122.1, b_legL_up: 33, b_legL_lo: -33, b_legR_up: -29.7, b_legR_lo: 31.8 },
    // grab: both lunge low, front fists reaching forward and down, a sliding up behind b
    grab: { root: [20, 0], a_slide: -1.2, a_lift: -0.18, a_sink: -0.6, a_body: 22, a_tail: -12, a_armL_up: -115.8, a_armL_lo: -4, a_armR_up: -9.4, a_armR_lo: -0.8, a_legL_up: 17.5, a_legR_up: -23.5, b_lift: -0.23, b_sink: -0.6, b_body: 22, b_tail: -12, b_armL_up: -105.4, b_armL_lo: -2.6, b_armR_up: -10.7, b_armR_lo: 3.9, b_legL_up: 33, b_legR_up: -19.7 },
    // throw: both heave back, front fists flung up high, back fists swinging through low
    throw: { root: [-10, 0], a_lift: 0.35, a_body: -12, a_tail: 14, a_armL_up: -73.6, a_armL_lo: -4, a_armR_up: -63.2, a_armR_lo: -22.8, a_legL_up: -8.7, a_legR_up: -9.7, b_lift: 0.02, b_body: -12, b_tail: 14, b_armL_up: -62, b_armL_lo: -2.6, b_armR_up: -63.3, b_armR_lo: -18.1, b_legL_up: 8, b_legR_up: -4.7 },
    // burrow special: both dive head first into the ground
    special: { root: [-5585, 1424], hip: 70, a_body: 10, a_tail: -40, a_armL_up: -115.6, a_armL_lo: 16, a_armR_up: 6.8, a_armR_lo: 3.2, a_legL_up: 126.3, a_legL_lo: -1.1, a_legR_up: 150.3, a_legR_lo: -7.8, b_body: 10, b_tail: -40, b_armL_up: -104, b_armL_lo: 17.4, b_armR_up: 6.7, b_armR_lo: 7.9, b_legL_up: 143, b_legL_lo: -11, b_legR_up: 155.3, b_legR_lo: -18.2, a_slide: -78.14, a_lift: 78.14, b_slide: -87.91, b_lift: 87.91 },
  },
  hit: {
    punch: ["b_armR_lo", 1305, 465],
    punch2: ["b_armR_lo", 1305, 465],
    kick: ["b_legR_lo", 1200, 668],
    spark: ["b_legR_lo", 1200, 668],
    upper: ["b_armL_lo", 795, 520],
    rise: ["b_armL_lo", 795, 520],
    spike: ["b_legL_lo", 880, 690],
    nair: ["a_armR_lo", 648, 470],
    bair: ["a_legL_lo", 175, 688],
    sweep: ["b_armR_lo", 1305, 465],
    blast: ["b_armR_lo", 1305, 465],
    super: ["b_armR_lo", 1305, 465],
    slam: ["b_armR_lo", 1305, 465],
    bite: ["b_body", 1150, 420],
    pillar: ["b_armL_lo", 795, 520],
    flop: ["b_body", 1060, 600],
    dive: ["b_legR_lo", 1200, 668],
    headbutt: ["b_body", 1080, 230],
    slash: ["b_armR_lo", 1305, 465],
    grab: ["b_armR_lo", 1305, 465],
    special: ["b_body", 1100, 420],
    strike: ["b_armR_lo", 1305, 465],
  },
});
