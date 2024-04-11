import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    copyPublicDir: false,
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      formats: ["es"],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependencies).map(
          (d) => new RegExp("^" + d + "/?")
        ),
      ],
      output: {
        preserveModules: true,
      },
    },
  },
});
