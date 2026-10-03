import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macros from 'unplugin-parcel-macros'

export default defineConfig({
  // The macros plugin evaluates Spectrum 2's style() macro at build time
  // and must run before the React plugin.
  plugins: [macros.vite(), react()],
  base: '/20forms-20designs/spectrum-2/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    sourcemap: false,
    reportCompressedSize: false,
  },
})
