# ResearchOS

> 学术研究管理平台 — 一站式科研项目管理、文献库、论文审阅与周报工具

## 项目简介

ResearchOS 是一个面向科研人员的网站原型，基于 [Figma 设计稿](https://www.figma.com/design/siXnbWHcX8doJVLf5xgtZO/%E7%BD%91%E7%AB%99%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1) 开发，提供科研全流程管理能力：从课题管理、文献收藏，到论文审阅和周报记录。

## 功能模块

| 页面 | 路由 | 说明 |
|------|------|------|
| 首页 (Home) | `/` | 仪表盘入口，展示推荐标签、任务筛选（全部/待处理/进行中/已完成）及快捷导航 |
| 科研 (Research) | `/research` | 项目与任务看板，支持看板/时间线/分析等视图，含进度条与团队成员管理 |
| 文献库 (Library) | `/library` | 学术论文仓库，按领域分类（SSM 模型、Transformer、医学影像、基础模型等），支持搜索与筛选 |
| 审阅 (Reviews) | `/reviews` | 论文审阅与版本管理，跟踪审稿状态（待审/审阅中/已完成）、评论数及变更日志 |
| 周报 (Weekly) | `/weekly` | 周报撰写与统计，展示完成率、已读论文数、实验次数、论文撰写数等月度指标 |
| 设置 (Settings) | `/settings` | 用户配置，包括个人资料、通知偏好、隐私权限、外观自定义及系统参数 |

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **样式**: Tailwind CSS 4
- **路由**: React Router 7
- **UI 组件**: shadcn/ui (Radix UI)
- **图标**: Lucide React
- **图表**: Recharts
- **动画**: Motion (Framer Motion)
- **主题**: 支持明亮 / 暗黑 / 护眼三种模式

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
ResearchOS/
├── src/
│   ├── main.tsx                  # 应用入口
│   ├── app/
│   │   ├── App.tsx               # 根组件（路由挂载）
│   │   ├── routes.ts             # 路由配置
│   │   ├── components/
│   │   │   ├── Navigation.tsx    # 顶部导航栏（含主题切换）
│   │   │   ├── figma/            # Figma 导出组件
│   │   │   └── ui/               # shadcn/ui 通用组件
│   │   └── pages/                # 各功能页面
│   ├── imports/                  # Figma 模板资源
│   └── styles/                   # 样式文件（Tailwind、主题变量）
├── index.html                    # HTML 入口
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

## 致谢

- [shadcn/ui](https://ui.shadcn.com/) — MIT License
- [Unsplash](https://unsplash.com) — 图片素材