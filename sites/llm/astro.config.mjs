import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://Yeezy7.github.io',
  base: '/ai-wiki/llm',
  integrations: [
    starlight({
      title: 'LLM Wiki',
      description: '大语言模型知识库',
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Yeezy7/ai-wiki',
        },
      ],
      sidebar: [
        {
          label: '基础架构',
          items: [
            { label: 'Transformer', slug: 'transformer' },
          ],
        },
      ],
    }),
  ],
});
