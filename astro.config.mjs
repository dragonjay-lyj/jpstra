// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightHeadingBadges from 'starlight-heading-badges'
import icon from "astro-icon";

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jptra.dragonjay.top',

  integrations: [starlight({
      title: {
          'zh-CN': '足袋与褌',
        },
        customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      ],
        plugins: [starlightImageZoom(),starlightHeadingBadges()],
      disable404Route: true,
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN', 
        }
        },
      social: [
          { icon: 'github', label: 'GitHub', href: 'https://github.com/dragonjay-lyj/jpstra' },
          { icon: 'email', label: 'Email', href: 'mailto:lyjcody@foxmail.com' },
          { icon: 'telegram', label: 'Telegram', href: 'https://t.me/NeilBowM' },
      ],
      editLink: {
          baseUrl: 'https://github.com/dragonjay-lyj/jpstra/edit/master/',
        },
      sidebar: [
          {
              label: '足袋',
              autogenerate: { directory: 'tabi' },
          },
          {
              label: '褌',
              autogenerate: { directory: 'fundoshi' },
          },
          {
              label: '画廊',
              autogenerate: { directory: 'gallery' }
          },
          {
            label: '调查问卷',
            autogenerate: { directory: 'questionnaire' }
        }
      ],
  }), icon(), react(), mdx(), sitemap()],

  output: 'server',
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});