import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const PricingPage = () => {
  const plans = [
    {
      name: "免费版",
      price: "0",
      description: "开始情感旅程的基本功能",
      features: [
        "每日记录（每天限5条）",
        "基本AI伴侣互动",
        "简单情绪追踪",
        "7天情绪历史"
      ],
      button: "开始使用",
      color: "gray",
      popular: false
    },
    {
      name: "高级版",
      price: "9.99",
      description: "更深入的情感洞察增强功能",
      features: [
        "无限记录条目",
        "高级AI伴侣，可定制性格",
        "详细情绪分析和洞察",
        "完整情绪历史和模式",
        "导出和备份选项",
        "无广告体验"
      ],
      button: "开始免费试用",
      color: "primary-color",
      popular: true
    },
    {
      name: "家庭版",
      price: "19.99",
      description: "与您的亲人共享情感旅程",
      features: [
        "包含高级版的所有功能",
        "最多5个家庭成员",
        "家庭洞察和联系",
        "共享时刻和记忆",
        "家庭情感模式",
        "优先支持"
      ],
      button: "获取家庭计划",
      color: "rose-pink",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "免费试用如何运作？",
      answer: "我们的14天免费试用提供高级版的所有功能。试用期结束前不会收费，您可以随时取消。"
    },
    {
      question: "我可以在不同计划间切换吗？",
      answer: "是的，您可以随时升级或降级您的计划。如果升级，将会收取按比例计算的差额。如果降级，您的新费率将在下一个计费周期开始应用。"
    },
    {
      question: "我的数据是否私密？",
      answer: "绝对是。您的隐私是我们的首要任务。您所有的日记条目和情感数据都经过加密并安全存储。我们永远不会与第三方共享您的个人信息。您可以随时导出或删除您的数据。"
    },
    {
      question: "您接受哪些支付方式？",
      answer: "我们接受所有主要信用卡、PayPal和Apple Pay。所有支付都通过我们的支付合作伙伴安全处理。"
    },
    {
      question: "我可以取消订阅吗？",
      answer: "是的，您可以随时从账户设置中取消订阅。如果取消，您仍然可以使用您的高级功能，直到当前计费周期结束。"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-gray">
      <Head>
        <title>定价 | 心光</title>
        <meta name="description" content="为您的情感旅程选择完美的心光计划。从免费基本功能到高级计划，提供高级AI伴侣和洞察。" />
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
                选择您的 <span className="text-gradient-primary">情感旅程</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10">
                选择适合您需求的计划。所有计划均提供14天免费试用。
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 -mt-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-[20px] shadow-xl overflow-hidden transition-transform hover:scale-105 ${plan.popular ? `border-2 border-${plan.color} relative` : ''}`}
                >
                  {plan.popular && (
                    <div className={`absolute top-0 right-0 bg-${plan.color} text-white px-4 py-1 rounded-bl-lg font-medium`}>
                      最受欢迎
                    </div>
                  )}
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/月</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <button
                      className={`w-full py-3 rounded-xl font-medium ${plan.popular
                          ? `bg-gradient-primary text-white hover:opacity-90`
                          : plan.color === "rose-pink"
                            ? `border border-rose-pink text-rose-pink hover:bg-rose-pink hover:bg-opacity-10`
                            : `border border-gray-400 text-gray-600 hover:bg-gray-100`
                        } transition-colors`}
                    >
                      {plan.button}
                    </button>

                    <div className="mt-8">
                      <p className="font-medium mb-4">功能：</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`text-${plan.color === "gray" ? "primary-color" : plan.color} mr-3 mt-1`}>✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">常见问题</h2>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="card p-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">还有问题？</p>
                <a href="#" className="btn btn-primary">联系客服</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;