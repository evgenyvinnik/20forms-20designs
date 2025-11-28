import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/20forms-20designs/gravity-ui-contact-inquiry/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
