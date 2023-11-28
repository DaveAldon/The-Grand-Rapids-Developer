import React from 'react';
import { Categories } from './categories.enum';
import Link from 'next/link';

export const TableElement = (props: {
  title?: String;
  spacer?: boolean;
  type: Categories;
  longTerm?: boolean;
  subtitle?: String;
  description?: String;
  link?: String;
}) => {
  if (props.spacer)
    return <div className="w-20 h-24 bg-transparent hidden md:block"></div>;

  const color = () => {
    switch (props.type) {
      case Categories.Personal:
        return 'bg-yellow-400';
      case Categories.Culture:
        return 'bg-amber-600';
      case Categories.Uniformity:
        return 'bg-blue-400';
      case Categories.Architecture:
        return 'bg-green-400';
    }
  };
  const term = () => {
    if (props.longTerm) return 'L';
    else return 'S';
  };

  const ConditionalLink = (props: {
    children: React.ReactNode;
    link?: String;
  }) => {
    if (props.link)
      return (
        <Link legacyBehavior href={props.link ? props.link.toString() : '#'}>
          <a target="_blank" rel="noopener noreferrer">
            {props.children}
          </a>
        </Link>
      );
    else return <>{props.children}</>;
  };

  return (
    <div className="w-full h-52 md:w-20 md:h-24 relative group text-white">
      <ConditionalLink link={props.link}>
        <div className="p-1 text-lg rounded-sm md:text-xs w-full h-52 md:w-20 md:h-24 absolute bg-slate-600 hidden group-hover:block ease-out hover:translate-y-0.5 transition-all">
          {props.description}
        </div>
        <div
          className={`visible group-hover:hidden btn bg-black ease-out hover:translate-y-0.5 transition-all w-full h-52 md:w-20 md:h-24 p-1 px-1 rounded-sm ${color()} flex flex-col justify-between`}
        >
          <div className="flex justify-between">
            <div className="flex justify-start text-lg md:text-xs font-thin ">
              {props.link && <ArticleAvailableIcon />}
            </div>
            <div className="flex justify-end text-lg md:text-xs font-thin mt-[-6px] md:mt-[-2px]">
              {term()}
            </div>
          </div>
          <div className="flex justify-center text-5xl font-bold">
            {props.title}
          </div>
          <div className="flex justify-center text-lg md:text-xs font-thin">
            {props.subtitle}
          </div>
        </div>
      </ConditionalLink>
    </div>
  );
};

export const ArticleAvailableIcon = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#FFFFFF"
      width="12"
      height="12"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Icon-Set-Filled"
            transform="translate(-570.000000, -985.000000)"
            fill="#FFFFFF"
          >
            <path
              d="M592.535,1002.88 L586.879,1008.54 C586.639,1008.78 586.311,1008.85 586,1008.79 C585.689,1008.85 585.361,1008.78 585.121,1008.54 L579.465,1002.88 C579.074,1002.49 579.074,1001.855 579.465,1001.465 C579.855,1001.074 580.488,1001.074 580.879,1001.465 L585,1005.59 L585,995 C585,994.447 585.448,994 586,994 C586.553,994 587,994.447 587,995 L587,1005.59 L591.121,1001.465 C591.512,1001.074 592.146,1001.074 592.535,1001.465 C592.926,1001.855 592.926,1002.49 592.535,1002.88 L592.535,1002.88 Z M598,985 L574,985 C571.791,985 570,986.791 570,989 L570,1013 C570,1015.21 571.791,1017 574,1017 L598,1017 C600.209,1017 602,1015.21 602,1013 L602,989 C602,986.791 600.209,985 598,985 L598,985 Z"
              id="arrow-down-square"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
