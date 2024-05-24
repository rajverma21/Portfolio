/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      logo: ['Allura', 'cursive'],
      body: ['Reddit Sans', 'sans-serif']
    }
  },
  plugins: []
}
