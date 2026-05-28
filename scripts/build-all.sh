#!/bin/bash

# 构建所有站点并合并输出

set -e

echo "开始构建所有站点..."

# 构建主站
echo "构建主站..."
npm run build

# 构建 CV 站点
echo "构建 CV 站点..."
cd sites/cv
npm run build
cd ../..

# 构建 LLM 站点
echo "构建 LLM 站点..."
cd sites/llm
npm run build
cd ../..

# 构建多模态站点
echo "构建多模态站点..."
cd sites/multimodal
npm run build
cd ../..

# 构建面试题库站点
echo "构建面试题库站点..."
cd sites/interview
npm run build
cd ../..

# 合并所有站点
echo "合并所有站点..."
./scripts/merge-sites.sh

echo "所有站点构建完成！"
