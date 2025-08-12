'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Individual accordion item component
 */
function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0 group">
      <button
        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-2xl mx-2 my-1"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4 text-lg">{question}</span>
        <span className={`transform transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : 'scale-100'}`}>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-medium">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-6 text-gray-600 leading-relaxed text-base">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: ReadonlyArray<{
    readonly id: number;
    readonly question: string;
    readonly answer: string;
  }>;
}

/**
 * Accordion component for FAQ section
 */
export function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-white rounded-modern-lg shadow-large ring-1 ring-gray-100 border border-gray-200 overflow-hidden">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
} 