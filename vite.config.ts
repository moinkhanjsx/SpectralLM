import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@fortawesome/react-fontawesome', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@fortawesome/react-fontawesome'],
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})
