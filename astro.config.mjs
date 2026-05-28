import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 配置
  // 替换为你的 GitHub Pages URL
  site: 'https://Yeezy7.github.io',
  base: '/cv-wiki',
  integrations: [
    starlight({
      title: 'CV Wiki',
      description: '面向计算机视觉学习、面试和工程实践的开源知识库',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Yeezy7/cv-wiki',
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
          label: '深度学习基础',
          items: [
            { label: 'CNN 基础', slug: 'basics/cnn' },
            { label: 'BatchNorm', slug: 'basics/batchnorm' },
            { label: '激活函数', slug: 'basics/activation' },
            { label: '损失函数', slug: 'basics/loss-functions' },
          ],
        },
        {
          label: '图像处理基础',
          autogenerate: { directory: 'image-processing' },
        },
        {
          label: '目标检测',
          items: [
            { label: '目标检测综述', slug: 'detection/overview' },
            { label: 'YOLO 系列', slug: 'detection/yolo' },
            { label: 'NMS', slug: 'detection/nms' },
            { label: 'mAP', slug: 'detection/map' },
          ],
        },
        {
          label: '图像分割',
          items: [
            { label: '图像分割综述', slug: 'segmentation/overview' },
          ],
        },
        {
          label: '模型部署',
          autogenerate: { directory: 'deployment' },
        },
        {
          label: '面试题库',
          autogenerate: { directory: 'interview' },
        },
      ],
    }),
  ],
});
