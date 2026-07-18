/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBF6ED",
        card: "#FFFFFF",
        ink: "#2B2418",
        "ink-soft": "#6B6252",
        rule: "#E9DFC9",
        plum: { DEFAULT: "#8B4B8C", dark: "#6E3A70", light: "#F5E9F5" },
        marigold: { DEFAULT: "#F0A63A", dark: "#D6862A", light: "#FEF1DA" },
        sage: { DEFAULT: "#7FA363", dark: "#5F8047", light: "#EBF3E3" },
        dusk: { DEFAULT: "#5C87B0", dark: "#446A8F", light: "#E7F0F8" },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Work Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        ruled:
          "repeating-linear-gradient(to bottom, transparent, transparent 31px, #E9DFC9 32px)",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(43, 36, 24, 0.06)",
      },
    },
  },
  plugins: [],
};
