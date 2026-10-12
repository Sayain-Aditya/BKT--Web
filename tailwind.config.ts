import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  corePlugins: {
    // Keep the existing production UI stable while Tailwind utilities are introduced.
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        mks: {
          green: "#0b8f3c",
          "green-dark": "#075f2b",
          lime: "#a8d400",
          ink: "#111514",
          paper: "#f5f6f2",
          line: "#dfe3de",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
