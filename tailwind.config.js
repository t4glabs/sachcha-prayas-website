/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '88': '22rem',
        '104': '26rem',
        '116': '29rem',
        '120': '30rem',

      },

      backgroundColor: {
        'custom-green': 'green-600',
      }
    },
  },
  plugins: [],
}

