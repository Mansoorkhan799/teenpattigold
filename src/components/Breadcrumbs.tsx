import Link from 'next/link';

export type Crumb = {
  name: string;
  href?: string;
};

/**
 * Visible breadcrumb trail — pairs with BreadcrumbList JSON-LD for Google
 * breadcrumb rich results. Last item is the current page (no link).
 */
export default function Breadcrumbs({
  items,
  className = 'mb-6',
}: {
  items: Crumb[];
  className?: string;
}) {
  // Ensure Home is always a link to /
  const normalized = items.map((item, index) => {
    if (index === 0 && item.name.toLowerCase() === 'home') {
      return { ...item, href: '/' };
    }
    return item;
  });

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
        {normalized.map((item, index) => {
          const isLast = index === normalized.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-gray-600">
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span className="text-gray-200 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#FFA500] transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
