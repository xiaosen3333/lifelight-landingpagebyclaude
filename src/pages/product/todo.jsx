import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OptimizedImage from '../../components/OptimizedImage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const TodoPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bg-gray">
      <Head>
        <title>待办功能 | 心光</title>
        <meta name="description" content="了解心光如何帮助您有效组织任务和管理日常待办事项。" />
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                更智能的方式来 <span className="text-primary-color">组织任务</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10">
                心光的待办功能帮助您捕捉任务，组织优先事项，并跟踪您的承诺。
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-right">
                <h2 className="text-3xl font-bold mb-6">带有情感上下文的任务捕捉</h2>
                <p className="text-lg text-gray-700 mb-6">
                  与标准待办应用不同，心光帮助您捕捉不仅是需要完成的事项，还包括您对它的感受。
                  这种情感上下文帮助您更好地理解您的生产力模式，并优先考虑与您的幸福相符的任务。
                </p>
                <ul className="space-y-4">
                  {[
                    '记录每个任务旁边的情感状态',
                    '基于个人影响而非仅紧急性设置优先级',
                    '追踪不同任务如何随时间影响您的情绪',
                    '接收任务调度的个性化建议'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-color mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden slide-in-left">
                <OptimizedImage
                  src="/optimized/6.webp"
                  alt="任务管理界面"
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
              <h2 className="text-3xl font-bold mb-6">适应您需求的智能功能</h2>
              <p className="text-lg text-gray-700">
                我们的AI驱动任务管理系统从您的模式和偏好中学习，提供真正个性化的体验。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI任务优先级',
                  icon: '🧠',
                  description: '让我们的AI分析您的任务并根据您的能量水平、截止日期和情感状态建议最佳顺序。',
                  color: 'primary-color'
                },
                {
                  title: '情绪感知调度',
                  icon: '🌈',
                  description: '根据您一天中典型的能量模式安排任务，帮助您将困难任务与您的最佳表现时间匹配。',
                  color: 'rose-pink'
                },
                {
                  title: '与记录集成',
                  icon: '📔',
                  description: '将您的任务直接与记录条目连接，捕捉关于已完成任务的反思并记录您的进度。',
                  color: 'mint-blue'
                }
              ].map((feature, index) => (
                <div key={index} className="card p-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href="/download" className="btn btn-primary">
                体验心光的任务管理
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