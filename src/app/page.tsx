'use client';

import { LanguageProvider } from '@/lib/i18n';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Stats } from '@/components/sections/Stats';
import { Benefits } from '@/components/sections/Benefits';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <HowItWorks />
        <Stats />
        <Benefits />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
