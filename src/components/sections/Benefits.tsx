import React from 'react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { BENEFITS } from '@/lib/constants';

/**
 * Benefits section with 4-column grid
 */
export function Benefits() {
  return (
    <section id="benefits" className="relative py-20 font-neuemontreal overflow-hidden geometric-bg">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-60"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-grid opacity-10"></div>
      
      <Container>
        <div className="relative z-10 text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700">✨ Features</span>
          </div>
          
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Why Choose <span className="solid-text">Delgoo</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of local delivery with our innovative platform
          </p>
        </div>

        {/* Serpentine Layout for Benefits */}
        <div className="relative mb-16">
          {/* Connection Path */}
          <div className="absolute inset-0 hidden lg:block">
            {/* Serpentine path connecting all cards */}
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <path 
                d="M 100 200 Q 300 100 500 200 T 900 200 Q 1100 300 1100 500 Q 1100 700 900 600 T 500 600 Q 300 700 100 600 Q 100 400 100 200" 
                stroke="#3B82F6" 
                strokeWidth="3" 
                strokeDasharray="10 10"
                opacity="0.3"
                fill="none"
              />
              {/* Connection dots */}
              <circle cx="100" cy="200" r="4" fill="#3B82F6" opacity="0.6"/>
              <circle cx="500" cy="200" r="4" fill="#3B82F6" opacity="0.6"/>
              <circle cx="900" cy="200" r="4" fill="#3B82F6" opacity="0.6"/>
              <circle cx="1100" cy="500" r="4" fill="#3B82F6" opacity="0.6"/>
              <circle cx="900" cy="600" r="4" fill="#3B82F6" opacity="0.6"/>
              <circle cx="500" cy="600" r="4" fill="#3B82F6" opacity="0.6"/>
              <circle cx="100" cy="600" r="4" fill="#3B82F6" opacity="0.6"/>
            </svg>
          </div>

          {/* Serpentine Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 relative z-10">
            {/* Row 1: Top cards */}
            <div className="lg:col-span-2 lg:col-start-1">
              <div className="group relative bg-white rounded-modern-lg p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 ring-1 ring-gray-100 border border-gray-200 transform rotate-1">
                <div className="absolute inset-0 rounded-modern-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-50"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{BENEFITS[0]?.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{BENEFITS[0]?.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{BENEFITS[0]?.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 bg-blue-500"></div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-3">
              <div className="group relative bg-white rounded-modern-lg p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 ring-1 ring-gray-100 border border-gray-200 transform -rotate-1">
                <div className="absolute inset-0 rounded-modern-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-yellow-50"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{BENEFITS[1]?.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{BENEFITS[1]?.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{BENEFITS[1]?.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 bg-yellow-500"></div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-5">
              <div className="group relative bg-white rounded-modern-lg p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 ring-1 ring-gray-100 border border-gray-200 transform rotate-1">
                <div className="absolute inset-0 rounded-modern-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-50"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{BENEFITS[2]?.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{BENEFITS[2]?.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{BENEFITS[2]?.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 bg-blue-500"></div>
              </div>
            </div>

            {/* Row 2: Middle card (centered) */}
            <div className="lg:col-span-3 lg:col-start-3 mt-16">
              <div className="group relative bg-white rounded-modern-lg p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 ring-1 ring-gray-100 border border-gray-200 transform scale-110">
                <div className="absolute inset-0 rounded-modern-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-yellow-50"></div>
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{BENEFITS[3]?.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{BENEFITS[3]?.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{BENEFITS[3]?.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 bg-yellow-500"></div>
              </div>
            </div>

            {/* Row 3: Bottom cards - only show if we have enough benefits */}
            {BENEFITS[4] && (
              <div className="lg:col-span-2 lg:col-start-1 mt-16">
                <div className="group relative bg-white rounded-modern-lg p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 ring-1 ring-gray-100 border border-gray-200 transform -rotate-1">
                  <div className="absolute inset-0 rounded-modern-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-50"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{BENEFITS[4]?.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{BENEFITS[4]?.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{BENEFITS[4]?.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 bg-blue-500"></div>
                </div>
              </div>
            )}

            {BENEFITS[5] && (
              <div className="lg:col-span-2 lg:col-start-5 mt-16">
                <div className="group relative bg-white rounded-modern-lg p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 ring-1 ring-gray-100 border border-gray-200 transform rotate-1">
                  <div className="absolute inset-0 rounded-modern-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-yellow-50"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{BENEFITS[5]?.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wide">{BENEFITS[5]?.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{BENEFITS[5]?.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 bg-yellow-500"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Secure & Reliable</h4>
            <p className="text-gray-600 leading-relaxed">Your packages are protected with advanced security measures</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Lightning Fast</h4>
            <p className="text-gray-600 leading-relaxed">Get your packages delivered in hours, not days</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">Real-time Tracking</h4>
            <p className="text-gray-600 leading-relaxed">Follow your package&apos;s journey in real-time</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative bg-blue-500 rounded-modern-lg p-8 text-white shadow-large ring-1 ring-blue-400 border border-blue-400 overflow-hidden">
            {/* Modern background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Be among the first to experience the future of delivery.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full border border-white/30 mb-6">
                <span className="text-xl font-bold">🚀 COMING SOON!</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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