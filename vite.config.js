import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolioo/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-icons']
    }
  },
  
})