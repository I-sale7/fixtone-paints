import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import babel from 'vite-plugin-babel';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    babel()
  ],
  optimizeDeps: {
    include: ['the-library-using-require'], // replace with the actual module name
  },
  css: {
    devSourcemap: true
  },
})
