import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const HeroSection = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-color/20 to-primary-light/15 -z-10"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-primary-light/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-[5%] w-80 h-80 bg-rose-pink-light/30 rounded-full blur-3xl animate-float delay-700"></div>
      <div className="absolute top-60 left-[15%] w-48 h-48 bg-mint-blue-light/20 rounded-full blur-3xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-space-purple-light/20 rounded-full blur-3xl animate-bounce-gentle delay-500"></div>

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff7400' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        backgroundSize: "60px 60px"
      }}></div>

      <div className="container grid md:grid-cols-12 gap-8 md:gap-12 items-center relative">
        {/* Text content - expanded to 5/12 columns */}
        <div className="md:col-span-5 slide-in-left relative z-10">
          <div className="relative">
            {/* Decorative badge */}
            <div className="absolute -top-6 -left-6 glass-effect text-gradient-rose px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce-gentle transform rotate-[-5deg]">
              AI + {t('header.journal')}
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            ></h1>

            {/* Animated underline */}
            <div className="w-24 h-1 bg-gradient-primary rounded mb-6 animate-pulse-slow"></div>

            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#download" className="btn btn-primary transform transition-transform hover:scale-105 shadow-xl">
                {t('hero.downloadBtn')}
              </Link>
              <Link href="#features" className="btn btn-secondary transform transition-transform hover:scale-105">
                {t('hero.learnMoreBtn')}
              </Link>
            </div>
          </div>
        </div>

        {/* Image content - expanded to 7/12 columns */}
        <div className="md:col-span-7 relative slide-in-right">
          {/* Main device image with enhanced styling */}
          <div className="relative z-10 mx-auto transform transition-all hover:scale-[1.02] duration-300 hover:rotate-1">
            <img
              src="/sources/2.png"
              alt="Lifelight App Screenshot"
              className="mx-auto max-w-full rounded-[20px] shadow-2xl"
              loading="lazy"
            />

            {/* Subtle device frame/overlay */}
            <div className="absolute inset-0 border-8 border-white/40 rounded-[20px] z-20 pointer-events-none"></div>

            {/* Gradient reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-[20px] z-20 pointer-events-none"></div>
          </div>

          {/* Enhanced Floating Elements with glass effect */}
          <div className="absolute -top-10 -right-5 p-4 glass-effect rounded-xl shadow-xl z-20 animate-float group">
            <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
              <span className="text-2xl animate-pulse-slow">✨</span>
              <p className="text-sm font-bold text-gradient-coffee m-0">{t('hero.recordMoments')}</p>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-5 p-4 glass-effect rounded-xl shadow-xl z-20 animate-float delay-500 group">
            <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
              <span className="text-2xl animate-pulse-slow">💭</span>
              <p className="text-sm font-bold text-gradient-purple m-0">{t('hero.emotionalCompanion')}</p>
            </div>
          </div>

          {/* Additional decorative card */}
          <div className="absolute top-1/3 -right-10 p-3 glass-effect rounded-xl shadow-xl z-10 animate-bounce-gentle group hidden md:block">
            <div className="flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl">🚀</span>
              <p className="text-xs font-bold  text-gradient-mint m-0">AI {t('header.companion')}</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;