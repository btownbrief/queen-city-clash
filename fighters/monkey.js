// The Flying Monkey (painted): a stone-and-copper gargoyle monkey cut into parts (fighters/monkey/slice.json)
// and animated on bones. Units are the painting's pixels (1408 x 768); feet at y ~745.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// armR is on the facing side and throws the punch; armL (fist across the chest) stays up as a guard.
// Feet ride their own ankle bones (footL, footR) so kicks can point the toes; the art is game/art-src/monkey
// (re-sliced with feet, torso and near upper arm inpainted under the chest arm).
// Wings: wingN (big, spread to the left) and wingF (small, behind the head) each ride their own bone.
// For wingN positive raises the wing; for wingF negative raises it (they mirror each other).

(() => {
  const P = {
    hip: [700, 490], neck: [790, 330],
    wingN: [590, 270], wingF: [680, 255],
    shoulderL: [625, 290], elbowL: [490, 400], shoulderR: [840, 365], elbowR: [908, 440],
    thighL: [645, 495], kneeL: [555, 592], thighR: [740, 500], kneeR: [840, 560],
    ankleL: [488, 684], ankleR: [800, 662],
  };

  registerFighter({
    id: "monkey", name: "THE FLYING MONKEY",
    raster: "fighters/monkey",
    origin: [645, 745],
    scale: 0.34,
    box: [520, 640],
    stats: { speed: 11, weight: 0.8, power: 0.85, airJumps: 4 },
    strikePoint: ["armR_lo", 1025, 290],
    splash: ["#d9f2e4", "#ff9a3c", "#cfc7b8"],
    runRate: 0.0032, idleTime: 1.5, attackTiming: [0.3, 0.5],
    icon: [780, 235, 270],

    bones: {
      hip: { parent: null, pivot: P.hip },
      torso: { parent: "hip", pivot: P.hip },
      head: { parent: "torso", pivot: P.neck, lag: 0.5 },
      // rising (each air jump) sweeps the wings up, falling brings them down: one beat per jump; a slow wobble keeps them alive
      wingN: { parent: "torso", pivot: P.wingN, lag: 0.7, spring: { vx: 0.3, vy: 0.5, max: 8, wobble: 2.6, amp: 2.5 } },
      wingF: { parent: "torso", pivot: P.wingF, lag: 0.7, spring: { vx: -0.2, vy: -0.5, max: 8, wobble: 2.6, amp: -2.5 } },
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
      { art: "wingF", bone: "wingF" },
      { art: "wingN", bone: "wingN" },
      { art: "armR_up", bone: "armR_up" },
      { art: "armR_lo", bone: "armR_lo" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "footL", bone: "footL" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      { art: "footR", bone: "footR" },
      { art: "torso", bone: "torso" },
      { art: "head", bone: "head", icon: true },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
    ],

    anims: {
      // light on its feet, wings settling and opening a little with each breath
      idle: [
        { root: [0, 0], wingN: -2, wingF: 2 },
        { root: [0, 12], sq: [1.02, 0.98], torso: 3, head: -3, wingN: 8, wingF: -7, armL_up: 4, armL_lo: -6, armR_up: -5, armR_lo: 7,
          legL_up: -19, legL_lo: 44, footL: -25, legR_up: -6, legR_lo: 10, footR: -4 },
      ],
      // quick scampering run, hunched forward, wings beating lightly
      run: [
        { root: [0, 28], torso: 9, head: -5, wingN: -4, wingF: 2, legL_up: 18, legL_lo: 8, legR_up: -18, legR_lo: 10, armL_up: -12, armL_lo: 8, armR_up: 20, armR_lo: -8 },
        { root: [0, -14], sq: [0.98, 1.03], torso: 11, head: -7, wingN: 9, wingF: -7, legL_up: 2, legL_lo: 36, legR_up: -2, legR_lo: 34 },
        { root: [0, 4], torso: 9, head: -5, wingN: -4, wingF: 2, legL_up: -10, legL_lo: 16, legR_up: 22, legR_lo: 24, armL_up: 10, armL_lo: -6, armR_up: -20, armR_lo: 12 },
        { root: [0, -14], sq: [0.98, 1.03], torso: 11, head: -7, wingN: 9, wingF: -7, legL_up: -2, legL_lo: 34, legR_up: 2, legR_lo: 36 },
      ],
      // jump: wings swept high on the upstroke, legs tucked
      jump: { root: [0, -16], sq: [0.95, 1.06], torso: -4, head: -5, wingN: 16, wingF: -14,
        legL_up: -28, legL_lo: 34, legR_up: -32, legR_lo: 48, armL_up: -10, armL_lo: 8, armR_up: -20, armR_lo: 12 },
      // fall: wings beat down and spread wide to glide, legs dangling
      fall: { root: [0, 0], torso: 3, head: 4, wingN: 0, wingF: -7,
        legL_up: 8, legL_lo: 10, legR_up: -8, legR_lo: 14, armL_up: -14, armL_lo: 10, armR_up: -30, armR_lo: 22 },
      windup: { root: [-24, 8], sq: [1.04, 0.96], torso: -12, head: -6, wingN: 10, wingF: -10,
        armR_up: 30, armR_lo: -40, armL_up: -6, armL_lo: 6, legL_up: 6, legR_up: -6 },
      // straight punch: upper arm and forearm line up horizontally (rest angles 49 and -51)
      strike: { root: [36, 0], sq: [1.06, 0.96], torso: 12, head: 6, wingN: -3, wingF: 0,
        armR_up: -61, armR_lo: 100, armL_up: 6, armL_lo: -4, legL_up: 12, legR_up: -16, legR_lo: 8 },
      hit: { root: [-14, -8], sq: [0.95, 1.04], torso: -14, head: -10, wingN: 14, wingF: -16,
        armR_up: -30, armR_lo: 25, armL_up: -12, armL_lo: 12, legL_up: 14, legL_lo: 20, legR_up: -16, legR_lo: 22 },
    },
  });
})();
