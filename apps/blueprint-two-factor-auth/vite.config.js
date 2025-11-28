import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/20forms-20designs/blueprint-two-factor-auth/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
