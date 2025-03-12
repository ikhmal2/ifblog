/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        IFprimary: { DEFAULT: "hsla(294, 22%, 25%, 1)" },
        IFsecondary: { DEFAULT: "hsla(273, 5%, 42%, 1)" },
        IFtertiary: { DEFAULT: "hsla(94, 19%, 67%, 1)" },
        IFcta: { DEFAULT: "hsla(103, 65%, 75%, 1)" },
      },
    },
  },
  plugins: [],
};
