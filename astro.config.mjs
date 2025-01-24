import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: 'https://expositor.industrialtransformation.mx',
  integrations: [tailwind(), sitemap(), react(), astroI18next()]
});