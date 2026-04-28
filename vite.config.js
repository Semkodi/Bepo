import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ersetze 'Bepo' durch deinen exakten GitHub-Repository-Namen
  base: '/Bepo/',
})
