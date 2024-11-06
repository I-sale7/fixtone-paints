import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import babel from 'vite-plugin-babel';

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
  build: {
    outDir: 'build', // Ensure output directory is 'build'
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Create separate chunks for libraries or specific parts of your application
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
      input: {
        main: 'src/main.jsx', // Make sure this is correctly set to your main file
      },
      plugins: [
      ],
    },
  },
})
