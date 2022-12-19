import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <div className="text-gray-500 hover:text-gray-600 transition">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="text-gray-500 hover:text-gray-600 transition">
              About
            </div>
          </Link>
          <Link href="/newsletter">
            <div className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/blog">
            <div className="text-gray-500 hover:text-gray-600 transition">
              Blog
            </div>
          </Link>
          {/* <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink> */}
          <ExternalLink href="https://github.com/davealdon">
            GitHub
          </ExternalLink>
          <Link href="/tweets">
            <div className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </div>
          </Link>
          {/* <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          {/* <Link href="/guestbook">
            <a>
              <div className="text-gray-500 hover:text-gray-600 transition">
                Guestbook
              </div>
            </a>
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
