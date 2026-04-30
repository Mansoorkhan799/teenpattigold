import { NextResponse } from 'next/server';

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
  // Single source-of-truth lastmod for the dynamic sitemap. Re-deploys
  // automatically refresh the date so Google's "Last read" matches.
  const lastModNow = new Date().toISOString();

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
  // IMPORTANT: home URL emits WITHOUT trailing slash because Next.js's
  // default `trailingSlash: false` strips the slash from the rendered
  // <link rel="canonical">. Even though `alternates.canonical` is declared
  // as ".../" in layout.tsx, the actual <link rel="canonical"> output is
  // "https://teenpattigoldgame.com.pk" — so the sitemap loc must match
  // that exact form to prevent Google from picking its own canonical.
  // Inner URLs are slug-only (no trailing slash) and match their per-page
  // `alternates.canonical`.
  const mainPages: PageType[] = [
    {
      url: '',
      lastMod: lastModNow,
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold - Pakistan\'s #1 Card Game App',
          caption: 'Download Teen Patti Gold APK free. Play Teen Patti, Rummy, Dragon Tiger and earn real money in Pakistan.'
        },
        {
          loc: '/teen-patti-gold-game.webp',
          title: 'Teen Patti Gold Game Interface - Play Card Games in Pakistan',
          caption: 'Teen Patti Gold game screen — real-money card games including Teen Patti, Rummy, Dragon vs Tiger in Pakistan.'
        },
        {
          loc: '/teen-patti-gold-app.webp',
          title: 'Teen Patti Gold App - Games Collection',
          caption: 'Teen Patti Gold app games collection — Rummy, Dragon Tiger, Teen Patti and more.'
        },
        {
          loc: '/teen-patti-gold-apk.webp',
          title: 'Teen Patti Gold APK V1.656 Download',
          caption: 'Teen Patti Gold APK V1.656 for Android — free download for Pakistan players.'
        },
        {
          loc: '/teen-patti-gold-deposit-money.webp',
          title: 'Teen Patti Gold Deposit Money via JazzCash EasyPaisa',
          caption: 'Deposit money in Teen Patti Gold using JazzCash and EasyPaisa in Pakistan.'
        },
        {
          loc: '/teen-patti-gold-refer-and-earn.webp',
          title: 'Teen Patti Gold Refer and Earn - Invite Friends',
          caption: 'Earn real money by referring friends to Teen Patti Gold in Pakistan.'
        },
        {
          loc: '/teen-patti-gold-vip-program.webp',
          title: 'Teen Patti Gold VIP Program - Recharge Rebate Bonuses',
          caption: 'Teen Patti Gold VIP program with recharge rebates and daily bonuses for Pakistan players.'
        },
        {
          loc: '/teen-patti-gold-bind-account.webp',
          title: 'Teen Patti Gold Bind Email - Account Security',
          caption: 'Secure your Teen Patti Gold account by binding your email address.'
        }
      ]
    },
    // /download-teen-patti-gold removed from sitemap on 2026-04-25 — it
    // canonicalises to /download-teen-patti-gold-apk to fix keyword cannibalisation.
    {
      url: '/download-teen-patti-gold-apk',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.95,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold APK Latest Version Free Download 2026',
          caption: 'Download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan. Play 30+ card games and earn real cash.'
        }
      ]
    },
    {
      url: '/deposit-money-in-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-gold-deposit-money.webp',
          title: 'Deposit Money in Teen Patti Gold via JazzCash EasyPaisa',
          caption: 'How to deposit money in Teen Patti Gold using JazzCash and EasyPaisa in Pakistan.'
        }
      ]
    },
    {
      url: '/withdraw-money-from-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Withdraw Money from Teen Patti Gold to JazzCash EasyPaisa',
          caption: 'How to withdraw money from Teen Patti Gold to JazzCash, EasyPaisa in Pakistan.'
        }
      ]
    },
    {
      url: '/teen-patti-gold-for-pc',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold for PC - Play on Windows & Mac',
          caption: 'Play Teen Patti Gold on PC using Android Emulator on Windows and Mac.'
        }
      ]
    },
    {
      url: '/teen-patti-gold-for-ios',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold for iOS - iPhone and iPad',
          caption: 'Play Teen Patti Gold on iPhone and iPad. Complete iOS guide for Pakistan.'
        }
      ]
    },
    {
      url: '/about-us',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'About Teen Patti Gold Pakistan',
          caption: "Learn about Teen Patti Gold Pakistan's #1 card gaming platform."
        }
      ]
    },
    {
      url: '/blog',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.85,
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold Blog - Guides and Tips for Pakistan',
          caption: 'Guides, tutorials, and tips for Teen Patti Gold players in Pakistan.'
        }
      ]
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

  // Blog posts
  const blogPosts: PageType[] = [
    {
      url: '/blog/how-to-use-teen-patti-gold-app-in-pakistan',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-app.webp', title: 'How to Use Teen Patti Gold App in Pakistan', caption: 'Complete beginner guide for Teen Patti Gold app in Pakistan' }]
    },
    {
      url: '/blog/how-to-play-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-game.webp', title: 'How to Play Teen Patti Gold - Complete Guide', caption: 'Complete gameplay guide for Teen Patti Gold card game' }]
    },
    {
      url: '/blog/how-to-earn-money-from-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-refer-and-earn.webp', title: 'How to Earn Money from Teen Patti Gold', caption: 'Earn real money from Teen Patti Gold in Pakistan' }]
    },
    {
      url: '/blog/is-teen-patti-gold-real-or-fake',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-game.webp', title: 'Is Teen Patti Gold Real or Fake', caption: 'Complete truth guide about Teen Patti Gold legitimacy' }]
    },
    {
      url: '/blog/create-teen-patti-gold-account-and-login',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.85,
      images: [{ loc: '/teen-patti-gold-app.webp', title: 'Create Teen Patti Gold Account and Login', caption: 'Step by step account creation and login guide' }]
    },
    {
      url: '/blog/tips-to-win-big-in-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.85,
      images: [{ loc: '/teen-patti-gold-game.webp', title: 'Tips to Win Big in Teen Patti Gold', caption: 'Expert strategies and tips to win in Teen Patti Gold' }]
    },
    {
      url: '/blog/teen-patti-gold-old-version-features-review',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.8,
      images: [{ loc: '/teen-patti-gold-app.webp', title: 'Teen Patti Gold Old Version Features Review', caption: 'Review of Teen Patti Gold old version features' }]
    },
    {
      url: '/blog/teen-patti-gold-latest-version-2026-updates',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-apk.webp', title: 'Teen Patti Gold Latest Version V1.656 Updates 2026', caption: 'Latest Teen Patti Gold V1.656 new features and updates' }]
    },
    {
      url: '/blog/how-to-claim-welcome-bonus-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.85,
      images: [{ loc: '/teen-patti-gold-deposit-money.webp', title: 'Claim Teen Patti Gold Welcome Bonus', caption: 'How to claim 100% first deposit welcome bonus in Teen Patti Gold' }]
    },
    {
      url: '/blog/teen-patti-gold-login-problems-solutions',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.8,
      images: [{ loc: '/teen-patti-gold-app.webp', title: 'Teen Patti Gold Login Problems Solutions', caption: 'Fix Teen Patti Gold login issues and problems' }]
    },
    {
      url: '/blog/latest-offers-rewards-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-vip-program.webp', title: 'Teen Patti Gold Latest Offers and Rewards 2026', caption: 'Latest offers, bonuses, and rewards in Teen Patti Gold' }]
    },
    {
      url: '/blog/responsible-gaming-guide-2026',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.75
    },
    {
      url: '/blog/is-teen-patti-gold-better-for-earning-real-cash-2026',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.85,
      images: [{ loc: '/teen-patti-gold-refer-and-earn.webp', title: 'Is Teen Patti Gold Better for Earning Real Cash 2026', caption: 'Analysis of Teen Patti Gold for earning real cash in Pakistan' }]
    },
    {
      url: '/blog/teen-patti-gold-free-chips-2026',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-refer-and-earn.webp', title: 'Teen Patti Gold Free Chips 2026', caption: 'Get free chips in Teen Patti Gold daily - complete guide for Pakistan' }]
    },
    {
      url: '/blog/teen-patti-gold-referral-code-pakistan',
      lastMod: lastModNow,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-refer-and-earn.webp', title: 'Teen Patti Gold Referral Code Pakistan 2026', caption: 'Earn bonus chips with Teen Patti Gold referral code in Pakistan' }]
    },
    {
      url: '/blog/teen-patti-gold-vs-teen-patti-stars',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.85,
      images: [{ loc: '/teen-patti-gold-game.webp', title: 'Teen Patti Gold vs Teen Patti Stars 2026', caption: 'Comparison of Teen Patti Gold and Teen Patti Stars for Pakistan players' }]
    },
    {
      url: '/blog/how-to-become-referral-agent-teen-patti-gold',
      lastMod: lastModNow,
      changeFreq: 'monthly',
      priority: 0.9,
      images: [{ loc: '/teen-patti-gold-refer-and-earn.webp', title: 'How to Become a Referral Agent for Teen Patti Gold 2026', caption: 'Step by step guide to become a Teen Patti Gold referral agent and earn commission in Pakistan' }]
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
    <loc>${escapeXml(`${baseUrl}${page.url}`)}</loc>
    <lastmod>${escapeXml(page.lastMod)}</lastmod>
    <changefreq>${escapeXml(page.changeFreq)}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${escapeXml(baseUrl + img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`).join('') || ''}
  </url>
  `).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      // Prevent /api/sitemap from being indexed as a separate URL alongside
      // /sitemap.xml — both routes serve identical XML, but Google should
      // only crawl the canonical /sitemap.xml.
      'X-Robots-Tag': 'noindex',
    },
  });
}
