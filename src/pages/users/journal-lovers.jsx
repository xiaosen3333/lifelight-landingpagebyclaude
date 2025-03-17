import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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

const JournalLoversPage = () => {
  const { t } = useTranslation('common');
  return (
    <div className="min-h-screen flex flex-col bg-bg-gray relative">
      {/* 全局鲸鱼背景纹理 - 以更低的透明度应用于整个页面 */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: "url('/optimized/鲸鱼背景.webp')",
          backgroundSize: "800px auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat"
        }}>
      </div>
      <Head>
        <title>{t('journalLovers.meta.title')}</title>
        <meta name="description" content={t('journalLovers.meta.description')} />
      </Head>

      <Header />

      <main className="flex-grow pt-24">
        <section className="relative py-20 overflow-hidden">
          {/* Background with orange gradient from design guide */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-primary-light opacity-10 -z-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light rounded-full opacity-10 blur-3xl -z-5"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rose-pink-light rounded-full opacity-10 blur-3xl -z-5"></div>

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-right">
                <h1 className="text-4xl md:text-5xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: t('journalLovers.hero.title') }}></h1>
                <p className="text-xl text-gray-700 mb-8">
                  {t('journalLovers.hero.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#features" className="btn btn-primary">
                    {t('journalLovers.hero.exploreBtn')}
                  </a>
                  <a href="/download" className="btn btn-secondary">
                    {t('journalLovers.hero.startBtn')}
                  </a>
                </div>
              </div>
              <div className="relative slide-in-left">
                <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                  <OptimizedImage
                    src="/optimized/6.webp"
                    alt={t('journalLovers.hero.interface')}
                    width={1080}
                    height={1920}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                  <div className="text-sm font-medium">
                    <span className="block">{t('journalLovers.hero.caption.line1')}</span>
                    <span className="text-primary-color">{t('journalLovers.hero.caption.line2')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">{t('journalLovers.features.title')}</h2>
              <p className="text-lg text-gray-700">
                {t('journalLovers.features.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Array.isArray(t('journalLovers.features.items', { returnObjects: true }))
                ? t('journalLovers.features.items', { returnObjects: true }).map((feature, index) => (
                <div key={index} className="card p-6 transition-transform hover:translate-y-[-5px]">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))
                : [
                  {
                    title: "丰富媒体条目",
                    icon: "📝",
                    description: "结合文字、照片、语音笔记和位置标签，创建丰富、有上下文的记录条目，全面捕捉瞬间的精髓。",
                    color: "primary-color"
                  },
                  {
                    title: "情绪追踪",
                    icon: "🌈",
                    description: "为条目标记情绪，或让我们的AI检测你写作的情感语调，帮助你追踪情感景观随时间的变化模式。",
                    color: "rose-pink"
                  },
                  {
                    title: "智能提示",
                    icon: "💡",
                    description: "不再面对空白页的焦虑。我们的AI根据你过去的条目、当前事件或情感模式提供个性化的提示。",
                    color: "mint-blue"
                  },
                  {
                    title: "精美组织",
                    icon: "📚",
                    description: "使用智能标签自动分类条目，按情绪或主题搜索，并将你的记录查看为时间线、日历或情绪板。",
                    color: "space-purple"
                  },
                  {
                    title: "AI洞察",
                    icon: "🔍",
                    description: "接收关于模式、成长机会和记录实践中重复主题的深思熟虑的洞察。",
                    color: "primary-color"
                  },
                  {
                    title: "隐私优先",
                    icon: "🔒",
                    description: "你的记录是私密且安全的。所有条目都经过加密，你可以控制谁（如果有人）能看到你的想法。",
                    color: "rose-pink"
                  }
                ].map((feature, index) => (
                  <div key={index} className="card p-6 transition-transform hover:translate-y-[-5px]">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>
                      {t(`journalLovers.features.items.${index}.title`) || feature.title}
                    </h3>
                    <p className="text-gray-700">
                      {t(`journalLovers.features.items.${index}.description`) || feature.description}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 relative">
          {/* Decorative elements as per design guide */}
          <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary-light rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-rose-pink-light rounded-full opacity-5 blur-3xl"></div>

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary-color bg-opacity-10 text-primary-color font-medium">
                  {t('journalLovers.testimonial.badge')}
                </div>
                <h2 className="text-3xl font-bold mb-6">{t('journalLovers.testimonial.title')}</h2>

                <div className="bg-white rounded-[20px] shadow-md p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <OptimizedImage
                      src="/optimized/未命名作品 3 3.webp"
                      alt="Emily's avatar"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{t('journalLovers.testimonial.userName')}</h4>
                      <p className="text-sm text-gray-500">{t('journalLovers.testimonial.userExperience')}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    {t('journalLovers.testimonial.quote')}
                  </p>
                </div>

                <ul className="space-y-4">
                  {Array.isArray(t('journalLovers.testimonial.benefits', { returnObjects: true }))
                    ? t('journalLovers.testimonial.benefits', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-color mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))
                    : [
                      "发现了以前未认识到的情绪模式",
                      "在每日散步时使用语音笔记进行随时记录",
                      "喜欢记录和伴侣功能如何相互补充",
                      "通过回顾年度反思发现新的洞察"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-color mr-3 mt-1">✓</span>
                        <span>{t(`journalLovers.testimonial.benefits.${index}`) || item}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[20px] shadow-md overflow-hidden">
                  <OptimizedImage
                    src="/optimized/5.webp"
                    alt={t('journalLovers.testimonial.gallery.calendarAlt')}
                    width={1080}
                    height={1920}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-[20px] shadow-md overflow-hidden">
                  <OptimizedImage
                    src="/optimized/4.webp"
                    alt={t('journalLovers.testimonial.gallery.emotionAlt')}
                    width={1080}
                    height={1920}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-[20px] shadow-md overflow-hidden col-span-2">
                  <OptimizedImage
                    src="/optimized/3.webp"
                    alt={t('journalLovers.testimonial.gallery.insightsAlt')}
                    width={1080}
                    height={1920}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          {/* Background gradients */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary-light rounded-full opacity-10 blur-3xl -z-10"></div>
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-rose-pink-light rounded-full opacity-10 blur-3xl -z-10"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">{t('journalLovers.cta.title')}</h2>
              <p className="text-xl text-gray-700 mb-10">
                {t('journalLovers.cta.description')}
              </p>
              <a href="/download" className="btn btn-primary text-lg px-8 py-4">
                {t('journalLovers.cta.buttonText')}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JournalLoversPage;