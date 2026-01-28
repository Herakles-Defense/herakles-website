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
        // Herakles Corporate Design - Precision Engineering
        primary: "#FFFFFF",       // Reinweiss (Hintergrund)
        secondary: "#000000",     // Schwarz (Text/Kontrast)
        accent: "#0066FF",        // Elektro-Blau (Akzente)
        neutral: "#E5E5E5",       // Hellgrau (subtile Elemente)
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
