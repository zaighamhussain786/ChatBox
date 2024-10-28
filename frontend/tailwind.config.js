/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      screens: {
        'xs': '420px',
        '2xs': '320px',
        '3xs': '240px',
        '4xs': '100px',
      },

      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' }, // Normal at the start and end
          '25%': { transform: 'translateY(-15px) rotate(-15deg)' }, // Go up and rotate left at 25%
          '50%': { transform: 'translateY(0) rotate(0deg)' }, // Back to normal at 50%
          '75%': { transform: 'translateY(-15px) rotate(15deg)' }, // Go up and rotate right at 75%
        },
      },
      animation: {
        jump:'jump 4s ease-in-out infinite',   // Jump continuously with slow speed
      },
    
      
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ],
}