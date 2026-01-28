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
        // Herakles Premium Defense Tech Design

        // Primary Background Colors
        'black-primary': '#0A0A0A',      // Main background - warm black
        'black-secondary': '#1A1A1A',    // Secondary BG - slightly lighter

        // Text Colors
        'white-primary': '#FAFAFA',      // Main text - off-white
        'white-secondary': '#E5E5E5',    // Secondary text - muted

        // Accent Colors (Orange)
        'orange-primary': '#FF6B35',     // Main accent - vibrant orange
        'orange-hover': '#FF8C5A',       // Hover state
        'orange-muted': '#FF6B3520',     // Backgrounds with opacity

        // Grayscale System (8 levels)
        'gray-950': '#0F0F0F',
        'gray-900': '#1A1A1A',
        'gray-800': '#2A2A2A',
        'gray-700': '#404040',
        'gray-600': '#525252',
        'gray-500': '#737373',
        'gray-400': '#A3A3A3',
        'gray-300': '#D4D4D4',

        // Legacy colors (for backwards compatibility during migration)
        primary: "#0A0A0A",      // Maps to black-primary
        secondary: "#FAFAFA",    // Maps to white-primary (inverted!)
        accent: "#FF6B35",       // Maps to orange-primary
        neutral: "#2A2A2A",      // Maps to gray-800
      },

      fontFamily: {
        sans: ["var(--font-inter)", "Inter Variable", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "SF Mono", "Consolas", "monospace"],
      },

      // 4px-based Spacing System
      spacing: {
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
      },

      // Custom Container Sizes
      maxWidth: {
        'container-xs': '640px',
        'container-sm': '768px',
        'container-md': '1024px',
        'container-lg': '1280px',
        'container-xl': '1536px',
        'container-2xl': '1728px',
      },

      // Border Radius
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
