// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Statischer Build – ausgeliefert als Cloudflare Worker mit Static Assets (siehe wrangler.jsonc)
export default defineConfig({
  site: 'https://www.mirko-birnstein.at',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
