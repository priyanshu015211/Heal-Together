/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        calm: {
          50: "#f4faf9",
          100: "#e3f2ef",
          200: "#c3e4de",
          300: "#96cfc4",
          400: "#63b3a4",
          500: "#3f9686",
          600: "#2f7a6d",
          700: "#286259",
          800: "#234f49",
          900: "#1f423d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
