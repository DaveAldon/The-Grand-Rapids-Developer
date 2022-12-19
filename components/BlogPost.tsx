import Link from 'next/link';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import type { Blog } from 'contentlayer/generated';
import Image from 'next/image';

export default function BlogPost({
  title,
  image,
  summary,
  slug
}: Pick<Blog, 'title' | 'image' | 'summary' | 'slug'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  return (
    <Link href={`/blog/${slug}`} className="w-full">
      <div className="w-full mb-8 flex flex-row">
        <div className="w-0 pt-2 lg:w-2/5 md:w-2/5">
          <Image
            className="rounded"
            src={image}
            alt={title}
            height={160}
            width={250}
          />
        </div>
        <div className="w-100 lg:w-3/5 md:w-3/5 flex flex-col">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h4>
            <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        </div>
      </div>
    </Link>
  );
}
