// Sugar on Snow (painted): a round snowball boxer with maple taffy on its head, plus two little sidekicks
// (a dill pickle and a frosted donut) standing to its right. Cut into parts (fighters/snow/slice.json) and
// animated on bones. Units are the painting's pixels (1408 x 768); boots on y ~708.
// Angles are degrees, clockwise, relative to the painted pose. For limbs, negative swings forward.
// armR (the outstretched arm on the facing side) throws the punch; armL (glove at the chest) guards.
//
// The snowball is the fighter: origin and hurtbox are on it, and the sidekicks stand outside the box.
// Each sidekick hangs off the root on two bones: <kid>_hop has its pivot far to the side, so a tiny rotation
// moves the kid almost straight up (positive = up, 0.1 degree is about 5 painting px); <kid> tilts it about its feet.

(() => {
  const FAR = 3000;
  const P = {
    hip: [420, 520], neck: [440, 330],
    shoulderL: [250, 330], elbowL: [285, 430], shoulderR: [580, 345], elbowR: [700, 335],
    thighL: [270, 540], kneeL: [228, 612], thighR: [580, 540], kneeR: [612, 612],
    pickle: [770, 700], donut: [915, 700],
  };

  // a sidekick's bounce: up to `h` (degrees of hop) and a little rocking tilt
  const kid = (name, hop, tilt) => ({ [`${name}_hop`]: hop, [name]: tilt });

  registerFighter({
    id: "snow", name: "SUGAR ON SNOW",
    raster: "fighters/snow",
    origin: [425, 708],
    scale: 0.43,
    box: [610, 620],
    stats: { speed: 8.5, weight: 1.0, power: 1.0, airJumps: 2 },
    strikePoint: ["armR_lo", 775, 312],
    splash: ["#fff7ec", "#d98a2b", "#7fb24a"],
    runRate: 0.0028, idleTime: 1.6, attackTiming: [0.3, 0.5],
    icon: [435, 215, 330],

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
      // sidekicks ride the root, not the snowball's hips, and lag a little so they move on their own beat
      // kids (pivot far above) slides both sidekicks sideways: it cancels the snowball's lunges so they stay put
      kids: { parent: null, pivot: [850, 700 - FAR] },
      pickle_hop: { parent: "kids", pivot: [P.pickle[0] + FAR, P.pickle[1]], lag: 0.6 },
      pickle: { parent: "pickle_hop", pivot: P.pickle, lag: 0.5, spring: { vx: 0.6, vy: 0.3, max: 8, wobble: 4.1, amp: 2 } },
      donut_hop: { parent: "kids", pivot: [P.donut[0] + FAR, P.donut[1]], lag: 0.5 },
      donut: { parent: "donut_hop", pivot: P.donut, lag: 0.5, spring: { vx: 0.6, vy: 0.3, max: 8, wobble: 3.3, amp: 2.5 } },
    },

    // back to front (the slicing order)
    parts: [
      { art: "armR_up", bone: "armR_up" },
      { art: "legL_up", bone: "legL_up" },
      { art: "legL_lo", bone: "legL_lo" },
      { art: "legR_up", bone: "legR_up" },
      { art: "legR_lo", bone: "legR_lo" },
      // game/art-src/snow: the torso under the chest glove and the head's chin were repainted, and the slice hairlines closed,
      // so the chest glove can swing freely and nothing needs drawing twice
      { art: "torso", bone: "torso" },
      { art: "head", bone: "head", icon: true },
      { art: "armL_up", bone: "armL_up" },
      { art: "armL_lo", bone: "armL_lo" },
      // the punching glove is drawn in front of everything, so it never hides behind the head
      { art: "armR_lo", bone: "armR_lo" },
      { art: "pickle", bone: "pickle", offset: [-30, 0] },
      { art: "donut", bone: "donut", offset: [-30, 0] },
    ],

    anims: {
      // snowball bounces on its toes, knees bending so the boots stay planted; pickle and donut bob on their own, offset beats
      // (kids / <kid>_hop cancel the root so the sidekicks stay on the floor)
      idle: [
        { root: [0, 0], legR_up: -3, legR_lo: 3, legL_up: 0, legL_lo: 0, kids: 0, pickle_hop: 0.16, donut_hop: 0, pickle: -3, donut: 2 },
        { root: [0, 12], sq: [1.02, 0.98], torso: 2, head: -2, armL_up: 4, armL_lo: -4, armR_up: -5, armR_lo: 6, legR_up: -19, legR_lo: 19, legL_up: 14, legL_lo: -14, kids: 0.155, pickle_hop: 0.309, donut_hop: 0.389, donut: -3 },
        { root: [0, 24], sq: [1.05, 0.95], torso: 3, head: -4, armL_up: 7, armL_lo: -7, armR_up: -9, armR_lo: 10, legR_up: -30, legR_lo: 30, legL_up: 25, legL_lo: -25, kids: 0.377, pickle_hop: 0.458, donut_hop: 0.538, pickle: 3 },
        { root: [0, 12], sq: [1.02, 0.98], torso: 2, head: -2, armL_up: 4, armL_lo: -4, armR_up: -5, armR_lo: 6, legR_up: -19, legR_lo: 19, legL_up: 14, legL_lo: -14, kids: 0.155, pickle_hop: 0.309, donut_hop: 0.229, donut: 2 },
      ],
      // waddling run: stubby legs swing hard, body bounces and leans in; the kids scamper with their own hops
      run: [
        { root: [0, 0], torso: 10, head: -5, legL_up: 26, legL_lo: 20, legR_up: -30, legR_lo: 12, armL_up: -22, armL_lo: 12, armR_up: 20, armR_lo: -10, kids: 0, pickle_hop: 0.601, donut_hop: 0, pickle: -10, donut: 8 },
        { root: [0, -36], sq: [0.96, 1.05], torso: 12, head: -7, legL_up: 4, legL_lo: 30, legR_up: -6, legR_lo: 33, kids: -0.33, pickle_hop: -0.688, donut_hop: -0.087, pickle: 6, donut: -10 },
        { root: [0, -14], torso: 10, head: -5, legL_up: -30, legL_lo: 12, legR_up: 16, legR_lo: 4, armL_up: 22, armL_lo: -12, armR_up: -20, armR_lo: 12, kids: 0, pickle_hop: 0.334, donut_hop: 0, pickle: -10, donut: 8 },
        { root: [0, -36], sq: [0.96, 1.05], torso: 12, head: -7, legL_up: -6, legL_lo: 33, legR_up: 4, legR_lo: 30, kids: -0.33, pickle_hop: -0.688, donut_hop: -0.087, pickle: 6, donut: -10 },
      ],
      jump: { root: [0, -14], sq: [0.95, 1.06], torso: -4, head: -5,
        legL_up: -16, legL_lo: 22, legR_up: -18, legR_lo: 28, armL_up: -26, armL_lo: 16, armR_up: -22, armR_lo: 8,
        ...kid("pickle", 1.4, -10), ...kid("donut", 1.8, 12) },
      fall: { root: [0, 0], torso: 3, head: 4,
        legL_up: 8, legL_lo: 10, legR_up: -8, legR_lo: 12, armL_up: -30, armL_lo: 22, armR_up: -28, armR_lo: 14,
        ...kid("pickle", 0.8, 6), ...kid("donut", 0.5, -6) },
      // pulls the outstretched glove back to the chest
      windup: { root: [-24, 8], sq: [1.04, 0.96], torso: -10, head: -6, kids: -0.46,
        armR_up: 32, armR_lo: -70, armL_up: -6, armL_lo: 6, legL_up: 6, legR_up: -6,
        ...kid("pickle", 0, -6), ...kid("donut", 0.2, 4) },
      // straight punch: the painted arm is already nearly level (rest angles 2.4 and -17), so the forearm only
      // straightens a little while the body lunges; the kids cheer with a hop
      strike: { root: [36, 0], sq: [1.06, 0.96], torso: 10, head: 6, kids: 0.69,
        armR_up: -14, armR_lo: 12, armL_up: 6, armL_lo: -4, legL_up: 12, legR_up: -16, legR_lo: 8,
        ...kid("pickle", 1.1, 6), ...kid("donut", 0.8, -6) },
      hit: { root: [-14, -8], sq: [0.95, 1.04], torso: -14, head: -10, kids: -0.27,
        armR_up: -26, armR_lo: 20, armL_up: -12, armL_lo: 12, legL_up: 10, legL_lo: 14, legR_up: -12, legR_lo: 16,
        ...kid("pickle", 0.6, -12), ...kid("donut", 0.5, 10) },
    },
  });
})();
