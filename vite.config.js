import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    babel(),
    viteCompression()
  ],
  optimizeDeps: {
    include: ['the-library-using-require'], // replace with the actual module name
  },
  css: {
    devSourcemap: true
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
})
