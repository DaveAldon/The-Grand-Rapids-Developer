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
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          The Grand Rapids Developer
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
            title="The 5 Minute Accessibility Strategy"
            slug="The-5-Minute-Accessibility-Strategy"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            imageUrl={
              'https://optimise2.assets-servd.host/gratis-creeper/production/blog/1642672_social-graphic-for-blog-post_Op1_Original_051723.jpg?w=1125&auto=compress%2Cformat&fit=crop&dm=1684439443&s=58af9d7a3debd84a717f9c2ab6b5daef'
            }
          />
          <BlogPostCard
            title="The Overwhelming Power of Culture"
            slug="The-Overwhelming-Power-of-Culture"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            imageUrl={
              'https://www.grandrapidsdeveloper.com/static/images/culture-banner.png'
            }
          />
          <BlogPostCard
            title="Deploying Next.js to GitHub Pages"
            slug="Deploying-Nextjs-to-Github-Pages"
            gradient="from-[#D8B4FE] to-[#F86139]"
            imageUrl={
              'https://static.wixstatic.com/media/955c63_e01b943cd5f047ac8e2d1081a129d006~mv2.png/v1/fill/w_740,h_427,al_c,lg_1,q_85,enc_auto/955c63_e01b943cd5f047ac8e2d1081a129d006~mv2.png'
            }
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
        <Subscribe />
      </div>
    </Container>
  );
}
