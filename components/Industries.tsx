import {
  BrainCircuit,
  BotIcon,
  CarIcon,
  Database,
  Factory,
  GraduationCap,
  HeartPulseIcon,
  PlaneIcon,
  RocketIcon,
  TruckIcon,
  WaypointsIcon
} from 'lucide-react';
import cn from 'classnames';

const IndustryData = [
  {
    title: 'Stealth Startups',
    description:
      'Worked with several new startups across different B2C industries, including fintech, real estate, audio hardware, and more.',
    icon: <RocketIcon />
  },
  {
    title: 'Machine Learning',
    description:
      'Custom Model training with Distributed MLX and vision based Yolo models.',
    icon: <BotIcon />
  },
  {
    title: 'AI',
    description:
      'Automation and processing, chat bots and custom agents for businesses.',
    icon: <BrainCircuit />
  },
  {
    title: 'Manufacturing',
    description:
      'Helping quality control scale with computer vision and custom ML models for defect detection.',
    icon: <Factory />
  },
  {
    title: 'Big Data',
    description:
      'Creating data pipelines, data lakes, and data warehouses for large scale data.',
    icon: <Database />
  },
  {
    title: 'Healthcare',
    description:
      'Providing secure HITRUST and HIPAA compliant solutions for patient care and medical research technology.',
    icon: <HeartPulseIcon />
  },
  {
    title: 'Trucking & Logistics',
    description:
      'Helping brokers and carriers keep track of legacy fleets that are not equipped with ELDs.',
    icon: <TruckIcon />
  },
  {
    title: 'Food Distribution',
    description:
      'Streamlining food supply chains and distribution networks to ensure timely delivery and reduce waste.',
    icon: <WaypointsIcon />
  },
  {
    title: 'Aerospace',
    description: 'Creating microservices for autonomous flight systems..',
    icon: <PlaneIcon />
  },
  {
    title: 'Automotive',
    description:
      'Developing technologies for the automotive industry for warehouse & inventory management.',
    icon: <CarIcon />
  },
  {
    title: 'Wellness & Psychology',
    description:
      'Providing mental health and wellness solutions for universities.',
    icon: <GraduationCap />
  }
];

const Industry = ({
  title,
  description,
  icon,
  index
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default function Industries() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {IndustryData.map((industry, index) => (
          <Industry
            key={industry.title}
            title={industry.title}
            description={industry.description}
            icon={industry.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
