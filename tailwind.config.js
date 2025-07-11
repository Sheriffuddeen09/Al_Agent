/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',    // << Add this line here!
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  keyframes: {
    'open-menu': {
      '0%': { transform: 'scaleY(0)' },
      '80%': { transform: 'scaleY(1.2)' },
      '100%': { transform: 'scaleY(1)' },
    },
  },
  animation: {
    'open-menu': 'open-menu 0.5s ease-in-out forwards',
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ['dark'],
  },
};
