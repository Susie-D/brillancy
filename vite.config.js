import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/brilliancycloud/",
  plugins: [react()],
  // Development server settings.
  server: {
    port: 3000, // The port on which the development server will run.
  },

  // Build configuration.
  build: {
    outDir: "dist", // Output directory for production build.
    assetsDir: "assets", // Directory for static assets in the build output.
    minify: "terser", // Minification options (terser or esbuild).
  },
  // Additional configurations.
  // ...
});
