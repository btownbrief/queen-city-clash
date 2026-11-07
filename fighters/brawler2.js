// The Brawler (painted): an AI painting cut into parts (game/art-src/brawler2/slice.json) and animated on bones.
// Units are the painting's pixels (1408 x 768); boots on y ~742.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// armR is on the facing side (behind the body) and throws the jab; armL crosses the chest in front and,
// since round 2 (torso repainted under it), swings freely for crosses and two-handed moves.

(() => {
  const P = {
    hip: [690, 480], neck: [700, 240],
    shoulderL: [535, 215], elbowL: [560, 345], shoulderR: [800, 262], elbowR: [925, 362],
    thighL: [625, 478], kneeL: [540, 585], thighR: [745, 478], kneeR: [820, 585], ankleL: [545, 672], ankleR: [795, 672],
  };

  registerFighter({
    id: "brawler", name: "THE BRAWLER",
    raster: "fighters/brawler2",
    origin: [650, 742],
    scale: 0.46,
    box: [420, 710],
    stats: { speed: 8, weight: 1.35, power: 1.3, airJumps: 1 },
    strikePoint: ["armR_lo", 905, 180],
    splash: ["#fff7e4", "#e3891f", "#f3f1ea"],
    runRate: 0.0026, idleTime: 1.8, attackTiming: [0.34, 0.52],
    icon: [700, 140, 300],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      head: { parent: "torso", pivot: P.neck, lag: 0.45 },
      armR_up: { parent: "torso", pivot: P.shoulderR },
      armR_lo: { parent: "armR_up", pivot: P.elbowR, lag: 0.8 },
      armL_up: { parent: "torso", pivot: P.shoulderL, lag: 0.85 },
      armL_lo: { parent: "armL_up", pivot: P.elbowL, lag: 0.75 },
      legL_up: { parent: "hip", pivot: P.thighL },
      legL_lo: { parent: "legL_up", pivot: P.kneeL },
      footL: { parent: "legL_lo", pivot: P.ankleL },
      legR_up: { parent: "hip", pivot: P.thighR },
      legR_lo: { parent: "legR_up", pivot: P.kneeR },
      footR: { parent: "legR_lo", pivot: P.ankleR },
    },

    // back to front (the slicing order)
    parts: [
      { art: "armR_up", bone: "armR_up" },
      { art: "armR_lo", bone: "armR_lo" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "footL", bone: "footL" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "footR", bone: "footR" },
      { art: "pelvis", bone: "hip" },   // waistband and crotch: stays with the hips when the torso leans
      { art: "torso", bone: "torso" },
      { art: "head", bone: "head", icon: true },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
    ],

    anims: {
      // heavy breathing, shoulders rolling, fists up
      // idle and run redone in round 2 with an IK helper (boots stay flat on the floor)
      idle: [
        { root: [0, 0] },
        { root: [0, 14], sq: [1.02, 0.98], torso: 3, head: -3, armR_up: -13.7, armR_lo: -3.8, armL_up: 0.1, armL_lo: -3.8, legR_up: 5.4, legR_lo: -10.4, legL_up: 3.9, legL_lo: -10.1, footL: 6.2, footR: 5 },
      ],
      run: [
        { root: [0, 4], torso: 9, head: -4, legR_up: -2.1, legR_lo: -44.5, legL_up: 22, legL_lo: 13.5, footR: 36.6, footL: -10.5, armR_up: 20, armR_lo: -8, armL_up: -25, armL_lo: 10 },
        { root: [0, -22], sq: [0.98, 1.03], torso: 11, head: -6, legR_up: 37.2, legR_lo: -43.9, legL_up: -1.5, legL_lo: -67.4, footR: 6.7, footL: 88.9, armR_up: 2, armL_up: -2 },
        { root: [0, 4], torso: 9, head: -4, legR_up: 87.7, legR_lo: -43.6, legL_up: -77.7, legL_lo: 48.7, footR: -19.1, footL: 19, armR_up: -22, armR_lo: 10, armL_up: 20, armL_lo: -8 },
        { root: [0, -22], sq: [0.98, 1.03], torso: 11, head: -6, legR_up: -12.9, legR_lo: 62.9, legL_up: -20.1, legL_lo: 26.4, footR: -30, footL: -6.3, armR_up: 2, armL_up: -2 },
      ],
      jump: { root: [0, -14], sq: [0.95, 1.06], torso: -4, head: -5,
        legL_up: -25, legL_lo: 30, legR_up: -30, legR_lo: 45, armL_up: -30, armL_lo: 20, armR_up: -20, armR_lo: 10 },
      fall: { root: [0, 0], torso: 3, head: 4,
        legL_up: 8, legL_lo: 10, legR_up: -8, legR_lo: 12, armL_up: -45, armL_lo: 35, armR_up: -35, armR_lo: 25 },
      // haymaker: shoulder dips back, then the whole body throws the front fist
      windup: { root: [-24, 8], sq: [1.04, 0.96], torso: -12, head: -6,
        armR_up: 28, armR_lo: -18, armL_up: -6, armL_lo: 6, legL_up: 6, legR_up: -6 },
      // straight punch: upper arm and forearm line up horizontally (rest angles 38.7 and -96.1)
      strike: { root: [30, 8.051], sq: [1.06, 0.96], torso: 10, head: 6, armR_up: -21.3, armR_lo: -0.8, armL_up: -4.2, armL_lo: -17, legR_up: 11.7, legR_lo: -15.2, legL_up: -4.1, legL_lo: 34, footL: -29.9, footR: 3.5 },
      hit: { root: [-14, -8], sq: [0.95, 1.04], torso: -14, head: -10,
        armR_up: -30, armR_lo: 25, armL_up: -12, armL_lo: 12, legL_up: 14, legL_lo: 20, legR_up: -16, legR_lo: 22 },
    },
  });
})();
