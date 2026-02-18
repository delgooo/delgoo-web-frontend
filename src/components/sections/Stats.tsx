'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { STATS } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Stats() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-24 md:py-32 bg-slate-950 font-neuemontreal overflow-hidden noise"
    >
      {/* Subtle gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-delgoo-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-delgoo-gold/5 rounded-full blur-3xl" />

      <Container>
        <motion.div
          className="grid md:grid-cols-3 gap-12 md:gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map((stat) => {
            const value = t(stat.value);
            const numericMatch = value.match(/\d+/);
            const hasNumber = numericMatch !== null;
            const number = hasNumber ? parseInt(numericMatch[0]) : 0;
            const textBefore = hasNumber ? value.slice(0, numericMatch.index) : '';
            const textAfter = hasNumber ? value.slice(numericMatch.index! + numericMatch[0].length) : '';

            return (
              <motion.div
                key={stat.id}
                className="text-center group"
                variants={cardVariants}
              >
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <p className="text-3xl md:text-5xl font-black text-white leading-tight">
                    {hasNumber ? (
                      <AnimatedCounter
                        target={number}
                        prefix={textBefore}
                        suffix={textAfter}
                        duration={2.5}
                      />
                    ) : (
                      value
                    )}
                  </p>
                </motion.div>
                <p className="text-lg md:text-xl font-light text-delgoo-gold mt-2">
                  {t(stat.label)}
                </p>
                <p className="text-gray-400 mt-4 text-base leading-relaxed max-w-xs mx-auto">
                  {t(stat.description)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
