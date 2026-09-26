import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://pavaravihara.github.io',
  integrations: [
    starlight({
      title: 'Paravihara',
      description: '在经文、开示与观照之间安住。',
      logo: {
        src: './src/assets/logo.jpg',
        alt: 'Paravihara 菩提树标志',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '阅读',
          items: [
            { label: '首页', slug: 'index' },
            { label: '导师开示', slug: 'talks' },
            { label: '经文阅读', slug: 'sutras' },
            { label: '概念辞典', slug: 'concepts' },
          ],
        },
      ],
    }),
  ],
});
