import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Deployed as a project site: https://dikshyachhetri.github.io/Portfolio/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Root in dev (Vite serves at /), /Portfolio/ for GitHub Pages build
  base: command === 'serve' ? '/' : '/Portfolio/',
  build: {
    outDir: 'dist'
  }
}))
