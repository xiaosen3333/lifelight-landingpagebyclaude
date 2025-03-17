import React, { useEffect } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CompanionSection from '../components/CompanionSection';
import JournalSection from '../components/JournalSection';
import GallerySection from '../components/GallerySection';
import InsightsSection from '../components/InsightsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProblemStatementSection from '../components/ProblemStatementSection';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  // Force locale to be one of our supported locales
  const validLocale = ['en', 'zh', 'ja', 'zh-TW'].includes(locale) ? locale : 'en';

  try {
    const translations = await serverSideTranslations(validLocale, ['common']);

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
      {/* Global subtle texture background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-noise"></div>
      
      {/* Global whale background texture - applied to entire page with lower opacity */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "url('/optimized/鲸鱼背景.webp')",
          backgroundSize: "800px auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat"
        }}>
      </div>

      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="/optimized/2.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#FF7400" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Header />

      <main>
        {/* 1. Hero - Introduction */}
        <HeroSection />
        
        {/* 2. Problem Statement - Why this exists */}
        <ProblemStatementSection />
        
        {/* 3. Core Solution Features - organized logically */}
        <JournalSection />
        <CompanionSection />
        <GallerySection />
        <InsightsSection />
        
        {/* 4. Features Overview */}
        <FeaturesSection />
        
        {/* 5. Social Proof */}
        <TestimonialsSection />
        
        {/* 6. Call to Action */}
        <DownloadSection />
      </main>

      <Footer />
      
      {/* Progressive loading indicator (hidden by default) */}
      <div id="page-loader" className="fixed inset-0 bg-white z-50 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500">
        <div className="w-16 h-16 border-4 border-primary-color rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}