import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – David Crawford">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              GitHub: <a href="https://github.com/DaveAldon">@davealdon</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://the-grand-rapids-developer.vercel.app">
                <a>the-grand-rapids-developer.vercel.app</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <Link href="https://www.linkedin.com/in/davidcrawfordprofile/">
                <a>https://www.linkedin.com/in/davidcrawfordprofile</a>
              </Link>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>David Crawford, Software Developer at Michigan Labs</p>
          <h3>Long, 3rd Person</h3>
          <p>
            David Crawford is a Software Developer at{' '}
            <a href="https://michiganlabs.com/">Michigan Labs</a>, a talented
            group of Software Developers, Delivery Leads, and UX Designers with
            a focus on solving some of the most challenging problems in custom
            software. He was hired to work in small teams to develop custom
            mobile, web, and IoT software via the software consultancy model for
            locally owned businesses, and some of the worldU+2019s leading
            companies.
          </p>
          <h2>Headshot</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="David Crawford headshot"
                width={400}
                height={400}
                quality={100}
                src={'/avatar.jpg'}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
