import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import HeroSection from '../components/HeroSection';
import CompanionSection from '../components/CompanionSection';
import JournalSection from '../components/JournalSection';
import GallerySection from '../components/GallerySection';
import InsightsSection from '../components/InsightsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/SEO';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  // Force locale to be one of our supported locales
  const validLocale = ['en', 'zh', 'ja'].includes(locale) ? locale : 'en';


  try {
    const translations = await serverSideTranslations(validLocale, ['common']);

    // Log successful translation loading

    return {
      props: {
        ...translations,
        locale: validLocale, // Pass locale to page props
      },
    };
  } catch (error) {
    console.error('Error loading translations:', error);
    // Fallback to English if there's an error
    return {
      props: {
        ...(await serverSideTranslations('en', ['common'])),
        locale: 'en',
      },
    };
  }
}

export default function Home({ locale }) {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  // Force set language if received from props
  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale).catch(error => {
        console.error(`Error changing language: ${error}`);
      });
    }
  }, [locale, i18n]);

  return (
    <div className="main-container bg-bg-gray relative">
      {/* 全局鲸鱼背景纹理 - 以更低的透明度应用于整个页面 */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "url('/optimized/鲸鱼背景.webp')",
          backgroundSize: "800px auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat"
        }}>
      </div>

      <SEO
        title={t('seo.homeMeta.title')}
        description={t('seo.homeMeta.description')}
        openGraph={{
          type: 'website',
          title: t('seo.homeMeta.title'),
          description: t('seo.homeMeta.description'),
        }}
      />

      <Header />

      <main>
        <HeroSection />

        <JournalSection />
        <CompanionSection />
        <GallerySection />
        <InsightsSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
}