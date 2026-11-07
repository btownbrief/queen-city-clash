// The Syrup Jug (painted): "Grade A Bruiser", a glass maple-syrup jug with syrup arms and legs,
// cut into parts (fighters/syrup/slice.json, sliced with tools/slice.py) and animated on bones.
// Units are the painting's pixels (1408 x 768); feet on y ~708.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// The red cap (with the face) is the head. armR (the near arm, on the facing side) throws the punch;
// armL (the back arm) is drawn in front of the jug too, so both fists can work.

(() => {
  const P = {
    hip: [820, 540], neck: [735, 195],
    shoulderL: [635, 362], elbowL: [560, 455], shoulderR: [945, 315], elbowR: [1085, 460],
    thighL: [690, 560], kneeL: [682, 638], thighR: [965, 555], kneeR: [1030, 640],
  };

  registerFighter({
    id: "syrup", name: "THE SYRUP JUG",
    raster: "fighters/syrup",
    origin: [868, 708],
    scale: 0.4,
    box: [400, 670],
    stats: { speed: 8.5, weight: 1.05, power: 1.0, airJumps: 2 },
    strikePoint: ["armR_lo", 1115, 280],
    splash: ["#fff7e4", "#e3891f", "#b3262a"],
    runRate: 0.0028, idleTime: 1.5, attackTiming: [0.32, 0.5],
    icon: [725, 125, 240],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      head: { parent: "torso", pivot: P.neck, lag: 0.5 },
      armL_up: { parent: "torso", pivot: P.shoulderL, lag: 0.85 },
      armL_lo: { parent: "armL_up", pivot: P.elbowL, lag: 0.85 },
      armR_up: { parent: "torso", pivot: P.shoulderR },
      armR_lo: { parent: "armR_up", pivot: P.elbowR, lag: 0.75 },
      legL_up: { parent: "hip", pivot: P.thighL },
      legL_lo: { parent: "legL_up", pivot: P.kneeL },
      legR_up: { parent: "hip", pivot: P.thighR },
      legR_lo: { parent: "legR_up", pivot: P.kneeR },
    },

    // back to front (the slicing order)
    parts: [
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "torso", bone: "torso" },
      // the back arm is drawn in front of the jug (game/art-src/syrup: its shoulder was repainted as a round cap), so it can reach forward
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
      { art: "head", bone: "head", icon: true },
      { art: "armR_up", bone: "armR_up" },
      { art: "armR_lo", bone: "armR_lo" },
    ],

    anims: {
      // flexing both arms, the jug sloshing up and down
      idle: [
        { root: [0, 0], torso: -1, head: 2 },
        { root: [0, 13], sq: [1.04, 0.96], torso: 3, head: -5, armL_up: -8, armL_lo: 8, armR_up: 8, armR_lo: -10,
          legL_up: 12, legL_lo: -14, legR_up: -12, legR_lo: 14 },
      ],
      // bouncy run, leaning in, fists pumping hard
      run: [
        { root: [0, 0], torso: 12, head: -6, legL_up: 34, legL_lo: 16, legR_up: -36, legR_lo: 14, armL_up: -26, armL_lo: 10, armR_up: 28, armR_lo: -18 },
        { root: [0, -40], sq: [0.97, 1.04], torso: 14, head: -8, legL_up: 8, legL_lo: 26, legR_up: -8, legR_lo: 30 },
        { root: [0, -14], torso: 12, head: -6, legL_up: -36, legL_lo: 14, legR_up: 8, legR_lo: -4, armL_up: 26, armL_lo: -10, armR_up: -28, armR_lo: 18 },
        { root: [0, -40], sq: [0.97, 1.04], torso: 14, head: -8, legL_up: -8, legL_lo: 30, legR_up: 0, legR_lo: 20 },
      ],
      jump: { root: [0, -16], sq: [0.95, 1.06], torso: -4, head: -5,
        legL_up: -25, legL_lo: 35, legR_up: -30, legR_lo: 40, armL_up: 20, armL_lo: -4, armR_up: -20, armR_lo: 10 },
      fall: { root: [0, 0], torso: 3, head: 4,
        legL_up: 8, legL_lo: 12, legR_up: -8, legR_lo: 14, armL_up: 35, armL_lo: -4, armR_up: -35, armR_lo: 20 },
      windup: { root: [-24, 8], sq: [1.04, 0.96], torso: -12, head: -6,
        armR_up: 30, armR_lo: -15, armL_up: -8, armL_lo: 4, legL_up: 6, legR_up: -6 },
      // straight punch: upper arm and forearm line up horizontally (rest angles 46 and -80.5;
      // the upper arm also cancels the torso lean)
      strike: { root: [38, 0], sq: [1.06, 0.96], torso: 12, head: 6,
        armR_up: -58, armR_lo: 126, armL_up: 10, armL_lo: -4, legL_up: 14, legR_up: -18, legR_lo: 8 },
      hit: { root: [-15, -10], sq: [0.94, 1.05], torso: -14, head: -12,
        armR_up: 25, armR_lo: -15, armL_up: 30, armL_lo: -4, legL_up: 16, legL_lo: 22, legR_up: -18, legR_lo: 24 },
    },
  });
})();
