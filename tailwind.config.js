
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s",
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '3500': '3500ms',
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],});