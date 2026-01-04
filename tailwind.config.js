/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD600', // Vibrant Yellow
          dark: '#E5C100', // Slightly darker yellow for hover
          light: '#FFE566',
        },
        dark: {
          DEFAULT: '#000000', // Pure black for minimalist contrast
          card: '#F9F9F9', // Very light gray for cards in light mode
          input: '#F3F4F6',
        },
        light: {
          DEFAULT: '#ffffff',
          alt: '#FAFAFA',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['Afacad', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      },
      boxShadow: {
        'minimal': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'minimal-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      }
    },
  },
  plugins: [],
}
