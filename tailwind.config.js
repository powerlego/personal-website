/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {},
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
