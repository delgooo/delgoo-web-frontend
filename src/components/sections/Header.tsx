'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';

/**
 * Header component with navigation and app store download buttons
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 font-neuemontreal">
      {/* Modern background */}
      <div className="absolute inset-0 bg-white border-b border-gray-200 shadow-soft"></div>
      
      <Container>
        <div className="relative z-10 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group">
              <img 
                src="/logo/logo.jpg" 
                alt="Delgoo" 
                className="h-12 w-auto rounded-2xl shadow-medium ring-1 ring-gray-100 transition-all duration-300 group-hover:shadow-large group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center w-full gap-8">
            {NAVIGATION.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
              >
                {section.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-2xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200 shadow-medium rounded-b-3xl">
              {NAVIGATION.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all duration-300 font-medium"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
} 