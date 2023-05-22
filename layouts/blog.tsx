import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import Subscribe from 'components/Subscribe';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';

/* const editUrl = (slug) =>
  `https://github.com/leerob/leerob.io/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`; */

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  return (
    <Container
      title={`${post.title} – David Crawford`}
      description={post.summary}
      image={`https://the-grand-rapids-developer.vercel.app${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="David Crawford"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'David Crawford / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-8">
          <Subscribe />
        </div>
        {/* <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div> */}
      </article>
    </Container>
  );
}
