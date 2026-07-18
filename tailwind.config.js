/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#EEF1F3",
        card: "#FBFCFC",
        ink: "#232830",
        "ink-soft": "#5B6470",
        rule: "#D7DCE0",
        plum: { DEFAULT: "#5B3A5C", dark: "#432A44", light: "#EFE6EF" },
        marigold: { DEFAULT: "#DE9E32", dark: "#B87F22", light: "#FBF0DC" },
        sage: { DEFAULT: "#71875F", dark: "#576A47", light: "#E8EDE3" },
        dusk: { DEFAULT: "#4E6E8C", dark: "#3B5468", light: "#E4EBF0" },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Work Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        ruled:
          "repeating-linear-gradient(to bottom, transparent, transparent 31px, #D7DCE0 32px)",
      },
    },
  },
  plugins: [],
};
