'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { HOW_IT_WORKS } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const imageVariants = (isEven: boolean) => ({
  hidden: { opacity: 0, x: isEven ? -60 : 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
});

const textVariants = (isEven: boolean) => ({
  hidden: { opacity: 0, x: isEven ? 60 : -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const },
  },
});

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-white font-neuemontreal"
    >
      <Container>
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            {t(HOW_IT_WORKS.title)}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t(HOW_IT_WORKS.description)}
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll */}
        <motion.div
          className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 px-2 -mx-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {HOW_IT_WORKS.steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="snap-center flex-shrink-0 w-[85vw] max-w-sm"
              variants={itemVariants}
            >
              <div className="relative">
                <span className="text-[8rem] font-black leading-none text-delgoo-gold/10 select-none absolute -top-8 -left-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <img
                  src={`/main/${index + 1}.png`}
                  alt={`Step ${index + 1}`}
                  className="relative w-full rounded-2xl"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {t(step.title)}
                </h3>
                <p className="mt-2 text-gray-500 leading-relaxed">
                  {t(step.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop: Alternating layout with timeline */}
        <div className="hidden md:flex flex-col gap-24 lg:gap-32 relative timeline-line">
          {HOW_IT_WORKS.steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.id}
                className={`flex items-center gap-12 lg:gap-20 ${
                  isEven ? '' : 'flex-row-reverse'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Image */}
                <motion.div
                  className="flex-1 relative"
                  variants={imageVariants(isEven)}
                >
                  <span className="text-[10rem] lg:text-[12rem] font-black leading-none text-shimmer select-none absolute -top-16 -left-4 opacity-20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <motion.img
                    src={`/main/${index + 1}.png`}
                    alt={`Step ${index + 1}`}
                    className="relative w-full max-w-md mx-auto rounded-2xl"
                    whileHover={{ scale: 1.03, rotate: isEven ? 1 : -1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  className="flex-1"
                  variants={textVariants(isEven)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-delgoo-blue flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-delgoo-blue/20 to-transparent" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {t(step.title)}
                  </h3>
                  <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-md">
                    {t(step.description)}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
