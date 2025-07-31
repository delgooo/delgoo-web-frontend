import React from 'react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { HOW_IT_WORKS } from '@/lib/constants';

/**
 * How It Works section with compact timeline steps
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 bg-white">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {HOW_IT_WORKS.description}
          </p>
        </div>

        {/* Compact Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#1F489F] to-[#FFAB0C] hidden lg:block"></div>

          <div className="space-y-6">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-center lg:justify-start mb-2">
                      <div className="w-8 h-8 bg-[#1F489F] text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                        {step.id}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-white border-3 border-[#1F489F] rounded-full shadow-md lg:mx-6 my-2">
                  <div className="w-3 h-3 bg-[#FFAB0C] rounded-full"></div>
                </div>

                {/* Spacer for mobile */}
                <div className="flex-1 lg:hidden"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-[#1F489F] to-[#2d5bb8] rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-base mb-4 opacity-90">
              Join thousands of users who are already making deliveries simple and efficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <AppStoreButton platform="google-play" />
              <AppStoreButton platform="app-store" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 