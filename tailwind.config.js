/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        primary: "#5AB2FF",
        secondary: "#A0DEFF",
        tertiary: "#CAF4FF",
        yshade: "#FFF9D0",
      },
    },
  },
  plugins: [],
};


