/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'border-style': 'border-style 0.2s infinite',
        'border-color': 'border-color 0.6s infinite',
      },
      keyframes: {
        'border-style': {
          '0%': { 'border-style': 'solid', 'border-color': 'rgb(239 68 68)'},
          '50%': { 'border-style': 'dashed', 'border-color': 'rgb(251 191 36)'},
          '100%': { 'border-style': 'dotted', '	border-color': 'rgb(163 230 53)'},
        },
        'border-color':{
          '0%': { 'border-color': '#ccc' },
          '25%': { 'border-color': '#f66' },
          '50%': { 'border-color': '#66f' },
          '75%': { 'border-color': '#f6f' },
          '100%': { 'border-color': '#ccc' },
        }
      },


    },
  },
  plugins: [],
}

