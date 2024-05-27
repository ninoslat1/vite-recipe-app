import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA, VitePWAOptions} from 'vite-plugin-pwa'

const manifestPlugin:Partial<VitePWAOptions> = {
  registerType: 'prompt',
  devOptions: {
    enabled: true
  },
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"],
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
  base: '/vite-recipe-app/',
  plugins: [
    react(),
    VitePWA(manifestPlugin)
  ],
  optimizeDeps: {
    include: ['@emotion/styled']
  }
})
