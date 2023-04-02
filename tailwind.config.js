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
        main: "#BCCADF",
        primary: "#774BF3",
        "primary-disabled": "#B9A4F8",
        black: "#292929",
        white: "#F6F5F5",
        "txt-gray": "#909EA7",
        "divider-gray": "#D1D6DA",
        gray: "#DCE0E2",
        "bg-gray": "#EEEEEF",
        "error-red": "#E0243B",
        "safe-green": "#10AA4D",
        "warning-orange": "#EFA013",
        "active-blue": "#2465F0",
      },
      backgroundColor: {
        "bg-error-red": `rgba(243,75,95,0.1)`,
        "bg-safe-green": `rgba(18,197,68,0.1)`,
        "bg-warning-orange": `rgba(251,166,66,0.1)`,
        "bg-active-blue": `rgba(65,146,241,0.1)`,
        "bg-primary": `rgba(119,75,243,0.1)`,
        "bg-dialog": `rgba(4, 4, 35, 0.5)`,
      },
      fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        md: "0.875rem",
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.5rem",
        max: "2rem",
      },
      borderRadius: {
        20: "20px",
        10: "10px",
        8: "8px",
        6: "6px",
        4: "4px",
      },
    },
  },
  plugins: [],
};
