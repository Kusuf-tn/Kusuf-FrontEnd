/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e88e5',
        secondary: '#ff5722',
        success: '#4caf50',
        info: '#2196f3',
        warning: '#ff9800',
        danger: '#f44336',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        slider: {
          '0%': { transform: 'translateX(0)', blur: '0.5rem' },
          '100%': { transform: 'translateX(200vw)', blur: '0.5rem' },
        },
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
        slider: 'slider 2s linear ',
      },
    },
  },
  plugins: [],
}
