/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "text-blue": "#009bde",
        bg: "#ddd",
        "banner-blue": "#4ac5fa",
        "btn-blue": "#5ba4e6",
        "btn-blue-hover": "#2c6080",
      },
      screens: {
        "larger-425": "425px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
