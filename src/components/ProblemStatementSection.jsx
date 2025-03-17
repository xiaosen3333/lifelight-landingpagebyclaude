import React from 'react';
import { useTranslation } from 'next-i18next';

const ProblemStatementSection = () => {
  const { t } = useTranslation('common');
  
  // Get problem points from translations
  const problemPoints = t('problem.points', { returnObjects: true }) || [];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-pink/5 to-primary-light/5 -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-bg-gray to-transparent -z-5"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-bg-gray to-transparent -z-5"></div>
      
      {/* Curved connector shape at top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden -z-5">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120%] h-40 bg-gradient-to-br from-white to-white rounded-[100%] translate-y-[-60%]"></div>
      </div>
      
      {/* Main content */}
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight" 
            dangerouslySetInnerHTML={{ __html: t('problem.title') }}
          ></h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t('problem.subtitle')}
          </p>
        </div>
        
        {/* Problem points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problemPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white rounded-large p-8 shadow-subtle hover:shadow-elevated transition-all duration-500 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex mb-4 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-subtle mr-4 bg-gradient-to-br group-hover:scale-110 transition-transform duration-500 group-hover:shadow-glow"
                  style={{
                    background: index === 0 ? 'linear-gradient(to bottom right, #FE2C58, #F3AAB1)' : 
                             index === 1 ? 'linear-gradient(to bottom right, #7963E1, #A9AFEB)' :
                             index === 2 ? 'linear-gradient(to bottom right, #00B2BC, #00C7BD)' :
                             'linear-gradient(to bottom right, #FF7400, #F9A946)'
                  }}
                >
                  <span className="text-white">{point.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient-primary transition-colors duration-300">{point.title}</h3>
                  <p className="text-gray-700">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Solution statement */}
        <div className="max-w-3xl mx-auto text-center p-6 bg-gradient-to-r from-primary-color/10 to-primary-light/10 rounded-xl shadow-subtle">
          <p className="text-lg font-medium">
            {t('problem.solution')}
          </p>
        </div>
        
        {/* Visual divider */}
        <div className="flex justify-center mt-16">
          <div className="w-16 h-1 bg-gradient-primary rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;