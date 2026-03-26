import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { resolve } from "node:path";

export default defineConfig({
  site: "https://curfee.com",
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  server: { host: true, port: 4322 },
  vite: {
    resolve: {
      alias: {
        "@": resolve("./src"),
      },
    },
  },
});
