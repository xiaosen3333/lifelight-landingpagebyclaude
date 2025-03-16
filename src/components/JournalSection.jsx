import React from 'react';

const JournalSection = () => {
  return (
    <section id="journal" className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 slide-in-left">
            <div className="relative">
              <div className="bg-white rounded-[20px] shadow-xl overflow-hidden">
                <img
                  src="/sources/6.png"
                  alt="Journal Feature Screenshot"
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                <img src="/sources/image 46.png" alt="Journal Emoji" className="w-10 h-10" />
              </div>

              {/* Add quote bubble as shown in design */}
              <div className="absolute -top-8 left-10 p-4 glass-effect rounded-xl shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block text-primary-color">"Capture moments,</span>
                  <span>express feelings."</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 slide-in-right">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary-color bg-opacity-10 text-primary-color font-medium">
              记录 ✨
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">捕捉时刻，表达感受</h2>
            <p className="text-gray-700 mb-8 text-lg">
              "记录"模块支持用户通过文字、图片和音乐的结合，全面记录当天的活动与情感体验。用户不仅可以描述当时的情感状态，
              还可以通过多媒体元素，如照片和当时听的音乐，生动捕捉情绪与环境。AI伴侣将根据用户的记录内容提供情感互动回应，
              帮助用户更细腻地表达情绪波动。
            </p>

            <ul className="space-y-4">
              {[
                '结合文字、图片和音乐，全面记录日常活动和情感体验',
                '借助AI伴侣回应，表达情感状态',
                '捕捉微妙的情绪波动，创造更丰富的回顾体验',
                '创建分层的情感回忆体验，帮助你重温并珍藏每一刻'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-color mr-3 mt-1">✓</span>
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

export default JournalSection;