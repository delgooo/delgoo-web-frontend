'use client';

import React, { useState } from 'react';
import type { Bilingual } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full px-0 py-6 text-left flex justify-between items-center focus:outline-none group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-8 text-lg group-hover:text-delgoo-blue transition-colors duration-200">
          {question}
        </span>
        <span
          className={`text-2xl text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: ReadonlyArray<{
    readonly id: number;
    readonly question: Bilingual;
    readonly answer: Bilingual;
  }>;
}

export function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));
  const { t } = useLanguage();

  const toggleItem = (id: number) => {
    const next = new Set(openItems);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setOpenItems(next);
  };

  return (
    <div>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          question={t(item.question)}
          answer={t(item.answer)}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}
