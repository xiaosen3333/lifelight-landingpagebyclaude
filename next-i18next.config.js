/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'es'],
    localeDetection: true,
  },
  localePath: './public/locales',
};