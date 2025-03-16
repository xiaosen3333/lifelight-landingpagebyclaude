import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
        {/* Add fonts from design guidelines - SF Pro, New York, and Source Han Serif CN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Note: SF Pro and New York are system fonts and may need to be included via @font-face in globals.css */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);