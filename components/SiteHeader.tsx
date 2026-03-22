'use client';

import cn from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import { useRouter } from 'next/router';
import { useEffect, useState, type ReactNode } from 'react';

import Link from 'components/Link';

const ease = [0.23, 1, 0.32, 1] as const;

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/blog', text: 'Blog' }
  /* { href: '/strategy', text: 'My Strategy' } */
] as const;

function HeaderCorner({ className }: { className: string }): ReactNode {
  return (
    <svg
      className={className}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HamburgerIcon({ isOpen }: { isOpen: boolean }): ReactNode {
  return (
    <div className="relative flex h-4 w-8 cursor-pointer flex-col justify-between">
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full bg-gray-900 dark:bg-gray-100"
        animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease }}
      />
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full bg-gray-900 dark:bg-gray-100"
        animate={isOpen ? { rotate: -45, y: -9.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.25, ease }}
      />
    </div>
  );
}

function DesktopNavItem({
  href,
  text
}: {
  href: string;
  text: string;
}): ReactNode {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={cn(
        'hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all hover:bg-gray-200/80 dark:hover:bg-gray-800/80',
        isActive
          ? 'text-gray-900 dark:text-gray-100'
          : 'text-gray-600 dark:text-gray-400'
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
}

export default function SiteHeader(): ReactNode {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease }}
      className="fixed left-0 right-0 top-2.5 z-40 px-4 sm:px-6 max-[850px]:top-0"
    >
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="site-header overflow-hidden">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <Link href="#skip" className="skip-nav">
              Skip to content
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200/80 dark:text-gray-100 dark:hover:bg-gray-800/80"
              >
                Grand Rapids Developer
              </Link>
            </div>

            <nav className="ml-[-0.60rem] hidden items-center md:flex">
              {navItems.map((item) => (
                <DesktopNavItem
                  key={item.href}
                  href={item.href}
                  text={item.text}
                />
              ))}
            </nav>

            <button
              className="flex h-10 w-10 items-center justify-center md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              <HamburgerIcon isOpen={mobileMenuOpen} />
            </button>

            <div className="hidden h-10 w-10 md:block" aria-hidden="true" />
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease }}
                className="overflow-hidden md:hidden"
              >
                <nav className="px-6 pb-4">
                  {navItems.map((item, index) => {
                    const isActive = router.asPath === item.href;

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.04,
                          ease
                        }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            'flex items-center justify-between border-b border-gray-300/80 py-4 text-base font-medium dark:border-gray-700/80',
                            isActive
                              ? 'text-gray-900 dark:text-gray-100'
                              : 'text-gray-600 dark:text-gray-400'
                          )}
                        >
                          {item.text}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <HeaderCorner className="pointer-events-none absolute top-0 -left-12.25 hidden rotate-180 text-(--site-frame) md:block" />
        <HeaderCorner className="pointer-events-none absolute top-0 -right-12.25 hidden rotate-90 text-(--site-frame) md:block" />
      </div>
    </motion.header>
  );
}
