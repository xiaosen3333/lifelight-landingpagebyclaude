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

const TodoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>To-Do Features | Lifelight</title>
        <meta name="description" content="Discover how Lifelight helps you organize tasks and manage your daily to-dos effectively." />
      </Head>

      <Header />

      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Smarter Way to <span className="text-primary-color">Organize Tasks</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10">
                Lifelight's to-do features help you capture tasks, organize your priorities, and stay on top of your commitments.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Capture Tasks with Emotional Context</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Unlike standard to-do apps, Lifelight helps you capture not just what needs to be done, but how you feel about it. 
                  This emotional context helps you better understand your productivity patterns and prioritize tasks that align with your wellbeing.
                </p>
                <ul className="space-y-4">
                  {[
                    'Record emotional state alongside each task',
                    'Set priorities based on personal impact, not just urgency',
                    'Track how different tasks affect your mood over time',
                    'Receive personalized suggestions for task scheduling'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-color mr-3 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/sources/6.png" 
                  alt="Task Management Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Smart Features That Adapt to Your Needs</h2>
              <p className="text-lg text-gray-700">
                Our AI-powered task management system learns from your patterns and preferences to provide a truly personalized experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Task Prioritization',
                  icon: '🧠',
                  description: 'Let our AI analyze your tasks and suggest the optimal order based on your energy levels, deadlines, and emotional state.'
                },
                {
                  title: 'Mood-Aware Scheduling',
                  icon: '🌈',
                  description: 'Schedule tasks based on your typical energy patterns throughout the day, helping you match difficult tasks with your peak performance times.'
                },
                {
                  title: 'Integrated with Journal',
                  icon: '📔',
                  description: 'Connect your tasks directly with journal entries to capture reflections about completed tasks and document your progress.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TodoPage;