import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/20forms-20designs/headlessui-appointment-request/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
