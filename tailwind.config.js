const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      'shinkirin': '#122A44',
      'sorange': '#FF8936',
      'sbrown': '#8C5939',
      'sgreen': '#5B8930',
      'sblue': '#1F4788',
      'sred': '#C8102E',
      'spurple': '#5D3F6A',
      'syellow': '#F3C13A',
      'sblack': '#000000',
      'swhite': '#ffffff',
      'sgray': '#1B1B1B',
      gray: colors.stone,
      red: colors.red,
      orange: colors.amber,
      blue: colors.blue,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
