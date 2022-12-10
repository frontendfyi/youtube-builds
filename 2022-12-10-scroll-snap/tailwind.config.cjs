/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
      },
    },
  },
  plugins: [],
};
