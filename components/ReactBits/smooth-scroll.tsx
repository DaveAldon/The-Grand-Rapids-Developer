'use client';

import { useEffect, type ReactNode } from 'react';

const features = {
  smoothScroll: true
};

export function SmoothScroll({ children }: { children: ReactNode }): ReactNode {
  useEffect(() => {
    if (!features.smoothScroll) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';

    // Handle anchor link clicks
    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const element = document.querySelector(href);
      if (!element) return;

      e.preventDefault();

      const top =
        (element as HTMLElement).getBoundingClientRect().top +
        window.scrollY -
        100;

      window.scrollTo({ top, behavior: 'smooth' });
    }

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return <>{children}</>;
}
