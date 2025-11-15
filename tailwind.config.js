/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aldrich: ["Aldrich", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
        saira: ["Saira Stencil One", "sans-serif"],
    },
  },
  plugins: [],
  safelist: [
    'font-[var(--Title1)]',
    'font-[var(--Subtitle2)]',
  ],
}
}