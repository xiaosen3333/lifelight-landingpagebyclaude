import React from 'react';
import { useTranslation } from 'next-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation('common');
  
  const mainFeature = {
    icon: '✏️',
    titleKey: 'features.journal.title',
    descriptionKey: 'features.journal.description',
    color: 'primary-color',
    gradientClass: 'bg-gradient-primary',
    badgeClass: 'badge-primary'
  };
  
  const sideFeatures = [
    {
      icon: '🤝',
      titleKey: 'features.companion.title',
      descriptionKey: 'features.companion.description',
      color: 'rose-pink',
      gradientClass: 'bg-gradient-rose',
      badgeClass: 'badge-rose'
    },
    {
      icon: '🖼️',
      titleKey: 'features.gallery.title',
      descriptionKey: 'features.gallery.description',
      color: 'mint-blue',
      gradientClass: 'bg-gradient-mint',
      badgeClass: 'badge-mint'
    },
    {
      icon: '💡',
      titleKey: 'features.insights.title',
      descriptionKey: 'features.insights.description',
      color: 'space-purple',
      gradientClass: 'bg-gradient-purple',
      badgeClass: 'badge-purple'
    },
    {
      icon: '🌈',
      titleKey: 'features.personalization.title',
      descriptionKey: 'features.personalization.description',
      color: 'coffee-brown',
      gradientClass: 'bg-gradient-coffee',
      badgeClass: 'badge-coffee'
    }
  ];

  return (
    <section id="features" className="section bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main feature (larger, on the left) */}
          <div className="lg:col-span-2 slide-in-left">
            <div className="feature-card main-feature rounded-large overflow-hidden shadow-card hover:shadow-card-hover transition-all h-full">
              <div className={`${mainFeature.gradientClass} h-3`}></div>
              <div className="p-8 bg-white relative h-full flex flex-col">
                <div className="absolute top-0 left-0 w-32 h-32 opacity-5 bg-gradient-primary rounded-full -mt-16 -ml-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5 bg-gradient-primary rounded-full mb-5 mr-5"></div>
                
                <div className={`inline-flex items-center justify-center ${mainFeature.badgeClass} rounded-full w-16 h-16 mb-6`}>
                  <span className="text-3xl">{mainFeature.icon}</span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 text-gradient-primary`}>
                  {t(mainFeature.titleKey)}
                </h3>
                
                <p className="text-gray-600 text-lg mb-6 flex-grow">
                  {t(mainFeature.descriptionKey)}
                </p>
                
                <div className="inline-block mt-auto">
                  <span className={`py-2 px-4 rounded-full ${mainFeature.badgeClass} text-sm font-medium`}>
                    {t('features.learnMore')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Side features (smaller, on the right) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {sideFeatures.map((feature, index) => (
              <div
                key={index}
                className={`feature-card rounded-large overflow-hidden shadow-card hover:shadow-card-hover transition-all slide-in-right`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`${feature.gradientClass} h-2`}></div>
                <div className="p-5 bg-white relative">
                  <div className={`absolute top-0 right-0 w-20 h-20 opacity-5 ${feature.gradientClass} rounded-full -mt-10 -mr-10`}></div>
                  
                  <div className={`inline-flex items-center justify-center ${feature.badgeClass} rounded-full w-12 h-12 mb-4`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 text-gradient-${feature.color.split('-')[0]}`}>
                    {t(feature.titleKey)}
                  </h3>
                  
                  <p className="text-gray-600">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-lg transform -translate-x-1/3"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-mint opacity-5 rounded-full blur-lg"></div>
      <div className="absolute top-20 right-0 w-40 h-40 bg-gradient-purple opacity-5 rounded-full blur-lg transform translate-x-1/3"></div>
    </section>
  );
};

export default FeaturesSection;