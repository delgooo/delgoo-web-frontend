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

         {/* Horizontal Scrollable Timeline */}
         <div className="overflow-x-auto pb-4 yellow-scrollbar">
           <div className="flex gap-20 min-w-max px-12">
             {HOW_IT_WORKS.steps.map((step, index) => (
               <div
                 key={step.id}
                 className="flex flex-col items-center text-center w-64 flex-shrink-0"
               >
                 {/* Timeline image and text */}
                 <div className="flex flex-col items-center text-center">
                                       <img 
                      src={`/main/${index + 1}.png`} 
                      alt={`Step ${index + 1}`}
                      className="w-auto h-auto max-w-xs rounded-lg shadow-lg mb-2"
                      style={{ objectPosition: 'center' }}
                    />
                   {/*<h3 className="text-lg font-bold text-gray-900 mb-1">
                     {step.title}
                   </h3>*/}
                   <p className="text-black leading-relaxed max-w-xs my-4">
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