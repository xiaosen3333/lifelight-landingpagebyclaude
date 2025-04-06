import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // Get the locale from the page props
    const { locale } = this.props.__NEXT_DATA__.props.pageProps || { locale: 'en' };

    return (
      <Html lang={locale}>
        <Head>
          {/* Add fonts from design guidelines - SF Pro, New York, and Source Han Serif CN */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />

          {/* Favicon / App Icons */}
          <link rel="icon" href="/icons/favicon.ico" sizes="any" />
          <meta name="theme-color" content="#FF7400" />
          <meta name="author" content="Lifelight Team" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;