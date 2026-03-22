'use client';

import Image from 'next/image';
import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform
} from 'motion/react';

type Logo = {
  name: string;
  src: string;
  scale?: number;
};

const logos: Logo[] = [
  { name: 'Ford', src: '/companies/ford.png', scale: 0.9 },
  { name: 'Auto Wares', src: '/companies/autowares.png', scale: 0.95 },
  { name: 'Orb Aerospace', src: '/companies/orb.png', scale: 0.88 },
  { name: 'Our Daily Bread', src: '/companies/odb.png', scale: 0.92 },
  { name: 'Gentex', src: '/companies/gentex.png', scale: 0.98 },
  { name: 'Trulife', src: '/companies/trulife.png', scale: 1.08 },
  { name: 'Paratext', src: '/companies/paratext.png', scale: 0.9 }
];

export const LogoMarquee = () => {
  const xPercent = useMotionValue(0);
  const x = useTransform(xPercent, (v) => `${v}%`);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((time, delta) => {
    const speed = 1;
    const moveBy = (speed * delta) / 1000;
    const newX = xPercent.get() - moveBy;

    if (newX <= -50) {
      xPercent.set(0);
    } else {
      xPercent.set(newX);
    }
  });

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div
        className="flex w-full max-w-5xl flex-row gap-(--gap) overflow-hidden p-2 [--gap:2rem] mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        ref={containerRef}
      >
        <motion.div
          className="flex shrink-0 justify-around gap-(--gap) flex-row min-w-full"
          style={{ x }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="group flex flex-col items-center justify-center gap-2 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <div className="flex h-20 items-center justify-center px-3">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={144}
                  height={80}
                  className="h-full w-auto max-w-none object-contain invert dark:invert-0"
                  style={{ transform: `scale(${logo.scale ?? 1})` }}
                />
              </div>
              <div className="invisible mt-2 whitespace-nowrap text-sm font-extralight italic text-black dark:text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {logo.name}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
