import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://Yeezy7.github.io',
  base: '/ai-wiki',
  integrations: [
    starlight({
      title: 'AI Wiki',
      description: '面向 AI 学习、面试和工程实践的开源知识库',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Yeezy7/ai-wiki',
        },
      ],
      sidebar: [
        {
          label: '开始',
          items: [
            { label: '学习路线', slug: 'guide/roadmap' },
            { label: '如何使用', slug: 'guide/how-to-use' },
          ],
        },
        {
          label: '计算机视觉',
          collapsed: false,
          autogenerate: { directory: 'cv' },
        },
        {
          label: '大语言模型',
          collapsed: true,
          autogenerate: { directory: 'llm' },
        },
        {
          label: '多模态',
          collapsed: true,
          autogenerate: { directory: 'multimodal' },
        },
        {
          label: '面试题库',
          collapsed: true,
          autogenerate: { directory: 'interview' },
        },
      ],
    }),
  ],
});
