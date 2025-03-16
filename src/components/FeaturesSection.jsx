import React from 'react';

const features = [
  {
    icon: '✏️',
    title: '记录',
    description: '捕捉时刻，表达感受。用文字、照片和情感记录你的生活。',
    color: 'primary-color',
    badgeClass: 'badge-primary'
  },
  {
    icon: '🤝',
    title: '陪伴',
    description: '你的AI，始终陪伴在侧。获得情感支持和富有洞察力的对话。',
    color: 'rose-pink',
    badgeClass: 'badge-rose'
  },
  {
    icon: '🖼️',
    title: '画廊',
    description: '艺术、记忆与自我表达。通过精美时间线查看你的生活。',
    color: 'mint-blue',
    badgeClass: 'badge-mint'
  },
  {
    icon: '💡',
    title: '洞见',
    description: '理解你的情感旅程。深入了解你的情感和生活模式。',
    color: 'space-purple',
    badgeClass: 'badge-purple'
  },
  {
    icon: '🔒',
    title: '隐私优先',
    description: '你的数据留在你的设备上。我们重视你的隐私并确保信息安全。',
    color: 'primary-color',
    badgeClass: 'badge-primary'
  },
  {
    icon: '🌈',
    title: '个性化',
    description: '让心光成为你的专属。选择主题、伴侣和互动风格。',
    color: 'rose-pink',
    badgeClass: 'badge-rose'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">核心功能模块</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "心光"通过四大核心功能模块——记录、陪伴、画廊、洞见，为用户提供一个全面的情感支持平台。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 hover:border-primary-color transition-all fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className={`text-xl font-bold mb-2 text-${feature.color}`}>{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;