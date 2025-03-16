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
    <div className="main-container">
      <Head>
        <title>Lifelight - Your AI Life-Recording Companion</title>
        <meta name="description" content="Lifelight is an AI Life-Recording Companion that helps you capture life moments, express feelings, and understand your emotional journey." />
        <link rel="icon" href="/favicon.ico" />
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