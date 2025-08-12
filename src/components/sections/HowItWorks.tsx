import React from 'react';
import { Container } from '@/components/ui/Container';
import { HOW_IT_WORKS } from '@/lib/constants';

/**
 * How It Works section with compact timeline steps
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 font-neuemontreal overflow-hidden geometric-bg">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-yellow-100 rounded-full opacity-60"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      
      <Container>
        <div className="relative z-10 text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-blue-700">🔄 Process</span>
          </div>
          
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            How It <span className="solid-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {HOW_IT_WORKS.description}
          </p>
        </div>

        {/* Modern Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <div
                key={step.id}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-medium z-10">
                  {index + 1}
                </div>
                
                {/* Timeline image and text */}
                <div className="text-center pt-8">
                  <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={`/main/${index + 1}.png`} 
                      alt={`Step ${index + 1}`}
                      className="w-full h-auto max-w-xs mx-auto rounded-modern shadow-medium ring-1 ring-gray-100 border border-gray-200"
                      style={{ objectPosition: 'center' }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-modern opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 