import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default () => {
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".js", ".json", ".vue"],
      server: {
        hot: true,
      },
    },
  });
};
