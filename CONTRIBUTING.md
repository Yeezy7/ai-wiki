# 贡献指南

感谢你对 AI Wiki 的关注！欢迎通过以下方式贡献。

## 知识领域

AI Wiki 涵盖多个 AI 领域：

| 领域 | 目录 | 内容 |
|------|------|------|
| 计算机视觉 | `src/content/docs/cv/` | CNN、目标检测、图像分割、模型部署 |
| 大语言模型 | `src/content/docs/llm/` | Transformer、RAG、Fine-tuning、RLHF |
| 多模态 | `src/content/docs/multimodal/` | CLIP、ViT、Grounding |
| 面试题库 | `src/content/docs/interview/` | 按领域整理的高频面试题 |

## 文章结构

每篇文章建议包含：

1. **一句话解释** — 快速了解概念
2. **它解决什么问题** — 理解背景和动机
3. **核心思想** — 抓住本质
4. **算法流程** — 理解步骤
5. **数学定义** — 形式化理解
6. **代码示例** — 动手实践
7. **面试标准回答** — 面试准备
8. **高频追问** — 深入理解
9. **工程实践** — 实际应用
10. **常见误区** — 避免踩坑
11. **参考资料** — 延伸阅读

## 写作要求

- 不堆砌术语，用通俗语言解释
- 不复制论文原文，用自己的话重新组织
- 不写未经验证的结论
- 公式必须解释变量含义
- 面试题回答要能直接口述（1-3 段）
- 工程经验要说明具体场景

## 术语规范

- 中文术语首次出现时附带英文：`非极大值抑制（Non-Maximum Suppression, NMS）`
- 后续可使用简称

## 代码规范

- 优先使用 Python + PyTorch
- 图像处理相关代码使用 OpenCV
- 代码需要有注释说明关键步骤

## Frontmatter 规范

每篇文章需要包含以下 frontmatter：

```yaml
---
title: 文章标题
description: 一句话描述
category: cv/llm/multimodal/interview
tags: [tag1, tag2, tag3]
status: draft/review/stable
order: 1  # 在侧边栏中的排序
---
```

## 文章状态

每篇文章可以标注状态：

- **draft** — 草稿，内容可能不完整
- **review** — 待审阅，内容基本完整
- **stable** — 稳定版本，经过验证

## 提交流程

1. Fork 本仓库
2. 创建新分支：`git checkout -b feature/your-article`
3. 在 `src/content/docs/` 下对应目录添加或修改文章
4. 本地预览确认无误
5. 提交 Pull Request

## 文章目录

- `src/content/docs/cv/basics/` — 深度学习基础
- `src/content/docs/cv/detection/` — 目标检测
- `src/content/docs/cv/segmentation/` — 图像分割
- `src/content/docs/cv/image-processing/` — 图像处理
- `src/content/docs/cv/deployment/` — 模型部署
- `src/content/docs/llm/` — 大语言模型
- `src/content/docs/multimodal/` — 多模态
- `src/content/docs/interview/` — 面试题库

## 问题反馈

如果发现问题或有建议，欢迎提 Issue。
