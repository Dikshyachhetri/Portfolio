import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// Static HTML portfolio served from public/ directory
// Deployed to https://dikshyachhetri.github.io (user site — base: '/')
export default defineConfig({
  build: {
    outDir: 'dist'
  }
})
