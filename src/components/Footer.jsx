import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import OptimizedImage from './OptimizedImage';

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
        <div className="flex flex-col items-center text-center">
          <Link href="/">
            <div className="flex items-center gap-2 mb-4">
              <OptimizedImage
                src="/optimized/lifelightIconCircleBorder.webp"
                alt="Lifelight Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-2xl font-rounded text-white">Lifelight</span>
            </div>
          </Link>
          <p className="text-gray-400 mb-8 max-w-2xl" dangerouslySetInnerHTML={{ __html: t('footer.tagline') }}></p>
          
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;