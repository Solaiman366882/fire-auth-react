/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:"'Poppins', sans-serif"
      },
      color:{
        "pera-color":"#738ea5",
        "title-heading":"#002642",
        "bg-color":"#EDF3F8"
      }
    },
  },
  plugins: [require("daisyui")],
}