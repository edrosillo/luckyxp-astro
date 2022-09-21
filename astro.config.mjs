import svelte from '@astrojs/svelte';
import sitemap from "@astrojs/sitemap";

import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sitemap()]
});