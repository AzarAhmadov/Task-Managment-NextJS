import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}", // Match all relevant files in src directory
    "./public/**/*.html", // Match HTML files in public directory
    "./components/**/*.{html,js,jsx,ts,tsx,mdx}", // If you have a components folder
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
