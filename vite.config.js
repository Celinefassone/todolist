import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    plugins: [vue()],
    resolve: {
      alias: {
        "~@": path.resolve(__dirname, "./src"),
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".js", ".json", ".vue"],
      server: {
        hot: true,
      },
    },
  });
};
