import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    compress(),
  ],
});
