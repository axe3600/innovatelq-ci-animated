import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 💡 Nouvelle syntaxe moderne recommandée par Vite v8+
      '@': path.resolve(import.meta.dirname, './src'),
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  }
})
