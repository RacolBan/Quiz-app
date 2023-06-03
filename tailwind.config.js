/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'msm': {'max': '425px'},
        'mmd': {'max': '767px'},
        'mlg': {'max': '1024px'},
        'mxl': {'max': '1280px'},
        'm2xl': {'max': '1440px'},
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px'
      },
    },
  },
  plugins: [],
}

