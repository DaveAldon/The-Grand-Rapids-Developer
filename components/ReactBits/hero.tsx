'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import Image from 'next/image';
import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent
} from 'react';
import DitherShader from 'components/ui/dither-shader';

const ease = [0.23, 1, 0.32, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
};

const PARALLAX_INTENSITY = 20;
const DESKTOP_BREAKPOINT = 850;
const HERO_EDGE_GUTTER = 24;

export function Hero(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);
  const leftSlotRef = useRef<HTMLDivElement>(null);
  const rightSlotRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [cardOffsets, setCardOffsets] = useState({ left: 0, right: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;

    if (window.innerWidth < 850) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(offsetX * PARALLAX_INTENSITY);
    mouseY.set(offsetY * PARALLAX_INTENSITY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    let frameId = 0;
    let settleFrameId = 0;

    const updateCardOffsets = () => {
      const desktop = window.innerWidth >= DESKTOP_BREAKPOINT;
      setIsDesktop(desktop);

      if (!desktop) {
        setCardOffsets({ left: 0, right: 0 });
        return;
      }

      const leftRect = leftSlotRef.current?.getBoundingClientRect();
      const rightRect = rightSlotRef.current?.getBoundingClientRect();

      if (!leftRect || !rightRect) {
        return;
      }

      const leftOffset = HERO_EDGE_GUTTER - leftRect.left;
      const rightOffset =
        window.innerWidth - HERO_EDGE_GUTTER - rightRect.right;

      setCardOffsets({ left: leftOffset, right: rightOffset });
    };

    updateCardOffsets();
    frameId = window.requestAnimationFrame(updateCardOffsets);
    settleFrameId = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(updateCardOffsets);
    });

    const resizeObserver = new ResizeObserver(() => {
      updateCardOffsets();
    });

    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    if (leftSlotRef.current) {
      resizeObserver.observe(leftSlotRef.current);
    }

    if (rightSlotRef.current) {
      resizeObserver.observe(rightSlotRef.current);
    }

    window.addEventListener('resize', updateCardOffsets);

    document.fonts?.ready.then(() => {
      updateCardOffsets();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.cancelAnimationFrame(settleFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateCardOffsets);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col overflow-visible pb-1 min-[850px]:pb-64"
      style={{ colorScheme: 'light' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-20 flex items-start justify-center px-6 pt-28 min-[850px]:pt-32 max-[850px]:pt-2">
        <motion.div
          className="flex flex-col items-center max-[850px]:items-start text-center max-[850px]:text-left max-w-4xl max-[850px]:w-full"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          <h1
            className="backdrop-blur-xl p-2 rounded-[65%_35%_75%_25%/29%_32%_68%_71%] mb-6 flex w-fit flex-col text-7xl font-medium leading-[1.1] tracking-tight text-white max-[850px]:text-5xl"
            style={{
              textShadow: '4px 4px 1px black, 0 10px 32px black'
            }}
          >
            <motion.span
              className="block w-full text-left"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease }}
            >
              <span className="italic font-serif text-accent">The</span>
            </motion.span>
            <motion.span
              className="block w-full text-center"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease }}
            >
              Grand Rapids
            </motion.span>
            <motion.span
              className="block w-full text-right"
              variants={fadeInUp}
              transition={{ duration: 0.8, ease }}
            >
              <span className="italic font-serif text-accent">Developer</span>
            </motion.span>
          </h1>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mt-6 px-6 max-[850px]:mt-8 min-[850px]:absolute min-[850px]:inset-x-0 min-[850px]:top-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease }}
      >
        <div className="mx-auto flex max-w-7xl flex-row items-center gap-8 px-4 sm:px-8 max-[850px]:relative max-[850px]:min-h-[29rem] max-[850px]:px-0 min-[700px]:max-[849px]:min-h-[34rem] min-[850px]:flex-row min-[850px]:items-start min-[850px]:justify-center min-[850px]:gap-12">
          <div
            ref={leftSlotRef}
            className="flex w-full justify-center max-[850px]:absolute max-[850px]:left-0 max-[850px]:top-0 max-[850px]:w-[80%] max-[850px]:justify-start min-[700px]:max-[849px]:left-4 min-[700px]:max-[849px]:top-8 min-[700px]:max-[849px]:w-[70%] min-[850px]:w-auto min-[850px]:justify-end min-[850px]:pt-0"
          >
            <motion.div
              className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 max-[850px]:aspect-5/4 min-[850px]:shrink-0 min-[850px]:w-130 min-[850px]:max-w-none"
              initial={
                isDesktop
                  ? { opacity: 0, x: -1020 }
                  : { opacity: 0, x: -120, y: 20 }
              }
              animate={
                isDesktop
                  ? { opacity: 1, x: cardOffsets.left }
                  : { opacity: 1, x: 0, y: 0 }
              }
              transition={{ duration: 1, delay: 0.75, ease }}
            >
              <DitherShader
                src="/images/bridge2.jpg"
                gridSize={1}
                ditherMode="bayer"
                colorMode="grayscale"
                invert={false}
                animated={false}
                animationSpeed={0.02}
                primaryColor="#000000"
                secondaryColor="#f5f5f5"
                threshold={0.5}
                className="h-full min-h-[15rem] w-full min-[850px]:h-120"
              />
            </motion.div>
          </div>

          <div
            ref={rightSlotRef}
            className="flex w-full justify-center max-[850px]:absolute max-[850px]:right-0 max-[850px]:top-28 max-[850px]:w-[70%] max-[850px]:justify-end min-[700px]:max-[849px]:right-4 min-[700px]:max-[849px]:top-32 min-[700px]:max-[849px]:w-[56%] min-[850px]:w-auto min-[850px]:justify-start min-[850px]:pt-8"
          >
            <motion.div
              className="relative w-full max-w-[460px] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 min-[850px]:shrink-0 min-[850px]:w-115 min-[850px]:max-w-none"
              initial={
                isDesktop
                  ? { opacity: 0, x: 1020, y: 100 }
                  : { opacity: 0, x: 120, y: 56 }
              }
              animate={
                isDesktop
                  ? { opacity: 1, x: cardOffsets.right - 20, y: 100 }
                  : { opacity: 1, x: 0, y: 0 }
              }
              transition={{ duration: 1, delay: 0.9, ease }}
            >
              <Image
                src="/images/me.png"
                alt=""
                width={850}
                height={850}
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
