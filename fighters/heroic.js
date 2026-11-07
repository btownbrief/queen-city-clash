// Maple Creemee (painted): the AI-painted heroic design, cut into parts (fighters/heroic/slice.py)
// and animated on bones. Units are the painting's pixels (928 x 1152); feet at y ~1138.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.

(() => {
  const P = {
    hip: [430, 780], neck: [430, 445], tails: [290, 262],
    shoulderF: [285, 455], shoulderN: [568, 440], elbowN: [668, 598],
    thighL: [395, 770], kneeL: [300, 930], thighR: [468, 770], kneeR: [590, 930],
  };

  registerFighter({
    id: "heroic", name: "MAPLE CREEMEE",
    raster: "fighters/heroic",
    origin: [450, 1138],
    scale: 0.24,
    box: [330, 1130],
    stats: { speed: 11, weight: 0.95, power: 1.0, airJumps: 2 },
    strikePoint: ["armN_lo", 742, 445],
    splash: ["#fff7e4", "#e3891f"],
    runRate: 0.003, idleTime: 1.4, attackTiming: [0.3, 0.5],
    icon: [430, 250, 540],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      head: { parent: "torso", pivot: P.neck, lag: 0.5 },
      tails: { parent: "head", pivot: P.tails, spring: { vx: 2.2, vy: 1.6, max: 30, wobble: 4, amp: 4 } },
      armF: { parent: "torso", pivot: P.shoulderF, lag: 0.8 },
      armN_up: { parent: "torso", pivot: P.shoulderN },
      armN_lo: { parent: "armN_up", pivot: P.elbowN, lag: 0.75 },
      legL_up: { parent: "hip", pivot: P.thighL },
      legL_lo: { parent: "legL_up", pivot: P.kneeL },
      legR_up: { parent: "hip", pivot: P.thighR },
      legR_lo: { parent: "legR_up", pivot: P.kneeR },
    },

    // back to front (the same order the painting was sliced in)
    parts: [
      { art: "armF", bone: "armF" },
      { art: "tails", bone: "tails", icon: true },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "torso", bone: "torso" },
      { art: "head", bone: "head", icon: true },
      { art: "armN_up", bone: "armN_up" },
      { art: "armN_lo", bone: "armN_lo" },
    ],

    anims: {
      idle: [
        { root: [0, 0] },
        { root: [0, 22], sq: [1.02, 0.98], torso: 2, head: -3, armN_up: 6, armN_lo: -6, armF: 5,
          legL_up: -3, legL_lo: 5, legR_up: 3, legR_lo: 6 },
      ],
      run: [
        { root: [0, 0], torso: 8, head: -4, legR_up: -28, legR_lo: 10, legL_up: 26, legL_lo: 30, armN_up: 25, armN_lo: -10, armF: -25 },
        { root: [0, -34], sq: [0.98, 1.03], torso: 10, head: -6, legR_up: -6, legR_lo: 40, legL_up: 6, legL_lo: 55, armN_up: 5, armF: -5 },
        { root: [0, 0], torso: 8, head: -4, legR_up: 24, legR_lo: 30, legL_up: -30, legL_lo: 10, armN_up: -25, armN_lo: 10, armF: 25 },
        { root: [0, -34], sq: [0.98, 1.03], torso: 10, head: -6, legR_up: 6, legR_lo: 55, legL_up: -6, legL_lo: 40, armN_up: -5, armF: 5 },
      ],
      jump: { root: [0, -20], sq: [0.95, 1.06], torso: -4, head: -5,
        legR_up: -35, legR_lo: 55, legL_up: -10, legL_lo: 70, armN_up: -40, armN_lo: 20, armF: -30 },
      fall: { root: [0, 0], torso: 3, head: 4,
        legR_up: -10, legR_lo: 15, legL_up: 10, legL_lo: 20, armN_up: -60, armN_lo: 50, armF: -45 },
      windup: { root: [-25, 10], sq: [1.04, 0.96], torso: -12, head: -6,
        armN_up: 35, armN_lo: -25, armF: -15, legR_up: -8, legL_up: 10 },
      // straight punch: upper arm and forearm line up horizontally (rest angles 57.7 and -64.2)
      strike: { root: [40, 0], sq: [1.06, 0.96], torso: 14, head: 6,
        armN_up: -71, armN_lo: 120, armF: 25, legR_up: -20, legR_lo: 10, legL_up: 14 },
      hit: { root: [-15, -10], sq: [0.94, 1.05], torso: -16, head: -12,
        armN_up: -55, armN_lo: 30, armF: -40, legR_up: -20, legR_lo: 25, legL_up: 18, legL_lo: 25 },
    },
  });
})();
