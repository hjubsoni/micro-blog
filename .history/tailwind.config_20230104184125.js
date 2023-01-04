/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(-100%)", opacity: "0.25" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
        animation: {
          wiggle: "wiggle 1s ease-in-out ",
        },
      },
    },
  },
  plugins: [],
};
