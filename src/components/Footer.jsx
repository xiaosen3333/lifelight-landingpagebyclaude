import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const SocialIcon = ({ icon, href, label }) => (
  <a 
    href={href} 
    aria-label={label}
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary-color transition-all duration-300 hover:scale-110 hover:shadow-glow"
    target="_blank" 
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const Footer = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ), 
      href: "https://facebook.com", 
      label: "Facebook"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ), 
      href: "https://instagram.com", 
      label: "Instagram"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ), 
      href: "https://twitter.com", 
      label: "Twitter"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ), 
      href: "https://github.com", 
      label: "GitHub"
    }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Curved connector at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150%] h-40 bg-bg-gray rounded-[100%] translate-y-[-50%]"></div>
      </div>
      
      {/* Background pattern and gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-80 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-noise mix-blend-soft-light"></div>
      
      {/* Land theme background image */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/optimized/陆地主题背景图.webp')",
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat"
        }}>
      </div>
      
      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-color/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-rose-pink/20 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="container relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top section with logo, tagline and social */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 pb-16 border-b border-gray-800">
            <div className="max-w-md mb-10 md:mb-0">
              <Link href="/" className="inline-block group">
                <div className="flex items-center font-bold text-2xl mb-6">
                  <span className="bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform">心光 Lifelight</span>
                  <div className="ml-2 w-4 h-4 rounded-full bg-gradient-primary group-hover:animate-pulse-slow"></div>
                </div>
              </Link>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('footer.tagline') }}></p>
              
              {/* App store badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-xl px-4 py-2 flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.6417 12.9225C17.6046 9.95837 20.1605 8.37797 20.2961 8.29698C18.8388 6.13472 16.5739 5.88884 15.7704 5.86789C13.8783 5.66611 12.0394 6.97236 11.0821 6.97236C10.1247 6.97236 8.60479 5.88884 6.99348 5.92027C4.9257 5.95169 3.00515 7.06568 1.98877 8.78036C-0.130662 12.2936 1.45381 17.4524 3.47369 20.3746C4.48482 21.8064 5.66781 23.4163 7.22228 23.359C8.73167 23.3014 9.31046 22.3965 11.1237 22.3965C12.937 22.3965 13.4737 23.359 15.0438 23.3224C16.6556 23.2915 17.6778 21.8845 18.6467 20.444C19.8141 18.8026 20.2805 17.1979 20.301 17.1142C20.259 17.1037 17.6835 16.0793 17.6417 12.9225Z"/>
                    <path d="M15.0073 4.73144C15.821 3.72651 16.3629 2.35174 16.2168 0.976974C15.0543 1.0293 13.5862 1.79233 12.7308 2.77631C11.9798 3.63303 11.3229 5.04828 11.4899 6.38395C12.801 6.48064 14.1521 5.71761 15.0073 4.73144Z"/>
                  </svg>
                  <span>App Store</span>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-xl px-4 py-2 flex items-center gap-2">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.67583 0.56189C1.46583 0.788811 0 2.33183 0 4.96456C0 8.22908 2.10167 9.66662 2.425 9.66662C2.59417 9.66662 2.97667 9.38139 3.3375 9.05387C3.92 8.53348 4.82417 8.17366 5.7325 8.08069C6.27 8.0354 6.68417 7.87176 6.68417 7.72683C6.68417 7.1611 3.76583 5.45323 3.76583 4.0157C3.76583 2.76985 5.6175 0.0300205 6.175 0.0300205C6.34083 0.0300205 6.89917 0.315214 7.4525 0.652712C8.4675 1.28963 9.98667 1.18753 11.1192 0.395453C11.5433 0.115299 11.9792 -0.0431936 12.0975 0.0114342C12.5767 0.223029 15.1883 3.81502 15.1883 4.50062C15.1883 4.74352 14.3492 5.65019 13.32 6.47461C11.7358 7.77518 11.1458 8.64013 11.1458 9.47337C11.1458 9.85189 11.2658 10.0947 11.4192 10.0947C11.5708 10.0947 11.9683 9.84278 12.2958 9.53396C13.13 8.77761 14.5633 8.56616 15.67 9.0666C16.235 9.32819 16.7892 9.54871 16.89 9.54871C17.2842 9.54871 20 5.85257 20 5.14827C20 4.76068 17.6467 2.17718 16.0958 1.13238C15.15 0.497455 13.4025 0.0300205 12.4225 0.0300205C11.9 0.0300205 9.20083 1.46939 7.89 2.62228C7.4025 3.04608 6.87667 3.38267 6.70917 3.38267C6.54583 3.38267 5.92083 2.68743 5.325 1.83208C4.30417 0.402855 3.93333 0.187448 2.66833 0.106353C1.96167 0.0600337 1.71 0.142232 1.67583 0.56189Z"/>
                    <path d="M1.26416 11.1036C0.778324 11.3707 0.335824 11.9183 0.115824 12.5453C-0.0358429 12.9511 -0.0400095 15.3132 0.107491 18.1797L0.284157 21.7284L0.860824 21.9502C1.17249 22.0693 2.11166 22.0693 2.94416 21.9502L3.79916 21.7827L3.96999 19.3301C4.21082 15.1839 4.33416 14.487 5.03166 13.7029C5.47082 13.2014 5.85582 13.0384 6.54832 13.0384C7.24082 13.0384 7.62582 13.2014 8.06499 13.7029C8.76249 14.487 8.88582 15.1839 9.12666 19.3301L9.29749 21.7827L10.1525 21.9502C11.1017 22.0875 11.935 22.008 12.285 21.757C12.46 21.6349 12.5208 20.7856 12.5208 18.4769C12.5208 16.3373 12.58 15.1538 12.6925 14.8596C12.9242 14.2175 13.5417 13.5901 14.0708 13.5207C14.6233 13.4482 14.7658 13.5508 15.2083 14.3077C15.4858 14.7708 15.5867 15.3365 15.6625 17.1772C15.7192 18.5264 15.8133 20.1134 15.87 20.7856L15.9725 21.9984L18.1542 21.9954C20.62 21.9924 20.5342 22.0573 19.6 18.2552C18.66 14.4616 16.3333 11.9183 13.0967 11.1036C11.91 10.8003 10.305 10.7971 9.17082 11.094C8.11249 11.3731 6.8625 12.0277 6.39499 12.5844C6.16416 12.8485 6.01999 12.8274 5.48499 12.4608C4.36499 11.6887 2.52332 10.8878 1.26416 11.1036Z"/>
                  </svg>
                  <span>Google Play</span>
                </a>
              </div>
            </div>
            
            {/* Social media links */}
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
          </div>
          
          {/* Main links section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">{t('footer.product')}</h4>
              <ul className="space-y-4">
                <li><Link href="#features" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('header.features')}</Link></li>
                <li><Link href="#journal" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('header.journal')}</Link></li>
                <li><Link href="#companion" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('header.companion')}</Link></li>
                <li><Link href="#gallery" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('header.gallery')}</Link></li>
                <li><Link href="#insights" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('header.insights')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">{t('footer.company')}</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('footer.aboutUs')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('footer.careers')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('footer.contact')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('footer.blog')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">{t('footer.support')}</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('footer.helpCenter')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('footer.privacyPolicy')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('footer.termsOfService')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">{t('footer.faq')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary-color transition-colors duration-300">API</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom section with copyright and legal links */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Lifelight. {t('footer.copyright')}
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-500 hover:text-primary-color transition-colors text-sm">{t('footer.privacyPolicy')}</a>
              <a href="#" className="text-gray-500 hover:text-primary-color transition-colors text-sm">{t('footer.termsOfService')}</a>
              <a href="#" className="text-gray-500 hover:text-primary-color transition-colors text-sm">{t('footer.cookies')}</a>
              <a href="#" className="text-gray-500 hover:text-primary-color transition-colors text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;