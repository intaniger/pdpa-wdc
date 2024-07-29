/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Inter", "san-serif"],
      },
      colors: {
        "app-green": "#009540",
        "app-black": "#000000D9",
        "app-bg-text": "#00000040",
        "app-button-border": "#00000026",
        "app-border-default": "#0000000F",
        "app-table-metadata": "#00000073",
        "app-danger": "#F5222D",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
