import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA, VitePWAOptions} from 'vite-plugin-pwa'

const manifestPlugin:Partial<VitePWAOptions> = {
  registerType: 'prompt',
  devOptions: {
    enabled: true
  },
  includeAssets: ["favicon-16x16.png", "favicon-32x32.png", "apple-touch-icon.png", "pwa-144x144.png", "pwa-192x192.png", "pwa-512x512.png", "pwa-maskable-192x192.png", "pwa-maskable-512x512.png"],
  manifest: {
    name: 'vite-recipe-app',
    short_name: 'vite-recipe-app',
    description: 'Aplikasi pembuatan kartu resep makanan atau minuman',
    icons: [
      {
        "src": "/pwa-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/pwa-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/pwa-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/pwa-maskable-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/pwa-maskable-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA(manifestPlugin)
  ],
  preview: {
    port: 8081,
    strictPort: true,
   },
   server: {
    port: 8081,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8081",
   },
  optimizeDeps: {
    include: ['@emotion/styled']
  }
})
