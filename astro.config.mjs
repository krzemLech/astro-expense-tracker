// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

import db from '@astrojs/db';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), db(), react()]
});