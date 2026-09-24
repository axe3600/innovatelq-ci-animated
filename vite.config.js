import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 🔌 On importe le nouveau moteur Tailwind v4
import path from 'path'

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 🚀 On active le plugin graphique ici !
  ],
  resolve: {
    alias: {
      // Résolution du raccourci pour le dossier src
      '@': path.resolve(import.meta.dirname, './src'),
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  }
})
