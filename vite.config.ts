import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WenzheYangPortfolio/',
  build: {
    outDir: 'docs'
  },
  server: {
    allowedHosts: ['.monkeycode-ai.online']
  }
})
