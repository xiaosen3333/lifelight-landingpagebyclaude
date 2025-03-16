import React from 'react';
import { useTranslation } from 'next-i18next';

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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                <img
                  src="/sources/6.png"
                  alt={t('journal.imageAlt')}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 p-4 glass-effect rounded-xl shadow-lg z-10">
                <img src="/sources/image 46.png" alt={t('journal.emojiAlt')} className="w-10 h-10" />
              </div>

              {/* Quote bubble */}
              <div className="absolute -top-8 left-10 p-4 glass-effect rounded-xl shadow-lg z-10">
                <div className="text-sm font-medium">
                  <span className="block text-primary-color">"{t('journal.quoteLine1')}</span>
                  <span>{t('journal.quoteLine2')}"</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary-color bg-opacity-10 text-primary-color font-medium">
              {t('journal.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('journal.title')}</h2>
            <p className="text-gray-700 mb-8 text-lg">
              {t('journal.description')}
            </p>

            <ul className="space-y-4">
              {featureItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-color mr-3 mt-1">✓</span>
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;