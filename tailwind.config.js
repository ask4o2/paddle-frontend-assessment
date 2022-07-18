/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#160133",
        "footer-bg": "#201537",
        "blur-blue": "#311254",
        "custom-purple": "#d404d3",
        "blur-bg": "rgb(22,1,51, 0.5)",
      },
    },
  },
  plugins: [],
};
