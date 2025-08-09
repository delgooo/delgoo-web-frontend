import React from 'react';
import { Container } from '@/components/ui/Container';
import { Accordion } from '@/components/ui/Accordion';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { FAQ_ITEMS } from '@/lib/constants';

/**
 * FAQ section with accordion functionality
 */
export function FAQ() {
  return (
    <section id="faq" className="py-12 bg-blue-100 font-neuemontreal">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about Delgoo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion items={FAQ_ITEMS} />
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-[#FFAB0C] to-[#FFB52E] rounded-xl p-6 text-gray-900">
            <h3 className="text-xl font-bold mb-3">
              Still Have Questions?
            </h3>
            <p className="text-base mb-4 opacity-90">
              Our support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <AppStoreButton platform="google-play" />
              <AppStoreButton platform="app-store" />
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#1F489F] font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                View Help Center
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 