import React from 'react';
import { Container } from '@/components/ui/Container';
import { HOW_IT_WORKS } from '@/lib/constants';

/**
 * How It Works section with compact timeline steps
 */
export function HowItWorks() {
  return (
         <section id="how-it-works" className="py-12 font-neuemontreal bg-white">
      <Container>
        <div className="text-center mb-8">
          {/* <h2 className="text-3xl font-bold mb-4" style={{ color: '#FFAB0C' }}> */}
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            {HOW_IT_WORKS.title}
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
            {HOW_IT_WORKS.description}
          </p>
        </div>

         {/* Grid Timeline 2x3 */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
           {HOW_IT_WORKS.steps.map((step, index) => (
             <div
               key={step.id}
               className="flex flex-col items-center text-center"
             >
               <img 
                 src={`/main/${index + 1}.png`} 
                 alt={`Step ${index + 1}`}
                 className="w-auto h-auto max-w-xs rounded-lg shadow-lg mb-2"
                 style={{ objectPosition: 'center' }}
               />
               <h3 className="text-lg font-bold text-gray-900 mb-1">
                 {step.title}
               </h3>
               <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                 {step.description}
               </p>
             </div>
           ))}
         </div>

      </Container>
    </section>
  );
} 