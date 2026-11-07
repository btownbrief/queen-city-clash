// Queen City Clash: fighter cards and stages. The engine (index.html, copied from Scarf Kid) reads this
// instead of its own CARDS / STAGES. Everything here is data; the moves themselves come from the engine's
// STYLES (brawler, blob, speedster, heavy, showoff) plus the overrides below.
//
// A card:
//   id       must match the painted rig's id in fighters/<file>.js (registerFighter)
//   style    the Scarf Kid move style it starts from
//   power    stars on the select screen (1-6)
//   stats    from the rig file's stats (speed, weight, power, airJumps), turned into engine physics by statsFor()
//   sp       names of the 4 specials: neutral, side, up, down
//   sup      name of the super
//   names    names of the normal attacks
//   moves    overrides of the style's moves; `sig` names a signature special handled in index.html (SIG)
//   desc     the 3 lines on the select screen ({U} {R} {D} {A} {S} are button names)
(() => {
  // Physics from the rig's simple stats. Scarf Kid's fighters sit in these ranges, so the feel carries over.
  function statsFor(st) {
    const sp = st.speed, w = st.weight, p = st.power;
    return {
      run: +(2.2 + sp * 0.17).toFixed(2), dash: +((2.2 + sp * 0.17) * 1.16).toFixed(2), air: +(2.2 + sp * 0.08).toFixed(2),
      airAcc: +(0.27 + sp * 0.008).toFixed(3), weight: Math.round(50 + w * 52), dm: +(0.6 + p * 0.42).toFixed(2),
      jumps: st.airJumps, jump: +(10.6 - w * 1.1).toFixed(2), fall: +(4.6 + w * 1.8).toFixed(2), grav: +(0.6 + w * 0.35).toFixed(2),
    };
  }
  const cards = [
    { id: "heroic", style: "brawler", name: "MAPLE CREEMEE", aura: "#ffd27a", shotCol: ["#f2c27a", "#fff6e0"],
      sp: ["CREEMEE SWIRL", "SPRINKLE RUSH", "CONE ROCKET", "BRAIN FREEZE"], sup: "DOUBLE SCOOP",
      names: { jab: "CONE JABS", side: "MAPLE PUNCH", upa: "SOFT-SERVE UPPER", downa: "DRIP SWEEP", nair: "SWIRL SPIN", fair: "WAFFLE KICK", uair: "SPRINKLE FLURRY", dair: "CONE STOMP" },
      desc: ["Vermont's sweetest all-rounder.", "{S}: a swirl of maple creemee. Hold it.", "Jab, then {R}+{A} fast: SPARK."] },
    { id: "brawler", style: "heavy", name: "THE BRAWLER", aura: "#ff6a2a", shotCol: ["#ff6a2a", "#fff0a0"],
      sp: ["BAR NAPKIN", "HAYMAKER", "RISING HOOK", "COUNTER"], sup: "LAST CALL",
      names: { jab: "QUICK JABS", side: "IRON CROSS", upa: "HEADBUTT", downa: "FLOOR STOMP", nair: "SPIN", fair: "HAMMER FIST", uair: "SKY HOOK", dair: "ELBOW DROP" },
      moves: { sspec: { sig: "haymaker", st: 14, ac: 5, rc: 26, dmg: 18, hb: [6, -40, 30, 22], bkb: 5, kbg: 6.4, ang: 38, armor: 1, charge: 1, chargeBtn: "special", lunge: 3.2, dash: 0, p0: "windup", p1: "special" } },
      desc: ["Big, tough and armored.", "{R}+{S}: HAYMAKER. Hold {S} to charge.", "Its smashes can't be stopped."] },
    { id: "champ", style: "blob", name: "CHAMP", aura: "#4fd1c5", shotCol: ["#4fd1c5", "#e0fffb"],
      sp: ["LAKE WAVE", "LAKE SLIDE", "GEYSER UP", "COUNTER"], sup: "THE BIG GULP",
      names: { jab: "FIN SLAPS", side: "TAIL WHIP", upa: "GEYSER", downa: "LAKE SPLASH", nair: "WHIRLPOOL", fair: "FIN SPLAT", uair: "HEAD BONK", dair: "BELLY FLOP" },
      moves: { nspec: { sig: "lakewave", proj: 0, charge: 0, st: 16, ac: 2, rc: 24, p0: "special", p1: "slam" } },
      desc: ["The lake monster. Heavy and floaty.", "{S}: rear up and send a LAKE WAVE.", "{U}+{A}: geyser. 3 jumps."] },
    { id: "monkey", style: "speedster", name: "FLYING MONKEY", aura: "#ffb347", shotCol: null,
      stats: { tele: false },
      sp: ["GLIDE", "BANANA DASH", "WING FLAP", "COUNTER"], sup: "MONKEY BUSINESS",
      names: { jab: "QUICK SLAPS", side: "SWING CUT", upa: "TAIL FLIP", downa: "LOW SWIPE", nair: "BARREL ROLL", fair: "TRIPLE SCRATCH", uair: "SKY KICK", dair: "DIVE KICK" },
      moves: { nspec: { sig: "glide", tele: 0, follow: null, proj: 0, charge: 0, st: 4, ac: 80, rc: 6, p0: "jump", p1: "special" } },
      desc: ["Light and fast. 5 jumps!", "{S} in the air: GLIDE. Hold it.", "Hard to knock out of the sky."] },
    { id: "catamount", style: "speedster", name: "THE CATAMOUNT", aura: "#c9a26b", shotCol: null,
      sp: ["SHADOW STEP", "POUNCE", "TREE CLIMB", "COUNTER"], sup: "NINE LIVES",
      names: { jab: "PAW SWIPES", side: "CLAW CUT", upa: "UPDRAFT SLASH", downa: "TAIL SWEEP", nair: "SPIN CLAW", fair: "TRIPLE CLAW", uair: "SKY BITE", dair: "DIVE CLAW" },
      moves: { sspec: { sig: "pounce", st: 8, ac: 12, rc: 18, dmg: 11, hb: [0, -40, 34, 26], bkb: 3.6, kbg: 4.6, ang: 40, dash: 0, vel: [5.4, -1.2], p0: "crouch", p1: "special" } },
      desc: ["The fastest fighter, but light.", "{R}+{S}: POUNCE across the stage.", "{S} teleports behind you."] },
    { id: "cabinet", style: "heavy", name: "FILING CABINET", aura: "#9fb4c8", shotCol: ["#c7d4e0", "#ffffff"],
      sp: ["PAPER CUT", "DRAWER RUSH", "RISING FILE", "STAMP SLAM"], sup: "AUDIT",
      names: { jab: "DRAWER JABS", side: "DRAWER SLAM", upa: "TOP DRAWER", downa: "QUAKE STOMP", nair: "SPIN", fair: "HAMMER DRAWER", uair: "UPPER FILE", dair: "ANVIL DROP" },
      moves: { dspec: { sig: "stamp", counter: 0, st: 10, ac: 30, rc: 20, dmg: 15, hb: [-24, -20, 48, 22], bkb: 5, kbg: 5.2, ang: 60, armor: 1, p0: "special", p1: "slam" } },
      desc: ["Slowest and heaviest of all.", "{D}+{S}: STAMP SLAM shockwaves.", "Its smashes can't be stopped."] },
    { id: "whale", style: "blob", name: "WHALE TAILS", hw: "full", aura: "#5b8fd6", shotCol: ["#5b8fd6", "#e0f0ff"],
      sp: ["SPOUT SHOT", "TAIL SLIDE", "BREACH", "BURROW"], sup: "DEEP DIVE",
      names: { jab: "TAIL TAPS", side: "TAIL SLAP", upa: "SPOUT", downa: "FLUKE SWEEP", nair: "ROLL", fair: "SPLASH", uair: "TAIL FLIP", dair: "BELLY FLOP" },
      moves: { dspec: { sig: "burrow", counter: 0, st: 8, ac: 44, rc: 22, dmg: 13, bkb: 4.6, kbg: 6.2, ang: 85, p0: "special", p1: "rise" } },
      desc: ["Two whales, one big fighter.", "{D}+{S}: BURROW under, burst up.", "3 jumps. Hard to launch."] },
    { id: "outback", style: "brawler", name: "THE OUTBACK", aura: "#8fd46a", shotCol: ["#8fd46a", "#f0ffe0"],
      sp: ["HEADLIGHTS", "MUD SEASON RUSH", "ROOF RACK ROCKET", "COUNTER"], sup: "ROAD TRIP",
      names: { jab: "BUMPER JABS", side: "FENDER PUNCH", upa: "HOOD POP", downa: "MUD SWEEP", nair: "DONUT SPIN", fair: "FLYING KICK", uair: "ROOF RACK", dair: "STOMP" },
      moves: { sspec: { sig: "mudrush", st: 8, ac: 18, rc: 18, dmg: 11, hb: [4, -40, 26, 30], bkb: 4, kbg: 4.4, ang: 35, dash: 1, armor: 1, p0: "crouch", p1: "special" } },
      desc: ["A tough all-rounder that never quits.", "{R}+{S}: MUD SEASON RUSH (armored).", "Jab, then {R}+{A} fast: SPARK."] },
    { id: "syrup", style: "blob", name: "THE SYRUP JUG", aura: "#d98a2b", shotCol: ["#c8781f", "#ffe0a8"],
      sp: ["SAP SHOT", "SYRUP SLIDE", "SUGAR RUSH", "STICKY PUDDLE"], sup: "SUGARING SEASON",
      names: { jab: "JUG JABS", side: "BIG POUR", upa: "MAPLE GEYSER", downa: "SPILL", nair: "JUG SPIN", fair: "SPLAT", uair: "CAP BONK", dair: "BELLY FLOP" },
      moves: { dspec: { sig: "puddle", counter: 0, st: 12, ac: 2, rc: 22, p0: "special", p1: "special" } },
      desc: ["Grade A sticky. 3 jumps.", "{D}+{S}: a STICKY PUDDLE trap.", "Huge reach. {U}+{A}: geyser."] },
    { id: "snow", style: "showoff", name: "SUGAR ON SNOW", aura: "#bfe6ff", shotCol: ["#bfe6ff", "#ffffff"],
      sp: ["PICKLE + DONUT", "SNOW REPEL", "SUGAR PILLAR", "COUNTER"], sup: "SUGAR HIGH",
      names: { jab: "SNOW PATS", side: "REPEL", upa: "PILLAR OF SUGAR", downa: "SNOW DRIFT", nair: "FLURRY", fair: "FLYING KICK", uair: "SKY KICK", dair: "FALLING SNOW" },
      moves: { nspec: { sig: "assist", proj: 0, charge: 0, st: 12, ac: 1, rc: 22, p0: "windup", p1: "special" } },
      desc: ["Brings friends: a pickle and a donut.", "{S}: send them charging in.", "Shots bounce right off it."] },
    { id: "tow", style: "heavy", name: "THE TOW TRUCK", aura: "#f2a01e", shotCol: ["#f2a01e", "#fff0c0"],
      sp: ["HOOK SHOT", "TOW RUSH", "BOOM LIFT", "COUNTER"], sup: "IMPOUND",
      names: { jab: "CLAW JABS", side: "WRECKER", upa: "BOOM SWING", downa: "QUAKE STOMP", nair: "SPIN", fair: "HAMMER FIST", uair: "BOOM JAB", dair: "ANVIL DROP" },
      moves: { nspec: { sig: "hook", proj: 0, charge: 0, st: 10, ac: 1, rc: 30, p0: "windup", p1: "special" } },
      desc: ["Slow, huge and armored.", "{S}: HOOK SHOT reels them in.", "Its smashes can't be stopped."] },
    { id: "bus", style: "showoff", name: "THE ELECTRIC BUS", aura: "#7fe0ff", shotCol: ["#4f7bff", "#d8f6ff"],
      sp: ["SPARK ORB", "BATTERY CHARGE", "PANTOGRAPH", "COUNTER"], sup: "FULL CHARGE",
      names: { jab: "DOOR JABS", side: "REPEL", upa: "PANTOGRAPH", downa: "BRAKE SLAM", nair: "HALO", fair: "FLYING KICK", uair: "SKY KICK", dair: "FALLING STAR" },
      moves: { sspec: { sig: "battery", st: 10, ac: 20, rc: 20, dmg: 12, hb: [4, -42, 30, 34], bkb: 4.4, kbg: 5, ang: 35, dash: 1, armor: 1, charge: 1, chargeBtn: "special", p0: "special", p1: "special" } },
      desc: ["Heavy, electric and quiet.", "{R}+{S}: hold for a BATTERY CHARGE ram.", "Shots bounce right off it."] },
    { id: "crow", style: "speedster", name: "THE CROW SWARM", aura: "#9a7fd6", shotCol: null,
      sp: ["MURDER BLINK", "SWOOP CUT", "UPDRAFT", "SCATTER"], sup: "THE FLOCK",
      names: { jab: "PECKS", side: "SWOOP CUT", upa: "UPDRAFT", downa: "TALON SWEEP", nair: "FLUTTER", fair: "TRIPLE PECK", uair: "SKY PECK", dair: "DIVE BOMB" },
      moves: { dspec: { sig: "scatter", counter: 0, st: 3, ac: 26, rc: 10, p0: "dodge", p1: "special" } },
      desc: ["A swarm of crows. Light and tricky.", "{D}+{S}: SCATTER, then reform.", "{S} teleports behind you. 4 jumps."] },
  ];

  // Painted stages. img: painting (3:2). floor: the main platform's top edge as fractions of the painting
  // [left, right, top]. soft: floating platforms the same way. The engine fits the painting to the world so
  // the floor's edges land on main.x0 / main.x1 and its top on main.y. Locked stages show how to earn them.
  const stages = [
    // open from the start
    { id: "waterfront", name: "THE WATERFRONT", img: "stages/waterfront.webp", aspect: 1024 / 1536, floor: [0.150, 0.846, 0.645], soft: [[0.232, 0.412, 0.480], [0.586, 0.768, 0.480]] },
    { id: "church-street", name: "CHURCH STREET", img: "stages/church-street.webp", aspect: 848 / 1264, floor: [0.134, 0.866, 0.643], soft: [[0.158, 0.403, 0.347], [0.613, 0.853, 0.347]] },
    { id: "frozen-lake", name: "FROZEN LAKE", img: "stages/frozen-lake.webp", aspect: 1024 / 1536, floor: [0.140, 0.858, 0.674], soft: [[0.226, 0.410, 0.473], [0.590, 0.775, 0.473]] },
    // unlocked one at a time through Arcade and Battle
    { id: "city-hall-park", name: "CITY HALL PARK", img: "stages/city-hall-park.webp", aspect: 848 / 1264, floor: [0.117, 0.883, 0.743], soft: [[0.153, 0.371, 0.466], [0.623, 0.826, 0.462]] },
    { id: "south-end", name: "SOUTH END", img: "stages/south-end.webp", aspect: 848 / 1264, floor: [0.075, 0.938, 0.737], soft: [[0.134, 0.396, 0.429], [0.605, 0.869, 0.429]] },
    { id: "whale-tails", name: "WHALE TAILS FIELD", img: "stages/whale-tails.webp", aspect: 848 / 1264, floor: [0.105, 0.895, 0.713], soft: [[0.127, 0.340, 0.486], [0.661, 0.866, 0.486]] },
    { id: "uvm-green", name: "THE UVM GREEN", img: "stages/uvm-green.webp", aspect: 848 / 1264, floor: [0.060, 0.940, 0.795], soft: [[0.099, 0.356, 0.300], [0.642, 0.885, 0.330]] },
    { id: "flynn", name: "THE FLYNN", img: "stages/flynn.webp", aspect: 848 / 1264, floor: [0.127, 0.875, 0.678], soft: [], hazard: "fire" },   // stage pyro: flame jets
    { id: "union-station", name: "UNION STATION", img: "stages/union-station.webp", aspect: 848 / 1264, floor: [0.089, 0.908, 0.590], soft: [[0.190, 0.393, 0.366], [0.605, 0.809, 0.366]] },
    { id: "battery-park", name: "BATTERY PARK", img: "stages/battery-park.webp", aspect: 848 / 1264, floor: [0.091, 0.910, 0.660], soft: [[0.203, 0.407, 0.452], [0.592, 0.796, 0.452]] },
  ];
  window.QCC_DATA = { cards, stages, statsFor };
})();
