/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your React components
  ],
  safelist: [
    "scale-[15]", // Add any custom classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/galaxy.png')",
      },
    },
    
  },
  plugins: [require('tailwindcss-motion')],
  darkMode:'class'
};
