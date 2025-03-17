const path = require('path');

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja'],
    localeDetection: true,
  },
  localePath: path.resolve('./public/locales'),
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  
  // Prevent loading default namespace from a server endpoint
  load: 'all',
  
  // Force load for all locales on startup
  preload: ['en', 'zh', 'ja'],
  
  // Set detection order 
  detection: {
    order: ['path', 'htmlTag', 'cookie', 'header'],
    caches: ['cookie'],
  },
  
  // Ensure arrays in translations are properly handled
  returnObjects: true,
  returnEmptyString: false
};