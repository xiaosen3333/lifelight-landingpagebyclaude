import React from 'react';

const CompanionSection = () => {
  return (
    <section id="companion" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-2 inline-block px-3 py-1 rounded-full bg-rose-pink bg-opacity-10 text-rose-pink font-medium">
              Companion ✨
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your AI, Always By Your Side</h2>
            <p className="text-gray-700 mb-8 text-lg">
              The "Companion" module provides warm emotional support through personalized AI friends. 
              Choose from a variety of virtual companions with different personalities, like gentle 
              mental health advisors, humorous friends, or lively pets, and customize them according 
              to your preferences. These virtual companions offer unique ways of interaction to meet 
              your different needs, making companionship more considerate and fun.
            </p>
            
            <ul className="space-y-4">
              {[
                'Choose from companions with distinct personalities and background stories',
                'Customize your AI companion\'s personality and interaction style',
                'Engage in meaningful conversations about your life and emotions',
                'Receive personalized advice and emotional support when you need it most'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-rose-pink mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/sources/3.png" 
                  alt="Companion Feature Screenshot" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -top-5 -left-5 p-4 glass-effect rounded-xl shadow-lg">
                <img src="/sources/image 47.png" alt="Companion Emoji" className="w-10 h-10" />
              </div>
              
              <div className="absolute top-1/2 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                <div className="text-sm font-medium">
                  <span className="block">AI Companionship</span>
                  <span className="text-rose-pink">Personalized for you</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanionSection;