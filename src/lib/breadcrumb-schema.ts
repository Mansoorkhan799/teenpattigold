/**
 * Generates BreadcrumbList schema for SEO rich results in Google.
 * Use on all pages for better SERP display and crawlability.
 */
export const BASE_URL = 'https://teenpattigoldgame.com.pk';

export type BreadcrumbItem = {
  name: string;
  url: string;
};

/** BreadcrumbList node only (for embedding inside @graph). */
export function getBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList' as const,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    ...getBreadcrumbList(items),
  };
}

export const BREADCRUMB_HOME = { name: 'Home', url: `${BASE_URL}/` };
export const BREADCRUMB_BLOG = { name: 'Blog', url: `${BASE_URL}/blog` };
export const BREADCRUMB_DEPOSIT = {
  name: 'Deposit Money',
  url: `${BASE_URL}/deposit-money-in-teen-patti-gold`,
};
export const BREADCRUMB_WITHDRAW = {
  name: 'Withdraw Money',
  url: `${BASE_URL}/withdraw-money-from-teen-patti-gold`,
};
export const BREADCRUMB_PC = {
  name: 'Teen Patti Gold for PC',
  url: `${BASE_URL}/teen-patti-gold-for-pc`,
};
export const BREADCRUMB_IOS = {
  name: 'Teen Patti Gold for iOS',
  url: `${BASE_URL}/teen-patti-gold-for-ios`,
};
export const BREADCRUMB_APK = {
  name: 'Teen Patti Gold APK Latest Version',
  url: `${BASE_URL}/download-teen-patti-gold-apk`,
};
