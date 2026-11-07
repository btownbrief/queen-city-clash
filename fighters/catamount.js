// The Catamount (painted): a cougar martial artist, an AI painting cut into parts (fighters/catamount/slice.json)
// and animated on bones. Units are the painting's pixels (1408 x 768); paws on y ~748.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// armR (reaching out, claw open) throws the strike; armL (across the chest) stays up as a guard.
// legL is painted stepping back and legR stepping forward, so the run swings each around its own rest pose.
// At each knee the thigh is drawn over the shin so the cut sits on the thigh's painted outline.

(() => {
  const P = {
    hip: [700, 430], neck: [815, 205], tail: [630, 420], tailMid: [472, 552], sash: [745, 400],
    shoulderL: [665, 225], elbowL: [572, 305], shoulderR: [865, 250], elbowR: [948, 328],
    thighL: [655, 440], kneeL: [615, 600], thighR: [785, 430], kneeR: [915, 565],
  };

  registerFighter({
    id: "catamount", name: "THE CATAMOUNT",
    raster: "fighters/catamount",
    origin: [680, 748],
    scale: 0.327,
    box: [400, 700],
    stats: { speed: 13.5, weight: 0.85, power: 0.9, airJumps: 2 },
    strikePoint: ["armR_lo", 1070, 230],
    splash: ["#fff4e0", "#d99a4e", "#4f6b3a"],
    runRate: 0.0034, idleTime: 1.2, attackTiming: [0.26, 0.44],
    icon: [845, 140, 220],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      head: { parent: "torso", pivot: P.neck, lag: 0.5 },
      sash: { parent: "torso", pivot: P.sash, spring: { vx: -0.6, vy: 0, max: 8, wobble: 4, amp: 2.5 } },
      tail1: { parent: "hip", pivot: P.tail, spring: { vx: -0.9, vy: -0.6, max: 10, wobble: 2.4, amp: 3 } },
      tail2: { parent: "tail1", pivot: P.tailMid, spring: { vx: -1.0, vy: -0.8, max: 18, wobble: 3.4, amp: 7 } },
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
      { art: "tail2", bone: "tail2" },
      { art: "tail1", bone: "tail1" },
      { art: "armR_up", bone: "armR_up" },
      { art: "armR_lo", bone: "armR_lo" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "legR_up", bone: "legR_up" },
      { art: "torso", bone: "torso" },
      { art: "sash", bone: "sash" },
      { art: "head", bone: "head", icon: true },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
    ],

    anims: {
      // light on the toes, a quick bounce
      idle: [
        { root: [0, 0] },
        { root: [0, 18], sq: [1.02, 0.98], torso: 2, head: -3, armL_up: 5, armL_lo: -6, armR_up: -4, armR_lo: 6,
          legL_up: -3, legL_lo: 5, legR_up: 4, legR_lo: 6 },
      ],
      // fast, springy sprint: long strides, big airborne bounce, low lean
      run: [
        { root: [0, 0], sq: [1.03, 0.97], torso: 12, head: -8, legL_up: -38, legL_lo: 18, legR_up: 30, legR_lo: 28,
          armL_up: 6, armL_lo: -4, armR_up: -28, armR_lo: 14 },
        { root: [0, -40], sq: [0.97, 1.04], torso: 14, head: -10, legL_up: -12, legL_lo: 45, legR_up: 6, legR_lo: 48 },
        { root: [0, 0], sq: [1.03, 0.97], torso: 12, head: -8, legL_up: 24, legL_lo: 24, legR_up: -8, legR_lo: 2,
          armL_up: -6, armL_lo: 5, armR_up: 22, armR_lo: -10 },
        { root: [0, -40], sq: [0.97, 1.04], torso: 14, head: -10, legL_up: -8, legL_lo: 48, legR_up: 10, legR_lo: 44 },
      ],
      jump: { root: [0, -20], sq: [0.95, 1.06], torso: -4, head: -5,
        legL_up: -30, legL_lo: 55, legR_up: -20, legR_lo: 50, armL_up: -6, armL_lo: 6, armR_up: -30, armR_lo: 15 },
      fall: { root: [0, 0], torso: 3, head: 4,
        legL_up: -10, legL_lo: 18, legR_up: 8, legR_lo: 15, armL_up: -6, armL_lo: 7, armR_up: -45, armR_lo: 30 },
      // coil back, claw cocked behind the shoulder
      windup: { root: [-26, 12], sq: [1.05, 0.95], torso: -10, head: -6,
        armR_up: 35, armR_lo: -25, armL_up: -5, armL_lo: 5, legL_up: 8, legL_lo: 6, legR_up: -8, legR_lo: 10 },
      // claw strike: upper arm and forearm line up horizontally (rest angles 43.2 and -38.2, torso +10)
      strike: { root: [40, 0], sq: [1.06, 0.96], torso: 10, head: 6,
        armR_up: -53, armR_lo: 81, armL_up: 8, armL_lo: -6, legL_up: 14, legR_up: -18, legR_lo: 8 },
      hit: { root: [-16, -10], sq: [0.94, 1.05], torso: -12, head: -14,
        armR_up: -30, armR_lo: 24, armL_up: -5, armL_lo: 5, legL_up: 4, legL_lo: 14, legR_up: -12, legR_lo: 20 },
    },
  });
})();
