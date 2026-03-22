'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Hero Image with Glass Card Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-16 w-full"
        >
          {/* Background Image */}
          <div className="relative h-[400px] overflow-hidden rounded-4xl">
            <Image
              src="/images/office-3.jpg"
              alt="City skyline"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/30 via-blue-600/20 to-blue-400/30" />
          </div>

          {/* Glass Card Overlay */}
          <div className="absolute inset-6 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl sm:left-12 sm:top-12 sm:right-auto sm:bottom-auto sm:max-w-md sm:p-8 lg:p-10">
            <h2 className="mb-3 text-3xl font-normal tracking-tight leading-tight text-white sm:text-3xl lg:text-3xl">
              Let's work together <br />
            </h2>
            <p className="mb-4 text-lg tracking-tight text-white/90">
              Got a problem to solve?
              <br />
              Need to prove value in a new tech initiative?
              <br />
              Just need a product built fast?
              <br />
              <br />
              <p className="italic">It all starts with one conversation.</p>
            </p>
            {/* <a
              href="#"
              className="inline-flex tracking-tight items-center gap-2 text-sm font-medium text-white underline decoration-white/50 underline-offset-4 transition-all hover:decoration-white sm:text-base lg:text-lg"
            >
              Browse our collection
              <ArrowRight className="h-4 w-4" />
            </a> */}
          </div>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="mx-auto grid w-full gap-12 sm:grid-cols-2 lg:w-[70%] lg:gap-16">
          {/* Headquarter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
              Our Headquarters
            </p>
            <p className="text-base text-neutral-900 dark:text-neutral-100 sm:text-lg">
              551 Settlers Dr. Ste 200, Ada, MI 49301
            </p>
          </motion.div>

          {/* Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="sm:col-span-1"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
              Get in touch
            </p>
            <a
              href="mailto:info@michiganlabs.com"
              className="inline-block border-b-2 border-neutral-900 text-base text-neutral-900 transition-colors hover:border-neutral-600 hover:text-neutral-600 dark:border-neutral-100 dark:text-neutral-100 dark:hover:border-neutral-400 dark:hover:text-neutral-400 sm:text-lg"
            >
              info@michiganlabs.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
