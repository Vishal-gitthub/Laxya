/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        yeseva: ['Yeseva One', 'serif'],
        haviland: ['Mr De Haviland', 'serif'],
        
      },
      colors:{
       yellow:"#ebc32a"
      },
      // colors:{
      // black_custom:"#222222"
      // },
    },
  },
  plugins: [],
}