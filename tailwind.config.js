/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Sofia ": "Sofia Sans Semi Condensed",
      },
      colors: {
        primary: "#eff0f3",
        warning: "#ff8e3c",
        header: "#0d0d0d",
        para: "#d9376e",
        btext: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
