import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import OptimizedImage from './OptimizedImage';

const HeroSection = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Parallax scroll effect for more dynamic visuals
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      
      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const scrollPosition = scrollY - sectionTop;
      
      // Apply parallax effect to the image and background
      if (scrollPosition > -window.innerHeight && scrollPosition < window.innerHeight) {
        // Subtle floating effect based on scroll position
        const moveY = scrollPosition * 0.05;
        imageRef.current.style.transform = `translateY(${moveY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-white to-bg-gray"
    >
      {/* Enhanced Background Elements - subtle noise texture for depth */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
      
      {/* Simplified, more modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-color/10 to-primary-light/5 -z-10"></div>

      {/* Main content container with improved grid system */}
      <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-8 md:gap-16 items-center relative">
        {/* Text content - cleaner layout with more focus */}
        <div className="md:col-span-5 relative z-10 py-12 md:py-0">
          <div className="relative max-w-lg">
            {/* Streamlined badge with improved animation */}
            <div className="inline-block mb-6 glass-effect bg-primary-color/5 px-4 py-2 rounded-full shadow-subtle">
              <span className="text-gradient-primary font-medium flex items-center">
                <span className="animate-pulse-slow mr-2">✨</span>
                AI + {t('hero.life')}
              </span>
            </div>

            {/* Enhanced heading with better typography */}
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 animate-fade-in"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            ></h1>

            {/* Animated gradient underline */}
            <div className="w-24 h-1 bg-gradient-primary rounded-full mb-6 animate-pulse-slow opacity-80"></div>

            {/* Cleaner description with better readability */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-md animate-fade-in opacity-90">
              {t('hero.description')}
            </p>

            {/* Enhanced action buttons with better hover effects */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link 
                href="#download" 
                className="btn btn-primary transform transition-all duration-500 hover:scale-105 hover:shadow-glow px-6 py-3 text-base"
              >
                {t('hero.downloadBtn')}
              </Link>
              <Link 
                href="#features" 
                className="btn btn-secondary transform transition-all duration-500 hover:scale-105 hover:shadow-subtle px-6 py-3 text-base group"
              >
                <span className="group-hover:text-gradient-primary transition-all duration-500">
                  {t('hero.learnMoreBtn')}
                </span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200/50 flex items-center space-x-6 opacity-80">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">5,000+</span>
                <span className="text-sm font-medium">Downloads</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">4.8/5</span>
                <span className="text-sm font-medium">App Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image content - simplified with focused attention */}
        <div className="md:col-span-7 relative overflow-visible flex justify-center" ref={imageRef}>
          <div className="relative w-full max-w-lg">
            {/* Primary Device Display - cleaner, more focused */}
            <div className="relative z-10 mx-auto transform transition-all duration-700 hover:scale-[1.02] hover:shadow-elevated rounded-[20px] overflow-hidden">
              <OptimizedImage
                src="/optimized/2.webp"
                alt="Lifelight App Screenshot"
                width={1080}
                height={1920}
                className="w-full h-auto rounded-[20px] shadow-elevated"
                priority={true}
                quality={90}
              />
              
              {/* Enhanced device frame with subtle glow */}
              <div className="absolute inset-0 border-[8px] border-white/60 rounded-[20px] shadow-inner z-20 pointer-events-none"></div>
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-[20px] z-20 pointer-events-none"></div>
            </div>

            {/* Key feature callouts - positioned more deliberately */}
            <div className="absolute -top-6 -right-6 p-3 glass-effect rounded-xl shadow-subtle z-30 animate-float">
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-coffee-brown to-coffee-brown-light flex items-center justify-center text-white shadow-subtle">
                  ✨
                </div>
                <p className="text-sm font-medium text-gray-800 m-0">{t('hero.recordMoments')}</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-3 glass-effect rounded-xl shadow-subtle z-30 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-space-purple to-space-purple-light flex items-center justify-center text-white shadow-subtle">
                  💭
                </div>
                <p className="text-sm font-medium text-gray-800 m-0">{t('hero.emotionalCompanion')}</p>
              </div>
            </div>

            {/* Decorative background elements for the device */}
            <div className="absolute top-1/4 -z-10 -left-20 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -z-10 -right-20 w-64 h-64 bg-gradient-rose rounded-full opacity-10 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="hidden lg:block absolute top-1/4 right-10 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl animate-float"></div>
      <div className="hidden lg:block absolute bottom-1/4 left-10 w-64 h-64 bg-rose-pink-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.2s" }}></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-sm text-gray-600 mb-2">Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;