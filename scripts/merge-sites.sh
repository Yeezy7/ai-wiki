#!/bin/bash

# 合并所有站点的构建输出到 dist 目录

set -e

echo "开始合并站点..."

# 保存主站构建输出
echo "保存主站构建输出..."
mkdir -p /tmp/ai-wiki-home
cp -r dist/* /tmp/ai-wiki-home/

# 清空 dist 目录
rm -rf dist
mkdir -p dist

# 复制主站（首页）
echo "复制主站..."
cp -r /tmp/ai-wiki-home/* dist/

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

# 清理临时文件
rm -rf /tmp/ai-wiki-home

echo "合并完成！"
echo "dist 目录结构："
ls -la dist/
