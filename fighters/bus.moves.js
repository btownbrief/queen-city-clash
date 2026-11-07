// The Electric Bus: extra poses for Queen City Clash's full move set. Angles: degrees, clockwise, relative to the painted pose.
extendFighter("bus", {
  poses: {
    // legs fold, both boots flat on the ground
    crouch: { root: [0, 100], sq: [1.04, 0.95], torso: 3, legL_up: 86, legL_lo: -88, legR_up: -42, legR_lo: 41, armR_up: 10, armR_lo: -10, armL_up: 4, armL_lo: -4 },
    // body dropped low, front leg shoved forward along the floor heel-first
    sweep: { root: [-30, 130], sq: [1.04, 0.96], torso: -6, legL_up: 108, legL_lo: -108, legR_up: -50, legR_lo: 0, armR_up: 0, armR_lo: -30, armL_up: 4, armL_lo: -4 },
    // bus rocks back so the raised fist punches straight up past the windshield
    upper: { root: [-20, -30], sq: [0.96, 1.06], torso: -20, armR_up: 0, armR_lo: -37, armL_up: -6, armL_lo: 6, legL_up: 8, legR_up: -8 },
    // front leg kicks out forward under the bumper
    kick: { root: [-30, 0], torso: -12, legR_up: -45, legR_lo: -15, legL_up: 10, armR_up: 0, armR_lo: -40, armL_up: -4, armL_lo: 4 },
    // legs split wide, raised fist out
    nair: { root: [0, -20], armR_up: -10, armR_lo: 10, armL_up: -8, armL_lo: 8, legL_up: 35, legL_lo: 10, legR_up: -35, legR_lo: -10 },
    // back leg kicks out behind while the bus tips forward
    bair: { root: [20, -20], torso: 12, legL_up: 35, legL_lo: 0, legR_up: -10, legR_lo: 20, armR_up: 0, armR_lo: 0, armL_up: 4, armL_lo: -4 },
    // both legs driven straight down
    spike: { root: [0, -10], legL_up: -27, legL_lo: 0, legR_up: 25, legR_lo: -10, armR_up: 0, armR_lo: -30, armL_up: -8, armL_lo: 6 },
    // nose-dives forward, the raised fist smashes the floor in front (armL is kept still: see header of bus.js)
    slam: { root: [40, 90], sq: [1.04, 0.95], torso: 22, armR_up: 0, armR_lo: 66, armL_up: 8, armL_lo: -4, legL_up: 80, legL_lo: -80, legR_up: -40, legR_lo: 40 },
    // braced low, glowing fist held across the front, other fist up
    guard: { root: [0, 75], sq: [1.03, 0.96], torso: -8, armR_up: 0, armR_lo: -25, armL_up: -10, armL_lo: -6, legL_up: 64, legL_lo: -64, legR_up: -32, legR_lo: 32 },
    // rocks back and tucks low
    dodge: { root: [-30, 74], sq: [0.94, 0.94], torso: -15, armR_up: 0, armR_lo: 40, armL_up: 6, armL_lo: 6, legL_up: 40, legL_lo: -20, legR_up: -40, legR_lo: 50 },
    // both fists reach forward
    grab: { root: [30, 26], torso: 5, armR_up: -20, armR_lo: 68, armL_up: -10, armL_lo: 4, legL_up: 12, legR_up: -14, legR_lo: 8 },
    // follow-through: leaning in, fist swung up high
    throw: { root: [30, 45], torso: 8, armR_up: -12, armR_lo: -12, armL_up: -10, armL_lo: 4, legL_up: 28, legL_lo: -5, legR_up: -18, legR_lo: 22 },
    // nose up, fist reaching highest, legs dangling
    ledge: { root: [0, 30], torso: -35, armR_up: 0, armR_lo: -2, armL_up: -8, armL_lo: 8, legL_up: -20, legL_lo: 10, legR_up: 20, legR_lo: 5 },
    // flipped onto its roof, legs kicking in the air (a quarter turn would stand the long bus on its end)
    down: { root: [0, -90], hip: 180, armR_lo: 40, legL_up: 30, legL_lo: 20, legR_up: -30, legR_lo: -20 },
    // Battery Charge: braced low, leaning hard into the ram, fist tucked back; hit point is the front bumper
    special: { root: [40, 87], sq: [1.05, 0.95], torso: 20, armR_up: 15, armR_lo: -120, armL_up: 8, armL_lo: 0, legL_up: 45, legL_lo: -10, legR_up: -45, legR_lo: 55 },
    // nose up, fist punching high, legs trailing
    rise: { root: [0, -40], sq: [0.95, 1.07], torso: -15, armR_up: 0, armR_lo: -37, armL_up: -6, armL_lo: 6, legL_up: 20, legL_lo: 15, legR_up: 25, legR_lo: 10 },
    // rocked back proudly, fist up
    win: { root: [0, 6], torso: -14, armR_up: 0, armR_lo: -23, armL_up: -8, armL_lo: 4, legL_up: 4, legR_up: -4 },
  },
  hit: {
    strike: ["armR_lo", 1092, 250],
    kick: ["legR_lo", 975, 680],
    sweep: ["legR_lo", 975, 680],
    upper: ["armR_lo", 1092, 240],
    bair: ["legL_lo", 440, 705],
    spike: ["legL_lo", 480, 715],
    slam: ["armR_lo", 1092, 250],
    grab: ["armR_lo", 1092, 250],
    special: ["torso", 980, 330],
    rise: ["armR_lo", 1092, 240],
  },
});
