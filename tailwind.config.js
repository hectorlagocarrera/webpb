/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f3f5f9',
          100: '#e4e8f0',
          200: '#c6cedd',
          300: '#98a5bd',
          400: '#6a7a98',
          600: '#2c3d5e',
          700: '#1d2c49',
          800: '#142038',
          900: '#0d172b',
          950: '#070d1a',
        },
        brass: {
          100: '#f4ecdb',
          200: '#e6d4ad',
          300: '#d6ba82',
          400: '#c6a15e',
          500: '#b08a47',
          600: '#8f6f36',
          700: '#6e552a',
        },
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Georgia', 'serif'],
        sans: ['"Manrope Variable"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px -22px rgba(13, 23, 43, 0.35)',
      },
    },
  },
  plugins: [],
};
