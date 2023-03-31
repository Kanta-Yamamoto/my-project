/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: [
        "ヒラギノ角ゴシック",
        '"ヒラギノ角ゴ Pro W3"',
        '"Hiragino Kaku Gothic Pro"',
        "YuGothic",
        "游ゴシック",
        "メイリオ",
        "Meiryo",
        '"ＭＳ Ｐゴシック"',
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        dark: "#07111D",
        "dark-blue": "#114D8D",
        "sky-blue": "#2072CB",
        "light-gray": "#DDE6E8",
        gray: "#B4C0CA",
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        md: "0.875rem",
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
