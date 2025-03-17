import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function SEO({ title, description, openGraph }) {
  const router = useRouter();
  const { t } = useTranslation('common');
  
  const defaultTitle = t('seo.defaultTitle');
  const defaultDescription = t('seo.defaultDescription');
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lifelight.app';
  const canonicalUrl = `${siteUrl}${router.asPath}`;
  const locale = router.locale || 'en';
  
  const og = {
    title: openGraph?.title || title || defaultTitle,
    description: openGraph?.description || description || defaultDescription,
    type: openGraph?.type || 'website',
    url: openGraph?.url || canonicalUrl,
    image: openGraph?.image || `${siteUrl}/images/og-image.jpg`,
    ...openGraph
  };

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="sitemap" type="application/xml" href="/static-sitemap.xml" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:image" content={og.image} />
      <meta property="og:locale" content={locale} />
      {router.locales?.filter(l => l !== locale).map((l) => (
        <meta property="og:locale:alternate" content={l} key={l} />
      ))}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={og.url} />
      <meta name="twitter:title" content={og.title} />
      <meta name="twitter:description" content={og.description} />
      <meta name="twitter:image" content={og.image} />
      
      {/* Alternate language URLs */}
      {router.locales?.map((locale) => (
        <link 
          key={locale} 
          rel="alternate" 
          href={`${siteUrl}${locale === router.defaultLocale ? '' : `/${locale}`}${router.asPath}`}
          hrefLang={locale} 
        />
      ))}
      <link rel="alternate" href={`${siteUrl}${router.asPath}`} hrefLang="x-default" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": defaultTitle.split(" - ")[0].trim(),
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "iOS, Android, macOS, Windows",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </Head>
  );
}