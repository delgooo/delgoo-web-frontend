import React from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { CONTACT } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white font-neuemontreal"
    >
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {t(CONTACT.title)}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            {t(CONTACT.subtitle)}
          </p>
          <motion.a
            href={`mailto:${CONTACT.info.email}`}
            className="mt-8 inline-flex items-center gap-3 text-xl md:text-2xl font-semibold text-delgoo-blue hover:underline underline-offset-4 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {CONTACT.info.email}
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}