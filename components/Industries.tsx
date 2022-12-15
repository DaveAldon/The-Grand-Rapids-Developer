interface IIndustryData {
  title: string;
  icon: JSX.Element;
}
const IndustryData: IIndustryData[] = [
  {
    title: 'Healthcare - 3 Years',
    icon: (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    )
  },
  {
    title: 'Trucking & Logistics - 1 Year',
    icon: (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    )
  },
  {
    title: 'Food Distribution - 2 Years',
    icon: (
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
      />
    )
  }
];

const Industry = ({ title, icon }) => {
  return (
    <div className="p-2 sm:w-1/2">
      <div className="bg-gray-200 dark:bg-gray-800 rounded flex p-4 h-full items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4"
        >
          {icon}
        </svg>
        <span className="title-font font-medium dark:text-white">{title}</span>
      </div>
    </div>
  );
};

export default function Industries() {
  return (
    <section className="text-gray-600 body-font w-full mt-10">
      <div className="container px-5 mx-auto w-full">
        <div className="text-center">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-white">
            Industry Experience
          </h1>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
          {IndustryData.map((industry, index) => (
            <Industry title={industry.title} icon={industry.icon} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
