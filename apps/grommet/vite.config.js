import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  base: '/20forms-20designs/grommet/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
