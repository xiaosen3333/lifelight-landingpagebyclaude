import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const DownloadPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className="min-h-screen flex flex-col bg-bg-gray relative">
      {/* 全局鲸鱼背景纹理 - 以更低的透明度应用于整个页面 */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "url('/optimized/鲸鱼背景.webp')",
          backgroundSize: "800px auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat"
        }}>
      </div>
      <Head>
        <title>{t('downloadPage.meta.title')}</title>
        <meta name="description" content={t('downloadPage.meta.description')} />
      </Head>

      <Header />

      <main className="flex-grow pt-24">
        <section className="relative py-24 overflow-hidden">
          {/* Background with orange gradient from design guide */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-primary-light opacity-10 -z-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light rounded-full opacity-10 blur-3xl -z-5"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rose-pink-light rounded-full opacity-10 blur-3xl -z-5"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('downloadPage.title') }}></h1>
              <p className="text-xl text-gray-700 mb-10">
                {t('downloadPage.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
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

              <div className="flex justify-center space-x-12 md:space-x-20">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-primary bg-clip-text relative animate-pulse-slow">1M+</div>
                  <p className="text-gray-700 font-medium mt-3">{t('downloadPage.stats.downloads')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-rose bg-clip-text relative flex items-center justify-center">
                    4.8
                    <span className="text-yellow-400 text-lg ml-1">★</span>
                  </div>
                  <p className="text-gray-700 font-medium mt-3">{t('downloadPage.stats.rating')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-mint bg-clip-text relative animate-pulse-slow">50+</div>
                  <p className="text-gray-700 font-medium mt-3">{t('downloadPage.stats.countries')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">{t('downloadPage.guide.title')}</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    number: '1',
                    title: t('downloadPage.guide.steps.0.title'),
                    description: t('downloadPage.guide.steps.0.description'),
                    icon: '📱'
                  },
                  {
                    number: '2',
                    title: t('downloadPage.guide.steps.1.title'),
                    description: t('downloadPage.guide.steps.1.description'),
                    icon: '👤'
                  },
                  {
                    number: '3',
                    title: t('downloadPage.guide.steps.2.title'),
                    description: t('downloadPage.guide.steps.2.description'),
                    icon: '🚀'
                  }
                ].map((step, index) => (
                  <div key={index} className="card p-6 relative">
                    <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full bg-gradient-purple text-white flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                    <div className="text-3xl mb-4 pt-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 relative">
          {/* Decorative elements as per design guide */}
          <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary-light rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-rose-pink-light rounded-full opacity-5 blur-3xl"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">{t('downloadPage.requirements.title')}</h2>

              <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary-color">{t('downloadPage.requirements.ios.title')}</h3>
                  <ul className="space-y-4 text-left">
                    {Array.isArray(t('downloadPage.requirements.ios.specs', { returnObjects: true }))
                      ? t('downloadPage.requirements.ios.specs', { returnObjects: true }).map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-color mr-3 mt-1">✓</span>
                          <span>{spec}</span>
                        </li>
                      ))
                      : [
                        "iOS 14.0 or higher",
                        "Compatible with iPhone, iPad, and iPod touch",
                        "200 MB available space needed",
                        "Internet connection required for AI features"
                      ].map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-color mr-3 mt-1">✓</span>
                          <span>{t(`downloadPage.requirements.ios.specs.${index}`) || spec}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>

                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-4 text-rose-pink">{t('downloadPage.requirements.android.title')}</h3>
                  <ul className="space-y-4 text-left">
                    {Array.isArray(t('downloadPage.requirements.android.specs', { returnObjects: true }))
                      ? t('downloadPage.requirements.android.specs', { returnObjects: true }).map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-rose-pink mr-3 mt-1">✓</span>
                          <span>{spec}</span>
                        </li>
                      ))
                      : [
                        "Android 8.0 or higher",
                        "ARMv8 processor or newer",
                        "250 MB available space needed",
                        "Internet connection required for AI features"
                      ].map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-rose-pink mr-3 mt-1">✓</span>
                          <span>{t(`downloadPage.requirements.android.specs.${index}`) || spec}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadPage;