#!/bin/bash

# 合并所有站点的构建输出到 dist 目录

set -e

echo "开始合并站点..."

# 清空 dist 目录
rm -rf dist
mkdir -p dist

# 复制主站（首页）
echo "复制主站..."
cp -r sites/home/dist/* dist/

# 复制 CV 站点
echo "复制 CV 站点..."
mkdir -p dist/cv
cp -r sites/cv/dist/* dist/cv/

# 复制 LLM 站点
echo "复制 LLM 站点..."
mkdir -p dist/llm
cp -r sites/llm/dist/* dist/llm/

# 复制多模态站点
echo "复制多模态站点..."
mkdir -p dist/multimodal
cp -r sites/multimodal/dist/* dist/multimodal/

# 复制面试题库站点
echo "复制面试题库站点..."
mkdir -p dist/interview
cp -r sites/interview/dist/* dist/interview/

echo "合并完成！"
echo "dist 目录结构："
ls -la dist/
