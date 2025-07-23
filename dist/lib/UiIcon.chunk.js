import { defineComponent as _, useAttrs as v, computed as r, createElementBlock as a, openBlock as i, mergeProps as u } from "vue";
import { twMerge as w } from "tailwind-merge";
import { icons as d } from "../components/icon/icons.js";
const y = ["innerHTML"], S = ["src"], g = /* @__PURE__ */ _({
  name: "UiIcon",
  inheritAttrs: !1,
  __name: "UiIcon",
  props: {
    name: {},
    src: {},
    size: { default: "24" }
  },
  setup(m) {
    const f = {
      16: "w-4 h-4",
      20: "w-5 h-5",
      24: "w-6 h-6",
      32: "w-8 h-8",
      40: "w-10 h-10",
      48: "w-12 h-12",
      full: "w-full h-full"
    }, t = m, s = v(), n = r(() => {
      if (t.name)
        return d[t.name];
    }), h = r(() => ({ height: t.size, width: t.size })), c = r(() => {
      const e = { ...s };
      return delete e.class, e;
    }), p = r(() => {
      let e = "";
      return s.class ? (Array.isArray(s.class) ? e = s.class.join(" ") : typeof s.class == "object" && (e = Object.keys(s.class).filter((l) => s.class[l]).join(" ")), e || s.class) : e;
    }), o = r(() => w("ui-icon", f[t.size], p.value));
    return (e, l) => n.value && !e.src ? (i(), a("div", u({
      key: 0,
      class: o.value
    }, c.value, { innerHTML: n.value }), null, 16, y)) : (i(), a("img", u({ key: 1 }, { ...c.value, ...h.value }, {
      class: o.value,
      src: e.src || void 0,
      alt: "icon"
    }), null, 16, S));
  }
});
export {
  g as _
};
