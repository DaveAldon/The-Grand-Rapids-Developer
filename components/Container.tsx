import Head from 'next/head';
import { useRouter } from 'next/router';
import cn from 'classnames';
import SiteHeader from 'components/SiteHeader';
import ThemeSwitch from 'components/ThemeSwitch';
import { AuroraBackground } from './ui/aurora-background';
import Footer2 from './ReactBits/footer';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const meta = {
    title: 'Grand Rapids Developer - David Crawford',
    description: `Partner @ Michigan Software Labs.`,
    image: '/images/me.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Head>
        <title>Grand Rapids Developer</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link
          rel="canonical"
          href={`https://the-grand-rapids-developer.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Grand Rapids Developer" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GrandRapidsDev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="site-frame site-frame--top" aria-hidden="true" />
      <div className="site-frame site-frame--bottom" aria-hidden="true" />
      <div className="site-frame site-frame--left" aria-hidden="true" />
      <div className="site-frame site-frame--right" aria-hidden="true" />
      <svg
        className="site-corner site-corner--top-left"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="site-corner site-corner--top-right"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="site-corner site-corner--bottom-left"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="site-corner site-corner--bottom-right"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5.50871e-06 0C-0.00788227 37.3001 8.99616 50.0116 50 50H5.50871e-06V0Z"
          fill="currentColor"
        />
      </svg>

      <SiteHeader />
      <ThemeSwitch />
      {isHomePage ? (
        <AuroraBackground>
          <main
            id="skip"
            className={cn(
              'flex flex-col justify-center pb-0 pt-28 sm:pt-32',
              'px-0'
            )}
          >
            {children}
            <Footer2 />
          </main>
        </AuroraBackground>
      ) : (
        <main
          id="skip"
          className={cn(
            'flex flex-col justify-center bg-gray-50 px-0 pt-28 dark:bg-gray-900 sm:pt-32'
          )}
        >
          {children}
          <Footer2 />
        </main>
      )}
    </div>
  );
}
