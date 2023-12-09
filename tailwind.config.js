/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      text: "#100d16",
      background: "#1d0b37",
      primary: "#6e41d0",
      secondary: "#a482ee",
      accent: "#844ff9",
      white: "#ffffff",
      delete: "#b0054b",
    },
    fontFamily: {
      display: ["Kon Tiki Aloha JF Regular", "sans-serif"],
    },
  },
  plugins: [],
};
