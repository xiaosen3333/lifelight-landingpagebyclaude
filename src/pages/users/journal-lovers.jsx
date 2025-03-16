import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const JournalLoversPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-gray">
      <Head>
        <title>心光，为热爱记录的你 | 增强记录体验的AI伴侣</title>
        <meta name="description" content="通过心光提升您的记录体验。了解我们的AI伴侣如何帮助您表达情感，追踪模式，并从您的记录中获得更深洞察。" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add fonts to match design guidelines */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  为热爱 <span className="text-gradient-primary">记录</span> 的你
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  心光将您的记录提升到新的水平，通过AI提供的洞察、精美的组织和情感智能，理解您文字背后的深层含义。
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#features" className="btn btn-primary">
                    探索记录功能
                  </a>
                  <a href="/download" className="btn btn-secondary">
                    立即开始记录
                  </a>
                </div>
              </div>
              <div className="relative slide-in-left">
                <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                  <img
                    src="/sources/6.png"
                    alt="心光记录界面"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                  <div className="text-sm font-medium">
                    <span className="block">捕捉感受</span>
                    <span className="text-primary-color">带有深度和上下文</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">你会喜欢的记录功能</h2>
              <p className="text-lg text-gray-700">
                心光将传统的记录实践与现代AI技术相结合，创造出独特而有洞察力的体验。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
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
                  <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
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
                  记录爱好者的故事
                </div>
                <h2 className="text-3xl font-bold mb-6">来自一位记录爱好者</h2>

                <div className="bg-white rounded-[20px] shadow-md p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <img
                      src="/sources/未命名作品 3 3.png"
                      alt="Emily's avatar"
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">李小雨</h4>
                      <p className="text-sm text-gray-500">记录12年+</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "多年来，我已经填满了数十本实体记录本，但心光彻底改变了我的记录习惯。AI洞察帮助我看到以前从未注意到的模式，情绪追踪对我的自我意识产生了革命性的影响。我仍然保留实体记录本，但心光已经成为我写作实践中不可或缺的伴侣。"
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "发现了以前未认识到的情绪模式",
                    "在每日散步时使用语音笔记进行随时记录",
                    "喜欢记录和伴侣功能如何相互补充",
                    "通过回顾年度反思发现新的洞察"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-color mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-[20px] shadow-md overflow-hidden">
                  <img
                    src="/sources/5.png"
                    alt="记录日历视图"
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-[20px] shadow-md overflow-hidden">
                  <img
                    src="/sources/4.png"
                    alt="带情绪追踪的记录条目"
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-[20px] shadow-md overflow-hidden col-span-2">
                  <img
                    src="/sources/3.png"
                    alt="来自记录的AI洞察"
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
              <h2 className="text-3xl font-bold mb-6">准备好提升你的记录体验了吗？</h2>
              <p className="text-xl text-gray-700 mb-10">
                加入数千名已经通过心光将他们的记录实践提升到新水平的记录爱好者。
              </p>
              <a href="/download" className="btn btn-primary text-lg px-8 py-4">
                开始你的记录之旅
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