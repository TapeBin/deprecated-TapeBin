const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans, "Lobster"],
        lobster: ["Lobster", "Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.trueGray,
        proColor: "#00C2FF",
        background: "#262626",
      },
      outline: {
        gray: "1px solid #F5F5F5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
