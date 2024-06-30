/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],



  daisyui: {
    themes: [
      "light", "dark", "nord", "sunset", "cupcake", "dim", "retro","autumn", "lemonade", "dracula"]
  },


  theme: {
  extend: {
    keyframes: {
      slideIn: {
        '0%': {
          transform: 'translateY(-80px)',
          opacity: 0,
        },
        '100%': {
          transform: 'translateY(1)',
          opacity: 1,
        },
      },
    },
    animation: {
      slideIn: 'slideIn 4s ease-in-out',
      slideIn2: 'slideIn 3s ease-in-out', 
      slideIn3: 'slideIn 2s ease-in-out',  // Add duration and easing here
    },
  },
},
  plugins: [
    require('daisyui'),
  ],
}

