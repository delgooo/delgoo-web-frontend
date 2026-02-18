'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { AppStoreButton } from '@/components/ui/AppStoreButton';
import { SITE_CONFIG, FOOTER, BASE_PATH } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-delgoo-blue text-white font-neuemontreal overflow-hidden">
      <Container>
        <div className="py-16 md:py-20">
          {/* Logo + wordmark */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE_PATH}/logo/icon.png`} alt="" className="h-14 md:h-18 w-auto" />
            <p className="text-5xl md:text-7xl font-black tracking-tight text-white/90">
              {SITE_CONFIG.name}
            </p>
          </motion.div>

          <motion.p
            className="mt-4 text-white/60 text-lg max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {t(FOOTER.tagline)}
          </motion.p>

          {/* App store buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <AppStoreButton platform="google-play" />
            <AppStoreButton platform="app-store" />
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-white/50 text-sm">
              &copy; {currentYear} {SITE_CONFIG.name}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                {t(FOOTER.links.privacy)}
              </Link>
              <Link
                href="/terms"
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                {t(FOOTER.links.terms)}
              </Link>
              <a
                href="#"
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                {t(FOOTER.links.cookies)}
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
