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
        "app-input-border": "#00000026",
        "app-border-default": "#0000000F",
        "app-table-metadata": "#00000073",
        "app-danger": "#F5222D",
        "app-drawer-header-border": "#0F172A0F",
        "app-drawer-overlay": "#00000033",
      },
      spacing: {
        "drawer-width": "340px",
        19: "76px",
      },
      boxShadow: {
        textbox: "0px 1px 1px 0px #0000000A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
