import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // Explicitly bundle recharts and its internal utility library early
    include: ["recharts", "es-toolkit"],
  },
  // Ensures Vite treats dependencies properly under the hood during dev
  commonjsOptions: {
    transformMixedEsModules: true,
  },
});
