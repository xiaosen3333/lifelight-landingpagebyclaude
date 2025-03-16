import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center font-bold text-2xl">
              <span className="text-primary-color">Life</span>
              <span className="text-rose-pink">light</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Product Dropdown */}
          <div className="relative group">
            <button className="font-medium hover:text-primary-color transition-colors flex items-center">
              Product
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/product/todo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  To Do
                </Link>
                <Link href="/product/all-in-one" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  All in One
                </Link>
                <Link href="/product/ai-friend" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  AI Friend
                </Link>
              </div>
            </div>
          </div>

          {/* Users Dropdown */}
          <div className="relative group">
            <button className="font-medium hover:text-primary-color transition-colors flex items-center">
              Users
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/users/travel-enthusiasts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Travel Enthusiasts
                </Link>
                <Link href="/users/journal-lovers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Journal Lovers
                </Link>
                <Link href="/users/anime-fans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Anime Fans
                </Link>
                <Link href="/users/parents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Parents
                </Link>
                <Link href="/users/introverts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Introverts
                </Link>
                <Link href="/users/adhd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ADHD
                </Link>
                <Link href="/users/emotionally-sensitive" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Emotionally Sensitive
                </Link>
                <Link href="/users/fitness-enthusiasts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Fitness Enthusiasts
                </Link>
              </div>
            </div>
          </div>

          {/* Docs Dropdown */}
          <div className="relative group">
            <button className="font-medium hover:text-primary-color transition-colors flex items-center">
              Docs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-1">
                <Link href="/docs/getting-started" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Getting Started
                </Link>
                <Link href="/docs/api" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  API
                </Link>
                <Link href="/docs/tutorials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Tutorials
                </Link>
              </div>
            </div>
          </div>

          <Link href="/download" className="font-medium hover:text-primary-color transition-colors">
            Download
          </Link>
          
          <Link href="/pricing" className="font-medium hover:text-primary-color transition-colors">
            Pricing
          </Link>
          
          <Link href="/download" className="btn btn-primary ml-2">
            Get App
          </Link>
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
                <div className="font-medium text-gray-800 mb-2">Product</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/product/todo" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    To Do
                  </Link>
                  <Link href="/product/all-in-one" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    All in One
                  </Link>
                  <Link href="/product/ai-friend" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    AI Friend
                  </Link>
                </div>
              </div>
              
              {/* Users Section */}
              <div className="border-b pb-2">
                <div className="font-medium text-gray-800 mb-2">Users</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/users/travel-enthusiasts" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Travel Enthusiasts
                  </Link>
                  <Link href="/users/journal-lovers" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Journal Lovers
                  </Link>
                  <Link href="/users/anime-fans" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Anime Fans
                  </Link>
                  <Link href="/users/parents" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Parents
                  </Link>
                  <Link href="/users/introverts" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Introverts
                  </Link>
                  <Link href="/users/adhd" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    ADHD
                  </Link>
                  <Link href="/users/emotionally-sensitive" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Emotionally Sensitive
                  </Link>
                  <Link href="/users/fitness-enthusiasts" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Fitness Enthusiasts
                  </Link>
                </div>
              </div>
              
              {/* Docs Section */}
              <div className="border-b pb-2">
                <div className="font-medium text-gray-800 mb-2">Docs</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link href="/docs/getting-started" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Getting Started
                  </Link>
                  <Link href="/docs/api" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    API
                  </Link>
                  <Link href="/docs/tutorials" className="text-sm text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                    Tutorials
                  </Link>
                </div>
              </div>
              
              {/* Other Links */}
              <Link href="/download" className="font-medium hover:text-primary-color transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Download
              </Link>
              <Link href="/pricing" className="font-medium hover:text-primary-color transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/download" className="btn btn-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Get App
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;