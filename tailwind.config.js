/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      "light", "dark", "nord", "sunset", "cupcake", "dim", "retro","autumn", "lemonade", "dracula"]
  },
  plugins: [
    require('daisyui'),
  ],
}

