// Maple Creemee (painted): the AI-painted heroic design, cut into parts (game/art-src/heroic/slice.json)
// and animated on bones. Units are the painting's pixels (928 x 1152); feet at y ~1138.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.

(() => {
  const P = {
    hip: [430, 780], neck: [430, 445], tails: [290, 262],
    shoulderF: [282, 452], elbowF: [232, 572], shoulderN: [595, 462], elbowN: [676, 588],
    thighL: [395, 770], kneeL: [300, 930], thighR: [468, 770], kneeR: [590, 930], ankleL: [255, 1058], ankleR: [585, 1058],
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
      // armF_sh slides the far shoulder: its pivot is far below, so a small turn moves the shoulder
      // sideways (about 17 px per degree) and lets the far arm reach past the wide cone
      armF_sh: { parent: "torso", pivot: [282, 1452] },
      armF_up: { parent: "armF_sh", pivot: P.shoulderF, lag: 0.8 },
      armF_lo: { parent: "armF_up", pivot: P.elbowF, lag: 0.75 },
      armN_up: { parent: "torso", pivot: P.shoulderN },
      armN_lo: { parent: "armN_up", pivot: P.elbowN, lag: 0.75 },
      legL_up: { parent: "hip", pivot: P.thighL },
      legL_lo: { parent: "legL_up", pivot: P.kneeL },
      footL: { parent: "legL_lo", pivot: P.ankleL },
      legR_up: { parent: "hip", pivot: P.thighR },
      legR_lo: { parent: "legR_up", pivot: P.kneeR },
      footR: { parent: "legR_lo", pivot: P.ankleR },
    },

    // back to front (the same order the painting was sliced in)
    parts: [
      { art: "armF_up", bone: "armF_up" },
      { art: "armF_lo", bone: "armF_lo" },
      { art: "tails", bone: "tails", icon: true },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "footL", bone: "footL" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "footR", bone: "footR" },
      { art: "torso", bone: "torso" },
      { art: "armN_up", bone: "armN_up" },
      { art: "head", bone: "head", icon: true },
      { art: "armN_lo", bone: "armN_lo" },
    ],

    anims: {
      // idle and run were redone in round 2 with an IK helper (feet stay flat on the floor)
      idle: [
        { root: [0, 0] },
        { root: [0, 24], sq: [1.02, 0.98], torso: 3, head: -4, armF_sh: 1, armN_up: 34.4, armN_lo: -39.2, armF_up: -55.6, armF_lo: 15.4, legR_up: -8.8, legR_lo: 20.7, legL_up: 15.8, legL_lo: -35, footL: 19.2, footR: -11.9 },
      ],
      run: [
        { root: [0, 10], torso: 10, head: -5, legR_up: -4.2, legR_lo: -33.8, legL_up: 42.3, legL_lo: -57.4, footR: 26, footL: 45.1, armN_up: 40, armN_lo: -25, armF_up: -45, armF_lo: -10 },
        { root: [0, -30], sq: [0.98, 1.03], torso: 12, head: -6, legR_up: 23.5, legR_lo: -4.2, legL_up: 24, legL_lo: -117.7, footR: -19.3, footL: 118.7, armN_up: 2, armN_lo: -5, armF_up: -5 },
        { root: [0, 10], torso: 10, head: -5, legR_up: 54.1, legR_lo: 34.9, legL_up: -72.2, legL_lo: 17, footR: -59, footL: 43.2, armN_up: -35, armN_lo: 15, armF_up: 35, armF_lo: 10 },
        { root: [0, -30], sq: [0.98, 1.03], torso: 12, head: -6, legR_up: -17.4, legR_lo: 92.6, legL_up: -20, legL_lo: -13.2, footR: -50.2, footL: 33.2, armN_up: 2, armN_lo: -5, armF_up: -5 },
      ],
      jump: { root: [0, -20], sq: [0.95, 1.06], torso: -4, head: -5,
        legR_up: -35, legR_lo: 55, legL_up: -10, legL_lo: 70, armN_up: -40, armN_lo: 20, armF_up: -30 },
      fall: { root: [0, 0], torso: 3, head: 4,
        legR_up: -10, legR_lo: 15, legL_up: 10, legL_lo: 20, armN_up: -60, armN_lo: 50, armF_up: -45 },
      windup: { root: [-25, 10], sq: [1.04, 0.96], torso: -12, head: -6,
        armN_up: 35, armN_lo: -25, armF_up: -15, legR_up: -8, legL_up: 10 },
      // straight punch: upper arm and forearm line up horizontally (rest angles 57.7 and -64.2)
      strike: { root: [40, 0], sq: [1.06, 0.96], torso: 14, head: 6, armN_up: -17.2, armN_lo: 8.1, armF_up: -33.7, armF_lo: 103.7, legR_up: 0.2, legR_lo: -8.9, legL_up: -1.4, legL_lo: 4.9, footL: -3.5, footR: 8.7 },
      hit: { root: [-15, -10], sq: [0.94, 1.05], torso: -16, head: -12,
        armN_up: -55, armN_lo: 30, armF_up: -40, legR_up: -20, legR_lo: 25, legL_up: 18, legL_lo: 25 },
    },
  });
})();
