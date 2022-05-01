
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'Aldrich': ['Aldrich', 'sans-serif'],
      'BungeeOutline': ['"Bungee Outline"', 'serif'],
      'Iceberg': ['Iceberg', 'serif'],
      'Karla': ['"Karla"', 'serif'],
      'Nova-Square': ['"Nova Square"', 'serif'],
      'Spectral': ['Spectral', 'sans-serif'],
    },
    extend: {
      borderColor: ["autofill"],
      shadowFill: ["autofill"],
      textFill: ["autofill"],
      animation: {
        shine: "shine 1s",
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
        '3500': '3500ms',
        '5000': '5000ms',
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),require("tailwindcss-autofill"),require("tailwindcss-shadow-fill"),require("tailwindcss-text-fill"),
  ],
});