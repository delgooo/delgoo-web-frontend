import React from 'react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { BENEFITS } from '@/lib/constants';

/**
 * Simplified Benefits section with horizontal feature cards
 */
export function Benefits() {
  return (
    <section id="benefits" className="relative py-16 font-neuemontreal overflow-hidden geometric-bg">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-60"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
      
      <Container>
        <div className="relative z-10 text-center mb-12">
          
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Why Choose <span className="solid-text">Delgoo</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the future of local delivery with our innovative platform
          </p>
        </div>

        {/* Simplified Horizontal Features Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {BENEFITS.map((benefit, index) => (
            <div key={benefit.id} className="group relative bg-white rounded-modern-lg p-4 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 ring-1 ring-gray-100 border border-gray-200">
              {/* Hover background effect */}
              <div className={`absolute inset-0 rounded-modern-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                index % 2 === 0 ? 'bg-blue-50' : 'bg-yellow-50'
              }`}></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2 tracking-wide">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              
              {/* Decorative dot */}
              <div className={`absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 ${
                index % 2 === 0 ? 'bg-blue-500' : 'bg-yellow-500'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center group">
            <div className="w-14 h-14 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Secure & Reliable</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Your packages are protected with advanced security measures</p>
          </div>
          
          <div className="text-center group">
            <div className="w-14 h-14 bg-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Lightning Fast</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Get your packages delivered in hours, not days</p>
          </div>
          
          <div className="text-center group">
            <div className="w-14 h-14 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Real-time Tracking</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Follow your package&apos;s journey in real-time</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative bg-blue-500 rounded-modern-lg p-6 text-white shadow-large ring-1 ring-blue-400 border border-blue-400 overflow-hidden">
            {/* Modern background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-base mb-4 opacity-90 max-w-xl mx-auto">
                Be among the first to experience the future of delivery.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-4">
                <span className="text-lg font-bold">🚀 COMING SOON!</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <AppStoreButton platform="google-play" />
                <AppStoreButton platform="app-store" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
} 