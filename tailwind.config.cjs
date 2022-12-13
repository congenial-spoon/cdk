/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './packages/**/*.{js,ts,jsx,tsx}',
    './packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@cuiller/styled-system')],
};
