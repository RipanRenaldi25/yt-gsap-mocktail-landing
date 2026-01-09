import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["videos/output2.mp4", "fonts/**/*", "images/**/*"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,woff2}"],
      },
    }),
  ],
});
