'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { LogoMarquee } from './Logos';

const stats = [
  {
    value: '31+',
    label:
      'Enterprise projects completed @ Michigan Software Labs in the last 4 years'
  },
  {
    value: '11+',
    label: 'Major industries served and growing'
  }
];

export default function Stats3() {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  const squares = Array.from({ length: 30 }, (_, i) => i);

  useEffect(() => {
    const marquee1 = marquee1Ref.current;
    const marquee2 = marquee2Ref.current;

    if (!marquee1 || !marquee2) return;

    let animation: number;
    let scrollPos1 = 0;
    let scrollPos2 = -(marquee2.scrollHeight / 2);

    const animate = () => {
      scrollPos1 += 0.8;
      if (scrollPos1 >= marquee1.scrollHeight / 2) {
        scrollPos1 = 0;
      }
      marquee1.style.transform = `translateY(-${scrollPos1}px)`;

      scrollPos2 += 0.8;
      if (scrollPos2 >= 0) {
        scrollPos2 = -(marquee2.scrollHeight / 2);
      }
      marquee2.style.transform = `translateY(${scrollPos2}px)`;

      animation = requestAnimationFrame(animate);
    };

    animation = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <section className="w-full pt-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-black rounded-2xl sm:rounded-3xl overflow-hidden border dark:border-neutral-900"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl sm:text-4xl md:text-4xl font-medium text-white leading-tight mb-6 sm:mb-8"
              >
                Hi, I'm{' '}
                <span className="italic font-serif text-accent">
                  David Crawford
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base italic font-extralight sm:text-lg text-neutral-300 tracking-tight leading-relaxed mb-8"
              >
                Partner @ Michigan Software Labs
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-base sm:text-lg text-neutral-300 tracking-tight leading-relaxed mb-8"
              >
                I help companies solve their biggest problems through
                technology. I engage early to uncover where solutions can create
                the most value, then lead teams to get the job done right.
              </motion.p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex flex-col gap-2"
                  >
                    <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-base text-neutral-400 ">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Masked Image with Marquee */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-auto overflow-hidden bg-black">
              {/* Gradient overlay - fades from top on mobile, from left on desktop */}
              <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-black via-black/60 to-transparent via-30% z-20 pointer-events-none" />

              {/* Isolation wrapper for blend modes */}
              <div
                className="absolute inset-0"
                style={{ isolation: 'isolate' }}
              >
                {/* White background */}
                <div className="absolute inset-0 bg-white" />

                {/* Image layer */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/hackathon.png"
                    alt="Customer service representative"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Black overlay with white squares (cutouts) using multiply blend mode */}
                <div
                  className="absolute inset-0 bg-black"
                  style={{ mixBlendMode: 'multiply' }}
                >
                  {/* Rotated Marquee Container */}
                  <div
                    className="absolute inset-0"
                    style={{
                      transform: 'rotate(45deg) scale(2.2)',
                      transformOrigin: 'center center'
                    }}
                  >
                    <div className="flex gap-2 sm:gap-3 md:gap-4 h-full items-center justify-center">
                      {/* Marquee 1 - Scrolling Down */}
                      <div className="relative overflow-hidden">
                        <div
                          ref={marquee1Ref}
                          className="flex flex-col gap-3 sm:gap-4"
                        >
                          {[...squares, ...squares].map((_, index) => (
                            <div
                              key={`marquee1-${index}`}
                              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md sm:rounded-lg bg-white shrink-0"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Marquee 2 - Scrolling Up */}
                      <div className="relative overflow-hidden">
                        <div
                          ref={marquee2Ref}
                          className="flex flex-col gap-3 sm:gap-4"
                        >
                          {[...squares, ...squares].map((_, index) => (
                            <div
                              key={`marquee2-${index}`}
                              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md sm:rounded-lg bg-white shrink-0"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mt-4 px-6 sm:mt-8 sm:px-8">
        <LogoMarquee />
      </div>
    </section>
  );
}
