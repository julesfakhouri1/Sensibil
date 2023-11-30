/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#0B0B41",
        },
        light: {
          1: "#D2D2D2",
          2: "#FCFCFC",
        },
        purple: {
          1: "#A67FD8",
          2: "#7B61FF",
          3: "#A89FD9",
        },
        gray: {
          1: "#9E9E9E",
        },
      },
      maxWidth: {
        1390: "1390px",
        1728: "1728px",
      },
      borderRadius: {
        28: "28px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        1: "linear-gradient(104deg, rgba(255, 255, 255, 0.40) 1.43%, rgba(255, 255, 255, 0.10) 100%)",
      },
      boxShadow: {
        1: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
