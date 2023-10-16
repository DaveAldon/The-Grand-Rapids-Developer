interface IIndustryData {
  title: string;
  icon: JSX.Element;
}
const IndustryData: IIndustryData[] = [
  {
    title: 'Healthcare - 3 Years',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    )
  },
  {
    title: 'Trucking & Logistics - 2 Years',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    )
  },
  {
    title: 'Food Distribution - 2 Years',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
      />
    )
  },
  {
    title: 'Aerospace - 1 Year',
    icon: (
      <path d="M22.925,2.564l-3.193,3.191c0.104,0.75-0.123,1.536-0.698,2.112L16.75,10.15l2.715,11.664 c0.041,0.072,0.062,0.155,0.062,0.244c0,0.277-0.269,0.486-0.509,0.5c-0.004,0-0.008,0-0.012,0c-0.13,0-0.257-0.05-0.354-0.146 l-7.083-7.084l-1.804,1.807l1.275,5.482c0.039,0.071,0.062,0.154,0.062,0.243c0,0.279-0.225,0.522-0.51,0.5 c-0.004,0-0.006,0-0.01,0c-0.129,0-0.258-0.05-0.354-0.146L6.283,19.27c-0.021-0.002-0.042-0.003-0.062-0.006l-0.592,0.592 c-0.293,0.293-0.678,0.439-1.062,0.439c-0.384,0-0.769-0.146-1.062-0.439c-0.586-0.586-0.586-1.535,0-2.121l0.594-0.593 c-0.004-0.021-0.004-0.041-0.006-0.062l-3.946-3.945c-0.158-0.158-0.192-0.401-0.084-0.598c0.108-0.195,0.327-0.297,0.551-0.244 L6.228,13.6l1.805-1.807L0.952,4.712c-0.157-0.157-0.192-0.4-0.084-0.598C0.976,3.919,1.197,3.818,1.419,3.87l11.794,2.744 l2.281-2.283c0.578-0.578,1.364-0.805,2.115-0.698l3.19-3.191c0.586-0.586,1.534-0.586,2.12,0 C23.507,1.027,23.511,1.979,22.925,2.564z"></path>
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
          strokeWidth="1.5"
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
