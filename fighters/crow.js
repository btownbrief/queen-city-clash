// The Crow Swarm (painted): a fighter made of packed crows, an AI painting cut into parts
// (fighters/crow/slice.json) and animated on bones. Units are the painting's pixels (1408 x 768); feet on y ~742.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// armR (raised, talons up) throws the strike; armL (the feathered back arm) trails behind.
// The two crows perched on the shoulders are their own part on a spring, so they flap and lag.
// The crows clinging to each leg stay on that leg; the taloned feet ride their own ankle bones (footL, footR).
// armF_up/armF_lo carry a darkened copy of the near arm behind the body (hidden behind armR unless posed apart).
// The art is game/art-src/crow: the back thigh and back shoulder are inpainted where the body covered them.

(() => {
  const P = {
    hip: [640, 470], neck: [720, 250], crows: [590, 200],
    shoulderL: [540, 250], elbowL: [475, 325], shoulderR: [770, 270], elbowR: [900, 330],
    thighL: [590, 465], kneeL: [440, 585], thighR: [690, 465], kneeR: [750, 560],
    ankleL: [318, 682], ankleR: [784, 702],
  };

  registerFighter({
    id: "crow", name: "THE CROW SWARM",
    raster: "fighters/crow",
    origin: [570, 742],
    scale: 0.32,
    box: [420, 720],
    stats: { speed: 11, weight: 0.65, power: 0.75, airJumps: 4 },
    strikePoint: ["armR_lo", 950, 170],
    splash: ["#ffd27a", "#2a2f4a", "#ff9a2e"],
    runRate: 0.0032, idleTime: 1.3, attackTiming: [0.28, 0.46],
    icon: [740, 200, 260],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      head: { parent: "torso", pivot: P.neck, lag: 0.5 },
      crowsTop: { parent: "torso", pivot: P.crows, spring: { vx: -0.6, vy: 0.6, max: 8, wobble: 7, amp: 4 } },
      // far arm: the near arm's art again, darkened and drawn behind the body, so two-handed poses show two talons
      armF_up: { parent: "torso", pivot: P.shoulderR, lag: 0.9 },
      armF_lo: { parent: "armF_up", pivot: P.elbowR, lag: 0.8 },
      armR_up: { parent: "torso", pivot: P.shoulderR },
      armR_lo: { parent: "armR_up", pivot: P.elbowR, lag: 0.8 },
      armL_up: { parent: "torso", pivot: P.shoulderL, lag: 0.8, spring: { vx: -0.4, vy: 0.4, max: 8, wobble: 5, amp: 3 } },
      armL_lo: { parent: "armL_up", pivot: P.elbowL, lag: 0.7 },
      legL_up: { parent: "hip", pivot: P.thighL },
      legL_lo: { parent: "legL_up", pivot: P.kneeL },
      footL: { parent: "legL_lo", pivot: P.ankleL },
      legR_up: { parent: "hip", pivot: P.thighR },
      legR_lo: { parent: "legR_up", pivot: P.kneeR },
      footR: { parent: "legR_lo", pivot: P.ankleR },
    },

    // back to front (the slicing order)
    parts: [
      { art: "armR_up", bone: "armF_up", far: true },
      { art: "armR_lo", bone: "armF_lo", far: true },
      { art: "crowsTop", bone: "crowsTop" },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "footL", bone: "footL" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "footR", bone: "footR" },
      { art: "torso", bone: "torso" },
      { art: "head", bone: "head", icon: true },
      { art: "armR_up", bone: "armR_up" },
      { art: "armR_lo", bone: "armR_lo" },
    ],

    anims: {
      // hovering menace: the swarm heaves and the shoulder crows flap
      idle: [
        { root: [0, 0], crowsTop: -4 },
        { root: [0, 16], sq: [1.02, 0.98], torso: 2, head: -4, crowsTop: 6, armL_up: 6, armL_lo: -6, armR_up: -4, armR_lo: 6,
          legL_up: 3, legL_lo: -4, legR_up: -3, legR_lo: 4, armF_up: -4, armF_lo: 6 },
      ],
      // scuttling run, hunched forward; legs swing around their wide painted stance
      run: [
        { root: [0, 0], torso: 10, head: -6, crowsTop: -8, legL_up: 4, legL_lo: 14, legR_up: -6, legR_lo: 12,
          armL_up: 18, armL_lo: -8, armR_up: -20, armR_lo: 12, armF_up: -20, armF_lo: 12 },
        { root: [0, -30], sq: [0.98, 1.03], torso: 12, head: -8, crowsTop: 8, legL_up: -22, legL_lo: 42, legR_up: 14, legR_lo: 44 },
        { root: [0, -14], torso: 10, head: -6, crowsTop: -8, legL_up: -30, legL_lo: 30, legR_up: 26, legR_lo: 26,
          armL_up: -16, armL_lo: 10, armR_up: 16, armR_lo: -8, armF_up: 16, armF_lo: -8 },
        { root: [0, -30], sq: [0.98, 1.03], torso: 12, head: -8, crowsTop: 8, legL_up: -18, legL_lo: 44, legR_up: 10, legR_lo: 42 },
      ],
      jump: { root: [0, -18], sq: [0.95, 1.06], torso: -4, head: -5, crowsTop: -7,
        legL_up: 18, legL_lo: 40, legR_up: -24, legR_lo: 40, armL_up: -24, armL_lo: 16, armR_up: -24, armR_lo: 14, armF_up: -24, armF_lo: 14 },
      fall: { root: [0, 0], torso: 3, head: 4, crowsTop: 6,
        legL_up: 4, legL_lo: 12, legR_up: 6, legR_lo: 12, armL_up: -35, armL_lo: 25, armR_up: -35, armR_lo: 25, armF_up: -35, armF_lo: 25 },
      // talons pull back past the shoulder, body coils
      windup: { root: [-24, 10], sq: [1.04, 0.96], torso: -10, head: -6, crowsTop: -6,
        armR_up: 30, armR_lo: -20, armL_up: -8, armL_lo: 8, legL_up: 6, legR_up: -6, armF_up: 30, armF_lo: -20 },
      // talon strike: upper arm and forearm line up horizontally (rest angles 24.8 and -71.0, torso +10)
      strike: { root: [38, 0], sq: [1.06, 0.96], torso: 10, head: 6, crowsTop: 6,
        armR_up: -35, armR_lo: 96, armL_up: 10, armL_lo: -6, legL_up: 12, legR_up: -14, legR_lo: 8, armF_up: -35, armF_lo: 96 },
      hit: { root: [-15, -10], sq: [0.94, 1.05], torso: -14, head: -12, crowsTop: 7,
        armR_up: -35, armR_lo: 25, armL_up: -15, armL_lo: 14, legL_up: 8, legL_lo: 16, legR_up: -12, legR_lo: 20, armF_up: -35, armF_lo: 25 },
    },
  });
})();
