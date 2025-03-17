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
      console.log(`Setting language from props: ${locale}`);
      i18n.changeLanguage(locale).then(() => {
        console.log(`Home component: Language successfully changed to: ${locale}`);
      }).catch(error => {
        console.error(`Home component: Error changing language: ${error}`);
      });
    }
  }, [locale, i18n]);

  return (
    <div className="main-container bg-bg-gray">
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="icon" href="/favicon.ico" />
        {/* Add fonts to match design guidelines */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <JournalSection />
        <CompanionSection />
        <GallerySection />
        <InsightsSection />
        <TestimonialsSection />
        <DownloadSection />
      </main>

      <Footer />
    </div>
  );
}