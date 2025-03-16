import React from 'react';
import { useTranslation } from 'next-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation('common');
  
  const features = [
    {
      icon: '✏️',
      titleKey: 'features.journal.title',
      descriptionKey: 'features.journal.description',
      color: 'primary-color',
      badgeClass: 'badge-primary'
    },
    {
      icon: '🤝',
      titleKey: 'features.companion.title',
      descriptionKey: 'features.companion.description',
      color: 'rose-pink',
      badgeClass: 'badge-rose'
    },
    {
      icon: '🖼️',
      titleKey: 'features.gallery.title',
      descriptionKey: 'features.gallery.description',
      color: 'mint-blue',
      badgeClass: 'badge-mint'
    },
    {
      icon: '💡',
      titleKey: 'features.insights.title',
      descriptionKey: 'features.insights.description',
      color: 'space-purple',
      badgeClass: 'badge-purple'
    },
    {
      icon: '🔒',
      titleKey: 'features.privacy.title',
      descriptionKey: 'features.privacy.description',
      color: 'primary-color',
      badgeClass: 'badge-primary'
    },
    {
      icon: '🌈',
      titleKey: 'features.personalization.title',
      descriptionKey: 'features.personalization.description',
      color: 'rose-pink',
      badgeClass: 'badge-rose'
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card glass-effect p-6 hover:border-primary-color transition-all fade-in z-10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-bold mb-2 text-${feature.color}`}>
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;