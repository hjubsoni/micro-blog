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
        fadeIn: {
          from: {
            transform: translateX(-100%);
            opacity: 0.25;
          },
          to: {
            transform: translateX(0%);
            opacity: 1;
          }
        }
      },
      animation: {
        fadeIn: 'fade-in 0.5s ease-in-out',
      }
    }
  }
  plugins: [],
};
