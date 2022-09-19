import './style.css';
import t from "react";
const k = ({
  type: v = "default",
  size: e = "small",
  shape: x = "round",
  disabled: o,
  icon: n,
  color: a = "#0052CC",
  onClick: d,
  text: r = "button"
}) => {
  const b = o ? "#C1C7D0" : a, s = o ? "#C1C7D0" : a, h = o ? "#C1C7D0" : a, w = {
    tiny: 12,
    small: 14,
    medium: 18,
    large: 24
  }[e], p = {
    tiny: 6,
    small: 8,
    medium: 10,
    large: 16
  }[e] || 8, f = `${p}px ${w}px`, l = {
    tiny: 12,
    small: 13,
    medium: 14,
    large: 16
  }[e] || 13, c = {
    tiny: "17px",
    small: "18px",
    medium: "20px",
    large: "22px"
  }[e], y = {
    round: 4,
    circle: l + 2 * p,
    rect: 0
  }[x], g = {
    tiny: "focus:ring-2",
    small: "focus:ring-2",
    medium: "focus:ring-2",
    large: "focus:ring-4"
  }[e], C = {
    tiny: "auto",
    small: "auto",
    medium: "auto",
    large: 240
  }[e], i = o ? "none" : "auto", m = o ? "not-allowed" : "pointer", u = (E) => {
    typeof d == "function" && d(E);
  };
  switch (v) {
    case "ghost":
      return /* @__PURE__ */ t.createElement("div", {
        className: "w-fit",
        style: { cursor: m }
      }, /* @__PURE__ */ t.createElement("button", {
        onClick: u.bind(void 0),
        style: { lineHeight: c, minWidth: C, color: s, padding: f, fontSize: l, borderRadius: y, borderColor: h, pointerEvents: i },
        className: `flex justify-center items-center transition border hover:opacity-60 focus:opacity-90 whitespace-nowrap ${g} ring-[#B3D4FF]`
      }, n ? /* @__PURE__ */ t.createElement("div", {
        className: "mr-2"
      }, n) : null, r));
    case "text":
      return /* @__PURE__ */ t.createElement("div", {
        className: "w-fit",
        style: { cursor: m }
      }, /* @__PURE__ */ t.createElement("button", {
        onClick: u.bind(void 0),
        style: { lineHeight: c, color: s, fontSize: l, pointerEvents: i },
        className: "relative transition hover:opacity-75 focus:opacity-75"
      }, r, /* @__PURE__ */ t.createElement("div", {
        style: { backgroundColor: s },
        className: "absolute bottom-[-1px] w-full h-[1px]"
      })));
    default:
      return /* @__PURE__ */ t.createElement("div", {
        className: "w-fit",
        style: { cursor: m }
      }, /* @__PURE__ */ t.createElement("div", {
        className: "ml-text-white"
      }, "test"), /* @__PURE__ */ t.createElement("button", {
        onClick: u.bind(void 0),
        style: { lineHeight: c, minWidth: C, backgroundColor: b, padding: f, fontSize: l, borderRadius: y, pointerEvents: i },
        className: `flex justify-center items-center text-white transition hover:opacity-75 focus:opacity-80 ${g} ring-[#B3D4FF]`
      }, n ? /* @__PURE__ */ t.createElement("div", {
        className: "mr-2"
      }, n) : null, r));
  }
};
export {
  k as Button
};
//# sourceMappingURL=index.es.js.map
