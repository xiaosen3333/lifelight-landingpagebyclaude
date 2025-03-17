# 站点地图更新指南（使用 next-sitemap）

本文档提供有关如何使用 `next-sitemap` 包更新网站站点地图的指南，确保搜索引擎能够发现和索引所有页面和语言版本。

## 安装 next-sitemap

如果尚未安装，请运行以下命令安装 `next-sitemap` 包：

```bash
npm install --save-dev next-sitemap
```

## 配置文件

站点地图配置文件位于：`/next-sitemap.config.js`

## 自动生成站点地图

站点地图会在每次构建项目后自动生成。有两种方式可以生成站点地图：

1. **构建时自动生成**：
   ```bash
   npm run build
   ```
   由于我们在 `package.json` 中配置了 `postbuild` 脚本，站点地图会在构建后自动生成。

2. **手动生成站点地图**：
   ```bash
   npm run generate-sitemap
   ```

生成的文件会位于以下位置：
- 站点地图：`/public/lifelight-sitemap.xml`
- 站点地图索引：`/public/sitemap-index.xml`
- Robots.txt 文件：`/public/robots.txt`

## 添加新页面

使用 `next-sitemap` 时，您**不需要**手动添加新页面到站点地图中。该工具会自动检测 Next.js 项目中的所有页面并将它们添加到站点地图中。

**注意**：确保新页面遵循 Next.js 的路由规则，放置在 `/src/pages/` 目录中。

## 添加新语言或自定义 URL

如果需要添加新的语言支持或自定义特定页面的 URL 处理，请编辑 `/next-sitemap.config.js` 文件：

1. **添加新语言**：
   ```javascript
   module.exports = {
     // ... 其他配置
     alternateRefs: [
       {
         href: 'https://lifelight.app',
         hreflang: 'en',
       },
       {
         href: 'https://lifelight.app/zh',
         hreflang: 'zh',
       },
       // 添加新语言
       {
         href: 'https://lifelight.app/fr',
         hreflang: 'fr',
       },
     ],
   };
   ```

2. **自定义特定页面**：
   在 `transform` 函数中添加自定义逻辑：
   ```javascript
   transform: async (config, path) => {
     // 特定页面的自定义配置
     if (path === '/important-page') {
       return {
         loc: path,
         changefreq: 'daily',  // 更改为每天
         priority: 0.9,        // 更高的优先级
         alternateRefs: config.alternateRefs,
       };
     }
     
     // 默认配置
     return {
       loc: path,
       changefreq: config.changefreq,
       priority: config.priority,
       alternateRefs: config.alternateRefs,
     };
   },
   ```

## 排除页面

如果需要从站点地图中排除某些页面，请在配置文件中使用 `exclude` 选项：

```javascript
module.exports = {
  // ... 其他配置
  exclude: ['/admin/*', '/private/*', '/404', '/500'],
};
```

## 验证站点地图

生成站点地图后，您可以通过以下方式验证：

1. 在浏览器中访问 `https://yoursite.com/sitemap.xml` 确保它正确生成
2. 使用 [Google Search Console](https://search.google.com/search-console) 提交和测试站点地图
3. 使用在线站点地图验证工具检查XML格式是否有效

## 最佳实践

- 每次更新网站结构后重新生成站点地图
- 在部署前运行构建脚本确保站点地图是最新的
- 定期检查 `robots.txt` 文件确保它正确指向站点地图
- 监控 Google Search Console 以确保搜索引擎正确抓取您的站点