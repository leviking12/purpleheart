import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for compatibility on static hosts like Render
  build: {
    outDir: 'dist', // default for Vite, but good to be explicit
    emptyOutDir: true, // clean dist before each build
  },
})
