// The Electric Bus (painted): an AI painting cut into parts (fighters/bus/slice.json) and animated on bones.
// Units are the painting's pixels (1408 x 768); feet on y ~718 (left) / ~700 (right).
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// The bus body is one rigid part (torso plus windshield face). armR (the raised fist behind the body,
// on the facing side) throws the punch; armL (the glowing fist across the front) is the second fist. Round 2 repainted
// the bus side it covers (game/art-src/bus), so it can swing freely now.

(() => {
  const P = {
    hip: [700, 440],
    shoulderL: [600, 275], elbowL: [552, 380], shoulderR: [962, 350], elbowR: [995, 378],
    thighL: [620, 445], kneeL: [578, 515], thighR: [785, 440], kneeR: [870, 508],
  };

  registerFighter({
    id: "bus", name: "THE ELECTRIC BUS",
    raster: "fighters/bus",
    // the body is long and horizontal, so the origin sits between the feet, not under the body's centre
    origin: [700, 712],
    scale: 0.46,
    box: [600, 640],
    stats: { speed: 7.5, weight: 1.35, power: 1.15, airJumps: 1 },
    strikePoint: ["armR_lo", 1092, 250],
    splash: ["#f4fff0", "#7be22a", "#e8f3ea"],
    runRate: 0.0025, idleTime: 1.8, attackTiming: [0.34, 0.52],
    icon: [855, 235, 330],

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

    // back to front (the slicing order)
    parts: [
      { art: "armR_up", bone: "armR_up" },
      { art: "armR_lo", bone: "armR_lo" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "body", bone: "torso", icon: true },
      { art: "legR_up", bone: "legR_up" },   // the front leg is drawn over the bus (round 2) so front kicks show
      { art: "legR_lo", bone: "legR_lo" },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
    ],

    anims: {
      idle: [
        { root: [0, 0] },
        // breathing bounce: both fists bob (the bus side under the glowing fist was repainted in round 2)
        { root: [0, 12], sq: [1.02, 0.98], torso: 2, armL_up: 8, armL_lo: -10, armR_up: -6, armR_lo: 10,
          legL_up: 3, legL_lo: -4, legR_up: -3, legR_lo: 4 },
      ],
      // wide stance, so the leg angles were tuned (feet checked numerically) to keep the planted foot on the ground;
      // both fists now pump opposite the legs and the bus leans into the run
      run: [
        { root: [0, 0], torso: 7, legL_up: 2, legL_lo: -2, legR_up: -22, legR_lo: -5, armL_up: 26, armL_lo: -16, armR_up: 24, armR_lo: -16 },
        { root: [0, -20], sq: [0.97, 1.04], torso: 9, legL_up: -6, legL_lo: 24, legR_up: -8, legR_lo: 20, armL_up: 4, armR_up: 2 },
        { root: [0, -8], torso: 7, legL_up: -22, legL_lo: 58, legR_up: 12, legR_lo: -14, armL_up: -24, armL_lo: 14, armR_up: -24, armR_lo: 16 },
        { root: [0, -20], sq: [0.97, 1.04], torso: 9, legL_up: -12, legL_lo: 34, legR_up: 2, legR_lo: 12, armL_up: 4, armR_up: 2 },
      ],
      // jump, fall, windup, strike and hit below are overridden by bus.moves.js (Scarf Kid's pose set)
      jump: { root: [0, -14], sq: [0.95, 1.06], torso: -4,
        legL_up: -22, legL_lo: 30, legR_up: -26, legR_lo: 40, armL_up: -5, armL_lo: 4, armR_up: -20, armR_lo: -10 },
      fall: { root: [0, 0], torso: 3,
        legL_up: 8, legL_lo: 10, legR_up: -8, legR_lo: 12, armL_up: -6, armL_lo: 5, armR_up: -30, armR_lo: -15 },
      // the raised fist pulls back and up behind the windshield while the bus rocks back
      windup: { root: [-26, 8], sq: [1.04, 0.96], torso: -8,
        armR_up: 20, armR_lo: -30, armL_up: -6, armL_lo: 6, legL_up: 6, legR_up: -6 },
      // straight punch: upper arm and forearm line up horizontally (rest angles 40 and -53)
      strike: { root: [42, 0], sq: [1.06, 0.96], torso: 6,
        armR_up: -32, armR_lo: 80, armL_up: 4, armL_lo: -6, legL_up: 12, legR_up: -14, legR_lo: 8 },
      hit: { root: [-14, -8], sq: [0.95, 1.04], torso: -10,
        armR_up: -25, armR_lo: -15, armL_up: -5, armL_lo: 6, legL_up: 12, legL_lo: 16, legR_up: -14, legR_lo: 18 },
    },
  });
})();
