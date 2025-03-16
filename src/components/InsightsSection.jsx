import React from 'react';

const InsightsSection = () => {
  return (
    <section id="insights" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-space-purple bg-opacity-10 text-space-purple font-medium">
              洞见 ✨
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">理解你的情感旅程</h2>
            <p className="text-gray-700 mb-8 text-lg">
              "洞见"模块帮助用户从他们的日常记录中提取关键数据和洞察，并提供深度的多维度回顾与反思。
              通过该功能，用户可以查看他们在长期使用中记录的各种统计数据，例如记录的天数、灵感条数、
              文字总量以及珍藏照片的回忆频次数等。这些数据不仅帮助用户量化自己的情感旅程，直观地看到
              情感变化的进展，还能反映出个人成长和心境的演变。
            </p>

            <ul className="space-y-4">
              {[
                '查看关于你的记录习惯和模式的详细统计数据',
                '接收AI生成的关于你的情绪趋势的洞察',
                '根据你的情绪模式获取个性化推荐',
                '通过直观的图表和图形可视化你的旅程'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-space-purple mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                <img
                  src="/sources/5.png"
                  alt="Insights Feature Screenshot"
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -top-5 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                <img src="/sources/image 49.png" alt="Insights Emoji" className="w-10 h-10" />
              </div>

              <div className="absolute bottom-10 -left-5 p-4 glass-effect rounded-xl shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block">AI 分析</span>
                  <span className="text-space-purple">个性化洞察</span>
                </div>
              </div>

              <div className="absolute -bottom-8 right-10 p-4 glass-effect rounded-xl shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block text-space-purple">"Understand your</span>
                  <span>emotional journey."</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;