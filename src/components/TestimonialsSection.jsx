import React from 'react';
import OptimizedImage from './OptimizedImage';
import { useTranslation } from 'next-i18next';

const TestimonialsSection = () => {
  const { t } = useTranslation('common');
  const testimonials = t('testimonials.items', { returnObjects: true });
  
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card glass-effect p-6 z-10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <OptimizedImage
                  src={testimonial.avatar.replace('/sources/', '/optimized/').replace('.png', '.webp')}
                  alt={`${testimonial.name} avatar`}
                  width={48}
                  height={48}
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