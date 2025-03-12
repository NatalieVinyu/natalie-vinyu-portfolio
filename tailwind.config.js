/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite', // Custom slower spin
        'float': 'float 3s ease-in-out infinite', // Floating effect
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },  // Move up
          '100%': { transform: 'translateY(0)' },     // Move back down
        },
      },
    },
  },
  plugins: [],
}

