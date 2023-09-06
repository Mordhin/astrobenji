import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  scopedStyleStrategy: "class",
  experimental: { assets: true },
});
