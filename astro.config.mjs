import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [tailwind(), robotsTxt(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })],
  site: "https://openconf.tcetmumbai.in/"
});