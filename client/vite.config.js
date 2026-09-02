import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    watch: {
      usePolling: true,
      interval: 100
    },

    proxy: {
      "/api": {
        target: "https://erp-system-4-00v2.onrender.com",
        changeOrigin: true,
        secure: false
      }
    }
  }
});