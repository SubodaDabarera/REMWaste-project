import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; //

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Map '@' to './src'
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://clicks.aweber.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
