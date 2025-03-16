import React from 'react';

const CompanionSection = () => {
  return (
    <section id="companion" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-rose-pink bg-opacity-10 text-rose-pink font-medium">
              陪伴 ✨
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">你的AI，始终陪伴在侧</h2>
            <p className="text-gray-700 mb-8 text-lg">
              "陪伴"模块让用户通过个性化的AI朋友获得温暖的情感支持。用户可以自由选择性格各异的虚拟伙伴，
              如温柔的心理健康顾问、幽默风趣的朋友或活泼好动的小宠物，并根据自己的喜好进行设置和切换。
              这些虚拟伙伴提供独特的互动方式，满足用户的不同需求，让陪伴更加贴心、趣味十足。
            </p>

            <ul className="space-y-4">
              {[
                '从具有不同性格和背景故事的伴侣中选择',
                '自定义你的AI伴侣的性格和互动风格',
                '就你的生活和情感进行有意义的交流',
                '在你最需要的时候获得个性化建议和情感支持'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-rose-pink mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                <img
                  src="/sources/3.png"
                  alt="Companion Feature Screenshot"
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -top-5 -left-5 p-4 glass-effect rounded-xl shadow-lg">
                <img src="/sources/image 47.png" alt="Companion Emoji" className="w-10 h-10" />
              </div>

              <div className="absolute top-1/2 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block">AI 伴侣</span>
                  <span className="text-rose-pink">为你量身定制</span>
                </div>
              </div>

              <div className="absolute -bottom-8 left-10 p-4 glass-effect rounded-xl shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block text-rose-pink">AI 朋友</span>
                  <span>永远在你身边</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanionSection;