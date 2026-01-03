/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        // Consistent vertical rhythm for full-screen sections (responsive via clamp)
        "section-normal": "clamp(4rem, 5vw, 6rem)",
        "section-loose": "clamp(5rem, 7vw, 8rem)",
      },
      fontSize: {
        // Used via `text-display` for key section headlines
        display: [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      colors: {
        // Dark Theme Digital Agency Style
        background: "hsl(0 0% 5%)", // Deep black (#0D0D0D)
        foreground: "hsl(0 0% 98%)", // Off-white text for maximum contrast

        primary: {
          DEFAULT: "hsl(0 0% 98%)", // Off-white text
          foreground: "hsl(0 0% 5%)",
        },

        // Vibrant blue-purple gradient accent (Digital Agency style)
        accent: {
          DEFAULT: "hsl(250 95% 65%)", // Vibrant blue-purple (#5E6AD2)
          foreground: "hsl(0 0% 98%)", // White text on accent
          start: "hsl(250 95% 65%)", // Blue-purple start
          end: "hsl(270 90% 70%)", // Purple end for gradients
        },

        // Dark muted tones
        muted: {
          DEFAULT: "hsl(0 0% 10%)", // Dark gray background (#1A1A1A)
          foreground: "hsl(0 0% 65%)", // Medium gray text
        },

        card: {
          DEFAULT: "hsl(0 0% 8%)", // Slightly lighter dark cards
          foreground: "hsl(0 0% 98%)",
        },

        border: "hsl(0 0% 15%)", // Subtle dark borders
        ring: "hsl(250 95% 65%)", // Blue-purple ring for focus
      },

      backgroundImage: {
        "gradient-accent":
          "linear-gradient(135deg, hsl(250 95% 65%) 0%, hsl(270 90% 70%) 100%)",
        "gradient-accent-subtle":
          "linear-gradient(135deg, hsl(250 95% 65% / 0.1) 0%, hsl(270 90% 70% / 0.1) 100%)",
        "gradient-subtle":
          "linear-gradient(135deg, hsl(250 95% 65% / 0.05) 0%, hsl(270 90% 70% / 0.05) 100%)",
        "gradient-dark":
          "linear-gradient(180deg, hsl(0 0% 5%) 0%, hsl(0 0% 8%) 100%)",
      },
      boxShadow: {
        "glow-accent": "0 0 20px hsl(250 95% 65% / 0.3)",
        "glow-accent-lg": "0 0 40px hsl(250 95% 65% / 0.4)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "65rem", // max-w-5xl equivalent
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.32s ease-in-out",
        "accordion-up": "accordion-up 0.28s ease-in-out",
      },
    },
  },
  plugins: [],
};
