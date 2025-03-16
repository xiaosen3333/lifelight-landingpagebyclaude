import React from 'react';

const GallerySection = () => {
  return (
    <section id="gallery" className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
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
                <span className="text-sm font-medium">Calendar View</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-mint-blue bg-opacity-10 text-mint-blue font-medium">
              Gallery ✨
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Art, Memories, and Self-Expression</h2>
            <p className="text-gray-700 mb-8 text-lg">
              The "Gallery" module displays your daily life activities and emotional changes through a 
              combination of emotional trends and calendar visualization. Photos or notes uploaded daily 
              are presented in a calendar format, with each grid representing a day's record. Users can 
              easily review their monthly life highlights, and color-coded emotion displays along with 
              monthly summaries help them understand emotional cycles and discover special days.
            </p>
            
            <ul className="space-y-4">
              {[
                'View daily uploads in an intuitive calendar interface',
                'Track emotional trends with color-coded visualizations',
                'Easily switch between months for a chronological experience',
                'Discover patterns in your emotions and activities over time'
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