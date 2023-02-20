const path = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    path.resolve(__dirname, "public", "index.html"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
