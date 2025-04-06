# Lifelight Landing Page - 项目技术指南

## 1. 项目概述

Lifelight Landing Page 是一个使用 Next.js 构建的现代多语言着陆页网站。该项目旨在展示 Lifelight 应用，这是一款情感记录和自我成长的移动应用程序。项目包含多种组件和页面，支持四种语言，并实现了多种现代网站开发的最佳实践。

## 2. 技术栈

### 核心技术
- **Next.js**: v14.0.3 - React 框架，提供服务端渲染、静态站点生成和路由功能
- **React**: v18.2.0 - 用户界面库
- **Tailwind CSS**: v3.3.5 - 实用工具优先的 CSS 框架
- **next-i18next**: v15.0.0 - Next.js 的国际化解决方案

### 其他依赖
- **framer-motion**: v10.16.4 - 高级动画库
- **@svgr/webpack**: v8.1.0 - 将 SVG 转换为 React 组件
- **sharp**: v0.33.5 - 图像处理库，用于图像优化
- **next-sitemap**: v4.2.3 - 自动生成站点地图

## 3. 项目结构

```
lifelight-landingpagebyclaude/
├── public/                     # 静态资源
│   ├── favicon.ico             # 网站图标
│   ├── icons/                  # SVG 图标
│   ├── locales/                # 翻译文件
│   │   ├── en/                 # 英语
│   │   ├── zh/                 # 简体中文
│   │   ├── zh-TW/              # 繁体中文
│   │   └── ja/                 # 日语
│   ├── optimized/              # 优化后的图像
│   ├── robots.txt              # 搜索引擎爬虫指令
│   └── sitemap.xml             # 网站地图
├── scripts/                    # 脚本工具
│   └── optimize-images.js      # 图像优化脚本
├── src/
│   ├── components/             # 可复用组件
│   │   ├── CompanionSection.jsx  # AI 伴侣功能部分
│   │   ├── DownloadSection.jsx   # 应用下载部分
│   │   ├── FeaturesSection.jsx   # 特性展示部分
│   │   ├── Footer.jsx            # 页脚组件
│   │   ├── GallerySection.jsx    # 相册功能部分
│   │   ├── Header.jsx            # 页头导航
│   │   ├── HeroSection.jsx       # 主视觉部分
│   │   ├── InsightsSection.jsx   # 数据洞察部分
│   │   ├── JournalSection.jsx    # 日记功能部分
│   │   ├── OptimizedImage.jsx    # 图像优化组件
│   │   ├── SEO.jsx               # SEO 元数据组件
│   │   └── TestimonialsSection.jsx # 用户评价部分
│   ├── pages/                  # 页面组件和路由
│   │   ├── _app.jsx            # 应用入口
│   │   ├── _document.jsx       # HTML 文档定制
│   │   ├── index.jsx           # 首页
│   │   ├── download.jsx        # 下载页
│   │   ├── pricing.jsx         # 价格页
│   │   ├── product/            # 产品子页面
│   │   │   └── todo.jsx        # 待办事项功能页
│   │   └── users/              # 用户相关页面
│   │       └── journal-lovers.jsx # 日记爱好者页面
│   └── styles/                 # 样式文件
│       └── globals.css         # 全局样式
├── CLAUDE.md                   # 设计指南文档
├── SEO-README.md               # SEO 指南文档
├── SITEMAP-UPDATE-GUIDE.md     # 站点地图更新指南
├── next.config.js              # Next.js 配置
├── next-i18next.config.js      # 国际化配置
├── next-sitemap.config.js      # 站点地图配置
├── package.json                # 项目依赖和脚本
├── postcss.config.js           # PostCSS 配置
└── tailwind.config.js          # Tailwind CSS 配置
```

## 4. 架构设计

### 组件系统
项目使用模块化组件设计，主要分为以下几类：

1. **布局组件**：如 Header 和 Footer，提供全局一致的界面架构
2. **页面组件**：对应路由的完整页面，如 index.jsx, download.jsx
3. **部分组件**：页面中的主要部分，如 HeroSection, FeaturesSection
4. **通用组件**：如 OptimizedImage 和 SEO，提供可复用的功能

### 数据流设计
- **静态内容**：大部分内容通过翻译文件提供
- **组件内状态**：使用 React 的 useState 和 useEffect 管理局部状态
- **国际化**：使用 next-i18next 管理多语言文本

### 路由结构
项目使用 Next.js 的文件系统路由：
```
/                       # 首页
/download               # 下载页
/pricing                # 价格页
/product/todo           # 待办功能页
/users/journal-lovers   # 日记爱好者页面
```

## 5. 特色功能实现

### 国际化实现
- 使用 `next-i18next` 实现多语言支持
- 支持英语、简体中文、繁体中文和日语四种语言
- 翻译文件存放在 `/public/locales/[语言代码]/common.json`
- 组件内使用 `useTranslation` 钩子访问文本：

```jsx
const { t } = useTranslation('common');
return <h2>{t('section.title')}</h2>;
```

### 图像优化
- 自定义 `OptimizedImage` 组件封装 Next.js Image
- 支持懒加载、模糊占位符和加载动画
- 使用 Sharp 库优化图像，使用 WebP 格式

```jsx
<OptimizedImage
  src="/optimized/image.webp"
  alt="描述"
  width={800}
  height={600}
  className="rounded-[20px]"
  priority={true}
/>
```

### SEO 实现
- 自定义 SEO 组件自动处理元标签
- 多语言 hreflang 标签自动生成
- 集成了站点地图和 robots.txt

```jsx
<SEO
  title={t('seo.home.title')}
  description={t('seo.home.description')}
  openGraph={{
    type: 'website',
    title: t('seo.home.title'),
    description: t('seo.home.description'),
  }}
/>
```

### 样式系统
- 基于 Tailwind CSS 的自定义设计系统
- 扩展了颜色、字体、阴影和动画
- 组件采用响应式设计，适配桌面和移动设备

## 6. 设计系统

### 颜色系统
- **主色**：橙色 (#FF7400)
- **主题色变体**：玫瑰粉、薄荷蓝、空间紫、咖啡棕
- **中性色**：背景灰、分隔线、文本色等

### 排版系统
- **主要字体**：SF Pro (无衬线)
- **英文衬线字体**：New York
- **中文衬线字体**：Source Han Serif CN

### 组件样式
- **按钮**：主按钮、次按钮、主题色按钮
- **卡片**：特性卡片、证言卡片、玻璃效果
- **徽章**：五种颜色主题的徽章
- **文本效果**：渐变文本、强调文本

### 动画效果
- 淡入 (fade-in)
- 上滑 (slide-up)
- 从两侧滑入 (slide-in-right, slide-in-left)
- 悬浮 (float)
- 弹跳 (bounce-gentle)
- 脉动 (pulse-slow)
- 轻摇 (wiggle)
- 弹出 (pop-in)

## 7. 性能优化

- **图像优化**：使用 WebP 格式和 Next.js Image
- **代码优化**：SVG 作为 React 组件处理减少请求
- **构建优化**：自动生成站点地图和图像优化脚本
- **缓存控制**：适当的缓存头部设置

## 8. 开发流程

### 脚本命令
- `npm run dev`: 启动开发服务器
- `npm run build`: 构建生产版本
- `npm run start`: 启动生产服务器
- `npm run lint`: 运行代码检查
- `npm run optimize-images`: 运行图像优化脚本
- `npm run generate-sitemap`: 生成站点地图

### 添加新页面流程
1. 在 `src/pages` 目录创建新的页面文件
2. 在所有语言文件中添加页面相关的文本
3. 使用 SEO 组件添加元数据
4. 更新站点地图（自动或手动）

## 9. 最佳实践指南

### 代码风格
- 遵循 ESLint 规则
- 组件使用 JSX 格式
- 使用功能性组件和 React Hooks

### 国际化
- 所有文本使用翻译 key
- 避免硬编码文本
- 翻译文件保持结构一致

### 样式使用
- 主要使用 Tailwind 类
- 遵循设计指南中的样式组件
- 保持响应式设计

### SEO 最佳实践
- 每个页面有唯一标题
- 提供描述性的元描述
- 图像有描述性的 alt 文本
- URL 结构简洁明了
