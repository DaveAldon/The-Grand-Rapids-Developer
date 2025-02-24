import Container from 'components/Container';
import Image from 'next/image';

export default function MuteMyBrowserSupport() {
  return (
    <Container title="Mute My Browser Support">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-center">
          <div className="gap-4 flex flex-col justify-center items-center py-4 w-4/5 md:w-full text-black dark:text-white">
            <Image
              src="/static/images/mmb-logo.png"
              alt="Mute My Browser"
              width={200}
              height={200}
            />
            <div className=" text-3xl font-medium text-center title-font">
              Mute My Browser
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic font-bold">
              If you need support for this extension or if you have questions or
              concerns about it, please email me at{' '}
              <a
                href="mailto:davealdonbooks@gmail.com"
                className="text-blue-500"
              >
                davealdonbooks@gmail.com
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Mute My Browser is a Safari browser extension that finds as many
              audio and video sources as possible on a webpage and mutes them.
              This is helpful for when you want to listen to music through
              airplay and watch muted videos with closed captions on your iPhone
              at the same time. Some websites are tied to the iPhone's system
              volume, so this helps you to control them separately.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
