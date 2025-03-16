import React from 'react';

const testimonials = [
  {
    name: '张明',
    avatar: '/sources/未命名作品 3 3.png',
    role: '日常记录用户',
    text: '心光完全改变了我处理情绪的方式。记录功能帮助我表达出以前无法表达的感受，AI伴侣提供的洞察感觉真的很有帮助。就像有一个朋友随时准备倾听。'
  },
  {
    name: '佐藤美',
    avatar: '/sources/未命名作品 3 4.png',
    role: '繁忙专业人士',
    text: '作为一个日程表很满的人，我从未想过我会坚持记录。但心光让这一过程变得如此直观和有意义。从回顾我的情绪模式中获得的洞察帮助我更清晰地做出了重要的生活决定。'
  },
  {
    name: '艾琳娜',
    avatar: '/sources/未命名作品 3 5.png',
    role: '心理健康倡导者',
    text: '我尝试过许多健康应用，但心光之所以脱颖而出，是因为它感觉真的很个人化。我的AI伴侣已经学会了在我焦虑时什么对我有帮助，画廊功能让我直观地看到我的进步。它已成为我自我关爱的重要部分。'
  },
  {
    name: '米格尔',
    avatar: '/sources/未命名作品 3 6.png',
    role: '创意写作者',
    text: '心光结合记录和AI辅助的方式真的很棒。有时我在表达复杂情感时卡住，我的伴侣会建议恰到好处的提示来解锁我的思维。作为一个作家，我发现这对我的创作过程非常宝贵。'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">用户评价</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            心光正在帮助世界各地的人们更好地理解自己的情绪，并与自己建立有意义的连接。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card p-6 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>

              {/* Adding decorative elements as per design guide */}
              <div className="mt-4 flex justify-end">
                <div className="w-6 h-6 rounded-full bg-gradient-primary opacity-20"></div>
                <div className="w-4 h-4 rounded-full bg-rose-pink ml-2 opacity-20"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative element at the bottom of the section */}
        <div className="flex justify-center mt-12">
          <div className="w-16 h-1 rounded-full bg-gradient-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;