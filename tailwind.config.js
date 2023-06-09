/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '25%, 75%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateX(-5px)' },
          '100%': { transform: '' }
        }
      },
      animation: {
        'shake': 'shake 0.3s forwards',
        'shake-infinity': 'shake 4s forwards infinite'
      }
    },
  },
  plugins: [],
}

