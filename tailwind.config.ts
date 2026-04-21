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
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cosmos: {
          light: "#00C896",
          DEFAULT: "#0B8F6C",
          dark: "#086d52",
        },
      },
      backgroundImage: {
        "cosmos-gradient": "linear-gradient(135deg, #0B8F6C, #00C896)",
      },
    },
  },
  plugins: [],
};
export default config;
