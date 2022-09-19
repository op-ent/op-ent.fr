const { withTheme } = require("@op-ent/unstyled-ui-theme");

// TODO: investigate hot reload issues

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
