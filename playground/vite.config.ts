import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  resolve:
    command === "serve"
      ? {
          alias: {
            "breakpoint-indicator": resolve(
              import.meta.dirname,
              "../src/index.ts",
            ),
          },
        }
      : undefined,
}));
