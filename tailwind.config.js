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
          DEFAULT: '#0119ff', // Electric Blue - Tekup Primary
          dark: '#0000cc',
          light: '#3344ff',
        },
        dark: {
          DEFAULT: '#11121c', // Richer deep navy/black
          card: '#1a1b26',
          input: '#232433',
        },
        light: {
          DEFAULT: '#ffffff',
          alt: '#f8f9fa',
          border: '#eef0f2',
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
        '3xl': '0px', // Ensure absolutely no rounded corners for main UI
        full: '9999px', // Only for strictly circular elements (avatars)
      },
      boxShadow: {
        'tekup': '0 4px 20px rgba(1, 25, 255, 0.15)', // Custom glow
        'tekup-hover': '0 8px 30px rgba(1, 25, 255, 0.25)',
      }
    },
  },
  plugins: [],
}
