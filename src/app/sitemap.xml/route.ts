/**
 * Serves the main XML sitemap at /sitemap.xml
 * Re-uses the same data from /api/sitemap so there is one source of truth.
 */
export { GET } from '@/app/api/sitemap/route';
