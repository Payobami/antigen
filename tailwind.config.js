const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./sources/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        rancho: ['Rancho', 'serif'],
      },
      'colors': {
        'purple': '#5F0766',
        'orange': '#FFC200',
      },
      screens: {
        'xs': '520px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}
