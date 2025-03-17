// src/pages/sitemap.xml.js - 正确的Next.js API路由位置
const generateSitemap = (locales, defaultLocale) => {
  const baseUrl = 'https://lifelight.app';
  
  // Define the URLs for each page
  const pages = [
    '',           // Home page
    '/pricing',   // Pricing page
    '/download',  // Download page
    '/product/todo', // Product page
    '/users/journal-lovers' // User page
  ];

  // Generate XML entries for all pages and all supported languages
  let xmlEntries = '';
  
  // Create entries for each page in each language
  locales.forEach(locale => {
    pages.forEach(page => {
      // For default locale, don't include the locale prefix
      const localePath = locale === defaultLocale ? '' : `/${locale}`;
      const fullPath = `${baseUrl}${localePath}${page}`;
      
      xmlEntries += `
        <url>
          <loc>${fullPath}</loc>
          <changefreq>weekly</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
          ${locales.map(l => {
            // Don't create alternate links to itself
            if (l === locale) return '';
            const altLocalePath = l === defaultLocale ? '' : `/${l}`;
            return `<xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}${altLocalePath}${page}" />`;
          }).join('')}
          <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page}" />
        </url>`;
    });
  });

  // Complete sitemap XML
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${xmlEntries}
    </urlset>`;
};

export const getServerSideProps = async ({ res, locales, defaultLocale }) => {
  // Create the sitemap XML
  const sitemap = generateSitemap(locales, defaultLocale);

  // Set the appropriate headers
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  
  // Write the sitemap string to the response
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  // This component doesn't render anything
  return null;
}