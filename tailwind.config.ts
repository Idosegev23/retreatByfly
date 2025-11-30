import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: {
          50: "#fdfcfb",
          100: "#f5f0ed",
          200: "#e8ddd6",
          300: "#d4c4b8",
          400: "#c4a99a",
          500: "#b08d7a",
        },
        pink: {
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d9",
          300: "#f4a9ba",
          400: "#e8879e",
          soft: "#f0d4dc",
        },
        accent: {
          DEFAULT: "#8b7355",
          light: "#a68b6a",
        },
        text: {
          DEFAULT: "#3d3d3d",
          light: "#6b6b6b",
        },
      },
      fontFamily: {
        heebo: ["var(--font-heebo)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 30px rgba(139, 115, 85, 0.1)",
        medium: "0 8px 40px rgba(139, 115, 85, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;

