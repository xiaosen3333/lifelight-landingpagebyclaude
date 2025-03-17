import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      {/* 陆地主题背景图 */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/optimized/陆地主题背景图.webp')",
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat"
        }}>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <div className="flex items-center font-bold text-2xl mb-4">
                <span className="text-gradient-primary">心光 Lifelight</span>
                <span className="text-gradient-rose ml-1"></span>
                <div className="ml-2 w-4 h-4 rounded-full bg-gradient-primary"></div>
              </div>
            </Link>
            <p className="text-gray-400 mb-4" dangerouslySetInnerHTML={{ __html: t('footer.tagline') }}>

            </p>

          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">{t('header.features')}</Link></li>
              <li><Link href="#journal" className="text-gray-400 hover:text-white transition-colors">{t('header.journal')}</Link></li>
              <li><Link href="#companion" className="text-gray-400 hover:text-white transition-colors">{t('header.companion')}</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">{t('header.gallery')}</Link></li>
              <li><Link href="#insights" className="text-gray-400 hover:text-white transition-colors">{t('header.insights')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.aboutUs')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.careers')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.contact')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.blog')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.helpCenter')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacyPolicy')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.termsOfService')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.faq')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.privacyPolicy')}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.termsOfService')}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;