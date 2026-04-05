/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f7f4',
          100: '#d9ede6',
          200: '#b3dbcd',
          300: '#7fc0aa',
          400: '#4fa086',
          500: '#2d806a',
          600: '#1B5E44',
          700: '#1B4332',
          800: '#163626',
          900: '#0f2a1d',
        },
        gold: {
          300: '#f0d07a',
          400: '#e8be54',
          500: '#D4A853',
          600: '#c09040',
          700: '#a07830',
        },
        cream: '#FDF6EC',
        parchment: '#F5EDD8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease forwards',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

