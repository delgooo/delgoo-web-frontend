'use client';

import React, { useRef, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Zap, Leaf, Package, Route } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { BENEFITS } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';
import { useScrollRevealGroup } from '@/hooks/useScrollReveal';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
}

export function Benefits() {
  const { t } = useLanguage();
  const sectionRef = useScrollRevealGroup<HTMLElement>();

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white font-neuemontreal"
    >
      <Container>
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            {t({ en: 'Why Delgoo', it: 'Perché Delgoo' })}
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-md">
            {t({
              en: 'Everything you need for fast, secure city delivery',
              it: 'Tutto ciò che serve per consegne urbane veloci e sicure',
            })}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {/* ── Fast ── hero card, 2 cols */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <SpotlightCard className="bg-delgoo-blue rounded-2xl p-8 md:p-10 min-h-[260px] card-shine transition-all duration-300 flex flex-col justify-between">
              <Zap className="w-5 h-5 text-delgoo-gold" />

              <div className="mt-8">
                <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-4">
                  {t(BENEFITS[0].title)}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <AnimatedCounter
                    target={30}
                    className="text-lg font-bold text-white/70"
                  />
                  <span className="text-lg font-bold text-white/40">
                    {t(BENEFITS[0].metricLabel)}
                  </span>
                </div>
                <p className="text-white/50 text-base leading-relaxed max-w-md">
                  {renderHighlight(t(BENEFITS[0].description), t(BENEFITS[0].highlight))}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Eco ── tall card, 2 rows */}
          <motion.div variants={cardVariants} className="md:row-span-2">
            <SpotlightCard className="bg-slate-950 rounded-2xl p-8 md:p-10 min-h-[260px] md:h-full card-shine transition-all duration-300 flex flex-col justify-between">
              <Leaf className="w-5 h-5 text-emerald-400" />

              <div className="mt-auto">
                <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-4">
                  {t(BENEFITS[1].title)}
                </h3>
                <p className="text-base font-semibold text-emerald-400/70 mb-3">
                  {t(BENEFITS[1].metricLabel)}
                </p>
                <p className="text-white/40 text-base leading-relaxed">
                  {renderHighlight(t(BENEFITS[1].description), t(BENEFITS[1].highlight))}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Convenient ── */}
          <motion.div variants={cardVariants}>
            <SpotlightCard className="bg-gray-50 rounded-2xl p-8 md:p-10 min-h-[240px] card-shine transition-all duration-300 flex flex-col justify-between">
              <Package className="w-5 h-5 text-delgoo-gold" />

              <div className="mt-auto">
                <h3 className="text-5xl md:text-6xl font-black text-gray-900 leading-[0.95] mb-4">
                  {t(BENEFITS[2].title)}
                </h3>
                <p className="text-base font-semibold text-gray-400 mb-3">
                  24/7 — {t(BENEFITS[2].metricLabel)}
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  {renderHighlight(t(BENEFITS[2].description), t(BENEFITS[2].highlight))}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── Tracked ── */}
          <motion.div variants={cardVariants}>
            <SpotlightCard className="bg-gray-900 rounded-2xl p-8 md:p-10 min-h-[240px] card-shine transition-all duration-300 flex flex-col justify-between">
              <Route className="w-5 h-5 text-delgoo-gold" />

              <div className="mt-auto">
                <h3 className="text-5xl md:text-6xl font-black text-white leading-[0.95] mb-4">
                  {t(BENEFITS[3].title)}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <AnimatedCounter
                    target={100}
                    suffix="%"
                    className="text-base font-semibold text-delgoo-gold/70"
                  />
                  <span className="text-base font-semibold text-white/30">
                    {t({ en: 'visibility', it: 'visibilità' })}
                  </span>
                </div>
                <p className="text-white/40 text-base leading-relaxed">
                  {renderHighlight(t(BENEFITS[3].description), t(BENEFITS[3].highlight))}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function renderHighlight(text: string, highlight: string) {
  if (!highlight) return text;
  const index = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) return text;
  const before = text.slice(0, index);
  const match = text.slice(index, index + highlight.length);
  const after = text.slice(index + highlight.length);
  return (
    <>
      {before}
      <mark className="highlight">{match}</mark>
      {after}
    </>
  );
}
