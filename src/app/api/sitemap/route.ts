import { NextResponse } from 'next/server';

/** Never serve a build-time frozen sitemap — Google was stuck on Jul 17 lastmod. */
export const dynamic = 'force-dynamic';
export const revalidate = 0;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export async function GET() {
  const baseUrl = 'https://teenpattigoldgame.com.pk';
  // Prefer deploy commit time so lastmod is stable within a deploy (Google
  // ignores lastmod that changes on every single request), but still refreshes
  // after each Vercel deploy — unlike the previous CDN-frozen Jul 17 snapshot.
  const lastModNow =
    process.env.VERCEL_GIT_COMMIT_AUTHOR_DATE ||
    process.env.NEXT_PUBLIC_BUILD_TIME ||
    new Date().toISOString();

  // Define page type
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
  };

  // Main pages with high priority
  // IMPORTANT: home URL emits WITHOUT trailing slash because Next.js's
  // default `trailingSlash: false` strips the slash from the rendered
  // <link rel="canonical">. Even though `alternates.canonical` is declared
  // as ".../" in layout.tsx, the actual <link rel="canonical"> output is
  // "https://teenpattigoldgame.com.pk" — so the sitemap loc must match
  // that exact form to prevent Google from picking its own canonical.
  // Inner URLs are slug-only (no trailing slash) and match their per-page
  // `alternates.canonical`.
  //
  // NOTE: Image entries are intentionally omitted here. All image metadata
  // lives exclusively in /image-sitemap.xml to avoid duplicate signals that
  // cause Google Search Console to log the same (page, image) pair twice.
  const mainPages: PageType[] = [
    {
      url: '',
      lastMod: lastModNow,
      changeFreq: 'daily',
      priority: 1.0,
    },
    // /download-teen-patti-gold removed from sitemap on 2026-04-25 — it
    // canonicalises to /download-teen-patti-gold-apk to fix keyword cannibalisation.
    {
      url: '/download-teen-patti-gold-apk',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.95,
    },
    {
      url: '/deposit-money-in-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/withdraw-money-from-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/teen-patti-gold-for-pc',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/teen-patti-gold-for-ios',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
    },
    {
      url: '/about-us',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.7,
    },
    {
      url: '/blog',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.85,
    },
    {
      url: '/contact-us',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy',
      lastMod: '2026-01-05T09:00:00+05:00',
      changeFreq: 'yearly',
      priority: 0.5
    },
    {
      url: '/disclaimer',
      lastMod: '2026-01-05T09:00:00+05:00',
      changeFreq: 'yearly',
      priority: 0.5
    },
    {
      url: '/terms',
      lastMod: '2026-01-05T09:00:00+05:00',
      changeFreq: 'yearly',
      priority: 0.5
    }
  ];

  // Blog posts — image metadata is intentionally absent here.
  // All image declarations live exclusively in /image-sitemap.xml.
  const blogPosts: PageType[] = [
    { url: '/blog/how-to-use-teen-patti-gold-app-in-pakistan', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.9 },
    { url: '/blog/how-to-play-teen-patti-gold', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.9 },
    { url: '/blog/how-to-earn-money-from-teen-patti-gold', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.9 },
    { url: '/blog/is-teen-patti-gold-real-or-fake', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.9 },
    { url: '/blog/create-teen-patti-gold-account-and-login', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.85 },
    { url: '/blog/tips-to-win-big-in-teen-patti-gold', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.85 },
    { url: '/blog/teen-patti-gold-old-version-features-review', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/teen-patti-gold-latest-version-2026-updates', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.9 },
    { url: '/blog/how-to-claim-welcome-bonus-teen-patti-gold', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.85 },
    { url: '/blog/teen-patti-gold-login-problems-solutions', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.8 },
    { url: '/blog/latest-offers-rewards-teen-patti-gold', lastMod: lastModNow, changeFreq: 'weekly', priority: 0.9 },
    { url: '/blog/responsible-gaming-guide-2026', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.75 },
    { url: '/blog/is-teen-patti-gold-better-for-earning-real-cash-2026', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.85 },
    { url: '/blog/teen-patti-gold-free-chips-2026', lastMod: lastModNow, changeFreq: 'weekly', priority: 0.9 },
    { url: '/blog/teen-patti-gold-referral-code-pakistan', lastMod: lastModNow, changeFreq: 'weekly', priority: 0.9 },
    { url: '/blog/teen-patti-gold-vs-teen-patti-stars', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.85 },
    { url: '/blog/how-to-become-referral-agent-teen-patti-gold', lastMod: lastModNow, changeFreq: 'monthly', priority: 0.9 },
  ];

  // Only include existing pages
  const allPages = [...mainPages, ...blogPosts];
  
  // Image metadata lives exclusively in /image-sitemap.xml — no image
  // namespace needed here. Keeping a single source of truth prevents
  // Google Search Console from logging duplicate (page, image) valid items.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  ${allPages.map(page => `
  <url>
    <loc>${escapeXml(`${baseUrl}${page.url}`)}</loc>
    <lastmod>${escapeXml(page.lastMod)}</lastmod>
    <changefreq>${escapeXml(page.changeFreq)}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Short CDN TTL — previous s-maxage=86400 left a HIT cached ~21 days
      // with lastmod stuck at 2026-07-17, so Google barely re-crawled /.
      'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
      'CDN-Cache-Control': 'public, max-age=3600, must-revalidate',
      'X-Robots-Tag': 'noindex',
    },
  });
}
