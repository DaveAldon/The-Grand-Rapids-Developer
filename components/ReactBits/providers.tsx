'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { SmoothScroll } from './smooth-scroll';
import { ReducedMotionProvider } from 'lib/motion';

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReducedMotionProvider>
        <SmoothScroll>{children}</SmoothScroll>
      </ReducedMotionProvider>
    </ThemeProvider>
  );
}
