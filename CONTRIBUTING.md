# 贡献指南

感谢你对 CV Wiki 的关注！欢迎通过以下方式贡献。

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

## 文章状态

每篇文章可以标注状态：

- **draft** — 草稿，内容可能不完整
- **review** — 待审阅，内容基本完整
- **stable** — 稳定版本，经过验证

## 提交流程

1. Fork 本仓库
2. 创建新分支：`git checkout -b feature/your-article`
3. 在 `src/content/docs/` 下对应目录添加或修改文章
4. 在 `astro.config.mjs` 的 `sidebar` 中添加对应条目
5. 本地预览确认无误
6. 提交 Pull Request

## 文章目录

- `src/content/docs/basics/` — 深度学习基础
- `src/content/docs/image-processing/` — 图像处理基础
- `src/content/docs/detection/` — 目标检测
- `src/content/docs/segmentation/` — 图像分割
- `src/content/docs/deployment/` — 模型部署
- `src/content/docs/interview/` — 面试题库

## 问题反馈

如果发现问题或有建议，欢迎提 Issue。
