// Sugar on Snow: extra poses for Queen City Clash's full move set. Angles: degrees, clockwise, relative to the painted pose.
// The pickle and donut ride the root, so grounded poses that move the root also move them back with `stay` (kids slides them
// sideways, about 52 px per degree; <kid>_hop lifts them, about 52 px per degree) so they keep standing where they were.
(() => {
  const D = 52.36;
  const stay = (dx, dy, pk = 0, dn = 0) => ({ kids: dx / D, pickle_hop: dy / D, donut_hop: dy / D, pickle: pk, donut: dn });

  extendFighter("snow", {
    poses: {
      crouch: { root: [0, 40], sq: [1.07, 0.86], torso: 4, head: -3, armL_up: 6, armL_lo: -6, armR_up: 10, armR_lo: -10,
        legL_up: 40, legL_lo: -40, legR_up: -40, legR_lo: 40, ...stay(0, 40) },
      sweep: { root: [-20, 40], sq: [1.07, 0.86], torso: -10, head: -4, armL_up: 10, armR_up: -10, armR_lo: 10,
        legL_up: 40, legL_lo: -40, legR_up: -50, legR_lo: 20, ...stay(-20, 40), pickle_hop: 2.2, pickle: -12 },
      upper: { root: [0, -20], sq: [0.96, 1.06], torso: -12, head: -6, armR_up: -75, armR_lo: 10, armL_up: -10, armL_lo: 6, ...stay(0, -20) },
      kick: { root: [-10, -10], torso: -15, head: -4, armL_up: -10, armR_up: -20, armR_lo: 10, legR_up: -70, legR_lo: 10, legL_up: 10,
        ...stay(-10, -10), kids: -2.6, pickle_hop: 0.6, donut_hop: 0.3, pickle: 14, donut: 10 },
      nair: { root: [0, -10], sq: [1.04, 1.04], head: -6, armR_up: -40, armR_lo: 20, armL_up: 0, armL_lo: 0, legL_up: 35, legL_lo: -10, legR_up: -35, legR_lo: 10,
        ...stay(0, -10) },
      bair: { root: [0, -20], torso: 15, head: 4, armL_up: 6, armR_up: 15, legL_up: 60, legL_lo: 10, legR_up: 10, legR_lo: 15, ...stay(0, -20) },
      spike: { root: [0, -40], sq: [0.95, 1.06], head: -6, armR_up: -75, armR_lo: 10, armL_up: -15, armL_lo: -10, legL_up: -15, legL_lo: -20, legR_up: 15, legR_lo: 20,
        ...stay(0, -40) },
      slam: { root: [20, 40], sq: [1.05, 0.9], torso: 30, head: -8, armR_up: 15, armR_lo: 30, armL_up: -5, armL_lo: 0,
        legL_up: 34, legL_lo: -34, legR_up: -38, legR_lo: 35, ...stay(20, 40), kids: -2.4, pickle_hop: 1.6, donut_hop: 1.3, pickle: 10, donut: 14 },
      guard: { root: [0, 20], sq: [1.03, 0.96], torso: -4, head: -3, armL_up: -15, armL_lo: -10, armR_up: 32, armR_lo: -70,
        legL_up: 20, legL_lo: -20, legR_up: -22, legR_lo: 22, ...stay(0, 20) },
      dodge: { root: [-20, 30], sq: [0.92, 0.9], torso: -20, head: -6, armL_up: -6, armL_lo: 6, armR_up: 32, armR_lo: -70,
        legL_up: 26, legL_lo: -26, legR_up: -30, legR_lo: 26, ...stay(-20, 30) },
      grab: { root: [10, 10], torso: 5, head: 3, armR_up: -14, armR_lo: 12, armL_up: -12, armL_lo: 0, legL_up: 8, legR_up: -10, ...stay(10, 10) },
      throw: { root: [10, 10], torso: 12, head: -4, armR_up: -70, armR_lo: 40, armL_up: -12, armL_lo: 0, legL_up: 8, legR_up: -10, ...stay(10, 10) },
      ledge: { root: [0, 0], torso: -6, head: -8, armR_up: -75, armR_lo: 10, armL_up: -15, armL_lo: -10, legL_up: -5, legL_lo: 10, legR_up: 5, legR_lo: 10 },
      down: { root: [0, -44], hip: -90, head: -20, armR_up: 80, armR_lo: 20, legL_up: -40, legR_up: 10, ...stay(0, -44) },
      special: { root: [30, 14], sq: [1.04, 0.98], torso: 10, head: -6, armR_up: -24, armR_lo: 10, armL_up: -12, armL_lo: 0, legL_up: 12, legR_up: -16, legR_lo: 8,
        kids: -5, pickle_hop: 2.4, donut_hop: 3.0, pickle: 30, donut: 50 },
      rise: { root: [0, -40], sq: [0.94, 1.08], torso: -12, head: -6, armR_up: -75, armR_lo: 10, armL_up: -20, armL_lo: 10,
        legL_up: 20, legL_lo: 20, legR_up: 15, legR_lo: 25, kids: 0, pickle_hop: 1.4, donut_hop: 1.8, pickle: -10, donut: 12 },
      win: { root: [0, 0], torso: -12, head: -8, armR_up: -75, armR_lo: 10, armL_up: -6, armL_lo: 4, pickle_hop: 1.0, donut_hop: 1.4, pickle: -8, donut: 10 },
    },
    hit: {
      strike: ["armR_lo", 775, 312],
      kick: ["legR_lo", 690, 690],
      sweep: ["legR_lo", 690, 690],
      upper: ["armR_lo", 775, 312],
      bair: ["legL_lo", 165, 690],
      spike: ["legR_lo", 620, 700],
      slam: ["armR_lo", 775, 312],
      grab: ["armR_lo", 775, 312],
      special: ["armR_lo", 775, 312],
      rise: ["armR_lo", 775, 312],
    },
  });
})();
