import React from 'react';
import { useTranslation } from 'next-i18next';

const GallerySection = () => {
  const { t } = useTranslation('common');
  
  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="order-2 md:order-1 md:col-span-3 slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
                <img
                  src="/sources/4.png"
                  alt={t('gallery.imageAlt')}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 p-4 glass-effect rounded-xl shadow-lg z-10 animate-wiggle">
                <img src="/sources/image 48.png" alt={t('gallery.emojiAlt')} className="w-10 h-10" />
              </div>

              <div className="absolute -top-5 right-10 p-4 glass-effect rounded-xl shadow-lg z-10 flex items-center space-x-2 hover:shadow-mint-blue/30 transition-shadow animate-bounce-gentle delay-500 group">
                <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🗓️</span>
                <span className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">{t('gallery.calendarView')}</span>
              </div>

              <div className="absolute -bottom-8 right-10 p-4 glass-effect rounded-xl shadow-lg z-10 hover:shadow-mint-blue/30 transition-shadow animate-float delay-300 group">
                <div className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                  <span className="block text-mint-blue font-bold">{t('gallery.quoteLine1')}</span>
                  <span>{t('gallery.quoteLine2')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-2 slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-mint-blue bg-opacity-10 text-mint-blue font-medium">
              {t('gallery.badge')}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('gallery.title')}</h2>
            <p className="text-gray-700 mb-4 text-base line-clamp-2">
              {t('gallery.description')}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {t('gallery.features', { returnObjects: true }).map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-mint-blue mr-2 flex-shrink-0">✓</span>
                  <span className="text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;