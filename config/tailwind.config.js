const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          900: "#020826",
        },
        pg: {
          900: "#716040",
        },
        "pg-white": {
          900: "#716040",
        },
        btn: {
          50: "#f6f5f0",
          100: "#e9e7d8",
          200: "#d4cfb4",
          300: "#bbb289",
          400: "#a79a68",
          500: "#98885a",
          600: "#8c7851",
          700: "#69573f",
          800: "#5a4939",
          900: "#4f4134",
        },
        icon: {
          50: "#fef3f2",
          100: "#fee4e2",
          200: "#ffcdc9",
          300: "#fdaba4",
          400: "#fa7a6f",
          500: "#f25042",
          600: "#df3223",
          700: "#bc2619",
          800: "#9b2319",
          900: "#81231b",
        },
        background: {
          800: "#eaddcf",
          900: "#f9f4ef",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};