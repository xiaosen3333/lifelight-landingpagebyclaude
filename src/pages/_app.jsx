import '../styles/globals.css';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
// Import i18n config directly
const nextI18NextConfig = require('../../next-i18next.config.js');

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Force language detection
  const { i18n } = useTranslation();

  useEffect(() => {
    // Force language detection and reload if needed
    if (router.locale && i18n.language !== router.locale) {
      console.log(`Language mismatch detected: i18n.language=${i18n.language}, router.locale=${router.locale}`);
      
      // Change language immediately to match router locale
      i18n.changeLanguage(router.locale).then(() => {
        console.log(`Language successfully changed to: ${router.locale}`);
      }).catch(error => {
        console.error(`Error changing language: ${error}`);
      });
    }
  }, [router.locale, i18n]);

  // Handle language switching
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Custom analytics, logging, etc.
      console.log(`App is navigating to: ${url}`);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Prevent caching issues with translations */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        {/* Set language in meta */}
        <meta httpEquiv="Content-Language" content={router.locale} />
      </Head>
      
      {/* Debug info */}
      <Script id="locale-debug" strategy="afterInteractive">
        {`console.log('App loaded with locale: ${router.locale}')`}
      </Script>
      
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);