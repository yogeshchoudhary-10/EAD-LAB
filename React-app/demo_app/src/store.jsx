import { createStore } from "redux";

const reducer = (s = { globalCount: 0 }, a) => {
  switch (a.type) {
    case "INC": return { globalCount: s.globalCount + 1 };
    case "DEC": return { globalCount: s.globalCount - 1 };
    case "RESET": return { globalCount: 0 };
    default: return s;
  }
};

export default createStore(reducer);