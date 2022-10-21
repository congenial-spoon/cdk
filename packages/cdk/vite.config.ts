import { defineConfig } from "vite";

const packageJson = require("./package.json");
const external = [...Object.keys(packageJson.peerDependencies || {})];
const entry = "./src/index.tsx";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve:{
    alias: {
      '@congenial-spoon/cdk': entry
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      name: packageJson.name,
      entry,
    },
    cssTarget: ["chrome61"],
    minify: false,
    rollupOptions: {
      external,
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "es",
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          dir: "lib",
          preserveModulesRoot: "src",
        },
        {
          globals: {
            react: "react",
            "react-dom": "react-dom",
          },
        },
      ],
    },
  },
  plugins: [
    dts({
      outputDir: "es",
      tsConfigFilePath: "./tsconfig.json",
    }),
    dts({
      outputDir: "lib",
      tsConfigFilePath: "./tsconfig.json",
    }),
  ],
});
