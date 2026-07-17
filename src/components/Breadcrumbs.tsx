import Link from 'next/link';

export type Crumb = {
  name: string;
  href?: string;
};

/**
 * Visible breadcrumb trail — pairs with BreadcrumbList JSON-LD for Google
 * breadcrumb rich results. Last item is the current page (no link).
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
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
