import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy other requests to your index.html file
      '/': {
        target: 'http://localhost:5173/index.html', // Change this to match your index.html file location
        changeOrigin: true,
        rewrite: (path) => path === '/' ? '/index.html' : path,
      },
    },
  },
})
