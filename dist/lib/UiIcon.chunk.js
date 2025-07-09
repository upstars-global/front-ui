import { defineComponent as u, computed as n, createElementBlock as r, openBlock as i, normalizeClass as m, mergeProps as h } from "vue";
import { icons as p } from "../components/icon/icons.js";
const _ = ["innerHTML"], f = ["src"], z = /* @__PURE__ */ u({
  __name: "UiIcon",
  props: {
    name: {},
    src: {},
    size: { default: "24" }
  },
  setup(t) {
    const l = {
      16: "w-4 h-4",
      20: "w-5 h-5",
      24: "w-6 h-6",
      32: "w-8 h-8",
      40: "w-10 h-10",
      48: "w-12 h-12",
      full: "w-full h-full"
    }, e = t, s = n(() => {
      if (e.name)
        return p[e.name];
    }), a = n(() => ({ height: e.size, width: e.size })), o = n(() => `ui-icon ${l[e.size]}`);
    return (c, w) => s.value && !c.src ? (i(), r("div", {
      key: 0,
      class: m(o.value),
      innerHTML: s.value
    }, null, 10, _)) : (i(), r("img", h({ key: 1 }, a.value, {
      class: o.value,
      src: c.src || void 0,
      alt: "icon"
    }), null, 16, f));
  }
});
export {
  z as _
};
