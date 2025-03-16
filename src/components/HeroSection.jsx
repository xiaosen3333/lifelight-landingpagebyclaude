import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-primary-light rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-10 w-80 h-80 bg-rose-pink-light rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Lifelight</span>: Your AI Life-Recording Companion
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Humans have a genuine need to be seen, to have their emotions cared for and understood. 
            Lifelight is there to support and accompany you through life's journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#download" className="btn btn-primary">
              Download Now
            </Link>
            <Link href="#features" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="relative slide-up">
          <div className="relative z-10 mx-auto">
            <img 
              src="/sources/3.png" 
              alt="Lifelight App Screenshot" 
              className="mx-auto max-w-full rounded-2xl shadow-xl"
            />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-10 -right-10 p-4 glass-effect rounded-xl shadow-lg">
            <span className="text-2xl">✨</span>
            <p className="text-sm font-medium">Record life moments</p>
          </div>
          
          <div className="absolute -bottom-8 -left-8 p-4 glass-effect rounded-xl shadow-lg">
            <span className="text-2xl">💭</span>
            <p className="text-sm font-medium">Emotional companionship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;