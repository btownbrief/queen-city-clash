// Champ (painted): the Lake Champlain monster, an AI painting cut into parts (fighters/champ/slice.json)
// and animated on bones. Units are the painting's pixels (1408 x 768); feet on y ~740.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// armR (behind the belly, fist raised) throws the punch; armL (across the chest) stays up as a guard.
// legL (on the left of the painting) is the near leg and is drawn in front of the belly.

(() => {
  const P = {
    hip: [780, 500], neckBase: [830, 300], neckTop: [860, 165], tail: [630, 520],
    shoulderL: [795, 300], elbowL: [760, 415], shoulderR: [925, 380], elbowR: [990, 400],
    thighL: [660, 480], kneeL: [615, 608], thighR: [895, 505], kneeR: [900, 605],
  };

  registerFighter({
    id: "champ", name: "CHAMP",
    raster: "fighters/champ",
    origin: [735, 740],
    scale: 0.42,
    box: [480, 710],
    stats: { speed: 7, weight: 1.35, power: 1.3, airJumps: 1 },
    strikePoint: ["armR_lo", 1035, 315],
    splash: ["#e9fff4", "#2f9a7a", "#cfe9dc"],
    runRate: 0.0024, idleTime: 2.0, attackTiming: [0.34, 0.52],
    icon: [910, 100, 270],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      tail: { parent: "torso", pivot: P.tail, spring: { vx: -0.6, vy: -0.6, max: 12, wobble: 2.6, amp: 4 } },
      neck: { parent: "torso", pivot: P.neckBase, lag: 0.6, spring: { vx: 0.25, vy: 0.25, max: 4, wobble: 1.8, amp: 2.2 } },
      head: { parent: "neck", pivot: P.neckTop, lag: 0.45 },
      armR_up: { parent: "torso", pivot: P.shoulderR },
      armR_lo: { parent: "armR_up", pivot: P.elbowR, lag: 0.8 },
      armL_up: { parent: "torso", pivot: P.shoulderL, lag: 0.85 },
      armL_lo: { parent: "armL_up", pivot: P.elbowL, lag: 0.75 },
      legL_up: { parent: "hip", pivot: P.thighL },
      legL_lo: { parent: "legL_up", pivot: P.kneeL },
      legR_up: { parent: "hip", pivot: P.thighR },
      legR_lo: { parent: "legR_up", pivot: P.kneeR },
    },

    // back to front (the slicing order)
    parts: [
      { art: "tail", bone: "tail" },
      { art: "armR_up", bone: "armR_up" },
      { art: "armR_lo", bone: "armR_lo" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "torso", bone: "torso" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "neck", bone: "neck" },
      { art: "head", bone: "head", icon: true },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
    ],

    anims: {
      // slow, heavy breathing; the neck sways on its own spring
      idle: [
        { root: [0, 0] },
        { root: [0, 12], sq: [1.02, 0.98], torso: 1.5, neck: -3, head: 2, armL_up: 4, armL_lo: -4, armR_up: -4, armR_lo: 5,
          legL_up: 2, legL_lo: -3, legR_up: -2, legR_lo: 3, tail: 3 },
      ],
      // stomping run, leaning in, neck pushed forward
      run: [
        { root: [0, 0], torso: 6, neck: 4, head: -6, legL_up: -28, legL_lo: 14, legR_up: 20, legR_lo: 22, armL_up: 10, armL_lo: -4, armR_up: -18, armR_lo: 10, tail: -4 },
        { root: [0, -22], sq: [0.98, 1.03], torso: 8, neck: 2, head: -6, legL_up: -10, legL_lo: 32, legR_up: 4, legR_lo: 34, tail: 3 },
        { root: [0, 0], torso: 6, neck: 4, head: -6, legL_up: 14, legL_lo: 16, legR_up: -14, legR_lo: 14, armL_up: -10, armL_lo: 6, armR_up: 18, armR_lo: -6, tail: -4 },
        { root: [0, -22], sq: [0.98, 1.03], torso: 8, neck: 2, head: -6, legL_up: -4, legL_lo: 32, legR_up: -2, legR_lo: 36, tail: 3 },
      ],
      jump: { root: [0, -14], sq: [0.95, 1.06], torso: -4, neck: -4, head: -4,
        legL_up: -28, legL_lo: 40, legR_up: -22, legR_lo: 35, armL_up: -10, armL_lo: 8, armR_up: -20, armR_lo: 10, tail: 6 },
      fall: { root: [0, 0], torso: 3, neck: 3, head: 4,
        legL_up: -8, legL_lo: 12, legR_up: 8, legR_lo: 10, armL_up: -10, armL_lo: 10, armR_up: -35, armR_lo: 25, tail: -6 },
      // haymaker: the raised fist pulls back, the body coils
      windup: { root: [-24, 8], sq: [1.04, 0.96], torso: -7, neck: -3, head: -6,
        armR_up: 30, armR_lo: -15, armL_up: -6, armL_lo: 6, legL_up: 6, legR_up: -6, tail: 6 },
      // straight punch: upper arm and forearm line up horizontally (rest angles 17.1 and -62.1, torso +8)
      strike: { root: [36, 0], sq: [1.06, 0.96], torso: 8, neck: 3, head: 4,
        armR_up: -25, armR_lo: 79, armL_up: 6, armL_lo: -4, legL_up: 12, legR_up: -16, legR_lo: 8, tail: -6 },
      hit: { root: [-14, -8], sq: [0.95, 1.04], torso: -6, neck: -4, head: -16,
        armR_up: -25, armR_lo: 20, armL_up: -6, armL_lo: 6, legL_up: 10, legL_lo: 16, legR_up: 6, legR_lo: 14, tail: 8 },
    },
  });
})();
