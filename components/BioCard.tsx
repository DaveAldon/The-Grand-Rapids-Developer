import Image from 'next/image';
import Link from 'next/link';

export default function BioCard() {
  return (
    <section className="mb-5 text-gray-800 text-center text-left">
      <div className="container mx-auto text-center text-left">
        <div className="grid grid-cols-2 flex items-center">
          <div className="mb-12">
            <div
              className="relative block rounded-lg shadow-lg px-6 py-12 -mr-14"
              style={{
                backgroundColor:
                  'hsla(0, 0%, 100%, 0.55) dark:hsla(0, 0%, 0%, 0.55)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                zIndex: 1
              }}
            >
              <h2 className="text-3xl font-bold mb-4 display-5 dark:text-white">
                About Me
              </h2>
              <p className="text-black-100 mb-5 dark:text-white">
                Check out my GitHub and LinkedIn profiles to see what I've been
                up to in the social/open-source world!
              </p>
              <ul>
                <li>
                  <div className="p-2">
                    <Link href="https://github.com/DaveAldon">
                      <a target={'_blank'}>
                        <div className="bg-gray-200 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                          <span className="title-font font-medium dark:text-white">
                            GitHub
                          </span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="p-2">
                    <Link href="https://www.linkedin.com/in/davidcrawfordprofile/">
                      <a target={'_blank'}>
                        <div className="bg-gray-200 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                          <span className="title-font font-medium dark:text-white">
                            LinkedIn
                          </span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              transform: 'rotate(8deg)'
            }}
          >
            <Image
              src="/avatar.jpg"
              alt=""
              width={400}
              height={400}
              style={{
                borderRadius: '53% 47% 52% 48% / 36% 41% 59% 64%'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
