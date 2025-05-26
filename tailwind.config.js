/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7a141e',
        'primary-light': '#d49097', // For shadows or lighter primary elements
        'accent': '#cf3443',      // For active links, highlights
        'background': '#faf8ed',  // Main page background
        'surface': '#ffffff',     // Card backgrounds, elements on top of main bg
        'text-light': '#f8f4e3',  // Text on dark backgrounds (e.g., on primary buttons)
        'text-dark': '#333333',   // Default dark text for readability
      }
    },
  },
  plugins: [],
}

