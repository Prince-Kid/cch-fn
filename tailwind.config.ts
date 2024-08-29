import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--color-primary)",
        primaryGradient: "var(--color-primaryGradient)",
        secondary: "var(--color-secondary)",
        white: "var(--color-white)",
        black: "var(--color-black)",
        btn: "var(--color-btn)",
        date: "var(--color-date)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "360px",
        md: "540px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1440px",
        "4xl": "1600px",
        "5xl": "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
