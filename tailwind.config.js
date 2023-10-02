/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#D0E7D2",
        veryLightGreen: "#B0D9B1",
        lightGreen: "#79AC78",
        darkGreen: "#618264",
      },
      fontFamily: {
        inconsolata: "Inconsolata",
        preahvihear: "Preahvihear",
      },
    },
  },
  plugins: [],
};
