'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function ThemeSwitch() {
  const mounted = useIsMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          aria-label="Toggle theme"
          disabled
          className="h-11 w-11 cursor-not-allowed rounded-full border border-gray-200/80 bg-white/80 opacity-40 shadow-lg backdrop-blur dark:border-gray-700/80 dark:bg-black/80"
        />
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        aria-pressed={isDark}
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-gray-900 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-700/80 dark:bg-black/85 dark:text-gray-100"
      >
        {isDark ? (
          <Sun className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Moon className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
