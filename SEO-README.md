# Lifelight网站SEO与站点地图指南

## 概述

本文档提供Lifelight站点SEO优化和站点地图使用的综合指南。所有SEO改进已实现并准备就绪，包括多语言支持。

## 实现的SEO功能

### 1. SEO组件
- 路径：`/src/components/SEO.jsx`
- 功能：
  - 标题和描述的动态生成
  - 自动生成规范链接
  - 多语言hreflang标签
  - Open Graph和Twitter卡片标签
  - 结构化数据(Schema.org)标记

### 2. 站点地图
- 使用 `next-sitemap` 生成：配置文件位于 `/next-sitemap.config.js`
- 站点地图自动生成到：`/public/sitemap.xml` 和 `/public/sitemap-index.xml`
- 支持多语言自动处理
- 包含hreflang标签自动生成
- 构建后会自动生成 (使用 `npm run build` 命令)

### 3. Robots.txt
- 路径：`/public/robots.txt`
- 允许搜索引擎爬取所有页面
- 指向站点地图文件

### 4. 国际化SEO
- 支持四种语言：英语、简体中文、繁体中文和日语
- 每个页面都有适当的语言标签
- 每个语言版本都有自己的元描述和标题

## 如何添加新页面

当添加新页面时，请遵循以下步骤以确保SEO优化：

1. **使用SEO组件**：
```jsx
import SEO from '@/components/SEO';

export default function YourNewPage() {
  const { t } = useTranslation('common');
  
  return (
    <Layout>
      <SEO
        title={t('seo.yourPageMeta.title')}
        description={t('seo.yourPageMeta.description')}
        openGraph={{
          type: 'website',
          title: t('seo.yourPageMeta.title'),
          description: t('seo.yourPageMeta.description'),
        }}
      />
      
      {/* 页面内容 */}
    </Layout>
  );
}
```

2. **添加翻译**：
在所有语言文件中添加相应的SEO翻译：
- `/public/locales/en/common.json`
- `/public/locales/zh/common.json`
- `/public/locales/zh-TW/common.json`
- `/public/locales/ja/common.json`

```json
{
  "seo": {
    "yourPageMeta": {
      "title": "页面标题 | Lifelight",
      "description": "关于此页面的简洁描述，最佳长度为150-160个字符。"
    }
  }
}
```

3. **更新站点地图**：
请参考 `SITEMAP-UPDATE-GUIDE.md` 文件中的详细指南。

## SEO最佳实践

- **标题**：每个页面应有独特的标题，长度为50-60个字符。
- **描述**：简洁有力，包含关键词，长度为150-160个字符。
- **图片**：所有图像都应有描述性的alt文本。
- **URL结构**：保持简短、描述性并使用连字符(-)。
- **内部链接**：创建合理的内部链接结构。
- **页面加载速度**：使用OptimizedImage组件和其他性能优化。

## 网站验证和分析

建议设置以下工具来监控和优化SEO：

1. **Google Search Console**：验证站点所有权并监控搜索性能。
2. **Bing Webmaster Tools**：针对Bing和Yahoo搜索引擎优化。
3. **Google Analytics**：追踪访问者行为和流量来源。
4. **站点地图验证**：定期检查站点地图是否有效。

## 注意事项

- 动态站点地图需要服务器环境正确配置才能正常工作。
- 静态站点地图作为备份，确保您的网站始终可被搜索引擎发现。
- 当网站内容发生重大变化时，请记得更新站点地图。