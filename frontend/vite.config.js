import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Example alias, adjust as needed
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,  // Change this to the port you want to use
  },
  build: {
    outDir: 'dist', // Specify the output directory
    sourcemap: true, // Optional: useful for debugging
  },
})
