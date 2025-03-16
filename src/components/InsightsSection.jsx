import React from 'react';
import { useTranslation } from 'next-i18next';

const InsightsSection = () => {
  const { t } = useTranslation('common');
  
  return (
    <section id="insights" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-space-purple bg-opacity-10 text-space-purple font-medium">
              {t('insights.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('insights.title')}</h2>
            <p className="text-gray-700 mb-8 text-lg">
              {t('insights.description')}
            </p>

            <ul className="space-y-4">
              {t('insights.features', { returnObjects: true }).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-space-purple mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                <img
                  src="/sources/5.png"
                  alt="Insights Feature Screenshot"
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -top-5 -right-5 p-4 glass-effect rounded-xl shadow-lg z-10">
                <img src="/sources/image 49.png" alt="Insights Emoji" className="w-10 h-10" />
              </div>

              <div className="absolute bottom-10 -left-5 p-4 glass-effect rounded-xl shadow-lg z-10">
                <div className="text-sm font-medium">
                  <span className="block">AI {t('insights.analysis')}</span>
                  <span className="text-space-purple">{t('insights.personalizedInsights')}</span>
                </div>
              </div>

              <div className="absolute -bottom-8 right-10 p-4 glass-effect rounded-xl shadow-lg z-10">
                <div className="text-sm font-medium">
                  <span className="block text-space-purple">"{t('insights.understand')}</span>
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