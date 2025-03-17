import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import OptimizedImage from '../../components/OptimizedImage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const TodoPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className="min-h-screen flex flex-col bg-bg-gray">
      <SEO
        title={t('todo.meta.title')}
        description={t('todo.meta.description')}
        openGraph={{
          type: 'website',
          title: t('todo.meta.title'),
          description: t('todo.meta.description'),
        }}
      />

      <Header />

      <main className="flex-grow pt-24">
        <section className="relative py-20 overflow-hidden">
          {/* Background with orange gradient from design guide */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-primary-light opacity-10 -z-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light rounded-full opacity-10 blur-3xl -z-5"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rose-pink-light rounded-full opacity-10 blur-3xl -z-5"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('todo.heading') }}></h1>
              <p className="text-xl text-gray-700 mb-10">
                {t('todo.subheading')}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-right">
                <h2 className="text-3xl font-bold mb-6">{t('todo.sections.contextual.title')}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t('todo.sections.contextual.description')}
                </p>
                <ul className="space-y-4">
                  {Array.isArray(t('todo.sections.contextual.features', { returnObjects: true }))
                    ? t('todo.sections.contextual.features', { returnObjects: true }).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-color mr-3 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))
                    : [
                        "记录每个任务旁边的情感状态",
                        "基于个人影响而非仅紧急性设置优先级",
                        "追踪不同任务如何随时间影响您的情绪",
                        "接收任务调度的个性化建议"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-color mr-3 mt-1">✓</span>
                          <span>{t(`todo.sections.contextual.features.${index}`) || item}</span>
                        </li>
                      ))
                  }
                </ul>
              </div>
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden slide-in-left">
                <OptimizedImage
                  src="/optimized/6.webp"
                  alt={t('todo.sections.contextual.imageAlt')}
                  width={1080}
                  height={1920}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary-light rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-rose-pink-light rounded-full opacity-5 blur-3xl"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">{t('todo.sections.ai.title')}</h2>
              <p className="text-lg text-gray-700">
                {t('todo.sections.ai.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Array.isArray(t('todo.sections.ai.features', { returnObjects: true }))
                ? t('todo.sections.ai.features', { returnObjects: true }).map((feature, index) => (
                    <div key={index} className="card p-6">
                      <div className="text-3xl mb-4">{feature.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  ))
                : [
                    {
                      title: "AI任务优先级",
                      icon: "🧠",
                      description: "让我们的AI分析您的任务并根据您的能量水平、截止日期和情感状态建议最佳顺序。",
                      color: "primary-color"
                    },
                    {
                      title: "情绪感知调度",
                      icon: "🌈",
                      description: "根据您一天中典型的能量模式安排任务，帮助您将困难任务与您的最佳表现时间匹配。",
                      color: "rose-pink"
                    },
                    {
                      title: "与记录集成",
                      icon: "📔",
                      description: "将您的任务直接与记录条目连接，捕捉关于已完成任务的反思并记录您的进度。",
                      color: "mint-blue"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="card p-6">
                      <div className="text-3xl mb-4">{feature.icon}</div>
                      <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>
                        {t(`todo.sections.ai.features.${index}.title`) || feature.title}
                      </h3>
                      <p className="text-gray-700">
                        {t(`todo.sections.ai.features.${index}.description`) || feature.description}
                      </p>
                    </div>
                  ))
              }
            </div>

            <div className="mt-16 text-center">
              <a href="/download" className="btn btn-primary">
                {t('todo.sections.ai.ctaText')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TodoPage;