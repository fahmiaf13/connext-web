import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
});
