/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["var(--font-poppins)", "sans-serif"],
        secondary: ["var(--font-fira-code)", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        main: {
          darken: "#545454",
        }
      }
    },
  },
  plugins: [],
};
