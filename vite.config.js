import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Wellnex Systems",
        short_name: "Wellnex",
        start_url: "/",
        display: "standalone",
        background_color: "#111827",
        theme_color: "#111827",
        icons: [
          // Add real icons later if needed
        ],
      },
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,svg,png,jpg,jpeg,webp,ico,woff,woff2,ttf,eot}",
        ],
        // Don’t precache heavy videos
        globIgnores: ["**/*.mp4", "**/*.mov", "**/*.webm", "**/why wellnex-*.jpg"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "images-cache",
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "font",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "fonts-cache",
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            // API/network requests: prefer network, fallback to cache
            urlPattern: ({ url }) => url.origin === self.location.origin && url.pathname.startsWith("/api"),
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 3,
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
            },
          },
          {
            // Same-origin pages/resources
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-runtime",
              expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
});
