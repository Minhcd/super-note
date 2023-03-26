/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        // etc.
      },
    },
  },
  plugins: [],
}
