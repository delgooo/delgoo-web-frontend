'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { LanguageProvider, useLanguage } from '@/lib/i18n';
import { SITE_CONFIG } from '@/lib/constants';

function LegalNav() {
  const { lang, setLang } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-delgoo-blue hover:text-delgoo-gold transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <img src="/logo/icon.png" alt="" className="h-8 w-auto" />
            <span className="font-neuemontreal font-bold text-lg">{SITE_CONFIG.name}</span>
          </Link>
          <button
            onClick={() => setLang(lang === 'en' ? 'it' : 'en')}
            className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            {lang === 'en' ? 'IT' : 'EN'}
          </button>
        </div>
      </Container>
    </nav>
  );
}

interface LegalPageLayoutProps {
  children: React.ReactNode;
}

export function LegalPageLayout({ children }: LegalPageLayoutProps) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-neuemontreal">
        <LegalNav />
        <Container>
          <article className="py-12 md:py-20 max-w-4xl mx-auto prose prose-gray prose-lg prose-headings:font-neuemontreal prose-headings:text-gray-900 prose-h1:text-4xl prose-h1:md:text-5xl prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-delgoo-blue prose-a:no-underline hover:prose-a:underline">
            {children}
          </article>
        </Container>
        <footer className="border-t border-gray-200 py-8">
          <Container>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </LanguageProvider>
  );
}
