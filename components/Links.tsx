import Image from 'next/image';

const LinkData = [
  {
    title: 'Dave Aldon',
    description: `This is a theology based blog that I have been writing actively since 2018, where I write about various interesting, difficult, or controversial questions I'm working through in scripture.`,
    imageSrc:
      'https://drive.google.com/uc?export=view&id=1HQZlDX7O32-D699wQbXvNDO8dqdqpysP',
    link: 'https://davealdon.com'
  },
  {
    title: 'Bravo Boulevard',
    description: `This is a blog that I started at Bravo LT, where I wrote about various topics related to software development. I'm not working there anymore, but want to mention that some posts here are cross-posted there.`,
    imageSrc:
      'https://drive.google.com/uc?export=view&id=1DjSKi3CysIPu1sQ1NgkeVWP1_S-Xehcy',
    link: 'https://bravolt.com/blog'
  }
];

const Link = ({ title, description, imageSrc, link }) => (
  <div className="p-4 md:w-1/2 sm:w-1/2">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="lg:h-50 md:h-50 sm:h-59 w-full object-cover object-center">
        <Image src={imageSrc} alt="blog" height={250} width={300} />
      </div>
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-white-500">
          BLOG
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white">
          {title}
        </h1>
        <p className="leading-relaxed mb-3 text-gray-300 dark:text-white-600">
          {description}
        </p>
        <div className="flex items-center flex-wrap ">
          <a
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Check it out
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function Links() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-white">
            My Other Blogs
          </h1>
        </div>
        <div className="flex">
          {LinkData.map((link, index) => (
            <Link {...link} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
