/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: "Inter, sans-serif",
      colors: {
        umbra: "#201F1F",
        primary: "#f0db4f",
      },
    },
  },
  plugins: [],
};
