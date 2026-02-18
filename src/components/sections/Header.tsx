'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { NAVIGATION, BASE_PATH } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 font-neuemontreal"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo: icon + wordmark */}
            <motion.button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${BASE_PATH}/logo/icon.png`} alt="" className="h-9 w-auto" />
              <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-delgoo-blue' : 'text-white'
              }`}>
                Delgoo
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAVIGATION.sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    isScrolled ? 'text-gray-700 hover:text-delgoo-blue' : 'text-white/80 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -1 }}
                >
                  {t(section.label)}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}

              {/* Language Toggle */}
              <div className="flex items-center bg-gray-100/80 rounded-full p-0.5 text-sm">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full font-medium transition-all duration-200 ${
                    lang === 'en'
                      ? 'bg-delgoo-blue text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('it')}
                  className={`px-3 py-1 rounded-full font-medium transition-all duration-200 ${
                    lang === 'it'
                      ? 'bg-delgoo-blue text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  IT
                </button>
              </div>
            </nav>

            {/* Mobile: Lang toggle + hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <div className="flex items-center bg-gray-100/80 rounded-full p-0.5 text-xs">
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 rounded-full font-medium transition-all duration-200 ${
                    lang === 'en' ? 'bg-delgoo-blue text-white' : 'text-gray-500'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('it')}
                  className={`px-2 py-0.5 rounded-full font-medium transition-all duration-200 ${
                    lang === 'it' ? 'bg-delgoo-blue text-white' : 'text-gray-500'
                  }`}
                >
                  IT
                </button>
              </div>

              <button
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0.5'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-3.5'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg px-6 py-4 space-y-1">
              {NAVIGATION.sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-delgoo-blue hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {t(section.label)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
