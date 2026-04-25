/**
 * Central dates for Article / WebPage structured data (JSON-LD).
 * Google Rich Results expects ISO-8601 *datetime* with timezone — not bare YYYY-MM-DD.
 *
 * Times use Pakistan Standard Time (UTC+5) as the site's primary audience.
 *
 * Optional: set NEXT_PUBLIC_SITE_LAST_MODIFIED=YYYY-MM-DD in Vercel / .env.local
 * to refresh dateModified at build time.
 */

const PKT = '+05:00';

const FALLBACK_ARTICLE_DATE_MODIFIED_YMD = '2026-04-25';

/** Convert YYYY-MM-DD (or datetime without TZ) to ISO-8601 with Pakistan offset. */
export function toSchemaDateTimeYmd(dateYmd: string, timeLocal = '12:00:00'): string {
  const trimmed = dateYmd.trim();
  if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
    if (trimmed.endsWith('Z') || /[+-]\d{2}:\d{2}$/.test(trimmed)) {
      return trimmed;
    }
    return `${trimmed}${PKT}`;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return `${trimmed}T${timeLocal}${PKT}`;
  }
  return `${FALLBACK_ARTICLE_DATE_MODIFIED_YMD}T${timeLocal}${PKT}`;
}

/** First publication datetime for main Article / WebPage on the homepage. */
export const SITE_ARTICLE_DATE_PUBLISHED = toSchemaDateTimeYmd('2026-01-08', '09:00:00');

export function getSiteArticleDateModified(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_LAST_MODIFIED?.trim() ?? FALLBACK_ARTICLE_DATE_MODIFIED_YMD;
  return toSchemaDateTimeYmd(raw, '12:00:00');
}
