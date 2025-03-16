import React from 'react';

const testimonials = [
  {
    name: 'Sarah J.',
    avatar: '/sources/未命名作品 3 3.png',
    role: 'Daily Journal User',
    text: 'Lifelight has completely transformed how I process my emotions. The journal feature helps me articulate feelings I couldn\'t express before, and the AI companion offers insights that feel genuinely supportive. It\'s like having a friend who\'s always there to listen.'
  },
  {
    name: 'Takashi M.',
    avatar: '/sources/未命名作品 3 4.png',
    role: 'Busy Professional',
    text: 'As someone with a hectic schedule, I never thought I\'d stick with journaling. But Lifelight makes it so intuitive and meaningful. The insights I get from looking back at my emotional patterns have helped me make important life decisions with more clarity.'
  },
  {
    name: 'Elena R.',
    avatar: '/sources/未命名作品 3 5.png',
    role: 'Mental Health Advocate',
    text: 'I\'ve tried many wellness apps, but Lifelight stands out because it feels truly personal. My AI companion has learned what helps me when I\'m anxious, and the gallery feature lets me see my progress visually. It\'s become an essential part of my self-care routine.'
  },
  {
    name: 'Miguel S.',
    avatar: '/sources/未命名作品 3 6.png',
    role: 'Creative Writer',
    text: 'The way Lifelight combines journaling with AI assistance is brilliant. Sometimes I\'m stuck expressing a complex emotion, and my companion suggests just the right prompt to unlock my thoughts. As a writer, I find this invaluable for my creative process.'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lifelight is helping people around the world better understand their emotions and build meaningful connections with themselves.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;