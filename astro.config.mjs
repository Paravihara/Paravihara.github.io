import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://paravihara.github.io',
  integrations: [
    starlight({
      title: 'Paravihara',
      description: 'Heading West Reaching East',
      favicon: '/favicon.jpg',
      logo: {
        src: './src/assets/logo.jpg',
        alt: 'Paravihara 菩提树标志',
      },
      defaultLocale: 'cn',
      locales: {
        cn: {
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
          label: '东辕西辙',
          translations: { en: 'Heading West Reaching East' },
          items: [
            {
              label: '专题简介与目录',
              translations: { en: 'A Few Words and contents' },
              link: '/heading-west-reaching-east/',
            },
            {
              label: '01 · 人工智能与上帝之手',
              link: '/heading-west-reaching-east/01-artificial-intelligence-and-the-hand-of-god/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '02 · 关于一个现实的创造',
              link: '/heading-west-reaching-east/02-creating-a-reality/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '03 · 伦理与二阶控制论',
              link: '/heading-west-reaching-east/03-ethics-and-second-order-cybernetics/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '04 · 魔幻的视觉',
              link: '/heading-west-reaching-east/04-the-magical-vision/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '05 · 控制论、七识住与古印度世界模型',
              link: '/heading-west-reaching-east/05-cybernetics-seven-abodes-and-the-ancient-indian-world-model/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '06 · 控制论、缘起法与禅宗',
              link: '/heading-west-reaching-east/06-cybernetics-dependent-arising-and-zen/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '07 · 推荐一个佛法实修公众号',
              link: '/heading-west-reaching-east/07-a-buddhist-practice-resource/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '08 · 核废水“溯源”',
              link: '/heading-west-reaching-east/08-tracing-the-nuclear-wastewater/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '09 · 人工智能的“三刃剑”',
              link: '/heading-west-reaching-east/09-the-three-edged-sword-of-ai/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '10 · 基辛格的“遗嘱”',
              link: '/heading-west-reaching-east/10-kissingers-testament/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '11 · 天地与人心',
              link: '/heading-west-reaching-east/11-heaven-earth-and-the-human-heart/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '12 · 缘起法、第三次数学危机与无余涅盘',
              link: '/heading-west-reaching-east/12-dependent-arising-mathematical-crisis-and-final-nirvana/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '13 · 顶堕：无色界的不二迷思',
              link: '/heading-west-reaching-east/13-the-pitfall-of-nonduality/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '14 · 最后推荐两个实修道场',
              link: '/heading-west-reaching-east/14-two-practice-centers/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '15 · 荐书与缘起法的微细辨析',
              link: '/heading-west-reaching-east/15-a-book-and-subtle-interpretive-differences/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '16 · 混沌与分形：以简驭繁的艺术',
              link: '/heading-west-reaching-east/16-chaos-fractals-and-the-art-of-simplicity/',
              attrs: { class: 'cn-only' },
            },
            {
              label: '01 · Artificial Intelligence and the Hand of God',
              link: '/heading-west-reaching-east/01-artificial-intelligence-and-the-hand-of-god/',
              attrs: { class: 'en-only' },
            },
            {
              label: '02 · The Magical Vision',
              link: '/heading-west-reaching-east/02-the-magical-vision/',
              attrs: { class: 'en-only' },
            },
            {
              label: '03 · Chaos and Life',
              link: '/heading-west-reaching-east/03-chaos-and-life/',
              attrs: { class: 'en-only' },
            },
            {
              label: '04 · Fractals in Nature',
              link: '/heading-west-reaching-east/04-fractals-in-nature/',
              attrs: { class: 'en-only' },
            },
            {
              label: '05 · Cybernetics, the Seven Abodes of Consciousness and the Ancient Indian World Model',
              link: '/heading-west-reaching-east/05-cybernetics-seven-abodes-and-the-ancient-indian-world-model/',
              attrs: { class: 'en-only' },
            },
            {
              label: '06 · Cybernetics, Dependent Origination and Zen',
              link: '/heading-west-reaching-east/06-cybernetics-dependent-origination-and-zen/',
              attrs: { class: 'en-only' },
            },
            {
              label: '07 · Dependent Origination, the Third Crisis of Mathematics and Parinibbana',
              link: '/heading-west-reaching-east/07-dependent-origination-the-third-crisis-of-mathematics-and-parinibbana/',
              attrs: { class: 'en-only' },
            },
            {
              label: '08 · Appendix',
              link: '/heading-west-reaching-east/appendix/',
              attrs: { class: 'en-only' },
            },
          ],
        },
      ],
    }),
  ],
});
