import React from 'react';

const InsightsSection = () => {
  return (
    <section id="insights" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-space-purple bg-opacity-10 text-space-purple font-medium">
              Insights ✨
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Understand Your Emotional Journey</h2>
            <p className="text-gray-700 mb-8 text-lg">
              The "Insights" module helps users extract key data and insights from their daily records, 
              providing deep multi-dimensional review and reflection. Through this feature, users can view 
              various statistics recorded during long-term use, such as number of days recorded, number of 
              inspiration items, total text volume, and frequency of cherished photo memories. These data not 
              only help users quantify their emotional journey and see emotional changes intuitively, but also 
              reflect the evolution of personal growth and mood.
            </p>
            
            <ul className="space-y-4">
              {[
                'View detailed statistics about your journaling habits and patterns',
                'Receive AI-generated insights about your emotional trends',
                'Get personalized recommendations based on your mood patterns',
                'Visualize your journey through intuitive charts and graphs'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-space-purple mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/sources/5.png" 
                  alt="Insights Feature Screenshot" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -top-5 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                <img src="/sources/image 49.png" alt="Insights Emoji" className="w-10 h-10" />
              </div>
              
              <div className="absolute bottom-10 -left-5 p-4 glass-effect rounded-xl shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block">AI Analysis</span>
                  <span className="text-space-purple">Personalized insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;