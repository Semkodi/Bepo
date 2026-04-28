import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Triggering fresh build for GitHub Pages
export default defineConfig({
  plugins: [react()],
  // Ersetze 'Bepo' durch deinen exakten GitHub-Repository-Namen
  base: '/Bepo/',
})
