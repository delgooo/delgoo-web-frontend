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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#1F489F]">
              {SITE_CONFIG.name}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-gray-700 hover:text-[#1F489F] transition-colors duration-200 font-medium"
              >
                {section.label}
              </button>
            ))}
            <div className="flex space-x-2">
              <AppStoreButton platform="google-play" />
              <AppStoreButton platform="app-store" />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#1F489F] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1F489F]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {NAVIGATION.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#1F489F] hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                >
                  {section.label}
                </button>
              ))}
              <div className="px-3 py-2 space-y-2">
                <AppStoreButton platform="google-play" className="w-full justify-center" />
                <AppStoreButton platform="app-store" className="w-full justify-center" />
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
} 