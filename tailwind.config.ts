import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#191919",
        border: "#242424",
        ash: "#8a8a8a",
        "ash-light": "#b0b0b0",
        cream: "#e8e4df",
        amber: "#c8943a",
        "amber-dim": "#9a6e29",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
