import { defineComponent as v, mergeModels as d, useModel as g, ref as q, createElementBlock as u, openBlock as m, normalizeClass as y, withDirectives as c, createElementVNode as r, renderSlot as l, createCommentVNode as f, vModelCheckbox as C, createVNode as s, vShow as V, toDisplayString as i, createTextVNode as h } from "vue";
import { _ as n } from "../../lib/UiIcon.chunk.js";
const _ = ["name", "form", "disabled", "required"], w = { class: "ui-checkbox__inner flex items-center" }, M = { class: "ui-checkbox__checkmark w-5 h-5 self-baseline shrink-0 relative after:absolute after:w-6 after:h-6 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2" }, B = {
  key: 0,
  class: "ui-checkbox__error-message flex"
}, $ = { class: "ui-checkbox__required-message flex" }, x = /* @__PURE__ */ v({
  __name: "UiCheckbox",
  props: /* @__PURE__ */ d({
    icon: {},
    requiredMessage: {},
    error: {},
    name: {},
    label: {},
    disabled: { type: Boolean },
    form: {},
    required: { type: Boolean }
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ d(["update:modelValue"], ["update:modelValue"]),
  setup(p) {
    const o = g(p, "modelValue"), a = q(o.value), b = (e) => {
      a.value = e.target.checked;
    };
    return (e, t) => (m(), u("label", {
      class: y(["ui-checkbox relative flex flex-col max-w-max select-none", {
        "is-checked": a.value,
        "cursor-pointer": !e.disabled,
        "is-disabled cursor-not-allowed": e.disabled,
        "is-invalid": !a.value && e.error,
        "is-required": e.required
      }])
    }, [
      c(r("input", {
        "onUpdate:modelValue": t[0] || (t[0] = (k) => o.value = k),
        class: "absolute top-0 left-0 opacity-0",
        type: "checkbox",
        name: e.name,
        form: e.form,
        disabled: e.disabled,
        required: e.required,
        onChange: b
      }, null, 40, _), [
        [C, o.value]
      ]),
      r("span", w, [
        l(e.$slots, "checkmark", {}, () => [
          r("div", M, [
            c(s(n, {
              name: e.icon || "checkmark",
              size: "full"
            }, null, 8, ["name"]), [
              [V, a.value]
            ])
          ])
        ]),
        l(e.$slots, "label", {}, () => [
          r("span", null, i(e.label), 1)
        ])
      ]),
      l(e.$slots, "error-message", {}, () => [
        !a.value && e.error ? (m(), u("span", B, [
          s(n, {
            name: "exclamationTriangle",
            size: "16"
          }),
          h(" " + i(e.error), 1)
        ])) : f("", !0)
      ]),
      e.required ? l(e.$slots, "required-message", { key: 0 }, () => [
        r("span", $, [
          s(n, {
            name: "exclamationCircle",
            size: "16"
          }),
          h(" " + i(e.requiredMessage), 1)
        ])
      ]) : f("", !0)
    ], 2));
  }
});
export {
  x as default
};
