import React from 'react';

const features = [
  {
    icon: '✏️',
    title: 'Journal',
    description: 'Capture moments, express feelings. Record your life with text, photos, and emotions.'
  },
  {
    icon: '🤝',
    title: 'Companion',
    description: 'Your AI, always by your side. Get emotional support and insightful conversations.'
  },
  {
    icon: '🖼️',
    title: 'Gallery',
    description: 'Art, memories, and self-expression. View your life through a beautiful timeline.'
  },
  {
    icon: '💡',
    title: 'Insights',
    description: 'Understand your emotional journey. Gain deep knowledge about your feelings and patterns.'
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Your data stays on your device. We value your privacy and keep your information secure.'
  },
  {
    icon: '🌈',
    title: 'Personalization',
    description: 'Make Lifelight your own. Choose themes, companions, and interaction styles.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Lifelight" provides a comprehensive emotional support platform through four core feature modules—Journal, Companion, Gallery, and Insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card p-6 hover:border-primary-color transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;