import Image from 'next/image';
import Link from 'components/Link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import PeriodicTable from 'components/periodicTable/periodicTable';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'contentlayer2/client';
import { allBlogs } from 'contentlayer/generated';
import { Hero } from 'components/ReactBits/hero';
import { LogoMarquee } from 'components/ReactBits/Logos';
import Stats3 from 'components/ReactBits/Profile';
import { Blog1 } from 'components/ReactBits/BlogHome';
import { AppleCardsCarousel } from 'components/Conferences';

export default function Home({
  latestPosts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Hero />
      <Stats3 />
      <AppleCardsCarousel />
      <Blog1 latestPosts={latestPosts} />
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) =>
      pick(post, ['slug', 'title', 'publishedAt', 'image', 'summary'])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 8);

  return { props: { latestPosts: posts } };
}
