import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        bg: "#0D0D0D",
        surface: "#141414",
        border: "#1F1F1F",
        accent: "#7C5CFC",
        "accent-soft": "#9B7FFF",
        text: "#E8E8E8",
        muted: "#888888",
      },
    },
  },
  plugins: [],
};

export default config;
