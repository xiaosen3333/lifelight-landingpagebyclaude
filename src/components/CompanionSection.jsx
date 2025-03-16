import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const CompanionSection = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  
  return (
    <section id="companion" className="section bg-white">
      
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-rose-pink bg-opacity-10 text-rose-pink font-medium">
              {t('companion.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('companion.title')}</h2>
            <p className="text-gray-700 mb-8 text-lg">
              {t('companion.description')}
            </p>

            <ul className="space-y-4">
              {t('companion.features', { returnObjects: true }).map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-rose-pink mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                <img
                  src="/sources/3.png"
                  alt={t('companion.title')}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -top-5 -left-5 p-4 glass-effect rounded-xl shadow-lg z-10">
                <img src="/sources/image 47.png" alt="Companion Emoji" className="w-10 h-10" />
              </div>

              <div className="absolute top-1/2 -right-5 p-4 glass-effect rounded-xl shadow-lg z-10">
                <div className="text-sm font-medium">
                  <span className="block">AI {t('header.companion')}</span>
                  <span className="text-rose-pink">{t('companion.personalized')}</span>
                </div>
              </div>

              <div className="absolute -bottom-8 left-10 p-4 glass-effect rounded-xl shadow-lg z-10">
                <div className="text-sm font-medium">
                  <span className="block text-rose-pink">AI {t('companion.friend')}</span>
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