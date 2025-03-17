import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const DownloadSection = () => {
  const { t } = useTranslation('common');

  return (
    <section id="download" className="section relative overflow-hidden">
      {/* Background Elements - using the orange gradient from design guide */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-primary-light opacity-10 -z-10"></div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light rounded-full opacity-10 blur-3xl -z-5"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rose-pink-light rounded-full opacity-10 blur-3xl -z-5"></div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('download.title')}
          </h2>
          <p className="text-xl mb-10 text-gray-700">
            {t('download.description')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a href="#" className="group flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
              {/* 微妙的波浪动画背景 */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-color/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  animate-pulse-slow"></div>

              <div className="relative w-8 h-8 mr-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/icons/app-store.svg"
                  alt="App Store"
                  className="w-6 h-6 text-white"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className="text-left relative z-10">
                <div className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300">{t('download.downloadOn')}</div>
                <div className="text-xl font-semibold">{t('download.appStore')}</div>
              </div>
            </a>

            <a href="#" className="group flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden">
              {/* 微妙的波浪动画背景 */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  animate-pulse-slow"></div>

              <div className="relative w-8 h-8 mr-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/icons/google-play.svg"
                  alt="Google Play"
                  className="w-6 h-6 text-white"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className="text-left relative z-10">
                <div className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300">{t('download.getItOn')}</div>
                <div className="text-xl font-semibold">{t('download.googlePlay')}</div>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-gradient-primary bg-clip-text  relative animate-pulse-slow">1M+</div>
              </div>
              <p className="text-gray-700 font-medium mt-3">{t('download.stats.downloads')}</p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-gradient-rose bg-clip-text  relative flex items-center justify-center">
                  4.8
                  <span className="text-yellow-400 text-lg ml-1">★</span>
                </div>
              </div>
              <p className="text-gray-700 font-medium mt-3">{t('download.stats.rating')}</p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-gradient-mint bg-clip-text  relative animate-pulse-slow">50+</div>
              </div>
              <p className="text-gray-700 font-medium mt-3">{t('download.stats.countries')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;