import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/20forms-20designs/chakra/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Use esbuild for minification - much faster than default Terser
    minify: 'esbuild',
    // Disable sourcemaps in production for faster builds
    sourcemap: false,
    // Reduce chunk size analysis overhead
    reportCompressedSize: false,
  },
  // Improve dependency pre-bundling
  optimizeDeps: {
    exclude: [],
  },
}))
