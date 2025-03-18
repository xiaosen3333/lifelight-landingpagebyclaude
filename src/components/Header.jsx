import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '简体中文' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'ja', name: '日本語' }
  ];

  const changeLanguage = (locale) => {
    // Close the dropdown menu
    setIsLangMenuOpen(false);

    // Use Next.js router for language change instead of direct URL manipulation
    // This ensures proper handling of the locale
    const { pathname, query, asPath } = router;

    // Use router.push to change the locale without a full page reload
    router.push({ pathname, query }, asPath, { locale });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if menu is open and click is outside the menu
      if (isLangMenuOpen && !event.target.closest('.lang-switcher')) {
        setIsLangMenuOpen(false);
      }
    };

    // Add click event listener to document
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'backdrop-blur-sm bg-white/30 py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center font-bold text-2xl">
              <span className="text-gradient-primary">心光 Lifelight</span>
              <span className="text-rose-pink ml-1"></span>
              <div className="ml-2 w-5 h-5 rounded-full bg-gradient-primary"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Product Dropdown */}
          <div className="relative group">
            <button className="font-medium hover:text-primary-color transition-colors flex items-center">
              {t('header.product')}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/product/todo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.todo')}
                </Link>
                <Link href="/product/all-in-one" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.allinone')}
                </Link>
                <Link href="/product/ai-friend" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.aifriend')}
                </Link>
              </div>
            </div>
          </div>

          {/* Users Dropdown */}
          <div className="relative group">
            <button className="font-medium hover:text-primary-color transition-colors flex items-center">
              {t('header.users')}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/users/travel-enthusiasts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.travelEnthusiasts')}
                </Link>
                <Link href="/users/journal-lovers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.journalLovers')}
                </Link>
                <Link href="/users/anime-fans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.animeFans')}
                </Link>
                <Link href="/users/parents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.parents')}
                </Link>
                <Link href="/users/introverts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.introverts')}
                </Link>
                <Link href="/users/adhd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.adhd')}
                </Link>
                <Link href="/users/emotionally-sensitive" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.emotionallySensitive')}
                </Link>
                <Link href="/users/fitness-enthusiasts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.fitnessEnthusiasts')}
                </Link>
              </div>
            </div>
          </div>

          {/* Docs Dropdown */}
          <div className="relative group">
            <button className="font-medium hover:text-primary-color transition-colors flex items-center">
              {t('header.docs')}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/docs/getting-started" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.gettingStarted')}
                </Link>
                <Link href="/docs/api" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.api')}
                </Link>
                <Link href="/docs/tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t('header.tutorials')}
                </Link>
              </div>
            </div>
          </div>

          <Link href="/download" className="font-medium hover:text-primary-color transition-colors">
            {t('header.download')}
          </Link>

          <Link href="/pricing" className="font-medium hover:text-primary-color transition-colors">
            {t('header.pricing')}
          </Link>

          <a href="https://www.lifelight.app" className="btn btn-primary ml-2" target="_blank" rel="noopener noreferrer">
            {t('header.login')}
          </a>

          {/* Language Switcher */}
          <div className="relative ml-4 lang-switcher">
            <button
              className="flex items-center px-3 py-1 rounded-full border border-gray-300 bg-white text-gray-800 hover:border-primary-color hover:text-primary-color transition-colors lang-switcher-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
            >
              <span className="mr-1">{languages.find(lang => lang.code === router.locale)?.name || t('header.language')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 lang-switcher-dropdown">
                <div className="py-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        changeLanguage(language.code);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${router.locale === language.code ? 'text-primary-color font-medium' : 'text-gray-700'
                        }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden p-4">
            <nav className="flex flex-col space-y-4">
              {/* Product Section */}
              <div className="border-b pb-2">
                <div className="font-medium text-gray-800 mb-2">{t('header.product')}</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/product/todo" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.todo')}
                  </Link>
                  <Link href="/product/all-in-one" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.allinone')}
                  </Link>
                  <Link href="/product/ai-friend" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.aifriend')}
                  </Link>
                </div>
              </div>

              {/* Users Section */}
              <div className="border-b pb-2">
                <div className="font-medium text-gray-800 mb-2">{t('header.users')}</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/users/travel-enthusiasts" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.travelEnthusiasts')}
                  </Link>
                  <Link href="/users/journal-lovers" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.journalLovers')}
                  </Link>
                  <Link href="/users/anime-fans" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.animeFans')}
                  </Link>
                  <Link href="/users/parents" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.parents')}
                  </Link>
                  <Link href="/users/introverts" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.introverts')}
                  </Link>
                  <Link href="/users/adhd" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.adhd')}
                  </Link>
                  <Link href="/users/emotionally-sensitive" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.emotionallySensitive')}
                  </Link>
                  <Link href="/users/fitness-enthusiasts" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.fitnessEnthusiasts')}
                  </Link>
                </div>
              </div>

              {/* Docs Section */}
              <div className="border-b pb-2">
                <div className="font-medium text-gray-800 mb-2">{t('header.docs')}</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/docs/getting-started" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.gettingStarted')}
                  </Link>
                  <Link href="/docs/api" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.api')}
                  </Link>
                  <Link href="/docs/tutorials" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('header.tutorials')}
                  </Link>
                </div>
              </div>

              {/* Other Links */}
              <Link href="/download" className="font-medium hover:text-primary-color transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {t('header.download')}
              </Link>
              <Link href="/pricing" className="font-medium hover:text-primary-color transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {t('header.pricing')}
              </Link>
              <a href="https://www.lifelight.app" className="btn btn-primary w-full text-center mt-4" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                {t('header.login')}
              </a>

              {/* Mobile Language Switcher */}
              <div className="border-t pt-4 mt-2 lang-switcher-mobile">
                <div className="font-medium text-gray-800 mb-2">{t('header.language')}</div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        changeLanguage(language.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm rounded-full border ${router.locale === language.code
                        ? 'border-primary-color bg-primary-color bg-opacity-10 text-primary-color'
                        : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-primary-color'
                        }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;