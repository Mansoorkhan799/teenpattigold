/**
 * Serves the image sitemap at /image-sitemap.xml
 * Re-uses the same data from /api/image-sitemap so there is one source of truth.
 */
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export { GET } from '@/app/api/image-sitemap/route';
