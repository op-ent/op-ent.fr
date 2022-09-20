const { withTheme } = require("@op-ent/unstyled-ui-theme");

// TODO: investigate hot reloading issue with components

/** @type {import('tailwindcss').Config} */
module.exports = withTheme({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
