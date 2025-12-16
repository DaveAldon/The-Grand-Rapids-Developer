import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';
import ElectricBorder from './ElectricBorder/ElectricBorder';

export default function BlogPostCard({
  title,
  slug,
  summary,
  gradient,
  imageUrl,
  publishedAt,
  featured = false
}) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const cardContent = (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg p-4">
      <div className="w-full mb-4">
        <Image
          className="rounded"
          src={imageUrl}
          alt={title}
          height={200}
          width={350}
        />
      </div>
      <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight mb-2">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4">
        {summary}
      </p>
      <div className="text-gray-500 dark:text-gray-500 text-xs">
        {formattedDate}
      </div>
    </div>
  );

  const linkContent = featured ? (
    <div className="w-full h-full">
      <ElectricBorder
        className={''}
        color="#9333EA"
        speed={0.5}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
      >
        {cardContent}
      </ElectricBorder>
    </div>
  ) : (
    <div
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full h-full bg-gradient-to-r p-1',
        gradient
      )}
    >
      {cardContent}
    </div>
  );

  return (
    <Link href={`/blog/${slug}`} className="h-full w-full">
      {linkContent}
    </Link>
  );
}
