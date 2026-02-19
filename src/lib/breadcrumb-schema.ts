/**
 * Generates BreadcrumbList schema for SEO rich results in Google.
 * Use on all pages for better SERP display and crawlability.
 */
const BASE_URL = 'https://teenpattigoldgame.com.pk';

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const BREADCRUMB_HOME = { name: 'Home', url: `${BASE_URL}/` };
export const BREADCRUMB_BLOG = { name: 'Blog', url: `${BASE_URL}/blog` };
