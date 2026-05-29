import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        display: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        body: ["var(--font-satoshi)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        /* Fold Design System */
        "canvas-white": "#ffffff",
        "whisper-gray": "#f0f1f5",
        "ash-gray": "#c7cbdb",
        "graphite": "#dddfe9",
        "midnight-ink": "#20294c",
        "deep-violet": "#375390",
        "active-blue": "#459af8",
        "muted-slate": "#676b89",
        "soft-stone": "#979db5",
        "ocean-tint": "#0a2d67",
        "pale-violet": "#788dba",
        "gold-highlight": "#ffff00",
        /* Keep cosmos for gradient compat */
        cosmos: {
          light: "#459af8",
          DEFAULT: "#375390",
          dark: "#20294c",
        },
      },
      backgroundImage: {
        "cosmos-gradient": "linear-gradient(135deg, #375390, #459af8)",
      },
      borderRadius: {
        "fold-card": "12px",
        "fold-image": "8px",
        "fold-nav": "24px",
      },
      boxShadow: {
        "fold-xl": "rgba(32, 41, 76, 0.12) 0px 9px 25px 0px",
        "fold-md": "rgba(32, 41, 76, 0.12) 0px 6px 16px 0px, rgba(32, 41, 76, 0.09) 0px 1px 5px 0px",
        "fold-md2": "rgba(32, 41, 76, 0.07) 0px 4px 11px 0px, rgba(32, 41, 76, 0.12) 0px 1px 3px 0px",
        "fold-sm": "rgba(32, 41, 76, 0.1) 0px 1px 4px 0px",
        "fold-subtle": "rgba(255, 255, 255, 0.53) 0px 1px 0px 0px",
      },
      spacing: {
        "fold-8": "8px",
        "fold-16": "16px",
        "fold-24": "24px",
        "fold-32": "32px",
        "fold-48": "48px",
      },
    },
  },
  plugins: [],
};
export default config;

