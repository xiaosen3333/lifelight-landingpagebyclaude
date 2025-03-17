import '../styles/globals.css';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
// Import i18n config from a path instead of direct require to prevent console logging
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextI18NextConfig = require('../../next-i18next.config.js');

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Force language detection
  const { i18n } = useTranslation();

  useEffect(() => {
    // Force language detection and reload if needed
    if (router.locale && i18n.language !== router.locale) {
      // 仅在开发模式下打印语言匹配日志
      if (process.env.NODE_ENV === 'development') {
        console.log(`Language: ${i18n.language} -> ${router.locale}`);
      }
      
      // Change language immediately to match router locale
      i18n.changeLanguage(router.locale).catch(error => {
        console.error(`Error changing language: ${error}`);
      });
    }
  }, [router.locale, i18n]);

  // Handle language switching
  useEffect(() => {
    const handleRouteChange = (url) => {
      // 仅在开发模式下记录导航日志
      if (process.env.NODE_ENV === 'development' && url.includes('?')) {
        // 只记录带参数的URL变化，而不是每次导航
        console.log(`Navigation: ${url}`);
      }
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
      
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);