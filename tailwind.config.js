/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        solace: {
          violet: "#8A63D2",
          dark: "#16131D",
          raised: "#1D1926",
          secondary: "#252033",
          border: "#312B42",
          text: "#DDD7E8",
          muted: "#9E96B3",
          light: "#F1EDF8",
          lightSurface: "#E8E2F2",
          lightBorder: "#D8D0E6",
          lightText: "#2C2638",
          lightMuted: "#6F6882",
          pink: "#C65AA1",
          blue: "#6C8ED9",
          cyan: "#4FA7A3",
          gold: "#D29B49",
          green: "#7FA66A",
        },
      },
      fontFamily: {
        sans: [
          "Geist",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "SFMono-Regular",
          "SF Mono",
          "Cascadia Code",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "soft-violet": "0 28px 90px rgba(13, 10, 20, 0.34)",
      },
    },
  },
  plugins: [],
};
