import React from 'react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { SITE_CONFIG } from '@/lib/constants';
import { Rocket, Smartphone, Zap, Truck } from 'lucide-react';

/**
 * Hero section with two-column layout
 */
export function Hero() {
  return (
    <section id="home" className="py-20 font-neuemontreal overflow-hidden geometric-bg">

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
              <h1 className="text-5xl lg:text-8x1 font-extrabold leading-tight tracking-tight">
                <span className="solid-text">{SITE_CONFIG.tagline}</span>
              </h1>
              <p className="text-3xl lg:text-2xl text-gray-800 font-bold leading-relaxed max-w-lg">
                {SITE_CONFIG.description}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <AppStoreButton platform="google-play" />
                <AppStoreButton platform="app-store" />
              </div>
            </div>
          </div> 

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Placeholder for delivery image */}
              <div className="bg-white rounded-modern-lg p-8 shadow-large ring-1 ring-gray-100 border border-gray-200">
                <div className="w-full h-64 bg-gray-100 rounded-modern flex items-center justify-center relative overflow-hidden">
                </div>
              </div>

            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFAB0C]/20 to-transparent rounded-xl -z-10 transform rotate-9 scale-105"></div>
            <div className="absolute inset-0 bg-blue-100 rounded-modern-lg -z-10 transform rotate-2 scale-105"></div>
            <div className="absolute inset-0 bg-yellow-100 rounded-modern-lg -z-20 transform -rotate-1 scale-110"></div>
          </div>
        </div>
      </Container>
    </section>
  );
} 