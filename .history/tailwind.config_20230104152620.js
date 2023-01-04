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
      animation: {
        drop-in: "drop-in 0.5s ease-out",
        // from {
        //   transform:
        //     rotate(-30deg) translateY(-100%);
        //   opacity: 0;
        // }
        // to {
        //   transform:
        //     rotate(0deg) translateY(0%);
        //   opacity: 1;
        // }
      }
    },
  },
  plugins: [],
};
