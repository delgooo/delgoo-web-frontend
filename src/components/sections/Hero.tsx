import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Hero section with two-column layout
 */
export function Hero() {
  return (
    <section id="home" className="py-12 bg-gradient-to-br from-blue-50 to-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-[#1F489F]">{SITE_CONFIG.tagline}</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {SITE_CONFIG.description}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <AppStoreButton platform="google-play" />
                <AppStoreButton platform="app-store" />
              </div>
              <Button variant="outline" size="md" className="text-base">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1F489F]">10K+</div>
                <div className="text-xs text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1F489F]">50K+</div>
                <div className="text-xs text-gray-600">Deliveries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#1F489F]">95%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Placeholder for delivery image */}
              <div className="bg-gradient-to-br from-[#1F489F] to-[#2d5bb8] rounded-xl p-6 text-white text-center">
                <div className="w-full h-64 bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-3">📦</div>
                    <h3 className="text-lg font-semibold mb-2">Smart Delivery</h3>
                    <p className="text-sm opacity-90">
                      Connect with people already on the move
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 bg-[#FFAB0C] rounded-full p-3 shadow-lg">
                <div className="text-xl">🚚</div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-full p-3 shadow-lg">
                <div className="text-xl">📱</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFAB0C]/20 to-transparent rounded-xl -z-10 transform rotate-3 scale-105"></div>
          </div>
        </div>
      </Container>
    </section>
  );
} 