/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'calc': ['Calculator', 'sans-serif'],
        'orb': ['Orbitron', 'sans-serif'],
        'osw': ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [],
};
