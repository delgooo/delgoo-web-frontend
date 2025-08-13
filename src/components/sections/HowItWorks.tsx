import React from 'react';
import { Container } from '@/components/ui/Container';
import { HOW_IT_WORKS } from '@/lib/constants';

/**
 * Modernized How It Works section with enhanced visual design and interactions
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 font-neuemontreal overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Subtle Accent Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50/30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-50/30 rounded-full"></div>
      
      {/* Very Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-3"></div>
      
      <Container>
        <div className="relative z-10 text-center mb-20">
          {/* Enhanced Header */}
          
          <h2 className="text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
            How It <span className="solid-text">Works</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {HOW_IT_WORKS.description}
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <div
                key={step.id}
                className="relative group"
              >
                {/* Enhanced Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-large z-10 group-hover:scale-110 hover:scale-105 transition-all duration-500 ease-out hover:-translate-y-1">
                  {index + 1}
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                </div>
                
                {/* Enhanced Card Design */}
                <div className="text-center pt-12">
                  <div className="relative mb-8 group-hover:scale-105 transition-all duration-500">
                    {/* Image Container with Enhanced Styling */}
                    <div className="relative overflow-hidden rounded-modern-lg shadow-large ring-1 ring-gray-100/50 bg-white p-2">
                      <img 
                        src={`/main/${index + 1}.png`} 
                        alt={`Step ${index + 1}: ${step.title}`}
                        className="w-full h-auto max-w-xs mx-auto rounded-modern object-cover"
                        style={{ objectPosition: 'center' }}
                      />
                      
                      {/* Enhanced Hover Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Subtle Border Glow */}
                      <div className="absolute inset-0 rounded-modern-lg ring-2 ring-blue-200/50 group-hover:ring-blue-300/70 transition-all duration-300"></div>
                    </div>
                    
                  </div>
                  
                  {/* Enhanced Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed max-w-xs mx-auto text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
} 