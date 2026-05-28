你应该按“**先内容，后网站，最后社区化**”来做。不要一开始追求大而全，也不要先折腾复杂前端。

我建议采用这条路线：

> **Starlight 建站 + Markdown/MDX 写内容 + GitHub 管版本 + GitHub Pages/Vercel 发布。**

Starlight 官方推荐用 `npm create astro@latest -- --template starlight` 创建项目，内容页面放在 `src/content/docs/` 目录下，每个 `.md` / `.mdx` 文件会变成一个页面。([Starlight][1])

---

## 1. 第一步：先定项目边界

先不要叫“大模型 + CV + RL + AI 全栈知识库”。范围太大，容易烂尾。

建议第一版定位为：

```text
CV Wiki：计算机视觉教程、面试八股、工程实践知识库
```

第一版只做 5 个模块：

```text
1. 深度学习基础
2. 图像处理基础
3. 目标检测
4. 图像分割
5. 模型部署
```

暂时不要碰：

```text
大模型
强化学习
具身智能
推荐系统
语音
```

这些后面可以扩展，但不是 MVP 阶段的重点。

---

## 2. 第二步：创建项目

本地先创建 Starlight 项目：

```bash
npm create astro@latest -- --template starlight
```

创建时项目名可以填：

```text
cv-wiki
```

然后进入项目并启动：

```bash
cd cv-wiki
npm run dev
```

Starlight 官方文档也是这个启动流程，开发服务器会给出本地预览地址。([Starlight][1])

建议用这个目录结构：

```text
cv-wiki/
  src/
    content/
      docs/
        index.mdx
        guide/
          roadmap.md
          how-to-use.md
        basics/
          cnn.md
          batchnorm.md
          activation.md
          loss-functions.md
        image-processing/
          filtering.md
          edge-detection.md
          morphology.md
        detection/
          overview.md
          rcnn.md
          yolo.md
          nms.md
          map.md
        segmentation/
          overview.md
          unet.md
          deeplab.md
          mask-rcnn.md
        deployment/
          onnx.md
          tensorrt.md
          quantization.md
        interview/
          cv-basic.md
          detection.md
          segmentation.md
          deployment.md
  astro.config.mjs
  package.json
  README.md
  CONTRIBUTING.md
```

Starlight 项目的核心配置通常在 `astro.config.mjs`，内容文件放在 `src/content/docs/`，静态资源放在 `public/`。([Starlight][2])

---

## 3. 第三步：先写 10 篇，不要先写 100 篇目录

第一批文章建议固定为这 10 篇：

```text
1. CNN 基础
2. 卷积、池化、感受野
3. BatchNorm
4. 常见激活函数
5. 常见损失函数
6. 目标检测综述
7. IoU、Precision、Recall、mAP
8. NMS
9. YOLO 系列核心思想
10. 语义分割、实例分割、全景分割区别
```

原因是它们同时满足三个条件：

```text
CV 高频
面试高频
教程价值高
```

先把这 10 篇写好，比建一个 200 个空页面的目录更重要。

---

## 4. 第四步：统一每篇文章模板

每篇文章都用同一个结构。建议模板如下：

```markdown
---
title: NMS 非极大值抑制
description: 解释 NMS 的原理、流程、面试问法和工程注意事项
---

# NMS 非极大值抑制

## 一句话解释

NMS 用来从多个高度重叠的候选框中保留最可信的检测框。

## 它解决什么问题

目标检测模型经常会对同一个目标输出多个相似候选框，NMS 用于去除重复预测。

## 核心思想

先按照置信度排序，然后依次保留高分框，并删除与其 IoU 超过阈值的低分框。

## 算法流程

1. 按照置信度从高到低排序
2. 取出当前最高分框
3. 删除与该框 IoU 大于阈值的其他框
4. 重复直到没有候选框

## 数学定义

这里写 IoU 公式。

## 代码示例

这里给 PyTorch / OpenCV 示例。

## 面试标准回答

面试中可以这样回答：……

## 高频追问

### NMS 阈值调大和调小有什么影响？

……

### Soft-NMS 和普通 NMS 有什么区别？

……

### 为什么 DETR 不需要 NMS？

……

## 工程实践

- 密集小目标场景下，普通 NMS 容易误删相邻目标
- 类别内 NMS 和类别无关 NMS 的结果不同
- NMS 阈值需要结合业务指标调整

## 常见误区

- NMS 不是训练过程的一部分，通常用于后处理
- NMS 阈值不是越大越好，也不是越小越好

## 参考资料

- 论文
- 官方文档
- 高质量博客
```

这套模板的好处是：**每篇文章天然兼容教程、面试和工程使用**。

---

## 5. 第五步：首页不要做复杂，先讲清楚项目是什么

首页 `src/content/docs/index.mdx` 可以这样写：

```markdown
---
title: CV Wiki
description: 面向计算机视觉学习、面试和工程实践的开源知识库
---

# CV Wiki

CV Wiki 是一个面向计算机视觉学习、面试复习和工程实践的开源知识库。

它不是单纯的八股题库，而是希望把每个知识点讲成：

- 能学懂
- 能面试
- 能落地
- 能查阅

## 内容模块

- 深度学习基础
- 图像处理基础
- 目标检测
- 图像分割
- 多模态视觉
- 三维视觉
- 模型部署
- 面试题库

## 推荐学习路径

1. 深度学习基础
2. 图像处理基础
3. 目标检测
4. 图像分割
5. 部署与工程实践
6. 论文精读
```

首页的重点不是炫酷，而是让访问者 10 秒内知道：

```text
这是什么
适合谁
怎么学
怎么贡献
```

---

## 6. 第六步：配置侧边栏

在 `astro.config.mjs` 里配置导航。大致结构可以这样：

```js
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'CV Wiki',
      sidebar: [
        {
          label: '开始',
          items: [
            { label: '项目介绍', slug: 'index' },
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
          label: '目标检测',
          items: [
            { label: '目标检测综述', slug: 'detection/overview' },
            { label: 'R-CNN 系列', slug: 'detection/rcnn' },
            { label: 'YOLO 系列', slug: 'detection/yolo' },
            { label: 'NMS', slug: 'detection/nms' },
            { label: 'mAP', slug: 'detection/map' },
          ],
        },
      ],
    }),
  ],
});
```

先手动配置，不要一开始搞自动生成目录。手动配置更可控。

---

## 7. 第七步：建立内容规范

项目根目录加一个 `CONTRIBUTING.md`：

```markdown
# 贡献指南

## 文章结构

每篇文章建议包含：

1. 一句话解释
2. 背景问题
3. 核心思想
4. 数学形式
5. 算法流程
6. 代码示例
7. 面试问题
8. 工程实践
9. 常见误区
10. 参考资料

## 写作要求

- 不堆砌术语
- 不复制论文原文
- 不写未经验证的结论
- 公式必须解释变量含义
- 面试题回答要能直接口述
- 工程经验要说明具体场景

## 文章状态

每篇文章可以标注：

- draft：草稿
- review：待审阅
- stable：稳定版本
```

再加一个 `STYLE_GUIDE.md`：

```markdown
# 写作风格规范

## 术语

第一次出现中文术语时，建议附带英文：

- 非极大值抑制（Non-Maximum Suppression, NMS）
- 交并比（Intersection over Union, IoU）

## 公式

公式下面必须解释每个变量。

## 代码

代码优先使用：

- Python
- PyTorch
- OpenCV

## 面试回答

面试回答控制在 1～3 段，避免写成论文。
```

---

## 8. 第八步：上线发布

最省事有两种方式。

### 方案 A：Vercel

适合你快速发布：

```text
GitHub 仓库连接 Vercel
自动识别 Astro 项目
每次 push 自动部署
```

这条路线最省心。

### 方案 B：GitHub Pages

适合完全免费、纯开源项目。Astro 官方文档说明，可以用 GitHub Actions 把 Astro 站点部署到 GitHub Pages，并推荐使用官方 Astro GitHub Action。([docs.astro.build][3])

你需要创建：

```text
.github/workflows/deploy.yml
```

可以用 Astro 官方文档里的 GitHub Pages workflow。部署到 GitHub Pages 时，还需要在 `astro.config.mjs` 里配置 `site`，仓库不是 `<username>.github.io` 这种特殊仓库时，通常还要配置 `base`。([docs.astro.build][3])

初期我更建议：

```text
Vercel > GitHub Pages
```

因为 Vercel 配置更少，适合先把内容跑起来。

---

## 9. 第九步：不要立刻做复杂功能

第一版不要做：

```text
登录
评论系统
后台管理
在线编辑器
复杂搜索
知识图谱
AI 问答
用户权限
```

第一版只需要：

```text
文档站
目录
搜索
深色模式
代码高亮
公式
GitHub 编辑入口
```

先把内容质量做出来。

---

## 10. 具体执行计划

### 第 1 天：建站

完成：

```text
创建 cv-wiki 仓库
初始化 Starlight
配置首页
配置侧边栏
写 README
写 CONTRIBUTING
```

产出：

```text
本地可以访问的网站
GitHub 上有仓库
首页能说明项目定位
```

### 第 2～3 天：写样板文章

先写：

```text
CNN 基础
BatchNorm
NMS
mAP
目标检测综述
```

这 5 篇决定项目风格。

### 第 4～5 天：补齐第一批内容

继续写：

```text
激活函数
损失函数
YOLO 系列
语义分割综述
模型部署综述
```

### 第 6 天：上线

完成：

```text
部署到 Vercel 或 GitHub Pages
配置站点标题
配置搜索
检查移动端阅读体验
```

### 第 7 天：公开

发布到：

```text
GitHub
知乎
掘金
小红书 / B 站动态
朋友圈 / 技术群
```

不要等内容完美再公开。公开后更容易获得反馈。

---

## 11. 最小 MVP 标准

只要做到下面这个程度，就可以发布第一版：

```text
有首页
有学习路线
有 10 篇文章
每篇都有面试问题
每篇都有参考资料
能在线访问
能通过 GitHub 提 PR
```

不要等到 100 篇文章再发布。技术知识库最怕“规划很大，迟迟不上线”。

---

## 12. 我建议你现在就这样开始

优先顺序如下：

```text
1. 建 cv-wiki 仓库
2. 用 Starlight 初始化项目
3. 写首页
4. 写 CONTRIBUTING.md
5. 写 NMS 作为第一篇样板文章
6. 写 CNN 基础作为第二篇样板文章
7. 部署上线
```

第一篇文章我建议写 **NMS**，因为它非常适合作为样板：

```text
有直觉解释
有公式
有算法流程
有代码
有工程坑
有高频面试题
有变体扩展
```

做这个项目时，核心原则只有一个：

> **先用 10 篇高质量文章证明这个站值得存在，再扩目录。**

[1]: https://starlight.astro.build/getting-started/ "Getting Started | Starlight"
[2]: https://starlight.astro.build/zh-cn/guides/project-structure/ "项目结构 | Starlight"
[3]: https://docs.astro.build/zh-cn/guides/deploy/github/ "部署你的 Astro 站点至 GitHub Pages | Docs"
