'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'components/Link';
import ElectricBorder from 'components/ElectricBorder/ElectricBorder';

type BlogHomePost = {
  slug: string;
  title: string;
  publishedAt: string;
  image: string;
  summary: string;
};

function ArticleCard({
  post,
  featured = false,
  delay = 0
}: {
  post: BlogHomePost;
  featured?: boolean;
  delay?: number;
}) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const cardContent = (
    <Link
      href={`/blog/${post.slug}`}
      className="flex cursor-pointer flex-col gap-3"
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <span className="absolute top-3 right-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-900 shadow-sm dark:bg-neutral-900 dark:text-white">
            New!
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="line-clamp-2 text-sm font-medium leading-snug text-neutral-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400 sm:text-base">
          {post.title}
        </h3>
        <span className="text-xs text-neutral-500 dark:text-neutral-500">
          {formattedDate}
        </span>
      </div>
    </Link>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      {featured ? (
        <ElectricBorder
          className="rounded-2xl"
          color="#9333EA"
          speed={0.5}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="rounded-2xl bg-white p-4 dark:bg-neutral-900">
            {cardContent}
          </div>
        </ElectricBorder>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

export function Blog1({ latestPosts }: { latestPosts: BlogHomePost[] }) {
  return (
    <section className="w-full pb-8 sm:pb-12 bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-0 bg-transparent px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 md:pb-28"
      >
        <div className="mx-auto w-full max-w-300">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white">
              Blog
            </h1>

            <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 lg:max-w-sm tracking-tight">
              Check out my latest articles and insights on tech developments in
              the industry.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16">
        <div className="mx-auto w-full max-w-300">
          <div className="rounded-3xl border border-neutral-200 bg-white px-6 pt-10 pb-12 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 sm:rounded-4xl sm:px-10 sm:pt-14 sm:pb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 dark:text-white mb-8 sm:mb-10"
            >
              Latest Articles
            </motion.h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {latestPosts.map((post, idx) => (
                <ArticleCard
                  key={post.slug}
                  post={post}
                  featured={idx === 0}
                  delay={0.15 + idx * 0.05}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
