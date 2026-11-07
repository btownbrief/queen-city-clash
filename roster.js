// The Queen City Clash roster, in select-screen order: fighters/<file>.js (the painted rig, copied from v2)
// then fighters/<id>.moves.js (the extra poses for the full move set). Scripts load one at a time with
// retries, because a simple local server can drop a request when many arrive at once.
// window.FIGHTERS_LOADED resolves when every file has loaded.
const ROSTER_FILES = [
  ["heroic", "heroic"], ["brawler2", "brawler"], ["champ", "champ"], ["monkey", "monkey"], ["catamount", "catamount"],
  ["cabinet", "cabinet"], ["whale", "whale"], ["outback", "outback"], ["syrup", "syrup"], ["snow", "snow"],
  ["tow", "tow"], ["bus", "bus"], ["crow", "crow"],
];
window.FIGHTERS_LOADED = (async () => {
  const base = window.QCC_BASE || "";
  const load = (src, tries = 5, optional = false) => new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = tries < 5 ? `${src}?retry=${5 - tries}` : src;
    el.onload = resolve;
    el.onerror = () => {
      el.remove();
      if (tries > 1) setTimeout(() => load(src, tries - 1, optional).then(resolve, reject), 200);
      else if (optional) resolve();
      else reject(new Error("could not load " + src));
    };
    document.head.appendChild(el);
  });
  for (const [file, id] of ROSTER_FILES) {
    await load(`${base}fighters/${file}.js`);
    await load(`${base}fighters/${id}.moves.js`, 2, true);
  }
})();
