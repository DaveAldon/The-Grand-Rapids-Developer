'use client';

import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import RisingLines from './RisingLines';

export default function Footer2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Image - Full height */}
      <div className="absolute inset-0 h-48 w-full">
        <RisingLines />
      </div>

      {/* Main Content Wrapper */}
      <div className="relative">
        {/* Spacer to show image at top */}
        <div className="h-32 sm:h-40 md:h-48" />

        {/* Black Container with Content */}
        <div className="relative bg-white dark:bg-neutral-950">
          {/* Left Corner SVG */}
          <div className="absolute left-0 top-0 z-10 -translate-y-full">
            <svg
              width="614"
              height="153"
              viewBox="0 0 614 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-[250px] relative top-px"
            >
              <path
                d="M0 0H451.601C467.78 0 483.071 7.75893 491.954 21.2815C558.518 122.612 538.359 153.074 614 153H0V0Z"
                className="fill-white dark:fill-neutral-950"
              />
            </svg>
          </div>

          {/* Right Corner SVG (Flipped) */}
          <div className="absolute right-0 top-0 z-10 -translate-y-full">
            <svg
              width="614"
              height="153"
              viewBox="0 0 614 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-[250px] scale-x-[-1] relative top-px"
            >
              <path
                d="M0 0H451.601C467.78 0 483.071 7.75893 491.954 21.2815C558.518 122.612 538.359 153.074 614 153H0V0Z"
                className="fill-white dark:fill-neutral-950"
              />
            </svg>
          </div>

          {/* Footer Content */}
          <div className="mx-auto w-full max-w-[1400px] px-4 lg:px-8 py-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12"
            >
              {/* Logo */}
              <motion.div variants={itemVariants} className="text-center">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white sm:text-5xl">
                  Grand Rapids Developer
                </h2>
              </motion.div>

              {/* Links */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-900 dark:text-white sm:gap-4 sm:text-base"
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                  Home
                </Link>
                <span className="text-neutral-400 dark:text-neutral-500">
                  -
                </span>
                <Link
                  href="/about"
                  className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                  About
                </Link>
                <span className="text-neutral-400 dark:text-neutral-500">
                  -
                </span>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                  Blog
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6"
              >
                <a
                  href="https://github.com/DaveAldon"
                  className="text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/davidcrawfordprofile/"
                  className="text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
              </motion.div>

              {/* Bottom Section */}
              <motion.div
                variants={itemVariants}
                className="flex w-full flex-col items-center justify-between gap-6 border-t border-neutral-200 dark:border-neutral-800 pt-8 text-center sm:flex-row sm:text-left md:pt-10"
              >
                {/* Copyright */}
                <div className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm">
                  <p>
                    © {new Date().getFullYear()} David Crawford. All rights
                    reserved.
                  </p>
                </div>

                {/* Right text */}
                {/* <div className="text-xs text-neutral-600 dark:text-neutral-400 sm:text-right sm:text-sm">
                  <p>ANALOG & DIGITAL</p>
                  <p>GRAMMY-WINNING ENGINEERS</p>
                  <p>EST. 2017</p>
                </div> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
