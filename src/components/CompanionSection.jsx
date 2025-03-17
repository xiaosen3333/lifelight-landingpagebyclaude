import React from 'react';
import { useTranslation } from 'next-i18next';
import OptimizedImage from './OptimizedImage';
import { useRouter } from 'next/router';

const CompanionSection = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  
  return (
    <section id="companion" className="section bg-white">
      
      <div className="container">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-rose-pink bg-opacity-10 text-rose-pink font-medium">
              {t('companion.badge')}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('companion.title')}</h2>
            <p className="text-gray-700 mb-4 text-base line-clamp-2">
              {t('companion.description')}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {t('companion.features', { returnObjects: true }).map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-rose-pink mr-2 flex-shrink-0">✓</span>
                  <span className="text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
                <OptimizedImage
                  src="/optimized/3.webp"
                  alt={t('companion.title')}
                  width={1080}
                  height={1920}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -top-5 -left-5 p-4 glass-effect rounded-xl shadow-lg z-10 animate-bounce-gentle">
                <OptimizedImage src="/optimized/image 47.webp" alt="Companion Emoji" width={40} height={40} className="w-10 h-10" />
              </div>

              <div className="absolute top-1/2 -right-5 p-4 glass-effect rounded-xl shadow-lg z-10 hover:shadow-rose-pink/30 transition-shadow animate-float delay-300 group">
                <div className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                  <span className="block">AI {t('header.companion')}</span>
                  <span className="text-rose-pink font-bold">{t('companion.personalized')}</span>
                </div>
              </div>

              <div className="absolute -bottom-8 left-10 p-4 glass-effect rounded-xl shadow-lg z-10 hover:shadow-rose-pink/30 transition-shadow animate-float delay-700 group">
                <div className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                  <span className="block text-rose-pink font-bold">AI {t('companion.friend')}</span>
                  <span>{t('companion.alwaysWithYou')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanionSection;