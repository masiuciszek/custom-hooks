import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  colors: {
    text: "#333",
    primary: "#fff",
    btnBg: "#0277BD",
    btnText: "#fefeee",
    shadow1: "rgba(33,33,33,.8)",
    shadow2: "rgba(33,33,33,.4)",
  },
  size: {
    h1: "50px",
    h2: "40px",
    h3: "30px",
    h4: "27px",
    h5: "22px",
    p: "18px",
    a: "16px",
    maxWidth: "1000px",
    appSize: "10px",
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
  shadow: {
    elevations: [
      "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
      "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
      "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)",
      "box-shadow: 3px 2px rgba(42, 43, 49,.3)",
    ],
  },
};
const secondaryTheme: DefaultTheme = {
  colors: {
    text: "#fff",
    primary: "#333",
    btnBg: "#0277BD",
    btnText: "#fff",
    shadow1: "rgba(33,33,33,.8)",
    shadow2: "rgba(33,33,33,.4)",
  },
  size: {
    h1: "50px",
    h2: "40px",
    h3: "30px",
    h4: "27px",
    h5: "22px",
    p: "18px",
    a: "16px",
    maxWidth: "1200px",
    appSize: "10px",
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
  shadow: {
    elevations: [
      "box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)",
      "box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
      "box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)",
      "box-shadow: 3px 2px rgba(42, 43, 49,.3)",
    ],
  },
};

export { mainTheme, secondaryTheme };
