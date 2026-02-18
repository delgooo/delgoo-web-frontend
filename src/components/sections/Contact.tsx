'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white font-neuemontreal"
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
            {t(CONTACT.title)}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            {t(CONTACT.subtitle)}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t(CONTACT.info.getInTouch)}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {t(CONTACT.info.getInTouchDesc)}
              </p>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-delgoo-blue rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-500">{CONTACT.info.email}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h4 className="font-medium text-gray-900 mb-3">{t(CONTACT.info.followUs)}</h4>
              <div className="flex gap-3">
                {['twitter', 'instagram', 'linkedin'].map((social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-delgoo-blue hover:text-white text-gray-500 transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  >
                    <span className="text-xs font-bold uppercase">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              {t(CONTACT.info.sendMessage)}
            </h3>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="grid md:grid-cols-2 gap-4" variants={formFieldVariants}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t(CONTACT.form.name)}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-delgoo-blue/20 focus:border-delgoo-blue transition-all duration-300"
                    placeholder={t(CONTACT.form.namePlaceholder)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t(CONTACT.form.email)}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-delgoo-blue/20 focus:border-delgoo-blue transition-all duration-300"
                    placeholder={t(CONTACT.form.emailPlaceholder)}
                  />
                </div>
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t(CONTACT.form.subject)}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-delgoo-blue/20 focus:border-delgoo-blue transition-all duration-300"
                >
                  <option value="">{t(CONTACT.form.subjectOptions.default)}</option>
                  <option value="general">{t(CONTACT.form.subjectOptions.general)}</option>
                  <option value="support">{t(CONTACT.form.subjectOptions.support)}</option>
                  <option value="partnership">{t(CONTACT.form.subjectOptions.partnership)}</option>
                  <option value="feedback">{t(CONTACT.form.subjectOptions.feedback)}</option>
                </select>
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t(CONTACT.form.message)}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-delgoo-blue/20 focus:border-delgoo-blue transition-all duration-300 resize-none"
                  placeholder={t(CONTACT.form.messagePlaceholder)}
                />
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <Button type="submit" variant="primary" size="md" className="w-full">
                  {t(CONTACT.form.send)}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
