import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [tailwind(), robotsTxt(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), react()],
  // comment this vite object block in dev mode 
  vite: {
    ssr: {
      noExternal: [/^react-countup\/*/, /^react-countdown\/*/ ]
    }
  },
  site: "https://openconf.tcetmumbai.in/"
});