/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "gradient-primary": "linear-gradient(90deg, #2AF598 0%, #08AEEA 100%)",
        primary: "#2AF598",
        secondary: "#08AEEA",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #2AF598 0%, #08AEEA 100%)",
      },
    },
  },
  plugins: [],
};
