// The Tow Truck (painted): "The Wrecker", an AI painting cut into parts (fighters/tow/slice.json)
// and animated on bones. Units are the painting's pixels (1408 x 768); boots on y ~745 / ~712.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// armR (the heavy fist on the facing side) throws the punch; armL (the claw) stays up as a guard.
// The hook and chain hang from the boom on their own spring bone, so they swing.

(() => {
  const P = {
    hip: [715, 478], neck: [770, 400], hook: [426, 92],
    shoulderL: [528, 335], elbowL: [495, 460], shoulderR: [925, 462], elbowR: [1015, 455],
    thighL: [690, 465], kneeL: [585, 545], thighR: [735, 478], kneeR: [845, 552],
  };

  registerFighter({
    id: "tow", name: "THE TOW TRUCK",
    raster: "fighters/tow",
    origin: [670, 740],
    scale: 0.43,
    box: [600, 690],
    stats: { speed: 7.5, weight: 1.35, power: 1.2, airJumps: 1 },
    strikePoint: ["armR_lo", 1090, 420],
    splash: ["#fff7e4", "#f2a01e", "#f3f1ea"],
    runRate: 0.0024, idleTime: 1.9, attackTiming: [0.34, 0.52],
    icon: [790, 258, 420],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      head: { parent: "torso", pivot: P.neck, lag: 0.5 },
      // the hook trails behind when running (vx is facing-relative, so a negative vx factor swings it back)
      hook: { parent: "torso", pivot: P.hook, spring: { vx: -2.2, vy: 0, max: 32, wobble: 2.6, amp: 5 } },
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
      { art: "hook", bone: "hook" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "torso", bone: "torso" },
      { art: "head", bone: "head", icon: true },
      { art: "armL_lo", bone: "armL_lo" },
      { art: "armL_up", bone: "armL_up" },
    ],

    anims: {
      idle: [
        { root: [0, 0] },
        { root: [0, 12], sq: [1.02, 0.98], torso: 1.5, head: -2, armL_up: 4, armL_lo: -5, armR_up: 4, armR_lo: -6,
          legL_up: 3, legL_lo: -4, legR_up: -3, legR_lo: 4 },
      ],
      run: [
        // the stance is wide, so the poses were tuned (feet checked numerically) to keep the planted foot on the ground
        { root: [0, 0], torso: 4, head: -3, legL_up: 2, legL_lo: -2, legR_up: -22, legR_lo: -5, armL_up: 12, armL_lo: -8, armR_up: 14, armR_lo: -8 },
        { root: [0, -16], sq: [0.98, 1.03], torso: 6, head: -4, legL_up: -6, legL_lo: 24, legR_up: -8, legR_lo: 20 },
        { root: [0, 0], torso: 4, head: -3, legL_up: -22, legL_lo: 58, legR_up: 12, legR_lo: -14, armL_up: -12, armL_lo: 8, armR_up: -14, armR_lo: 8 },
        { root: [0, -16], sq: [0.98, 1.03], torso: 6, head: -4, legL_up: -12, legL_lo: 34, legR_up: 2, legR_lo: 12 },
      ],
      jump: { root: [0, -14], sq: [0.95, 1.06], torso: -4, head: -3,
        legL_up: -22, legL_lo: 28, legR_up: -26, legR_lo: 40, armL_up: -20, armL_lo: 14, armR_up: -25, armR_lo: -10 },
      fall: { root: [0, 0], torso: 3, head: 3,
        legL_up: 8, legL_lo: 10, legR_up: -8, legR_lo: 12, armL_up: -30, armL_lo: 22, armR_up: -35, armR_lo: -15 },
      // the fist cocks up beside the grille while the truck leans back
      windup: { root: [-26, 8], sq: [1.04, 0.96], torso: -9, head: -4,
        armR_up: -62, armR_lo: -12, armL_up: -6, armL_lo: 6, legL_up: 6, legR_up: -6 },
      // straight punch: upper arm and forearm line up horizontally (rest angles -4.4 and -26.6;
      // the fist sits above the forearm line, so it is aimed a little high to read level)
      strike: { root: [44, 0], sq: [1.06, 0.96], torso: 8, head: 4,
        armR_up: -12, armR_lo: 6, armL_up: 8, armL_lo: -6, legL_up: 12, legR_up: -14, legR_lo: 8 },
      hit: { root: [-14, -8], sq: [0.95, 1.04], torso: -10, head: -6,
        armR_up: -30, armR_lo: -12, armL_up: -12, armL_lo: 12, legL_up: 12, legL_lo: 16, legR_up: -14, legR_lo: 18 },
    },
  });
})();
