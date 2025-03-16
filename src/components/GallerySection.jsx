import React from 'react';

const GallerySection = () => {
  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                <img
                  src="/sources/4.png"
                  alt="Gallery Feature Screenshot"
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 p-4 glass-effect rounded-xl shadow-lg">
                <img src="/sources/image 48.png" alt="Gallery Emoji" className="w-10 h-10" />
              </div>

              <div className="absolute -top-5 right-10 p-4 glass-effect rounded-xl shadow-lg flex items-center space-x-2">
                <span className="text-2xl">🗓️</span>
                <span className="text-sm font-medium">日历视图</span>
              </div>

              <div className="absolute -bottom-8 right-10 p-4 glass-effect rounded-xl shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block text-mint-blue">"Art, memories,</span>
                  <span>and self-expression."</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-mint-blue bg-opacity-10 text-mint-blue font-medium">
              画廊 ✨
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">艺术、记忆与自我表达</h2>
            <p className="text-gray-700 mb-8 text-lg">
              "画廊"模块通过情绪趋势与日历化日历结合，展示用户的日常生活活动情感变化。每日上传的照片或笔记记录以日历形式呈现，
              每一格代表当日记录。用户轻松回顾每月的生活点滴，颜色编码的情绪展示与月度总结帮助用户理解情绪周期并发现特别的日子。
            </p>

            <ul className="space-y-4">
              {[
                '在直观的日历界面中查看每日上传内容',
                '通过颜色编码的可视化追踪情绪趋势',
                '轻松在月份之间切换，获得时间顺序体验',
                '随着时间推移，发现情绪和活动中的模式'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-mint-blue mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;