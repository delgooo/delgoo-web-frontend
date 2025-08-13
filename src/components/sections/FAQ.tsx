import React from 'react';
import { Container } from '@/components/ui/Container';
import { Accordion } from '@/components/ui/Accordion';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { FAQ_ITEMS } from '@/lib/constants';

// Debug: Log the imported FAQ items
console.log('FAQ_ITEMS imported:', FAQ_ITEMS);
console.log('FAQ_ITEMS length:', FAQ_ITEMS?.length);

/**
 * FAQ section with accordion functionality
 */
export function FAQ() {
  return (
    <section id="faq" className="relative py-20 font-neuemontreal overflow-hidden geometric-bg">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-100 rounded-full opacity-60"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-hex opacity-10"></div>
      
      <Container>
        <div className="relative z-10 text-center mb-16">
          
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Frequently Asked <span className="solid-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about Delgoo
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 relative z-20">
          {/* Debug: Show FAQ items count */}

          <Accordion items={FAQ_ITEMS} />
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="relative bg-blue-500 rounded-modern-lg p-8 text-white shadow-large ring-1 ring-blue-400 border border-blue-400 overflow-hidden">
            {/* Modern background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Our support team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AppStoreButton platform="google-play" />
                <AppStoreButton platform="app-store" />
                <button className="px-6 py-3 bg-white/20 text-white hover:bg-white hover:text-blue-600 font-semibold rounded-2xl transition-all duration-300 border border-white/30 hover:shadow-medium">
                  View Help Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 