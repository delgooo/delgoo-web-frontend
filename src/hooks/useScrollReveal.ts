'use client';

import { useEffect, useRef } from 'react';

/**
 * IntersectionObserver-based scroll reveal.
 * Adds `.revealed` class on intersection to trigger CSS transitions.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: { threshold?: number; once?: boolean }
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, once = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}

/**
 * Observe multiple children inside a container for staggered reveal.
 */
export function useScrollRevealGroup<T extends HTMLElement = HTMLElement>(
  selector = '.reveal-up, .reveal-left, .reveal-scale, mark.highlight',
  options?: { threshold?: number; once?: boolean }
) {
  const ref = useRef<T>(null);
  const { threshold = 0.1, once = true } = options ?? {};

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll(selector);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold, once]);

  return ref;
}
