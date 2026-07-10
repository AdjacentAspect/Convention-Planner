import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    base: "/Convention-Planner/",
  plugins: [
      react(),

      VitePWA({
          registerType: "autoUpdate",

          manifest: {
              name: "Convention Planner",

              short_name: "Planner",

              theme_color: "#111827",

              background_color: "#111827",

              display: "standalone",

              orientation: "portrait",

              icons: [
                  {
                      src: "/icon-192.png",
                      sizes: "192x192",
                      type: "image/png",
                  },
                  {
                      src: "/icon-512.png",
                      sizes: "512x512",
                      type: "image/png",
                  },
              ],
          },
      }),
  ]
})
