/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Bebas Neue', 'ui-sans-serif', 'system-ui'],
      paragraphs: ['Avenir Next Cyr', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        primary: '#FFF',
        secondary: '#E75626',
      },
    },
  },
  plugins: [],
};
