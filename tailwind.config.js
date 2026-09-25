/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        // Paleta de la página principal
        navy: {
          50: '#f2f5fa',
          100: '#e3e9f3',
          700: '#1b2d4f',
          800: '#13223d',
          900: '#0c1830',
          950: '#070f20',
        },
        gold: {
          300: '#dcc48e',
          400: '#cfae6a',
          500: '#b8944f',
          600: '#9c7a3c',
        },
        // Tonos de apoyo (páginas legales y 404)
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
        serif: ['"Playfair Display Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(12, 24, 48, 0.18)',
      },
    },
  },
  plugins: [],
};
