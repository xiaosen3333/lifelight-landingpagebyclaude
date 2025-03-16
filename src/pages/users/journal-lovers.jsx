import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const JournalLoversPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Lifelight for Journal Lovers | AI-Enhanced Journaling Experience</title>
        <meta name="description" content="Elevate your journaling experience with Lifelight. Discover how our AI companion can help you express emotions, track patterns, and gain deeper insights from your journal." />
      </Head>

      <Header />

      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  For Those Who <span className="text-gradient">Love to Journal</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Lifelight takes your journaling practice to the next level with AI-powered insights, beautiful organization, and emotional intelligence that understands the deeper meaning behind your words.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#features" className="btn btn-primary">
                    Explore Journal Features
                  </a>
                  <a href="/download" className="btn btn-secondary">
                    Start Journaling Today
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="/sources/6.png" 
                    alt="Lifelight Journal Interface" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 p-4 glass-effect rounded-xl shadow-lg">
                  <div className="text-sm font-medium">
                    <span className="block">Capture feelings</span>
                    <span className="text-primary-color">with depth and context</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Journal Features You'll Love</h2>
              <p className="text-lg text-gray-700">
                Lifelight combines the timeless practice of journaling with modern AI technology to create a uniquely insightful experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Rich Media Entries",
                  icon: "📝",
                  description: "Combine text, photos, voice notes, and location tags to create rich, contextual journal entries that capture the full essence of your moments."
                },
                {
                  title: "Emotion Tracking",
                  icon: "🌈",
                  description: "Tag entries with emotions or let our AI detect the emotional tone of your writing, helping you track patterns in your emotional landscape over time."
                },
                {
                  title: "Insightful Prompts",
                  icon: "💡",
                  description: "Never face blank page anxiety again. Our AI suggests personalized prompts based on your past entries, current events, or emotional patterns."
                },
                {
                  title: "Beautiful Organization",
                  icon: "📚",
                  description: "Automatically categorize entries with smart tags, search by emotion or topic, and view your journal as a timeline, calendar, or mood board."
                },
                {
                  title: "AI Reflections",
                  icon: "🔍",
                  description: "Receive thoughtful insights about patterns, growth opportunities, and recurring themes in your journaling practice."
                },
                {
                  title: "Privacy First",
                  icon: "🔒",
                  description: "Your journal is private and secure. All entries are encrypted, and you control who (if anyone) can see your thoughts."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:translate-y-[-5px]">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary-color bg-opacity-10 text-primary-color font-medium">
                  Journal Lover Stories
                </div>
                <h2 className="text-3xl font-bold mb-6">From a Fellow Journaler</h2>
                
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <img 
                      src="/sources/未命名作品 3 3.png" 
                      alt="Emily's avatar" 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">Emily K.</h4>
                      <p className="text-sm text-gray-500">Journaling for 12+ years</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "I've filled dozens of physical journals over the years, but Lifelight has transformed my practice. The AI insights help me see patterns I never noticed, and the emotion tracking has been revolutionary for my self-awareness. I still keep a physical journal, but Lifelight has become an essential companion to my writing practice."
                  </p>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Saw patterns in her emotions she hadn't recognized before",
                    "Uses voice notes for on-the-go journaling during her daily walk",
                    "Loves how the journal and companion features complement each other",
                    "Discovered new insights by reviewing her yearly reflections"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-color mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src="/sources/5.png" 
                    alt="Journal Calendar View" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src="/sources/4.png" 
                    alt="Journal Entry with Emotion Tracking" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-xl shadow-md overflow-hidden col-span-2">
                  <img 
                    src="/sources/3.png" 
                    alt="AI Insights from Journal" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Journaling?</h2>
              <p className="text-xl text-gray-700 mb-10">
                Join thousands of journal enthusiasts who have taken their practice to the next level with Lifelight.
              </p>
              <a href="/download" className="btn btn-primary text-lg px-8 py-4">
                Start Your Journal Journey
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JournalLoversPage;