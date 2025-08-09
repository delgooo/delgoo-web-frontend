import React from 'react';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Benefits } from '@/components/sections/Benefits';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

/** In Footer.tsx file
export default function Footer() { }
In page file
import Footer from '@/components/sections/Footer';

Without braces because it's export default

In Footer.tsx file
export function Footer() { }
In page file
import { Footer } from '@/components/sections/Footer';

*/

/**
 * Main page component for Delgoo website
 * 
 * This page includes all the main sections:
 * - Header with navigation and download button
 * - Hero section with two-column layout
 * - How It Works section with timeline
 * - Benefits section with 4-column grid
 * - FAQ section with accordion
 * - Contact section with form
 * - Footer with links and copyright
 */

export default function HomePage() { /** HomePage component exportable via "default" export */
  return (
    <main className="min-h-screen"> {/* min-h-screen is a Tailwind CSS class that sets the minimum height of the page to the screen height */}
      <Header />
      <Hero />
      <section id="home" className="py-2 bg-yellow-200"></section>
      <section id="home" className="py-2 bg-blue-200"></section>
      <HowItWorks />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
