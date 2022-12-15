import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import Skills from 'components/Skills';
import Industries from 'components/Industries';
import Links from 'components/Links';

export default function About() {
  return (
    <Container title="About – David Crawford">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="flex space-x-8">
          <Image
            alt="David Crawford headshot"
            width={400}
            height={400}
            quality={100}
            src={'/avatar.jpg'}
            className="rounded-md"
          />
          <div className="mb-8 prose dark:prose-dark leading-6">
            <h2>Links</h2>
            <ul>
              <li>
                <Link href="https://github.com/DaveAldon">
                  <a>Github</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/davidcrawfordprofile/">
                  <a>LinkedIn</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Skills />
        <Industries />
        <Links />
        <div className="mb-8 prose dark:prose-dark leading-6">
          <div className="text-center">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-white">
              3rd Person Bio
            </h1>
          </div>
          <p>
            David Crawford is a Software Developer at{' '}
            <a href="https://michiganlabs.com/">Michigan Labs</a>, a talented
            group of Software Developers, Delivery Leads, and UX Designers with
            a focus on solving some of the most challenging problems in custom
            software. He was hired to work in small teams to develop custom
            mobile, web, and IoT software via the software consultancy model for
            locally owned businesses, and some of the world's leading companies.
          </p>
          <p>
            David is a natural born problem-solver. When he needed to learn how
            to type as a kid, he turned to a Mac SE 30 and the Mavis Beacon
            software that came with it. He liked his hand-me-down computer,
            because it allowed him to accomplish goals in a simple,
            easy-to-understand way. Before long, he was making mods for the old
            Star Wars Battlefront games using Lua. It was the beginning of a
            lifelong love of code.
          </p>
          <p>
            As an information systems major at Grand Valley State University,
            David expanded his software knowledge, both in theory and in
            practice. Beyond being exposed to a variety of languages and
            technologies, he was able to work with actual clients during his
            capstone project. The experience taught him the value of customer
            feedback and the real-world benefits of rapid prototyping.
          </p>
          <p>
            After a series of roles at various organizations, David was hired as
            a software developer at Bravo LT. In addition to client projects, he
            formed the consultancy’s blog strategy, using it to showcase their
            expertise and focus on the developer community. He also shaped the
            company’s internship program and, along the way, changed code
            assessments for interviews to focus on real-world problems and help
            identify top talent.
          </p>
          <p>
            David’s move to Michigan Labs was based on three main factors: their
            consultancy approach, the teamwork and collaboration that infuses
            their culture, and the overall energy and outspokenness of their
            members. Every day, it is a joy being able to solve interesting
            problems and build something useful, together.
          </p>
          <p>
            Like many of Michigan Labs' members, David has a variety of outside
            interests. Two that come to the top are digital art and writing. His
            self-published books range from children's historical fiction to
            theology to fantasy. He has also served as a high school eSports
            coach and continues to maintain blogs of varying topics.
          </p>
          <p>
            In his downtime, David looks after Button Quail. He’s also into
            genealogy. A descendant of William Brewster (leader of the pilgrims
            during the Mayflower voyage), he delves deep into his family
            history. It turns out problem-solving and building something useful
            run in the family.
          </p>
        </div>
      </div>
    </Container>
  );
}
