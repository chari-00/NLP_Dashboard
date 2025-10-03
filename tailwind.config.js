/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#7F00FF",
        secondaryPurple: "#DA70D6",
        accent1: "#DA70D6",
        accent2: "#BA55D3",
        accent3: "#DDA0DD",
        accent4: "#9932CC",
        accent5: "#9400D3",
        accent6: "#8A2BE2",
        accent7: "#7B68EE",
        accent8: "#6A5ACD",
        accent9: "#663399",
        accent10: "#800080",
        baseColor: "#FFFFFF",
        lightGrey: "#FAFAFA",
        borderGrey: "#E5E7EB",
        backgroundGrey: "#F9FAFB",
        tableHover: "#F5F3FF",
        darkText: "#111827",
        neutralText: "#374151",
        mutedText: "#9CA3AF",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.875rem',
        'sm': '1rem',
        'base': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
      },
    },
  },
  plugins: [],
};

