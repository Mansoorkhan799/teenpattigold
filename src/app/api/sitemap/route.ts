import { NextResponse } from 'next/server';
import { LOGO_URL } from '@/lib/site-images';

export async function GET() {
  const baseUrl = 'https://teenpattigoldgame.com.pk';
  const logoImageLoc = LOGO_URL;
  
  // Define page type
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };
  
  // Main pages with high priority
  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: new Date().toISOString(),
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold Logo',
          caption: 'The official logo of Teen Patti Gold gaming platform'
        }
      ]
    },
    {
      url: '/download-teen-patti-gold',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Download Teen Patti Gold',
          caption: 'Download Teen Patti Gold APK for Android'
        }
      ]
    },
    {
      url: '/deposit-money-in-teen-patti-gold',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/withdraw-money-from-teen-patti-gold',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9
    },
    {
      url: '/teen-patti-gold-for-pc',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold for PC',
          caption: 'Play Teen Patti Gold on PC using Android Emulator'
        }
      ]
    },
    {
      url: '/teen-patti-gold-for-ios',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold for iOS',
          caption: 'Play Teen Patti Gold on iPhone and iPad'
        }
      ]
    },
    {
      url: '/about-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'About Teen Patti Gold',
          caption: 'Learn about Teen Patti Gold gaming platform'
        }
      ]
    },
    {
      url: '/blog',
      lastMod: new Date().toISOString(),
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold Blog',
          caption: 'Guides and tutorials for Teen Patti Gold gaming platform'
        }
      ]
    },
    {
      url: '/contact-us',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.7
    },
    {
      url: '/privacy',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/disclaimer',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    },
    {
      url: '/terms',
      lastMod: new Date().toISOString(),
      changeFreq: 'yearly',
      priority: 0.6
    }
  ];

  // Blog posts
  const blogPosts: PageType[] = [
    {
      url: '/blog/how-to-use-teen-patti-gold-app-in-pakistan',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.9
    },
    {
      url: '/blog/how-to-play-teen-patti-gold',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.9
    },
    {
      url: '/blog/how-to-earn-money-from-teen-patti-gold',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.9
    },
    {
      url: '/blog/is-teen-patti-gold-real-or-fake',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/create-teen-patti-gold-account-and-login',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    },
    {
      url: '/blog/tips-to-win-big-in-teen-patti-gold',
      lastMod: new Date().toISOString(),
      changeFreq: 'monthly',
      priority: 0.8
    }
  ];

  // Only include existing pages
  const allPages = [...mainPages, ...blogPosts];
  
  // Generate XML with mobile and image extensions
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${img.loc === '/teen-patti-gold.webp' ? logoImageLoc : baseUrl + img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
} 
