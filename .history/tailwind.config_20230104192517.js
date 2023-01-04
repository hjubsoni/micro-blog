/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#18181b',
        'text': '#e7e9ea',
        'white': '#ffffff'
      }
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
      },
      keyframes: {
        wiggle: {
          "0%, 50%": { transform: "translateX(-100%)", opacity: "0" },
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
