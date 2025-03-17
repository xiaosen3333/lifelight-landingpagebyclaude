import React from 'react';
import { useTranslation } from 'next-i18next';

const InsightsSection = () => {
  const { t } = useTranslation('common');
  
  return (
    <section id="insights" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-space-purple bg-opacity-10 text-space-purple font-medium">
              {t('insights.badge')}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t('insights.title')}</h2>
            <p className="text-gray-700 mb-4 text-base line-clamp-2">
              {t('insights.description')}
            </p>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {t('insights.features', { returnObjects: true }).map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-space-purple mr-2 flex-shrink-0">✓</span>
                  <span className="text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
                <img
                  src="/sources/5.png"
                  alt="Insights Feature Screenshot"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -top-5 -right-5 p-4 glass-effect rounded-xl shadow-lg z-10 animate-bounce-gentle">
                <img src="/sources/image 49.png" alt="Insights Emoji" className="w-10 h-10" />
              </div>

              <div className="absolute bottom-10 -left-5 p-4 glass-effect rounded-xl shadow-lg z-10 hover:shadow-space-purple/30 transition-shadow animate-float delay-100 group">
                <div className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                  <span className="block">AI {t('insights.analysis')}</span>
                  <span className="text-space-purple font-bold">{t('insights.personalizedInsights')}</span>
                </div>
              </div>

              <div className="absolute -bottom-8 right-10 p-4 glass-effect rounded-xl shadow-lg z-10 hover:shadow-space-purple/30 transition-shadow animate-float delay-500 group">
                <div className="text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                  <span className="block text-space-purple font-bold">"{t('insights.understand')}</span>
                  <span>{t('insights.journey')}"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;