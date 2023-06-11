/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#041B2D",
      yellow: "#FFD149",
      white: "#FFFFFF",
    },
    fontFamily: {
      display: ["Kanit"],
      body: ["Bitter"],
    },
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
