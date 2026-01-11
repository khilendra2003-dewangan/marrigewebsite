/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'], // For "Celebrate Our Love"
      },
      colors: {
        gold: {
          100: '#F9F1D8',
          200: '#F0E3B6',
          300: '#E6D593',
          400: '#DCC671',
          500: '#D2B84E', // Base gold
          600: '#A8933E',
          700: '#7E6E2F',
        },
        teal: {
          800: '#004d40', // Deep teal for accents if needed
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/wedding_hero.png')",
      }
    },
  },
  plugins: [],
}
