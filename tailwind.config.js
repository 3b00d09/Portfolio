/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#f1f2f4',
        'text-secondary' : "#a9b6d0",
        'background': '#11151d',
        'primary': '#d1e4fa',
        'secondary': '#3a4b5f',
        'accent': '#475e7b',
      },
    },
  },
  plugins: [],
}

