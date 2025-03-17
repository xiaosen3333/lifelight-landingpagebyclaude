import React from 'react';
import { useTranslation } from 'next-i18next';
import OptimizedImage from './OptimizedImage';

const JournalSection = () => {
  const { t } = useTranslation('common');

  const featureItems = [
    'journal.features.0',
    'journal.features.1',
    'journal.features.2',
    'journal.features.3'
  ];

  return (
    <section id="journal" className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="order-2 md:order-1 md:col-span-3 slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
                <OptimizedImage
                  src="/optimized/6.webp"
                  alt={t('journal.imageAlt')}
                  width={1080}
                  height={1920}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 p-4 glass-effect rounded-xl shadow-lg z-10 animate-wiggle">
                <OptimizedImage src="/optimized/image 46.webp" alt={t('journal.emojiAlt')} width={40} height={40} className="w-10 h-10" />
              </div>

              {/* Quote bubble */}
              <div className="absolute -top-8 left-10 p-4 glass-effect rounded-xl shadow-lg z-10 hover:shadow-primary-color/30 transition-shadow animate-float group">
                <div className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                  <span className="block text-primary-color font-bold">"{t('journal.quoteLine1')}</span>
                  <span>{t('journal.quoteLine2')}"</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 md:col-span-2 slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary-color bg-opacity-10 text-primary-color font-medium">
              {t('journal.badge')}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('journal.title')}</h2>
            <p className="text-gray-700 mb-4 text-base line-clamp-2">
              {t('journal.description')}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {featureItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-primary-color mr-2 flex-shrink-0">✓</span>
                  <span className="text-xs font-medium">{t(item)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;