/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-blue-100": "#0066FF",
        "custom-gray-100": "#282828",
        "custom-gray-200": "#CCCCCC",
        "custom-gray-300": "#303030",
        "custom-black-100": "#000000",
      },
      screens: {
        xs: "540px",
        "2xs": "440px",
        "3xs": "350px",
      },
    },
  },
  plugins: [],
};
