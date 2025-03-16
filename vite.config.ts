import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Vite dev server will run on port 3000
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',  // Proxy API requests to backend running on port 3001
        secure: false,
        changeOrigin: true,
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',  // Use jsdom for component testing (for React component tests)
    setupFiles: './src/_tests_/setup.ts',  // Ensure this setup file exists for your test environment
  }
});
