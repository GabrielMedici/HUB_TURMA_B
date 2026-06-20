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
        background: {
          base: "#0D0D0D",
          surface: "#1A1A1A",
        },
        text: {
          primary: "#F2F2F2",
          secondary: "#A1A1AA",
        },
        accent: {
          gold: "#D4AF37",
          burgundy: "#61001D",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
