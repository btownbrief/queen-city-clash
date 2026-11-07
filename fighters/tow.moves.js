// The Tow Truck: extra poses for Queen City Clash's full move set. Angles: degrees, clockwise, relative to the painted pose.
extendFighter("tow", {
  poses: {
    // thighs fold flat, boots stay flat on the ground
    crouch: { root: [0, 90], sq: [1.05, 0.93], torso: 5, head: -4, legL_up: 42, legL_lo: -42, legR_up: -32, legR_lo: 42, armR_up: 20, armR_lo: -10, armL_up: -8, armL_lo: 6 },
    // body dropped low; the heavy fist sweeps the floor in front, front boot shoved forward under it
    sweep: { root: [-50, 140], sq: [1.04, 0.96], torso: -10, head: -4, legL_up: 60, legL_lo: -52, legR_up: -62, legR_lo: 5, armR_up: 67, armR_lo: -5, armL_up: -10, armL_lo: 10 },
    // the claw arm is the one that reaches above the cab (the fist arm is short and drawn behind the grille)
    upper: { root: [0, -30], sq: [0.96, 1.06], torso: 8, armL_up: 90, armL_lo: -35, armR_up: -25, armR_lo: -65, legL_up: 6, legR_up: -6 },
    // front boot driven forward under the bumper while the cab leans back
    kick: { root: [-30, 25], torso: -18, head: 6, legR_up: -40, legR_lo: -15, legL_up: 10, legL_lo: -5, armR_up: -60, armR_lo: -15, armL_up: -10, armL_lo: 10 },
    nair: { root: [0, -20], torso: 0, armR_up: -30, armR_lo: -10, armL_up: 20, armL_lo: -40, legL_up: 30, legL_lo: 10, legR_up: -40, legR_lo: -10 },
    // back boot kicks out behind; the claw lifts out of its way
    bair: { root: [30, -20], torso: 20, head: -6, legL_up: 25, legL_lo: 30, legR_up: -10, legR_lo: 20, armR_up: 20, armR_lo: -10, armL_up: 90, armL_lo: -40 },
    // both boots driven straight down, claw and fist up
    spike: { root: [0, -10], torso: 0, legL_up: -30, legL_lo: 20, legR_up: 36, legR_lo: -20, armR_up: -40, armR_lo: -40, armL_up: 90, armL_lo: -40 },
    // leaning in: the fist and the claw both smash the floor in front
    slam: { root: [40, 80], sq: [1.04, 0.95], torso: 20, head: -8, armR_up: 6, armR_lo: 10, armL_up: -20, armL_lo: 161, legL_up: 42, legL_lo: -42, legR_up: -32, legR_lo: 42 },
    // braced crouch, fist up at the grille, claw raised over the boom (an arm across the face would hide it)
    guard: { root: [0, 40], sq: [1.02, 0.97], torso: -8, head: -3, armR_up: -40, armR_lo: -40, armL_up: 60, armL_lo: 0, legL_up: 20, legL_lo: -20, legR_up: -16, legR_lo: 20 },
    dodge: { root: [-30, 8], sq: [0.95, 0.95], torso: -18, head: -6, armR_up: 40, armR_lo: -40, armL_up: 10, armL_lo: 30, legL_up: -10, legL_lo: 25, legR_up: -30, legR_lo: 40 },
    // claw and fist both reach forward under the face
    grab: { root: [20, 33], torso: 6, head: 2, armR_up: -10, armR_lo: 10, armL_up: -20, armL_lo: 147, legL_up: 10, legR_up: -12 },
    // claw swung up and over the cab, fist cocked high
    throw: { root: [20, 33], torso: 10, head: -4, armR_up: -60, armR_lo: -20, armL_up: 90, armL_lo: -10, legL_up: 10, legR_up: -12 },
    // hangs by the claw (the highest point), legs dangling
    ledge: { root: [0, 30], torso: -4, head: 8, armR_up: -25, armR_lo: -65, armL_up: 90, armL_lo: -40, legL_up: -25, legL_lo: 10, legR_up: 25, legR_lo: 5 },
    // tipped onto its back: cab on the ground to the left, grille up, one knee up
    down: { root: [0, -122], hip: -90, head: 4, hook: 0, armR_up: 180, armL_lo: 31, legR_up: 45, legR_lo: 30, legL_up: 30, legL_lo: -20 },
    // Hook Shot: the hook is flung forward over the cab, claw thrust forward, body leaning into the throw
    special: { root: [40, 81], torso: 20, head: 4, hook: -118, armL_up: -60, armL_lo: 190, armR_up: -40, armR_lo: -10, legL_up: 30, legL_lo: -5, legR_up: -20, legR_lo: 15 },
    // claw reaching high, body stretched, legs trailing
    rise: { root: [0, -40], sq: [0.94, 1.08], torso: 6, head: -4, armR_up: -25, armR_lo: -65, armL_up: 90, armL_lo: -40, legL_up: 15, legL_lo: 20, legR_up: 20, legR_lo: 15 },
    // claw raised high in triumph, chest out
    win: { torso: -8, head: -6, armL_up: 90, armL_lo: -50, armR_up: -25, armR_lo: -65 },
  },
  hit: {
    strike: ["armR_lo", 1090, 420],
    kick: ["legR_lo", 955, 690],
    sweep: ["armR_lo", 1090, 430],
    upper: ["armL_lo", 285, 170],
    bair: ["legL_lo", 395, 700],
    spike: ["legL_lo", 500, 740],
    slam: ["armR_lo", 1100, 430],
    grab: ["armR_lo", 1100, 410],
    special: ["hook", 432, 255],
    rise: ["armL_lo", 285, 170],
  },
});
