/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx,html}", "./_components/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "accent-b": "inset 0 -1px 0 0 rgb(0 0 0 / 0.05)",
        "accent-t": "inset 0 1px 0 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animation-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        {
          values: theme("animationDelay"),
        }
      );
    }),
  ],
};
