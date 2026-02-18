'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Accordion } from '@/components/ui/Accordion';
import { FAQ_ITEMS } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-gray-50 font-neuemontreal"
    >
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            FAQ
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            {t({
              en: "Answers to the most common questions",
              it: "Risposte alle domande più frequenti",
            })}
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion items={FAQ_ITEMS} />
        </motion.div>
      </Container>
    </section>
  );
}
