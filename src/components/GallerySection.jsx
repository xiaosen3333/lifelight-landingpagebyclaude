import React from 'react';
import { useTranslation } from 'next-i18next';

const GallerySection = () => {
  const { t } = useTranslation('common');
  
  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                <img
                  src="/sources/4.png"
                  alt={t('gallery.imageAlt')}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 p-4 glass-effect rounded-xl shadow-lg z-10">
                <img src="/sources/image 48.png" alt={t('gallery.emojiAlt')} className="w-10 h-10" />
              </div>

              <div className="absolute -top-5 right-10 p-4 glass-effect rounded-xl shadow-lg z-10 flex items-center space-x-2">
                <span className="text-2xl">🗓️</span>
                <span className="text-sm font-medium">{t('gallery.calendarView')}</span>
              </div>

              <div className="absolute -bottom-8 right-10 p-4 glass-effect rounded-xl shadow-lg z-10">
                <div className="text-sm font-medium">
                  <span className="block text-mint-blue">{t('gallery.quoteLine1')}</span>
                  <span>{t('gallery.quoteLine2')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-mint-blue bg-opacity-10 text-mint-blue font-medium">
              {t('gallery.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('gallery.title')}</h2>
            <p className="text-gray-700 mb-8 text-lg">
              {t('gallery.description')}
            </p>

            <ul className="space-y-4">
              {t('gallery.features', { returnObjects: true }).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-mint-blue mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;