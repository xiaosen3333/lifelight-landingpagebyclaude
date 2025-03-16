import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient - matches the orange gradient from design guide */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-color to-primary-light opacity-10 -z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-primary-light rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-10 w-80 h-80 bg-rose-pink-light rounded-full opacity-20 blur-3xl"></div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-primary">心光</span>: 你的AI生活记录伴侣
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            人类有真正的自我被看见，情绪被照料与理解的需求。早期生活记录产品将一切放进了无底洞，没有回馈，每个人都是一座孤岛。
            心光提出「AI 生活伴侣」的概念，从自我表达切入，去深刻的理解你这个独特的个体。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#download" className="btn btn-primary">
              立即下载
            </Link>
            <Link href="#features" className="btn btn-secondary">
              了解更多
            </Link>
          </div>
        </div>

        <div className="relative slide-up">
          <div className="relative z-10 mx-auto">
            <img
              src="/sources/3.png"
              alt="Lifelight App Screenshot"
              className="mx-auto max-w-full rounded-[20px] shadow-xl"
            />
          </div>

          {/* Floating Elements with glass effect from design guide */}
          <div className="absolute -top-10 -right-10 p-4 glass-effect shadow-lg">
            <span className="text-2xl">✨</span>
            <p className="text-sm font-medium">记录生活瞬间</p>
          </div>

          <div className="absolute -bottom-8 -left-8 p-4 glass-effect shadow-lg">
            <span className="text-2xl">💭</span>
            <p className="text-sm font-medium">情感陪伴</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;