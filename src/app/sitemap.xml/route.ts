/**
 * Serves the main XML sitemap at /sitemap.xml
 * Re-uses the same data from /api/sitemap so there is one source of truth.
 */
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export { GET } from '@/app/api/sitemap/route';
