---
title: 学习路线
description: CV Wiki 推荐的计算机视觉学习路径
---

# 学习路线

## 第一阶段：深度学习基础（1-2 周）

先打好基础，理解深度学习的核心概念。

### 必学内容

- [CNN 基础](/basics/cnn) — 卷积神经网络是 CV 的基石
- [BatchNorm](/basics/batchnorm) — 训练深度网络的关键技术
- [激活函数](/basics/activation) — 理解非线性变换的作用
- [损失函数](/basics/loss-functions) — 不同任务需要不同的损失函数

### 学习目标

- 能解释卷积操作的计算过程
- 理解感受野的概念
- 知道 BatchNorm 为什么有效
- 能根据任务选择合适的激活函数和损失函数

---

## 第二阶段：图像处理基础（1 周）

掌握经典的图像处理方法，这些是理解深度学习方法的基础。

### 必学内容

- [滤波](/image-processing/filtering) — 均值滤波、高斯滤波、中值滤波
- [边缘检测](/image-processing/edge-detection) — Sobel、Canny 等经典方法
- [形态学操作](/image-processing/morphology) — 膨胀、腐蚀、开运算、闭运算

### 学习目标

- 能手写卷积操作
- 理解不同滤波器的作用
- 掌握边缘检测的基本原理

---

## 第三阶段：目标检测（2-3 周）

目标检测是 CV 最重要的应用之一。

### 必学内容

- [目标检测综述](/detection/overview) — 理解检测任务的整体框架
- [R-CNN 系列](/detection/rcnn) — 两阶段检测器的演进
- [YOLO 系列](/detection/yolo) — 单阶段检测器的代表
- [NMS](/detection/nms) — 后处理的核心算法
- [mAP](/detection/map) — 评估指标的理解

### 学习目标

- 能区分一阶段和两阶段检测器
- 理解 Anchor 的概念
- 能解释 NMS 的流程
- 知道 mAP 的计算方法

---

## 第四阶段：图像分割（1-2 周）

图像分割是像素级别的分类任务。

### 必学内容

- [图像分割综述](/segmentation/overview) — 语义分割、实例分割、全景分割的区别
- [U-Net](/segmentation/unet) — 医学图像分割的经典网络
- [DeepLab](/segmentation/deeplab) — 空洞卷积和 ASPP
- [Mask R-CNN](/segmentation/mask-rcnn) — 实例分割的代表方法

### 学习目标

- 能区分三种分割任务
- 理解 U-Net 的编码器-解码器结构
- 知道空洞卷积的作用

---

## 第五阶段：模型部署（1 周）

把模型从实验室搬到生产环境。

### 必学内容

- [ONNX](/deployment/onnx) — 模型交换格式
- [TensorRT](/deployment/tensorrt) — NVIDIA 推理优化
- [模型量化](/deployment/quantization) — INT8 量化原理和实践

### 学习目标

- 能把 PyTorch 模型导出为 ONNX
- 理解 TensorRT 优化的基本原理
- 知道量化的利弊

---

## 第六阶段：面试准备（持续）

按模块复习高频面试题。

### 面试题库

- [CV 基础面试题](/interview/cv-basic)
- [目标检测面试题](/interview/detection)
- [图像分割面试题](/interview/segmentation)
- [模型部署面试题](/interview/deployment)

### 面试建议

- 每个知识点准备 1-3 段口述回答
- 重点理解"为什么"而不只是"是什么"
- 准备 1-2 个实际项目经验来佐证
