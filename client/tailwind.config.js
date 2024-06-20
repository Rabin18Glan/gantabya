/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:['media'],
  theme: {
    extend: {
      fontFamily:{
        cursive: 'cursive',

      }
      
    },
  },
  plugins: [],
}