/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#008080',
        'light-teal': '#0080801f',
        'light-pink': '#fcf5f5',
        'light-gray': '#d3d3d3',
        'white': '#fff',
      }
    },
  },
  plugins: [],
}