import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import obfuscator from "rollup-plugin-obfuscator"; // <--- 1. Import bumbunya

export default defineConfig({
  plugins: [
    react(),
    // 2. Masukin pengacak kode di sini
    obfuscator({
      options: {
        compact: true,
        controlFlowFlattening: true, // Logic dibikin ribet kayak labirin
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true, // Angka diubah jadi rumus matematika
        simplify: true,
        stringArray: true, // Teks & URL disembunyiin
        stringArrayThreshold: 1,
        splitStrings: true,
        debugProtection: true, // Anti-Inspect Element (bikin lag)
        selfDefending: true, // Dirapiin malah rusak
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    outDir: "dist",
    sourcemap: false, // Biar blueprint kode asli gak bocor
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Hapus console.log otomatis
        drop_debugger: true, // Hapus debugger otomatis
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-aspect-ratio",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-context-menu",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-hover-card",
            "@radix-ui/react-icons",
            "@radix-ui/react-label",
            "@radix-ui/react-menubar",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-toggle",
            "@radix-ui/react-toggle-group",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
});