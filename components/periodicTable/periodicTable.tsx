import React from 'react';
import {
  TableCategory_Architecture,
  TableCategory_Culture,
  TableCategory_Uniformity
} from './TableCategories';
import { ArticleAvailableIcon } from './tableElement';

const LegendContainter = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      {props.children}
    </div>
  );
};

const PeriodicTable: React.FC = () => {
  return (
    <div className="gap-4 flex flex-col justify-center items-center py-4 w-4/5 md:w-full">
      <div className="text-white text-3xl font-medium text-center title-font">
        Periodic Table of Software Consulting
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        These are the major elements that I've identified as necessary
        foundations for successful software consulting. This is my development
        strategy in all of my work, as they are basic needs that solve common
        problems. Many companies do a combination of these things very well, and
        sometimes we struggle with others. As time goes on, I will add a
        deep-dive into each element, why it's so important, and a strategy on
        how to implement it.
      </p>
      <div className="flex flex-row text-white italic gap-2 font-thin">
        <LegendContainter>
          <div className="w-4 h-4 bg-amber-600 rounded-sm" />
          <div>Developer Culture</div>
        </LegendContainter>
        <LegendContainter>
          <div className="w-4 h-4 bg-blue-400 rounded-sm" />
          <div>Project Uniformity</div>
        </LegendContainter>
        <LegendContainter>
          <div className="w-4 h-4 bg-green-400 rounded-sm" />
          <div>Architecture</div>
        </LegendContainter>
      </div>
      <div className="flex flex-row text-white italic gap-2 font-thin">
        <LegendContainter>
          <div className="not-italic">L</div>
          <div className="font-bold">Long Term</div>
        </LegendContainter>
        <LegendContainter>
          <div className="not-italic">S</div>
          <div className="font-bold">Short Term</div>
        </LegendContainter>
        <LegendContainter>
          <div className="not-italic">
            <ArticleAvailableIcon />
          </div>
          <div className="font-bold">Article Available</div>
        </LegendContainter>
      </div>
      <div className="flex flex-col md:flex-row gap-1 w-full justify-center">
        <TableCategory_Culture />
        <TableCategory_Uniformity />
        <TableCategory_Architecture />
      </div>
    </div>
  );
};

export default PeriodicTable;
