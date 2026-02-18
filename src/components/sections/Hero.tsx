'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { HERO } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { t } = useLanguage();
  const tagline = t(HERO.tagline);
  const lines = tagline.split('\n');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-slate-950 font-neuemontreal overflow-hidden"
    >
      {/* Background Video with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          poster=""
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Animated gradient mesh */}
      <div className="absolute inset-0 hero-gradient-mesh opacity-60" />

      <Container>
        <motion.div
          className="relative z-10 py-32 md:py-40"
          style={{ y: textY, opacity: contentOpacity }}
        >
          {/* Headline with word-by-word reveal */}
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-[9rem] font-light leading-[0.9] tracking-tight text-gray-400"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.3 },
              },
            }}
          >
            {lines.map((line, i) => {
              const words = line.split(' ');
              return (
                <motion.span key={i} className="block" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
                  {words.map((word, j) => {
                    const isAccent = i === lines.length - 1 && j === words.length - 1;
                    const isHeavy = (i + j) % 2 === 1;

                    return (
                      <motion.span
                        key={j}
                        variants={wordVariants}
                        className={`inline-block mr-[0.2em] ${
                          isAccent
                            ? 'font-black text-delgoo-gold'
                            : isHeavy
                              ? 'font-black text-white'
                              : ''
                        }`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Description with fade up */}
          <motion.p
            className="mt-8 text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t(HERO.description)}
          </motion.p>

          {/* CTA buttons with staggered entrance */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 1.3 } },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
              }}
              className="animate-pulse-glow rounded-2xl"
            >
              <AppStoreButton platform="google-play" />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
              }}
            >
              <AppStoreButton platform="app-store" />
            </motion.div>
          </motion.div>

          {/* Launch tag */}
          <motion.p
            className="mt-8 text-sm tracking-widest uppercase text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {t(HERO.launch)}
          </motion.p>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div className="w-1 h-2.5 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
