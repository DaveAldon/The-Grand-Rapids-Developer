import Image from 'next/image';
import Link from 'next/link';

const IosBadge = ({ link }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-xl items-center justify-center">
        <div className="mr-3">
          <svg viewBox="0 0 384 512" width="30">
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs">Download on the</div>
          <div className="text-2xl font-semibold font-sans -mt-1">
            App Store
          </div>
        </div>
      </div>
    </Link>
  );
};

const AndroidBadge = ({ link }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <div className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg items-center justify-center">
        <div className="mr-3">
          <svg viewBox="30 336.7 120.9 129.2" width="30">
            <path
              fill="#FFD400"
              d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
            />
            <path
              fill="#FF3333"
              d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
            />
            <path
              fill="#48FF48"
              d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
            />
            <path
              fill="#3BCCFF"
              d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
            />
          </svg>
        </div>
        <div>
          <div className="text-xs">GET IT ON</div>
          <div className="text-xl font-semibold font-sans -mt-1">
            Google Play
          </div>
        </div>
      </div>
    </Link>
  );
};

const LeftImageItem = ({
  title,
  description,
  iosLink,
  androidLink,
  photoSrc
}) => {
  return (
    <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
        <Image
          style={{ borderRadius: 10 }}
          src={photoSrc}
          alt={title}
          width={100}
          height={100}
        />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2 dark:text-white">
          {title}
        </h2>
        <p className="leading-relaxed text-base dark:text-white">
          {description}
        </p>
        <div className="flex mt-3 width-full space-x-3">
          {iosLink ? <IosBadge link={iosLink} /> : null}
          {androidLink ? <AndroidBadge link={androidLink} /> : null}
        </div>
      </div>
    </div>
  );
};

export default function AppPortfolio() {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-white">
            Personal Published Apps
          </h1>
        </div>
        <LeftImageItem
          title={'Core Values Exercise'}
          photoSrc={
            'https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/d5/82/dc/d582dc8d-f96e-4863-8f14-874eba44f3d4/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp'
          }
          description={
            'I created this app in a month during weekends. It was made for the Vantage Group Inc., an executive coaching company, to help people go through a litmus test for their personal values.'
          }
          iosLink={
            'https://apps.apple.com/us/app/core-values-exercise/id1590790024'
          }
          androidLink={
            'https://play.google.com/store/apps/details?id=com.davealdon.vantagecareerpathway'
          }
        />
        <LeftImageItem
          title={`What's Up Doc?`}
          photoSrc={
            'https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/15/9d/5b/159d5bde-e4f7-a939-f23e-42296b797a61/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp'
          }
          description={
            'This is an app I made in a day during the 2020 HL7 FHIR hackathon, where I had to create a unique use-case for FHIR data. This app allows you to search a FHIR provider list for provider specialties based on a disease code.'
          }
          iosLink={'https://apps.apple.com/us/app/whats-up-doc/id1519077039'}
          androidLink={
            'https://play.google.com/store/apps/details?id=com.davealdon.whatsupdoc'
          }
        />
        <LeftImageItem
          title={`HL7 Hero`}
          photoSrc={
            'https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/e8/18/f8/e818f85c-c5b8-fa9c-05a8-63b427cd6cf8/AppIcon-1x_U007emarketing-0-7-0-85-220.png/434x0w.webp'
          }
          description={
            'I made this app to make it easy to parse HL7 data while on-the-go. It supports all of the major schemas.'
          }
          iosLink={'https://apps.apple.com/us/app/hl7-hero/id1517942015'}
          androidLink={null}
        />
      </div>
    </section>
  );
}
