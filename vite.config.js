import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/willianfonseca-portfolio/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/vitest.setup.js",
    globals: true,
  },
});
