import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  plugins: [react()],
  base: '/20forms-20designs/ariakit-newsletter-subscription/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    exclude: [],
  },
}))
