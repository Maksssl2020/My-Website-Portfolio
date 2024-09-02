/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-violet-100": "#4386F4",
        "custom-gray-100": "#282828",
      },
    },
  },
  plugins: [],
};
