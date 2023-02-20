const path = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    path.resolve(__dirname, "public", "index.html"),
  ],
  theme: {
    screens: {
      xxs: "350px",
      xs: "500px",
      mdlg: "900px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),

    require("tailwind-scrollbar-hide"),
  ],
};
