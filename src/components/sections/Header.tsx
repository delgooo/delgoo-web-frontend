'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { SITE_CONFIG, NAVIGATION } from '@/lib/constants';

/**
 * Modern Header component with glass morphism, enhanced animations, and improved UX
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 font-neuemontreal bg-white">      
      <Container>
        <div className="relative z-10 flex items-center justify-between h-20">
          {/* Enhanced Logo with better hover effects */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer">             
              <img 
                src="/logo/logo.jpg" 
                alt="Delgoo" 
                className="relative h-15 w-50 rounded-3xl" 
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center w-full gap-10">
            {NAVIGATION.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="relative text-gray-900 font-bold hover:text-blue-600 px-6 py-3"
              >
                {section.label}
                {/* Background highlight */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-gold-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            ))}
          </nav>

          {/* Enhanced mobile menu button with better animations */}
          <button
            className="md:hidden p-3 rounded-2xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-gold-50/30 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-500 ease-out relative group hover:shadow-soft"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-500 ease-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-500 ease-out ${
                isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
              }`}></span>
              <span className={`absolute inset-0 w-6 h-0.5 bg-current transform transition-all duration-500 ease-out ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </div>
            {/* Enhanced hover effect background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-gold-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Subtle border effect */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/20 transition-all duration-500"></div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation with glass morphism */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 max-h-96' 
            : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'
        }`}>
          <div className="px-6 pt-6 pb-8 space-y-3 bg-white/90 backdrop-blur-xl border-t border-gray-200/50 shadow-large rounded-b-3xl mt-2">
            {NAVIGATION.sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="block w-full text-left px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-gold-50/30 rounded-2xl transition-all duration-300 font-medium group relative overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{section.label}</span>
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-gold-500 transform -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
} 