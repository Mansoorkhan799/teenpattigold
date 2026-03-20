/**
 * Central dates for Article / WebPage structured data.
 * - Bump FALLBACK_ARTICLE_DATE_MODIFIED when you ship meaningful homepage or SEO updates.
 * - Optional: set NEXT_PUBLIC_SITE_LAST_MODIFIED=YYYY-MM-DD in Vercel (or .env.local) so each deploy updates dateModified at build time.
 */
export const SITE_ARTICLE_DATE_PUBLISHED = '2026-01-08';

const FALLBACK_ARTICLE_DATE_MODIFIED = '2026-03-21';

export function getSiteArticleDateModified(): string {
  return process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED ?? FALLBACK_ARTICLE_DATE_MODIFIED;
}
