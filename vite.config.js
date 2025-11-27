import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/20forms-20designs/',
  plugins: [react(), tailwindcss()],
})
