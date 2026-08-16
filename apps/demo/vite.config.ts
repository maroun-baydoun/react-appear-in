import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

import { demoCodePlugin } from "./src/demo-code-plugin.ts";
import { snippets } from "./src/snippets.ts";

export default defineConfig({
  base: "/react-appear-in/",
  plugins: [react(), tailwindcss(), demoCodePlugin(snippets)],
  resolve: {
    alias: {
      "react-appear-in": fileURLToPath(
        new URL(
          "../../packages/react-appear-in/src/react-appear-in.tsx",
          import.meta.url,
        ),
      ),
    },
  },
});
