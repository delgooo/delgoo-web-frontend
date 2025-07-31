import React from 'react';
import { Container } from '@/components/ui/Container';
import { BENEFITS } from '@/lib/constants';

/**
 * Benefits section with 4-column grid
 */
export function Benefits() {
  return (
    <section id="benefits" className="py-12 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Delgoo?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the future of local delivery with our innovative platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1F489F] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Secure & Reliable</h4>
            <p className="text-sm text-gray-600">Your packages are protected with advanced security measures</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#FFAB0C] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Lightning Fast</h4>
            <p className="text-sm text-gray-600">Get your packages delivered in hours, not days</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1F489F] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h4 className="text-base font-semibold text-gray-900 mb-2">Real-time Tracking</h4>
            <p className="text-sm text-gray-600">Follow your package&apos;s journey in real-time</p>
          </div>
        </div>
      </Container>
    </section>
  );
} 