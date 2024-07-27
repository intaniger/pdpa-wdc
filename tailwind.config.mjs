/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      default: ["Inter", "san-serif"],
    },
    colors: {
      "app-green": "#009540",
      "app-black": "#000000D9",
      "app-gray": "#00000040",
    },
    extend: {},
  },
  plugins: [],
};
