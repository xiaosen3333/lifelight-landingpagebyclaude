import React from 'react';
import OptimizedImage from './OptimizedImage';

const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "3am thoughts found home",
      text: "Used to lie awake overthinking. Now I write it down and sleep peacefully. Lifelight's responses feel like a warm hug.",
      author: "Michelle H.",
      avatar: "/optimized/feature-journal.webp"
    },
    {
      title: "I absolutely love this app",
      text: "2 weeks of micro-moments showed me why Mondays hit different. Now I prep for them.",
      author: "Jacob W.",
      avatar: "/optimized/feature-connect.webp"
    },
    {
      title: "My safe space to vent",
      text: "No day feels empty anymore. Life feels longer with memories recorded.",
      author: "Lisa K.",
      avatar: "/optimized/feature-vision.webp"
    }
  ];

  return (
    <section className="section bg-white py-20">
      <div className="container max-w-6xl mx-auto px-6">
        {/* App Store App of the Month Badge */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-6xl" style={{ transform: 'scaleX(-1)' }}>🌿</span>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center mb-2">
                <span className="text-2xl">🍎</span>
                <h3 className="text-3xl font-bold text-amber-500">App Store</h3>
              </div>
              <h2 className="text-4xl font-bold text-amber-500">App of the Month</h2>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-6xl">🌿</span>
            </div>
          </div>

          {/* Reviews Stats */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-1 mb-2">
              <span className="text-5xl font-bold">10,000+</span>
              <div className="flex gap-1 ml-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-10 h-10 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-2xl">reviews worldwide</p>
          </div>
        </div>

        {/* Testimonial Cards with stacked effect */}
        <div className="relative max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative"
              style={{
                marginTop: index === 0 ? '0' : '-30px',
                zIndex: index + 1,
                marginLeft: index === 1 ? '60px' : '-30px',
                marginRight: index === 1 ? '-60px' : '30px'
              }}
            >
              {/* Main card with glass morphism effect */}
              <div className={`relative bg-white/70 backdrop-blur-md rounded-[60px] p-10 border-2 border-white shadow-2xl transform hover:scale-[1.02] transition-transform ${
                index === 0 ? 'rotate-1' :
                index === 1 ? '-rotate-2' :
                'rotate-1'
              }`}>
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30 rounded-[60px] pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">{testimonial.title}</h3>
                  <div className="flex items-start gap-4">
                    <OptimizedImage
                      src={testimonial.avatar}
                      alt={`${testimonial.author} avatar`}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-3 border-white shadow-lg"
                    />
                    <div className="flex-1">
                      <p className="text-xl leading-relaxed mb-4 text-gray-800">
                        {testimonial.text}
                      </p>
                      <p className="text-lg text-right text-gray-600">~ {testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;