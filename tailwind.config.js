/** @type {import('tailwindcss').Config} */
import { animations, keyframes } from "./src/utils/keyframe.js";
// import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        18: "18px",
      },
      height: {
        header: "40px",
        footer: "40px",
        h2: "2em",
        "h2.5": "2.5em",
        h3: "3em",
        h4: "4em",
        nav: "100px"
      },
      width: {
        main: "calc(100% )",
        mainHi: "calc(100%)",
        sideHi: "50px",
      },
      inset: {
        header: "40px",
        footer: "40px",
        sideHi: "50px",
      },
      padding: {
        p1: "10px",
        p2: "20px",
      },
      margin: {
        m1: "10px",
        m2: "20px",
      },
      minHeight: {
        main: "calc(calc(100vh - 140px) - 40px)",
        mainHi: "calc(calc(100vh - 60px) - 40px)",
        header: "50px",
        footer: "40px",
      },
      maxWidth: {
        main: "calc(100%)",
        mainHi: "calc(100%)",
        sideHi: "50px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fb: "#1877F2",
        line: "#00C900",
        google: "#EA4234",
        github: "#24292F",
      },
      // fontFamily: {
      //   inter: ["var(--font-inter)"],
      // },
      keyframes: keyframes,
      animation: animations,
    },
  },
  // plugins: [daisyui],
};
