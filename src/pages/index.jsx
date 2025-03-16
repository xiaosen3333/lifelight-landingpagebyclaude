import React from 'react';
import Head from 'next/head';
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  return (
    <div className="main-container bg-bg-gray">
      <Head>
        <title>心光 Lifelight - 你的AI生活记录伴侣</title>
        <meta name="description" content="心光是一款AI生活记录伴侣，帮助你捕捉生活瞬间，表达感受，并理解你的情感旅程。" />
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