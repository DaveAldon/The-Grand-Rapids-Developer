import {
  CarIcon,
  GraduationCap,
  HeartPulseIcon,
  PlaneIcon,
  TruckIcon,
  Waypoints,
  WaypointsIcon
} from 'lucide-react';

interface IIndustryData {
  title: string;
  icon: JSX.Element;
}
const IndustryData: IIndustryData[] = [
  {
    title: 'Healthcare - 3 Years',
    icon: <HeartPulseIcon />
  },
  {
    title: 'Trucking & Logistics - 2 Years',
    icon: <TruckIcon />
  },
  {
    title: 'Food Distribution - 2 Years',
    icon: <WaypointsIcon />
  },
  {
    title: 'Aerospace - 1 Year',
    icon: <PlaneIcon />
  },
  {
    title: 'Automotive - 1 Year',
    icon: <CarIcon />
  },
  {
    title: 'Wellness & Psychology - 1 Year',
    icon: <GraduationCap />
  }
];

const Industry = ({ title, icon }) => {
  return (
    <div className="p-2 sm:w-1/2">
      <div className="bg-gray-200 dark:bg-gray-800 rounded flex p-4 h-full items-center align-middle">
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
        <span className="text-sm font-medium dark:text-white">{title}</span>
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
