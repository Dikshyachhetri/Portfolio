import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// Deployed as a project site: https://dikshyachhetri.github.io/Portfolio/
// Set base to repo name for project pages
export default defineConfig({
  base: '/Portfolio/',
  build: {
    outDir: 'dist'
  }
})
