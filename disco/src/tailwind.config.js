/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prune: "#6B46C1",    // Violet/prune (ajuste si tu veux une autre teinte)
        corail: "#FF6B6B",   // Corail/orange-rouge
        creme: "#FFF8E1",    // Crème clair
        menthe: "#9AE6B4",   // Menthe/vert clair
        gris: "#718096",     // Gris moyen
        // Ajoute d'autres si besoin (ex: corail/90 → tu peux faire opacity avec bg-corail/90)
      },
    },
  },
  plugins: [],
}