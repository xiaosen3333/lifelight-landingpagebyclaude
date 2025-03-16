/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'es'],
  },
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;