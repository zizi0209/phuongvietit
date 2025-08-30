/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#3fa548',
        'secondary-yellow': '#c9da2a',
        'dark-green': '#34a03e',
        'light-gray': '#f5f5f5',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(to right, #34a03e, #3fa548)',
      },
    },
  },
  plugins: [],
};