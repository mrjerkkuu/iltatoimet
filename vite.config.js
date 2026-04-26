import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Päivittää sovelluksen heti kun uusi versio on saatavilla
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Iltatoimet',
        short_name: 'iltatoimet',
        description:
          'Sovellus auttaa hallitsemaan ja motivoimaan lasten iltatoimia',
        theme_color: '#302b63', // Poimittu styles.js gradientista
        background_color: '#0f0c29', // Taustaväri latausruutuun
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable', // Tärkeä Androidille, jotta ikoni täyttää muodon
          },
        ],
      },
    }),
  ],
});
