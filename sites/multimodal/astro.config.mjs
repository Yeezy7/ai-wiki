import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://Yeezy7.github.io',
  base: '/ai-wiki/multimodal',
  integrations: [
    starlight({
      title: 'Multimodal Wiki',
      description: '多模态知识库',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Yeezy7/ai-wiki',
        },
      ],
      sidebar: [
        {
          label: '核心模型',
          items: [
            { label: 'CLIP', slug: 'clip' },
          ],
        },
      ],
    }),
  ],
});
