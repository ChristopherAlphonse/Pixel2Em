import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Pixel2Em',
        short_name: 'Pixel2Em',
        theme_color: '#000',
        icons: [
          {
            src: '/src/assets/icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/src/assets/icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          vendors: ['lodash', 'moment']
        }
      }
    }
  }
});
