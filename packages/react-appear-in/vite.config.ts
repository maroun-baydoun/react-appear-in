import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(packageDirectory, "src/react-appear-in.tsx"),
      formats: ["es"],
      fileName: "react-appear-in",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
