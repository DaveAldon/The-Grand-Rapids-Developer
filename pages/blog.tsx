import { useState } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'contentlayer/client';
import { allBlogs } from 'contentlayer/generated';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Blog – David Crawford"
      description="My thoughts on software development, technology, and writing."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`I've been writing in various genres for many years, and this blog is specifically for software development.`}
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`In total, I've written ${posts.length} articles for The Grand Rapids Developer blog.
            Use the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white">
              Most Popular
            </h3>
            <BlogPost
              title="Deploying Next.js to GitHub Pages"
              summary="Next.js is easy to get into using its own getting started guide, however in this post we’re interested in getting a Next.js website deployed to GitHub Pages. I’m going to share my lessons learned and what they don’t tell you about the deployment process."
              slug="Deploying-Nextjs-to-Github-Pages"
              image="https://static.wixstatic.com/media/955c63_e01b943cd5f047ac8e2d1081a129d006~mv2.png/v1/fill/w_740,h_427,al_c,lg_1,q_85,enc_auto/955c63_e01b943cd5f047ac8e2d1081a129d006~mv2.png"
            />
            <BlogPost
              title="React Custom Hooks vs. Local State"
              summary="There’s plenty to be said about Hooks vs. Classes, but this post is going to be hyper-focused on “why” and “when” you should use Custom Hooks instead of Local State."
              slug="React-Custom-Hooks-vs-Local-State"
              image="https://static.wixstatic.com/media/955c63_05d6b307095c42688e0cc64ba7dc565d~mv2.png/v1/fill/w_740,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/955c63_05d6b307095c42688e0cc64ba7dc565d~mv2.png"
            />
            <BlogPost
              title="Atomic and Domain Driven React-Native Development"
              summary="Atomic and Domain Driven development are two practices that seek to decouple, modularize, and create easy to maintain software projects. In this post, I want to share how I’ve combined the spirit of these two methodologies, by taking their best and simplest traits, and apply them to React Native."
              slug="Atomic-and-Domain-Driven-React-Native"
              image="https://static.wixstatic.com/media/e862a1_f48ebd91db9942e0bee9aa26e271dd3a~mv2.png/v1/fill/w_740,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e862a1_f48ebd91db9942e0bee9aa26e271dd3a~mv2.png"
            />
          </>
        )}
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'summary', 'publishedAt', 'image'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
