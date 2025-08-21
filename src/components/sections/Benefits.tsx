
import React from 'react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { BENEFITS } from '@/lib/constants';
import { Rocket } from 'lucide-react';

/**
 * Benefits section with 4-column grid
 */
export function Benefits() {
  return (
    <section id="benefits" className="py-12 bg-yellow-100 font-neuemontreal">
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

          {/* CTA Section */}
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-[#FFAB0C] to-[#FFB52E] rounded-xl p-6 text-gray-900">
            <h3 className="text-xl font-bold mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-base mb-4 opacity-90">
              Be among the first to experience the future of delivery.
            </p>
            <p className="text-2xl font-bold mb-4">
              COMING SOON!
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
                {/* Modern Icon */}
                <div className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && (
                    <svg className="w-full h-full text-blue-500" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-full h-full text-green-500" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-full h-full text-purple-500" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-full h-full text-orange-500" fill="none" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  )}
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
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Secure & Reliable</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Your packages are protected with advanced security measures</p>
          </div>
          
          <div className="text-center group">
            <div className="w-14 h-14 bg-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
              </svg>
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Lightning Fast</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Get your packages delivered in hours, not days</p>
          </div>
          
          <div className="text-center group">
            <div className="w-14 h-14 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-3 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
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
                <Rocket className="w-5 h-5 mr-2" />
                <span className="text-lg font-bold">COMING SOON!</span>
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