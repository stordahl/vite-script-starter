import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "public",
    lib: {
      entry: "./src/index.ts",
      name: "logger",
      fileName: "logger",
      formats: ["cjs", "es", "iife", "umd"],
    },
    sourcemap: false,
  },
});
