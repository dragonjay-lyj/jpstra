// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightHeadingBadges from 'starlight-heading-badges'
import icon from "astro-icon";
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jptra.dragonjay.top',

  integrations: [starlight({
      title: {
          'zh-CN': '分趾为履・布缠为魂',
          en: 'Divided Toes, Bound Souls',
        },
        plugins: [starlightImageZoom(),starlightHeadingBadges()],
      disable404Route: true,
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN', 
        },
          'en': {
            label: 'English',
            lang: 'en',
          },
        },
      social: {
          github: 'https://github.com/dragonjay-lyj/jpstra',
          email: 'mailto:lyjcody@foxmail.com',
          telegram: 'https://t.me/NeilBowM',
      },
      editLink: {
          baseUrl: 'https://github.com/dragonjay-lyj/jpstra/edit/master/',
        },
      sidebar: [
          {
              label: '足袋',
              translations: { 'en': 'Tabi' },
              autogenerate: { directory: 'tabi' },
          },
          {
              label: '褌',
              translations: { 'en': 'Fundoshi' },
              autogenerate: { directory: 'fundoshi' },
          },
          {
              label: '画廊',
              translations: { 'en': 'Gallery' },
              autogenerate: { directory: 'gallery' }
          }
      ],
  }), icon(), react(), mdx(), tailwind(), sitemap()],

  output: 'server',

  adapter: vercel(),
});