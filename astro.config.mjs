import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://paravihara.github.io',
  integrations: [
    starlight({
      title: 'Paravihara',
      description: '在经文、开示与观照之间安住。',
      favicon: '/favicon.jpg',
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
            {
              label: '东辕西辙',
              collapsed: true,
              items: [
                { label: '系列首页', slug: 'talks/dong-xi-zhi' },
                { label: '01 · 人工智能与上帝之手', slug: 'talks/dong-xi-zhi/01-artificial-intelligence-and-the-hand-of-god' },
                { label: '02 · 关于一个现实的创造', slug: 'talks/dong-xi-zhi/02-creating-a-reality' },
                { label: '03 · 道德伦理与二阶控制论（中译）', slug: 'talks/dong-xi-zhi/03-ethics-and-second-order-cybernetics' },
                { label: '04 · “魔幻”的视觉', slug: 'talks/dong-xi-zhi/04-the-magical-vision' },
                { label: '05 · 控制论，七识住与古印度世界模型', slug: 'talks/dong-xi-zhi/05-cybernetics-seven-abodes-and-the-ancient-indian-world-model' },
                { label: '06 · 控制论，缘起法与禅宗', slug: 'talks/dong-xi-zhi/06-cybernetics-dependent-arising-and-zen' },
                { label: '07 · 推荐一个佛法实修公众号', slug: 'talks/dong-xi-zhi/07-a-buddhist-practice-resource' },
                { label: '08 · 核废水“溯源”', slug: 'talks/dong-xi-zhi/08-tracing-the-nuclear-wastewater' },
                { label: '09 · 人工智能的“三刃剑”', slug: 'talks/dong-xi-zhi/09-the-three-edged-sword-of-ai' },
                { label: '10 · 基辛格的“遗嘱”', slug: 'talks/dong-xi-zhi/10-kissingers-testament' },
                { label: '11 · 天地与人心', slug: 'talks/dong-xi-zhi/11-heaven-earth-and-the-human-heart' },
                { label: '12 · 缘起法，第三次数学危机与无余涅盘', slug: 'talks/dong-xi-zhi/12-dependent-arising-mathematical-crisis-and-final-nirvana' },
                { label: '13 · 顶堕：无色界的不二迷思', slug: 'talks/dong-xi-zhi/13-the-pitfall-of-nonduality' },
                { label: '14 · 最后推荐两个实修道场', slug: 'talks/dong-xi-zhi/14-two-practice-centers' },
                { label: '15 · 荐书与缘起法的细微偏差', slug: 'talks/dong-xi-zhi/15-a-book-and-subtle-interpretive-differences' },
                { label: '16 · 混沌与分形：以简驽繁的艺术', slug: 'talks/dong-xi-zhi/16-chaos-fractals-and-the-art-of-simplicity' },
              ],
            },
            { label: '经文阅读', slug: 'sutras' },
            { label: '概念辞典', slug: 'concepts' },
          ],
        },
      ],
    }),
  ],
});
