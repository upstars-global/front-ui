const n = {}, t = (c, o) => {
  n[c] = o;
}, d = (c) => {
  Object.entries(c).forEach(([o, s]) => {
    n[o] = s;
  });
};
export {
  t as addIcon,
  d as addIcons,
  n as icons
};
