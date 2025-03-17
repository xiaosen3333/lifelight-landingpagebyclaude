/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // 网站的基本URL
  siteUrl: 'https://lifelight.app',
  // 更改频率，默认为daily
  changefreq: 'weekly',
  // 生成的站点地图的优先级(0.0-1.0)
  priority: 0.7,
  // 是否生成robots.txt文件
  generateRobotsTxt: true,
  // robots.txt的额外规则
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // 排除的路径
  exclude: ['/404', '/500', '/server-sitemap.xml'],
  
  // 生成的站点地图文件名
  sitemapName: 'lifelight-sitemap.xml',
  
  // 多语言支持 - 列出所有语言代码
  alternateRefs: [
    {
      href: 'https://lifelight.app',
      hreflang: 'en',
    },
    {
      href: 'https://lifelight.app/zh',
      hreflang: 'zh',
    },
    {
      href: 'https://lifelight.app/zh-TW',
      hreflang: 'zh-TW',
    },
    {
      href: 'https://lifelight.app/ja', 
      hreflang: 'ja',
    },
  ],
  
  // 生成的文件
  outDir: 'public',
  
  // 在构建过程中可选的变换函数来调整站点地图 URL
  transform: async (config, path) => {
    // 自定义路径变换逻辑
    // 为基本URL路径定义最高优先级
    if (path === '') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        alternateRefs: config.alternateRefs,
      };
    }
    
    // 返回默认配置
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: config.alternateRefs,
    };
  },
};