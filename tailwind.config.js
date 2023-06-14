/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6666FF",
      },
      keyframes: {
        bottomtotop: {
          "0%": {
            opacity: 0,
          },
          "5%": {
            opacity: 0,
            transform: "translateY(5px)",
          },
          "10%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "50%": {
            opacity: 1,
            transform: "translateY(5px)",
          },
          "55%": {
            opacity: 0,
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        bottomtotop: "bottomtotop 16s linear infinite",
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
