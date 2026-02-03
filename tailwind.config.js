module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        'huninn': ['Huninn', 'sans-serif'],
        'play': ['Play', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'heebo': ['M PLUS Rounded 1c', 'sans-serif'],
        'hebrew': ['M PLUS Rounded 1c', 'sans-serif'],
      },
      colors: {
        'sage': '#3E3F29',
        'cream': '#F7F4EA',
        'blush': '#EBD9D1',
        'terracotta': 'rgb(188, 168, 141)',
        'text-dark': '#37353E',
        'nav-dark': '#7D8D86',
        'nav-darker': '#6B7A73',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'scale-in': 'scale-in 0.4s ease-out'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
