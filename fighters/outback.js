// The Outback (painted): "Mud Rally", a mud-caked station wagon carried on a muscular body,
// cut into parts (fighters/outback/slice.json, sliced with tools/slice.py) and animated on bones.
// Units are the painting's pixels (1408 x 768); boots on y ~705-745 (the back boot sits lower).
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// The car is one rigid part: torso and head together. Arms and legs pivot from under it.
// armR (the far arm, out on the facing side, fist raised) throws the punch;
// armL (the near arm whose glove crosses in front of the car) stays up as a guard.

(() => {
  const P = {
    hip: [680, 470],
    shoulderL: [615, 335], elbowL: [655, 460], shoulderR: [900, 368], elbowR: [990, 440],
    thighL: [600, 465], kneeL: [540, 572], thighR: [740, 470], kneeR: [862, 552],
  };

  registerFighter({
    id: "outback", name: "THE OUTBACK",
    raster: "fighters/outback",
    origin: [690, 735],
    scale: 0.38,
    box: [520, 700],
    stats: { speed: 9.5, weight: 1.05, power: 1.0, airJumps: 2 },
    strikePoint: ["armR_lo", 1050, 280],
    splash: ["#fff7e4", "#4f7a2f", "#8a5a32"],
    runRate: 0.003, idleTime: 1.6, attackTiming: [0.32, 0.5],
    icon: [700, 210, 560],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      armR_up: { parent: "torso", pivot: P.shoulderR },
      armR_lo: { parent: "armR_up", pivot: P.elbowR, lag: 0.8 },
      armL_up: { parent: "torso", pivot: P.shoulderL, lag: 0.85 },
      armL_lo: { parent: "armL_up", pivot: P.elbowL, lag: 0.75 },
      legL_up: { parent: "hip", pivot: P.thighL },
      legL_lo: { parent: "legL_up", pivot: P.kneeL },
      legR_up: { parent: "hip", pivot: P.thighR },
      legR_lo: { parent: "legR_up", pivot: P.kneeR },
    },

    // back to front (the slicing order); the car is the head too, so it carries the icon
    parts: [
      { art: "armR_up", bone: "armR_up" },
      { art: "armR_lo", bone: "armR_lo" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "torso", bone: "torso", icon: true },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
    ],

    anims: {
      // the car rocks on its suspension
      idle: [
        { root: [0, 0] },
        { root: [0, 14], sq: [1.02, 0.98], torso: 2, armL_up: 4, armL_lo: -4, armR_up: -4, armR_lo: 5,
          legL_up: 3, legL_lo: -4, legR_up: -3, legR_lo: 4 },
      ],
      // rally charge: leaning in, legs pumping, fists swinging
      run: [
        { root: [0, 14], torso: 6, legL_up: 22, legL_lo: 16, legR_up: -24, legR_lo: 10, armL_up: -14, armL_lo: 8, armR_up: 16, armR_lo: -8 },
        { root: [0, -24], sq: [0.98, 1.03], torso: 8, legL_up: 6, legL_lo: 26, legR_up: -6, legR_lo: 26 },
        { root: [0, 0], torso: 6, legL_up: -24, legL_lo: 10, legR_up: 22, legR_lo: 16, armL_up: 14, armL_lo: -8, armR_up: -16, armR_lo: 8 },
        { root: [0, -24], sq: [0.98, 1.03], torso: 8, legL_up: -6, legL_lo: 26, legR_up: 6, legR_lo: 26 },
      ],
      jump: { root: [0, -16], sq: [0.95, 1.06], torso: -5,
        legL_up: -22, legL_lo: 30, legR_up: -28, legR_lo: 40, armL_up: -12, armL_lo: 8, armR_up: -20, armR_lo: 10 },
      fall: { root: [0, 0], torso: 3,
        legL_up: 8, legL_lo: 10, legR_up: -8, legR_lo: 12, armL_up: -18, armL_lo: 10, armR_up: -35, armR_lo: 20 },
      windup: { root: [-24, 8], sq: [1.04, 0.96], torso: -10,
        armR_up: 28, armR_lo: -18, armL_up: -6, armL_lo: 6, legL_up: 6, legR_up: -6 },
      // straight punch: upper arm and forearm line up horizontally (rest angles 38.7 and -68.8;
      // the upper arm keeps a slight downward slope so less of its hidden shoulder shows)
      strike: { root: [36, 0], sq: [1.06, 0.96], torso: 8,
        armR_up: -32, armR_lo: 92, armL_up: 6, armL_lo: -4, legL_up: 12, legR_up: -16, legR_lo: 8 },
      hit: { root: [-14, -8], sq: [0.95, 1.04], torso: -12,
        armR_up: 20, armR_lo: -15, armL_up: -12, armL_lo: 10, legL_up: 14, legL_lo: 20, legR_up: -16, legR_lo: 22 },
    },
  });
})();
