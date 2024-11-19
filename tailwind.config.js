/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "rgb(0, 0, 23)",
        blue: "rgb(93 90 195)",
        pink: "rgb(170 58 132)",
        orange: "rgb(199 127 108)",
        beige: "#fcf6f0",
      },
    },
  },
  plugins: [],
};
