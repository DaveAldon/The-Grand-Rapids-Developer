'use client';

import React from 'react';
import Image from 'next/image';
import { Card, Carousel } from './ui/apple-cards-carousel';

export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="mx-auto w-full max-w-300">
        <div className="px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white">
            Community Building
          </h1>

          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 lg:max-w-sm tracking-tight">
            I've spoken at a number of conferences, and continue to help
            organize events in the developer community in Grand Rapids.
          </p>
        </div>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: 'MODELS 2025',
    title: 'How to Sell AI to Your Boss',
    src: '/outreach/models.png',
    content: <DummyContent />
  },
  {
    category: 'LOCALHOST',
    title: "Helped organize and judge Vetr Health's first hackathon",
    src: '/outreach/localhost.jpg',
    content: <DummyContent />
  },
  {
    category: 'Beer City Code 2025',
    title: 'Distributed Machine Learning with MLX',
    src: '/outreach/beercity2025.png',
    content: <DummyContent />
  },
  {
    category: 'Hack the Lab 2024',
    title: "I organized Michigan Software Labs' first hackathon",
    src: '/outreach/hackthelab.png',
    content: <DummyContent />
  },
  {
    category: 'SoftwareGR 2024',
    title: 'How to Answer Technical Questions',
    src: '/outreach/softwaregr.png',
    content: <DummyContent />
  },

  {
    category: 'Beer City Code 2024',
    title: 'React Native & HomeKit',
    src: '/outreach/beercity2024.png',
    content: <DummyContent />
  },
  {
    category: 'AutoWares DevOps 2023',
    title: 'Continuous Improvement',
    src: '/outreach/improvement.png',
    content: <DummyContent />
  }
];
