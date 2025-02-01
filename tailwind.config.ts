import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "yellow/50": "#FFD500",
        "yellow/55": "#FFD81A",
        "yellow/70": "#FFE566",
        "yellow/80": "#FFEE99",
        "yellow/90": "#FFF6CC",
        "yellow/95": "#FFFAE5",
        "yellow/97": "#FFFCF0",
        "yellow/99": "#FFFEFA",
        "white/90": "#E4E4E7",
        "white/95": "#F1F1F3",
        "white/97": "#F7F7F8",
        "white/99": "#FCFCFD",
        "grey/10": "#1A1A1A",
        "grey/15": "#262626",
        "grey/20": "#333333",
        "grey/30": "#4C4C4D",
        "grey/35": "#59595A",
        "grey/40": "#656567",
        "grey/60": "#98989A",
        "grey/70": "#B3B3B3",
      },
    },
  },
  plugins: [],
} satisfies Config;
