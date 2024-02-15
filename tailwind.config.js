/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const lineClamp = require("@tailwindcss/line-clamp");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.9)",
      },
    },
    fontSize: {
      sm: "0.8rem",
      md: "0.95rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
      ownMint: {
        100: "#98FAEC", // mint
        200: "#15F6D6", // dark mint
        300: "#0B73B8", // high dark mint
        400: "#33BBC5", // dark dark mint
      },
      ownBlack: {
        100: "#292F35", // black
        200: "#1A1E23", // dark black
      },
      ownOrange: {
        100: "#E54F26", // orange
      },
      ownBlue: {
        100: "#0B73B8", // blue
        200: "#28A9E0", // pale blue
      },
      ownKarki: {
        100: "#E7A021",
      },
      ownGray: {
        100: "#F3EEEA",
        200: "#607274",
      },
    },
  },
  plugins: [lineClamp],
  // important: '#root',
  // corePlugins: {
  // preflight: false,
  // },
};
