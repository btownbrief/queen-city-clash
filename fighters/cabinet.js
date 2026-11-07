// The Filing Cabinet (painted): "The Bureaucrat", a grumpy filing cabinet cut into parts
// (fighters/cabinet/slice.json, sliced with tools/slice.py) and animated on bones.
// Units are the painting's pixels (1408 x 768); boots on y ~722.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// The cabinet body is rigid; the face is the top drawer front (the head) and only nods a little.
// armR (behind the body, holding the APPROVED stamp) throws the attack as a stamp slam;
// armL (the plain fist on the near side) stays up as a guard.

(() => {
  const P = {
    hip: [670, 590], neck: [770, 308],
    shoulderL: [487, 316], elbowL: [418, 333], shoulderR: [850, 395], elbowR: [878, 420],
    thighL: [515, 592], kneeL: [488, 662], thighR: [800, 598], kneeR: [815, 655],
  };

  registerFighter({
    id: "cabinet", name: "THE FILING CABINET",
    raster: "fighters/cabinet",
    origin: [660, 722],
    scale: 0.47,
    box: [460, 660],
    stats: { speed: 5.5, weight: 1.5, power: 1.35, airJumps: 1 },
    strikePoint: ["armR_lo", 1125, 414],
    splash: ["#fff7e4", "#c9372c", "#e8e2c8"],
    runRate: 0.0024, idleTime: 2.0, attackTiming: [0.36, 0.54],
    icon: [770, 200, 320],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      head: { parent: "torso", pivot: P.neck, lag: 0.5 },
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
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "torso", bone: "torso" },
      { art: "head", bone: "head", icon: true },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
    ],

    anims: {
      // slow, grumpy breathing; the stamp bobs
      idle: [
        { root: [0, 0] },
        { root: [0, 10], sq: [1.02, 0.98], torso: 1.5, head: -2, armL_up: 4, armL_lo: -5, armR_up: -4, armR_lo: 6,
          legL_up: 3, legL_lo: -3, legR_up: -3, legR_lo: 3 },
      ],
      // waddling stomp: short legs, the whole box rocks side to side
      run: [
        { root: [0, 0], torso: 6, head: -3, legL_up: 24, legL_lo: -10, legR_up: -26, legR_lo: 14, armL_up: -16, armL_lo: 10, armR_up: 16, armR_lo: -8 },
        { root: [0, -18], sq: [0.98, 1.03], torso: 4, head: -2, legL_up: 6, legL_lo: 18, legR_up: -6, legR_lo: 20 },
        { root: [0, 0], torso: 6, head: -3, legL_up: -26, legL_lo: 14, legR_up: 24, legR_lo: -10, armL_up: 16, armL_lo: -10, armR_up: -16, armR_lo: 8 },
        { root: [0, -18], sq: [0.98, 1.03], torso: 8, head: -4, legL_up: -6, legL_lo: 20, legR_up: 6, legR_lo: 18 },
      ],
      jump: { root: [0, -12], sq: [0.95, 1.06], torso: -4, head: -4,
        legL_up: -22, legL_lo: 28, legR_up: -28, legR_lo: 36, armL_up: 20, armL_lo: -15, armR_up: -25, armR_lo: -10 },
      fall: { root: [0, 0], torso: 3, head: 3,
        legL_up: 10, legL_lo: 8, legR_up: -10, legR_lo: 10, armL_up: 30, armL_lo: -18, armR_up: -35, armR_lo: -10 },
      // the stamp goes up and back...
      windup: { root: [-22, 8], sq: [1.04, 0.96], torso: -8, head: -4,
        armR_up: -80, armR_lo: 28, armL_up: -6, armL_lo: 8, legL_up: 6, legR_up: -6 },
      // ...and slams forward and down. Rest angles: upper arm 41.8, forearm -1.6,
      // so -40 / +52 (plus the torso lean) leaves the stamp arm pointing right and a little down.
      strike: { root: [34, 0], sq: [1.06, 0.95], torso: 6, head: 4,
        armR_up: -40, armR_lo: 52, armL_up: 8, armL_lo: -6, legL_up: 10, legR_up: -14, legR_lo: 8 },
      hit: { root: [-14, -8], sq: [0.95, 1.04], torso: -10, head: -6,
        armR_up: 25, armR_lo: 15, armL_up: 25, armL_lo: -15, legL_up: 14, legL_lo: 16, legR_up: -16, legR_lo: 18 },
    },
  });
})();
