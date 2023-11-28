import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';

export default function BlogPostCard({ title, slug, gradient, imageUrl }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
          <div className="w-full">
            <Image
              className="rounded"
              src={imageUrl}
              alt={title}
              height={200}
              width={350}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between p-2">
          <h4 className="text-lg md:text-lg font-medium w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
}
