/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta tomada del logo. Cambia estos valores para re-tematizar el sitio.
        negro: "#0B0B0B",
        dorado: "#C9A24B",
        crema: "#F3E7C9",
        turquesa: "#1FB5C4",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "Oswald", "Impact", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
