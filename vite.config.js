import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolioo/',
  build: {
    rollupOptions: {
      external: ['react-icons']
    }
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       autoprefixer(), // Use autoprefixer in PostCSS plugins
  //     ],
  //   },
  // },
})