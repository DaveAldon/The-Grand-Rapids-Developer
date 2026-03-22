'use client';

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring
} from 'motion/react';

type Testimonial = {
  quote: [string, string?];
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote: [
      'The quality of Michigan Software Labs’ deliverables was excellent. They were faithful to the project timeline and identified solutions quickly, even when we had delays due to unforeseen issues. They showed us great mock-ups and video demonstrations of how features should function.',
      'I was impressed with their passion and commitment to the project. Rather than just building the app and being done with it, MichiganLabs wanted to see it succeed. Their interest in the project made us feel like they believed in the app as much as we did, helping us identify many potential issues that we hadn’t thought of.'
    ],
    name: 'Dr. Edward Selby',
    role: 'Faculty member at Rutgers Institute for Health, Health Care Policy, and Aging Research',
    image: '/images/testimonials/EdwardSelby.jpg'
  },
  {
    quote: [
      'They were flexible and supportive throughout the initial project, from design to development. Michigan Software Labs completed the application that is now being used by over 600 drivers in nearly 200 stores.',
      'They continue to work diligently to make enhancements based on internal and external feedback. The team is very organized and communicative, setting the foundation for a smooth and productive relationship.'
    ],
    name: 'Mike Carr',
    role: 'Director of B2B Web Services @ Auto-Wares',
    image: '/images/testimonials/MikeCarr.jpg'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [maxTextHeight, setMaxTextHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const measureContainerRef = useRef<HTMLDivElement>(null);
  const measureItemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  useLayoutEffect(() => {
    const measureHeights = () => {
      const nextMaxHeight = measureItemRefs.current.reduce(
        (height, element) => Math.max(height, element?.offsetHeight ?? 0),
        0
      );

      setMaxTextHeight((currentHeight) =>
        currentHeight === nextMaxHeight ? currentHeight : nextMaxHeight
      );
    };

    measureHeights();

    if (!measureContainerRef.current || typeof ResizeObserver === 'undefined') {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      measureHeights();
    });

    resizeObserver.observe(measureContainerRef.current);
    measureItemRefs.current.forEach((element) => {
      if (element) {
        resizeObserver.observe(element);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section className="h-full bg-transparent flex items-center justify-start select-none">
      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-8 relative cursor-none"
        onClick={nextSlide}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                translateX: cursorX,
                translateY: cursorY,
                position: 'absolute',
                top: -20,
                left: -40,
                zIndex: 50
              }}
              className="pointer-events-none"
            >
              <div className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-xl whitespace-nowrap">
                Next
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-full mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative aspect-[1] w-full max-w-[260px] mx-auto md:mr-auto border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            <div className="w-full md:w-2/3 relative" ref={measureContainerRef}>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 invisible pointer-events-none -z-10"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    ref={(element) => {
                      measureItemRefs.current[index] = element;
                    }}
                    className="flex flex-col justify-between"
                  >
                    <div className="flex-1">
                      <blockquote className="space-y-4 text-md md:text-md tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
                        {testimonial.quote.map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>
                            {paragraphIndex === 0 ? '"' : ''}
                            {paragraph}
                            {paragraphIndex === testimonial.quote.length - 1
                              ? '"'
                              : ''}
                          </p>
                        ))}
                      </blockquote>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                        <h4 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-neutral-500 dark:text-neutral-400 text-base tracking-tight">
                          {testimonial.role}
                        </p>
                      </div>

                      <div className="flex justify-end gap-3 pointer-events-none pb-2">
                        {testimonials.map((_, indicatorIndex) => (
                          <div
                            key={indicatorIndex}
                            className="h-0.5 w-12 bg-neutral-300 dark:bg-neutral-800"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col justify-between"
                style={
                  maxTextHeight
                    ? { minHeight: `${maxTextHeight}px` }
                    : undefined
                }
              >
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <blockquote className="space-y-4 text-md md:text-md tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
                        {testimonials[currentIndex].quote.map(
                          (paragraph, index) => (
                            <p key={index}>
                              {index === 0 ? '"' : ''}
                              {paragraph}
                              {index ===
                              testimonials[currentIndex].quote.length - 1
                                ? '"'
                                : ''}
                            </p>
                          )
                        )}
                      </blockquote>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h4 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-neutral-500 dark:text-neutral-400 text-base tracking-tight">
                        {testimonials[currentIndex].role}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex justify-end gap-3 pointer-events-none pb-2">
                    {testimonials.map((_, idx) => (
                      <div
                        key={idx}
                        className="relative h-0.5 w-12 bg-neutral-300 dark:bg-neutral-800 overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-neutral-900 dark:bg-white"
                          initial={{ width: 0 }}
                          animate={{
                            width: idx === currentIndex ? '100%' : '0%'
                          }}
                          transition={{
                            duration: idx === currentIndex ? 10 : 0,
                            ease: 'linear'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
