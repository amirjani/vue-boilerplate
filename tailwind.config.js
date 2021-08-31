module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        primary: '#1d2433',
        secondary: '#171c28',
        highlight: '#2f3b54',
      },
      purple: {
        divider: '#6679a4',
        buttons: '#8695b7',
      },
      white: '#d7dce2',
      yellow: '#ffcc66',
      green: '#bae67e',
      red: '#ef6b73',
      cyan: '#5ccfe6'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
