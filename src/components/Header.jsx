import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

// Language flag mapping component
const LanguageFlag = ({ code }) => {
  const flags = {
    'en': '🇺🇸',
    'zh': '🇨🇳',
    'zh-TW': '🇹🇼',
    'ja': '🇯🇵'
  };
  
  return <span className="mr-2">{flags[code]}</span>;
};

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '简体中文' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'ja', name: '日本語' }
  ];

  const changeLanguage = (locale) => {
    // Close the dropdown menu
    setIsLangMenuOpen(false);

    // Use Next.js router for language change
    const { pathname, query, asPath } = router;
    router.push({ pathname, query }, asPath, { locale });
  };

  // Scroll handler with improved animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Apply a subtle parallax effect to header
      if (headerRef.current) {
        const opacity = Math.min(1, scrollPosition / 100);
        headerRef.current.style.setProperty('--header-bg-opacity', opacity.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangMenuOpen && !event.target.closest('.lang-switcher')) {
        setIsLangMenuOpen(false);
      }
      
      if (activeDropdown && !event.target.closest('.dropdown-group')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangMenuOpen, activeDropdown]);

  // Handle escape key press to close dropdowns
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsLangMenuOpen(false);
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
      style={{ '--header-bg-opacity': '0' }}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center z-20">
          <Link href="/" className="group transition-all duration-300">
            <div className="flex items-center font-bold text-2xl">
              <span className="bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform">心光 Lifelight</span>
              <div className="ml-2 w-5 h-5 rounded-full bg-gradient-primary shadow-glow group-hover:animate-pulse-slow transition-all duration-500"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Simplified and Cleaner */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Product Dropdown */}
          <div className="dropdown-group relative group">
            <button 
              className={`font-medium transition-all duration-300 flex items-center pb-1 ${
                activeDropdown === 'product' 
                  ? 'text-primary-color' 
                  : 'text-gray-700 hover:text-primary-color'
              }`}
              onClick={() => toggleDropdown('product')}
            >
              {t('header.product')}
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  activeDropdown === 'product' ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Border indicator that expands on hover/active */}
            <div className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-primary rounded transition-all duration-300 ${
              activeDropdown === 'product' ? 'w-full opacity-100' : 'opacity-0 group-hover:w-full group-hover:opacity-75'
            }`}></div>
            
            {/* Dropdown menu */}
            <div className={`absolute left-0 mt-2 w-60 bg-white/95 backdrop-blur-md rounded-medium border border-gray-100 shadow-elevated transition-all duration-300 origin-top-left z-50 ${
              activeDropdown === 'product' 
                ? 'opacity-100 visible scale-100 translate-y-0' 
                : 'opacity-0 invisible scale-95 -translate-y-3'
            }`}>
              <div className="py-2">
                <Link 
                  href="/product/todo" 
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-color transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="w-6 h-6 mr-3 rounded-full bg-primary-color/10 flex items-center justify-center text-primary-color">✓</span>
                  {t('header.todo')}
                </Link>
                <Link 
                  href="/product/all-in-one" 
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-color transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="w-6 h-6 mr-3 rounded-full bg-rose-pink/10 flex items-center justify-center text-rose-pink">✦</span>
                  {t('header.allinone')}
                </Link>
                <Link 
                  href="/product/ai-friend" 
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-color transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="w-6 h-6 mr-3 rounded-full bg-mint-blue/10 flex items-center justify-center text-mint-blue">★</span>
                  {t('header.aifriend')}
                </Link>
              </div>
            </div>
          </div>

          {/* Users Dropdown - Similar structure to Products */}
          <div className="dropdown-group relative group">
            <button 
              className={`font-medium transition-all duration-300 flex items-center pb-1 ${
                activeDropdown === 'users' 
                  ? 'text-primary-color' 
                  : 'text-gray-700 hover:text-primary-color'
              }`}
              onClick={() => toggleDropdown('users')}
            >
              {t('header.users')}
              <svg 
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                  activeDropdown === 'users' ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Border indicator */}
            <div className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-primary rounded transition-all duration-300 ${
              activeDropdown === 'users' ? 'w-full opacity-100' : 'opacity-0 group-hover:w-full group-hover:opacity-75'
            }`}></div>
            
            {/* Dropdown */}
            <div className={`absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-medium border border-gray-100 shadow-elevated transition-all duration-300 origin-top-left z-50 ${
              activeDropdown === 'users' 
                ? 'opacity-100 visible scale-100 translate-y-0' 
                : 'opacity-0 invisible scale-95 -translate-y-3'
            }`}>
              <div className="py-2 divide-y divide-gray-100">
                <div className="pb-2">
                  <Link 
                    href="/users/journal-lovers" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-color transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="w-6 h-6 mr-3 rounded-full bg-primary-color/10 flex items-center justify-center text-primary-color">📔</span>
                    {t('header.journalLovers')}
                  </Link>
                  <Link 
                    href="/users/travel-enthusiasts" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-color transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="w-6 h-6 mr-3 rounded-full bg-rose-pink/10 flex items-center justify-center text-rose-pink">✈️</span>
                    {t('header.travelEnthusiasts')}
                  </Link>
                  <Link 
                    href="/users/anime-fans" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-color transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="w-6 h-6 mr-3 rounded-full bg-mint-blue/10 flex items-center justify-center text-mint-blue">🎭</span>
                    {t('header.animeFans')}
                  </Link>
                </div>
                <div className="pt-2">
                  <Link 
                    href="/users/emotionally-sensitive" 
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-color transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="w-6 h-6 mr-3 rounded-full bg-space-purple/10 flex items-center justify-center text-space-purple">💭</span>
                    {t('header.emotionallySensitive')}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Primary links with hover effect */}
          <Link 
            href="/download" 
            className="relative group font-medium text-gray-700 hover:text-primary-color transition-all duration-300 pb-1"
          >
            {t('header.download')}
            <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-primary rounded transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-75"></div>
          </Link>

          <Link 
            href="/pricing" 
            className="relative group font-medium text-gray-700 hover:text-primary-color transition-all duration-300 pb-1"
          >
            {t('header.pricing')}
            <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-primary rounded transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-75"></div>
          </Link>

          {/* Get App Button - Prominent call to action */}
          <Link 
            href="/download" 
            className="btn btn-primary ml-3 transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            {t('header.getApp')}
          </Link>

          {/* Enhanced Language Switcher with Flags */}
          <div className="relative ml-4 lang-switcher">
            <button
              className="flex items-center px-3 py-2 rounded-full border border-gray-300 bg-white/95 backdrop-blur-sm text-gray-800 hover:border-primary-color hover:text-primary-color hover:shadow-subtle transition-all duration-300 lang-switcher-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsLangMenuOpen(!isLangMenuOpen);
              }}
            >
              <LanguageFlag code={router.locale || 'en'} />
              <span className="mr-1">{languages.find(lang => lang.code === router.locale)?.name || t('header.language')}</span>
              <svg className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-medium border border-gray-100 shadow-elevated transition-all duration-300 origin-top-right z-50 ${
              isLangMenuOpen
                ? 'opacity-100 visible scale-100 translate-y-0' 
                : 'opacity-0 invisible scale-95 -translate-y-3'
            }`}>
              <div className="py-1">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={(e) => {
                      e.stopPropagation();
                      changeLanguage(language.code);
                    }}
                    className={`flex items-center w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                      router.locale === language.code 
                        ? 'text-primary-color font-medium bg-primary-color/5' 
                        : 'text-gray-700'
                    }`}
                  >
                    <LanguageFlag code={language.code} />
                    {language.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button - Enhanced with animation */}
        <button
          className="md:hidden text-gray-800 focus:outline-none z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <div className={`w-6 flex flex-col items-center justify-center relative ${isMobileMenuOpen ? 'h-6' : 'h-5'}`}>
              <span className={`block w-full h-0.5 bg-gray-800 absolute transform transition-all duration-300 ease-out-quint ${
                isMobileMenuOpen ? 'rotate-45 top-[11px]' : 'top-0'
              }`}></span>
              
              <span className={`block w-full h-0.5 bg-gray-800 absolute transition-all duration-200 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100 top-[10px]'
              }`}></span>
              
              <span className={`block w-full h-0.5 bg-gray-800 absolute transform transition-all duration-300 ease-out-quint ${
                isMobileMenuOpen ? '-rotate-45 bottom-[11px]' : 'bottom-0'
              }`}></span>
            </div>
          </div>
        </button>

        {/* Mobile Navigation - Improved sliding effect */}
        <div className={`fixed inset-0 z-10 transition-all duration-500 md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}>
          {/* Backdrop overlay */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${
              isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile menu panel */}
          <div className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl overflow-y-auto transition-transform duration-500 ease-out-quint transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="px-6 pt-20 pb-6">
              <nav className="flex flex-col space-y-6">
                {/* Product Section */}
                <div className="border-b pb-4">
                  <div className="flex items-center font-medium text-gray-800 mb-3">
                    <span className="w-5 h-5 mr-2 rounded-full bg-primary-color/20 flex items-center justify-center text-primary-color text-xs">1</span>
                    {t('header.product')}
                  </div>
                  <div className="pl-7 flex flex-col space-y-4">
                    <Link 
                      href="/product/todo" 
                      className="flex items-center text-sm text-gray-700 hover:text-primary-color transition-colors" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-5 h-5 mr-2 rounded-full bg-primary-color/10 flex items-center justify-center text-primary-color text-xs">•</span>
                      {t('header.todo')}
                    </Link>
                    <Link 
                      href="/product/all-in-one" 
                      className="flex items-center text-sm text-gray-700 hover:text-primary-color transition-colors" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-5 h-5 mr-2 rounded-full bg-rose-pink/10 flex items-center justify-center text-rose-pink text-xs">•</span>
                      {t('header.allinone')}
                    </Link>
                    <Link 
                      href="/product/ai-friend" 
                      className="flex items-center text-sm text-gray-700 hover:text-primary-color transition-colors" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-5 h-5 mr-2 rounded-full bg-mint-blue/10 flex items-center justify-center text-mint-blue text-xs">•</span>
                      {t('header.aifriend')}
                    </Link>
                  </div>
                </div>

                {/* Users Section */}
                <div className="border-b pb-4">
                  <div className="flex items-center font-medium text-gray-800 mb-3">
                    <span className="w-5 h-5 mr-2 rounded-full bg-rose-pink/20 flex items-center justify-center text-rose-pink text-xs">2</span>
                    {t('header.users')}
                  </div>
                  <div className="pl-7 grid grid-cols-2 gap-4">
                    <Link 
                      href="/users/journal-lovers" 
                      className="flex items-center text-sm text-gray-700 hover:text-primary-color transition-colors" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-1">📔</span>
                      {t('header.journalLovers')}
                    </Link>
                    <Link 
                      href="/users/travel-enthusiasts" 
                      className="flex items-center text-sm text-gray-700 hover:text-primary-color transition-colors" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-1">✈️</span>
                      {t('header.travelEnthusiasts')}
                    </Link>
                    <Link 
                      href="/users/anime-fans" 
                      className="flex items-center text-sm text-gray-700 hover:text-primary-color transition-colors" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-1">🎭</span>
                      {t('header.animeFans')}
                    </Link>
                    <Link 
                      href="/users/emotionally-sensitive" 
                      className="flex items-center text-sm text-gray-700 hover:text-primary-color transition-colors" 
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-1">💭</span>
                      {t('header.emotionallySensitive')}
                    </Link>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/download" 
                    className="flex items-center font-medium text-gray-800 hover:text-primary-color transition-colors" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-5 h-5 mr-2 rounded-full bg-mint-blue/20 flex items-center justify-center text-mint-blue text-xs">↓</span>
                    {t('header.download')}
                  </Link>
                  
                  <Link 
                    href="/pricing" 
                    className="flex items-center font-medium text-gray-800 hover:text-primary-color transition-colors" 
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-5 h-5 mr-2 rounded-full bg-space-purple/20 flex items-center justify-center text-space-purple text-xs">$</span>
                    {t('header.pricing')}
                  </Link>
                </div>

                {/* Primary CTA */}
                <Link 
                  href="/download" 
                  className="btn btn-primary w-full text-center shadow-button" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('header.getApp')}
                </Link>

                {/* Mobile Language Switcher */}
                <div className="mt-6 pt-4 border-t">
                  <div className="font-medium text-gray-800 mb-3">{t('header.language')}</div>
                  <div className="grid grid-cols-2 gap-3">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={(e) => {
                          e.stopPropagation();
                          changeLanguage(language.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center justify-center px-3 py-2 text-sm rounded-full transition-all duration-300 ${
                          router.locale === language.code
                            ? 'bg-primary-color text-white shadow-glow'
                            : 'border border-gray-300 bg-gray-50 text-gray-700 hover:border-primary-color hover:bg-primary-color/5'
                        }`}
                      >
                        <LanguageFlag code={language.code} />
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;