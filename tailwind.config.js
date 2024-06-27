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
      slidein: {
        from: {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      slidein300: "slidein 1s ease 1000ms",
      slidein500: "slidein 1s ease 2000ms",
      slidein700: "slidein 1s ease 4000ms",

    },
  },
},
  plugins: [
    require('daisyui'),
  ],
}

