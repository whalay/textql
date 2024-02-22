/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Space Grotesk'],
        'secondary': ['Inter']

      }, 
      backgroundImage: {
        'herobg': "url('src/assets/images/herobg.png')",
      }
    },
  },
  plugins: [],
}