import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Basic features to get started on your emotional journey",
      features: [
        "Daily journal entries (limited to 5 per day)",
        "Basic AI companion interactions",
        "Simple mood tracking",
        "7-day emotions history"
      ],
      button: "Get Started",
      color: "gray",
      popular: false
    },
    {
      name: "Premium",
      price: "9.99",
      description: "Enhanced features for deeper emotional insights",
      features: [
        "Unlimited journal entries",
        "Advanced AI companion with personality customization",
        "Detailed emotion analysis and insights",
        "Full emotion history and patterns",
        "Export and backup options",
        "Ad-free experience"
      ],
      button: "Start Free Trial",
      color: "primary-color",
      popular: true
    },
    {
      name: "Family",
      price: "19.99",
      description: "Share the emotional journey with your loved ones",
      features: [
        "Everything in Premium",
        "Up to 5 family members",
        "Family insights and connections",
        "Shared moments and memories",
        "Family emotion patterns",
        "Priority support"
      ],
      button: "Get Family Plan",
      color: "rose-pink",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Our 14-day free trial gives you full access to all Premium features. You won't be charged until the trial period ends, and you can cancel anytime before then."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, your new rate will apply at the next billing cycle."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. Your privacy is our top priority. All your journal entries and emotional data are encrypted and stored securely. We never share your personal information with third parties. You can export or delete your data at any time."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our payment partners."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your premium features until the end of your current billing period."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Pricing | Lifelight</title>
        <meta name="description" content="Choose the perfect Lifelight plan for your emotional journey. From free basic features to premium plans with advanced AI companions and insights." />
      </Head>

      <Header />

      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your <span className="text-gradient">Emotional Journey</span>
              </h1>
              <p className="text-xl text-gray-700 mb-10">
                Select the plan that fits your needs. All plans come with a 14-day free trial.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 -mt-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 ${plan.popular ? 'border-2 border-' + plan.color + ' relative' : ''}`}
                >
                  {plan.popular && (
                    <div className={`absolute top-0 right-0 bg-${plan.color} text-white px-4 py-1 rounded-bl-lg font-medium`}>
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <button 
                      className={`w-full py-3 rounded-xl font-medium ${
                        plan.popular 
                          ? `bg-${plan.color} text-white hover:bg-opacity-90` 
                          : `border border-${plan.color} text-${plan.color} hover:bg-${plan.color} hover:bg-opacity-10`
                      } transition-colors`}
                    >
                      {plan.button}
                    </button>
                    
                    <div className="mt-8">
                      <p className="font-medium mb-4">Features:</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`text-${plan.color} mr-3 mt-1`}>✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">Still have questions?</p>
                <a href="#" className="btn btn-primary">Contact Support</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;