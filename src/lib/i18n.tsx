'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Lang, Bilingual } from './constants';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (value: Bilingual | string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('delgoo-lang');
    if (stored === 'it' || stored === 'en') {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('delgoo-lang', newLang);
  }, []);

  const t = useCallback((value: Bilingual | string): string => {
    if (typeof value === 'string') return value;
    return value[lang];
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
