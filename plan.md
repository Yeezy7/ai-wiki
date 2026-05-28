# CV Wiki 项目执行计划

## 项目定位

**CV Wiki**：面向计算机视觉学习、面试复习和工程实践的开源知识库。

> 先用 10 篇高质量文章证明这个站值得存在，再扩目录。

---

## 技术栈

| 层级 | 选型 |
|------|------|
| 框架 | Astro + Starlight |
| 内容 | Markdown / MDX |
| 部署 | Vercel（首选）或 GitHub Pages |
| 版本管理 | Git + GitHub |

---

## 目录结构

```
cv-wiki/
  src/
    content/
      docs/
        index.mdx                 # 首页
        guide/
          roadmap.md              # 学习路线
          how-to-use.md           # 使用指南
        basics/                   # 深度学习基础
          cnn.md
          batchnorm.md
          activation.md
          loss-functions.md
        image-processing/         # 图像处理基础
          filtering.md
          edge-detection.md
          morphology.md
        detection/                # 目标检测
          overview.md
          rcnn.md
          yolo.md
          nms.md
          map.md
        segmentation/             # 图像分割
          overview.md
          unet.md
          deeplab.md
          mask-rcnn.md
        deployment/               # 模型部署
          onnx.md
          tensorrt.md
          quantization.md
        interview/                # 面试题库
          cv-basic.md
          detection.md
          segmentation.md
          deployment.md
  astro.config.mjs
  package.json
  README.md
  CONTRIBUTING.md
```

---

## 第一版 MVP 范围（5 个模块）

1. 深度学习基础
2. 图像处理基础
3. 目标检测
4. 图像分割
5. 模型部署

**暂不涉及**：大模型、强化学习、具身智能、推荐系统、语音。

---

## 第一批文章（10 篇）

| # | 文章 | 模块 |
|---|------|------|
| 1 | CNN 基础 | 深度学习基础 |
| 2 | 卷积、池化、感受野 | 深度学习基础 |
| 3 | BatchNorm | 深度学习基础 |
| 4 | 常见激活函数 | 深度学习基础 |
| 5 | 常见损失函数 | 深度学习基础 |
| 6 | 目标检测综述 | 目标检测 |
| 7 | IoU、Precision、Recall、mAP | 目标检测 |
| 8 | NMS | 目标检测 |
| 9 | YOLO 系列核心思想 | 目标检测 |
| 10 | 语义分割、实例分割、全景分割区别 | 图像分割 |

---

## 文章模板

每篇文章统一结构：

```markdown
---
title: 标题
description: 一句话描述
---

# 标题

## 一句话解释
## 它解决什么问题
## 核心思想
## 算法流程
## 数学定义
## 代码示例
## 面试标准回答
## 高频追问
## 工程实践
## 常见误区
## 参考资料
```

---

## 执行时间表

### 第 1 天：建站

- [ ] 用 Starlight 初始化项目
- [ ] 配置首页 `index.mdx`
- [ ] 配置侧边栏 `astro.config.mjs`
- [ ] 写 `README.md`
- [ ] 写 `CONTRIBUTING.md`

**产出**：本地可运行的网站

### 第 2~3 天：样板文章（5 篇）

- [ ] NMS（首篇样板）
- [ ] CNN 基础
- [ ] BatchNorm
- [ ] mAP
- [ ] 目标检测综述

### 第 4~5 天：补齐第一批内容（5 篇）

- [ ] 激活函数
- [ ] 损失函数
- [ ] YOLO 系列
- [ ] 语义分割综述
- [ ] 模型部署综述

### 第 6 天：上线

- [ ] 部署到 Vercel 或 GitHub Pages
- [ ] 配置站点标题
- [ ] 配置搜索
- [ ] 检查移动端阅读体验

### 第 7 天：公开

- [ ] 发布到 GitHub
- [ ] 发布到知乎、掘金、小红书 / B 站动态

---

## MVP 验收标准

- [ ] 有首页
- [ ] 有学习路线
- [ ] 有 10 篇文章
- [ ] 每篇都有面试问题
- [ ] 每篇都有参考资料
- [ ] 能在线访问
- [ ] 能通过 GitHub 提 PR

---

## 写作规范

- 中文术语首次出现附英文：`非极大值抑制（Non-Maximum Suppression, NMS）`
- 公式下方必须解释每个变量
- 代码优先：Python + PyTorch + OpenCV
- 面试回答控制在 1~3 段，可直接口述
- 不堆砌术语、不复制论文原文、不写未验证结论

---

## 文章状态标记

| 标记 | 含义 |
|------|------|
| `draft` | 草稿 |
| `review` | 待审阅 |
| `stable` | 稳定版本 |

---

## 第一版不做

登录、评论系统、后台管理、在线编辑器、复杂搜索、知识图谱、AI 问答、用户权限。
