/**
 * Serves the sitemap index at /sitemap-index.xml
 * Re-uses the same data from /api/sitemap-index so there is one source of truth.
 */
export { GET } from '@/app/api/sitemap-index/route';
