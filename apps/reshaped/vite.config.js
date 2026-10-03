import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssGlobalData from '@csstools/postcss-global-data'
import postcssCustomMedia from 'postcss-custom-media'

const require = createRequire(import.meta.url)

// Reshaped's CSS uses custom media queries (e.g. --rs-viewport-m) that are
// defined in the theme's media.css, so they must be resolved at build time.
const reshapedMedia = require.resolve('reshaped/themes/slate/media.css')

export default defineConfig({
  plugins: [react()],
  base: '/20forms-20designs/reshaped/',
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({ files: [reshapedMedia] }),
        postcssCustomMedia(),
      ],
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
  },
})
