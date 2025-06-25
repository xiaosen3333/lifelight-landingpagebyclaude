import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  const validLocale = ['en', 'zh', 'ja', 'zh-TW'].includes(locale) ? locale : 'en';

  try {
    const translations = await serverSideTranslations(validLocale, ['common']);

    return {
      props: {
        ...translations,
        locale: validLocale,
      },
    };
  } catch (error) {
    console.error('Error loading translations:', error);
    return {
      props: {
        ...(await serverSideTranslations('en', ['common'])),
        locale: 'en',
      },
    };
  }
}

export default function AccountDeletion({ locale }) {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <>
      <SEO
        title={t('accountDeletion.meta.title')}
        description={t('accountDeletion.meta.description')}
      />

      <Header />

      <main className="min-h-screen bg-bg-gray pt-20">
        <section className="section bg-white relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">
                  <span className="text-gradient-primary">{t('accountDeletion.title')}</span>
                </h1>
                <p className="text-xl text-gray-600">
                  {t('accountDeletion.subtitle')}
                </p>
              </div>

              <div className="bg-bg-gray rounded-[20px] p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gradient-primary">
                  {t('accountDeletion.howToDelete.title')}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t('accountDeletion.howToDelete.description')}
                </p>

                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-color text-white rounded-full flex items-center justify-center font-bold mr-4">
                      1
                    </span>
                    <span className="text-gray-700">{t('accountDeletion.howToDelete.step1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-color text-white rounded-full flex items-center justify-center font-bold mr-4">
                      2
                    </span>
                    <span className="text-gray-700">{t('accountDeletion.howToDelete.step2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-color text-white rounded-full flex items-center justify-center font-bold mr-4">
                      3
                    </span>
                    <span className="text-gray-700">{t('accountDeletion.howToDelete.step3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-color text-white rounded-full flex items-center justify-center font-bold mr-4">
                      4
                    </span>
                    <span className="text-gray-700">{t('accountDeletion.howToDelete.step4')}</span>
                  </li>
                </ol>
              </div>

              <div className="bg-rose-pink-light/10 border border-rose-pink-light rounded-[20px] p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gradient-rose">
                  {t('accountDeletion.dataHandling.title')}
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-rose-pink">
                      {t('accountDeletion.dataHandling.willDelete.title')}
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-rose-pink mr-2">•</span>
                        <span className="text-gray-700">{t('accountDeletion.dataHandling.willDelete.item1')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-pink mr-2">•</span>
                        <span className="text-gray-700">{t('accountDeletion.dataHandling.willDelete.item2')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-pink mr-2">•</span>
                        <span className="text-gray-700">{t('accountDeletion.dataHandling.willDelete.item3')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rose-pink mr-2">•</span>
                        <span className="text-gray-700">{t('accountDeletion.dataHandling.willDelete.item4')}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-rose-pink">
                      {t('accountDeletion.dataHandling.retention.title')}
                    </h3>
                    <p className="text-gray-700">
                      {t('accountDeletion.dataHandling.retention.description')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-mint-blue-light/10 border border-mint-blue-light rounded-[20px] p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gradient-mint">
                  {t('accountDeletion.contact.title')}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t('accountDeletion.contact.description')}
                </p>
                <p className="text-gray-700">
                  {t('accountDeletion.contact.email')}: <a href="mailto:support@lifelight.app" className="text-mint-blue hover:underline">lifelight_hq@outlook.com</a>
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-500 text-sm">
                  {t('accountDeletion.appInfo')}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-lg transform -translate-x-1/3"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-mint opacity-5 rounded-full blur-lg"></div>
        </section>
      </main>

      <Footer />
    </>
  );
}