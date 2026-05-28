# CV Wiki

面向计算机视觉学习、面试和工程实践的开源知识库。

## 项目简介

CV Wiki 不是单纯的八股题库，而是希望把每个知识点讲成：

- **能学懂** — 从直觉出发，配合图示和代码
- **能面试** — 附带标准回答和高频追问
- **能落地** — 包含工程实践和常见坑
- **能查阅** — 结构化组织，快速定位

## 内容模块

- 深度学习基础（CNN、BatchNorm、激活函数、损失函数）
- 图像处理基础（滤波、边缘检测、形态学操作）
- 目标检测（R-CNN、YOLO、NMS、mAP）
- 图像分割（U-Net、DeepLab、Mask R-CNN）
- 模型部署（ONNX、TensorRT、量化）
- 面试题库

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
