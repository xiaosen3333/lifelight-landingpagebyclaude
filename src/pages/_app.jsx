import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

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

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);