# AI Wiki

面向 AI 学习、面试和工程实践的开源知识库。

## 项目简介

AI Wiki 是一个综合性的 AI 知识库，涵盖多个领域：

- **计算机视觉** — CNN、目标检测、图像分割、模型部署
- **大语言模型** — Transformer、RAG、Fine-tuning、RLHF
- **多模态** — CLIP、ViT、Grounding

每个知识点都做到：
- **能学懂** — 从直觉出发，配合图示和代码
- **能面试** — 附带标准回答和高频追问
- **能落地** — 包含工程实践和常见坑
- **能查阅** — 结构化组织，快速定位

## 内容模块

### 计算机视觉
- 深度学习基础（CNN、BatchNorm、激活函数、损失函数）
- 目标检测（R-CNN、YOLO、NMS、mAP）
- 图像分割（U-Net、DeepLab、Mask R-CNN）
- 图像处理（滤波、边缘检测、形态学操作）
- 模型部署（ONNX、TensorRT、量化）

### 大语言模型
- Transformer 架构
- 注意力机制
- RAG 检索增强生成
- Fine-tuning 微调技术
- RLHF 人类反馈强化学习

### 多模态
- CLIP 对比学习
- ViT 视觉 Transformer
- Grounding 视觉定位

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 技术栈

- [Astro](https://astro.build/) — 现代化的静态站点生成器
- [Starlight](https://starlight.astro.build/) — 文档站点主题
- Markdown / MDX — 内容格式

## 贡献

欢迎贡献！请查看 [贡献指南](CONTRIBUTING.md)。

## 许可证

MIT License
