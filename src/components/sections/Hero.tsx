import React from 'react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Hero section with two-column layout
 */
export function Hero() {
  return (
    <section id="home" className="relative py-20 font-neuemontreal overflow-hidden geometric-bg">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-60"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
      
      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
                <span className="text-sm font-semibold text-blue-700">🚀 Coming Soon</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="solid-text">{SITE_CONFIG.tagline}</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                {SITE_CONFIG.description}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <AppStoreButton platform="google-play" />
                <AppStoreButton platform="app-store" />
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span>Join 10K+ users</span>
                </div>
              </div>
            </div>
          </div> 

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative z-10">
              <div className="bg-white rounded-modern-lg p-8 shadow-large ring-1 ring-gray-100 border border-gray-200">
                <div className="w-full h-80 bg-gray-100 rounded-modern flex items-center justify-center relative overflow-hidden">
                  {/* Modern Floating Elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-blue-500 rounded-2xl shadow-medium flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-yellow-500 rounded-2xl shadow-medium flex items-center justify-center">
                    <span className="text-xl">🚚</span>
                  </div>
                  
                  {/* Central Content */}
                  <div className="text-center z-10">
                    <div className="w-20 h-20 bg-blue-500 rounded-3xl mx-auto mb-4 shadow-medium flex items-center justify-center">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Delivery</h3>
                    <p className="text-sm text-gray-600 max-w-xs">
                      Connect with people already on the move
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modern background decoration */}
            <div className="absolute inset-0 bg-blue-100 rounded-modern-lg -z-10 transform rotate-2 scale-105"></div>
            <div className="absolute inset-0 bg-yellow-100 rounded-modern-lg -z-20 transform -rotate-1 scale-110"></div>
          </div>
        </div>
      </Container>
    </section>
  );
} 