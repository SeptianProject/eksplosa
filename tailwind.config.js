/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#43766C',
        'secondary': '#08A081',
        'blueAccent': '#E9FBF5',
        'blackText': '#2A2A30',
        'darkText': '#1E1E1E',
        'danger': '#C42B23',
        'graySurface': '#7B7B7B',
      },
    },
  },
  plugins: [],
}
