import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/20forms-20designs/material-tailwind/',
  // @material-tailwind/react pins react/react-dom 18.2.0 as hard dependencies,
  // which would bundle a second React next to the app's own copy.
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
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
