import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "react-appear-in": fileURLToPath(
        new URL("../react-appear-in/src/react-appear-in.tsx", import.meta.url),
      ),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.test.tsx"],
  },
});
