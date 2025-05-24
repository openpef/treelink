import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://example.treelink.com",
  integrations: [
    tailwind(), 
    sitemap(), 
    icon({
      include: {
        "circle-flags": ["*"]
      }
    })
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es"],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
