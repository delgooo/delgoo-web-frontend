'use client';

import { motion } from 'motion/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  splitBy?: 'words' | 'characters';
  animation?: 'fadeUp' | 'blurIn' | 'rotateIn';
}

const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(8px)', y: 10 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotateX: 90, y: 20 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
};

export function SplitText({
  text,
  className,
  delay = 0,
  as: Tag = 'span',
  splitBy = 'words',
  animation = 'fadeUp',
}: SplitTextProps) {
  const units = splitBy === 'characters' ? text.split('') : text.split(' ');
  const variants = animations[animation];
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: splitBy === 'characters' ? 0.02 : 0.06,
            delayChildren: delay,
          },
        },
      }}
      aria-label={text}
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {units.map((unit, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
          style={{ marginRight: splitBy === 'words' ? '0.25em' : undefined }}
          aria-hidden="true"
        >
          {unit === ' ' ? '\u00A0' : unit}
        </motion.span>
      ))}
    </MotionTag>
  );
}
