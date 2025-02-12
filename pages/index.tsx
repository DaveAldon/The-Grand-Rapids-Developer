import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import PeriodicTable from 'components/periodicTable/periodicTable';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-7xl tracking-tight mb-1 text-black dark:text-white">
          Grand Rapids Developer
        </h1>
        <br />
        <br />
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-2xl tracking-tight mb-1 text-black dark:text-white">
              David Crawford
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Software Developer at{' '}
              <span className="font-semibold">Michigan Labs</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Sharing cool techniques and interesting technology for anyone who
              is curious. Topics range across a wide variety like React-Native,
              Next.js, vintage C, and behavioral/culture development from a
              business perspective.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="David Crawford"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Distributed Machine Learning Fundamentals: Fine Tuning"
            slug="Distributed-Machine-Learning-Fundamentals-5"
            gradient="from-[#D8B4FE] to-[#F86139]"
            imageUrl={'/static/images/ml-fundamentals/banner-5.jpg'}
          />
          <BlogPostCard
            title="Distributed Machine Learning Fundamentals: MPI"
            slug="Distributed-Machine-Learning-Fundamentals-4"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            imageUrl={'/static/images/ml-fundamentals/banner-4.jpg'}
          />
          <BlogPostCard
            title="Distributed Machine Learning Fundamentals: Dataset Preparation"
            slug="Distributed-Machine-Learning-Fundamentals-3"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            imageUrl={'/static/images/ml-fundamentals/banner-3.jpg'}
          />
        </div>
        <Link
          href="/blog"
          className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          Read all posts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </Link>
        <span className="h-16" />
        <div className="flex justify-center">
          <PeriodicTable />
        </div>
        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}
