import React from 'react';

const JournalSection = () => {
  return (
    <section id="journal" className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/sources/6.png" 
                  alt="Journal Feature Screenshot" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-5 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                <img src="/sources/image 46.png" alt="Journal Emoji" className="w-10 h-10" />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-primary-color bg-opacity-10 text-primary-color font-medium">
              Journal ✨
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Capture Moments, Express Feelings</h2>
            <p className="text-gray-700 mb-8 text-lg">
              The "Journal" module allows you to easily and privately capture every important moment in your life, 
              whether it's through text, photos, or a mix of both. With an intuitive interface and smart prompts, 
              we help you connect your daily life to your inner world, creating unique memories that you can revisit 
              and explore anytime, anywhere.
            </p>
            
            <ul className="space-y-4">
              {[
                'Combine text, images, and music to fully record daily activities and emotional experiences',
                'Express emotional states with the help of AI companion responses',
                'Capture subtle emotional fluctuations for a richer retrospective experience',
                'Create layered emotional recall experiences to help you revisit and treasure every moment'
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