import React from 'react';
import { useTranslation } from 'next-i18next';
import OptimizedImage from './OptimizedImage';

const InsightsSection = () => {
  const { t } = useTranslation('common');
  
  return (
    <section id="insights" className="section relative overflow-hidden">
      {/* 透明蓝色背景 */}
      <div className="absolute inset-0 bg-blue-100/40 -z-10"></div>
      
      {/* 背景装饰元素 */}
      <div className="absolute top-40 left-[10%] w-80 h-80 bg-space-purple-light/10 rounded-full blur-3xl animate-float -z-5"></div>
      <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-space-purple/10 rounded-full blur-3xl animate-float delay-700 -z-5"></div>
      <div className="absolute inset-0 opacity-5 z-[-8]" style={{
        backgroundImage: "url('/optimized/鲸鱼背景.webp')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.03
      }}></div>
      
      <div className="container relative z-10">
        {/* 标题部分 */}
        <div className="mb-12 slide-in-right">
          <div className="flex flex-row items-center mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col w-[50%]">
              <div className="inline-block self-start px-3 py-1 rounded-xl bg-space-purple bg-opacity-10 text-space-purple font-medium text-base mb-2">
                {t('insights.badge')}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">{t('insights.title')}</h2>
            </div>
            <div className="flex-grow flex flex-row items-start justify-end gap-6">
              {t('insights.features', { returnObjects: true }).slice(0, 3).map((item, index) => (
                <div key={index} className="flex flex-col items-center w-1/5">
                  <div className="w-10 h-10 rounded-full bg-space-purple/10 flex items-center justify-center mb-2">
                    <span className="text-space-purple text-lg">{index === 0 ? "📊" : index === 1 ? "🧠" : "✨"}</span>
                  </div>
                  <span className="text-sm font-medium text-center line-clamp-2">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 图片部分 */}
        <div className="relative max-w-4xl mx-auto mb-12 slide-in-left">
          <div className="bg-white rounded-[20px] shadow-xl overflow-hidden transform transition-transform hover:scale-[1.01] duration-300">
            <OptimizedImage
              src="/optimized/5.webp"
              alt="Insights Feature Screenshot"
              width={1080}
              height={1920}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute -top-5 -right-5 p-4 glass-effect rounded-xl shadow-lg z-10 animate-bounce-gentle">
            <OptimizedImage src="/optimized/image 49.webp" alt="Insights Emoji" width={40} height={40} className="w-10 h-10" />
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
        
        {/* 替代产品部分 */}
        <div className="mt-1 flex flex-row max-w-4xl mx-auto mb-12 items-center gap-5">
          <h3 className="text-lg font-bold text-center m-0">{t('insights.alternatives')}</h3>
          <div className="flex justify-start items-center gap-6 flex-wrap">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-space-purple/10 flex items-center justify-center">
                <span className="text-lg">📊</span>
              </div>
              <span className="font-medium">{t('insights.alternative.exist', 'Exist')}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-space-purple/10 flex items-center justify-center">
                <span className="text-lg">📈</span>
              </div>
              <span className="font-medium">{t('insights.alternative.welltory', 'Welltory')}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-space-purple/10 flex items-center justify-center">
                <span className="text-lg">🧮</span>
              </div>
              <span className="font-medium">{t('insights.alternative.gyroscope', 'Gyroscope')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;