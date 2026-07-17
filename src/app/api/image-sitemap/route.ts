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
  const lastMod = new Date().toISOString();

  type ImageEntry = {
    pageUrl: string;
    images: Array<{
      loc: string;
      title: string;
      caption: string;
    }>;
  };

  const entries: ImageEntry[] = [
    {
      pageUrl: '',
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: "Teen Patti Gold - Pakistan's #1 Card Game App",
          caption: 'Download Teen Patti Gold APK free. Play Teen Patti, Rummy, and Dragon Tiger in Pakistan.',
        },
        {
          loc: '/teen-patti-gold-game.webp',
          title: 'Teen Patti Gold Game Interface - Play Card Games in Pakistan',
          caption: 'Teen Patti Gold game screen showing Teen Patti, Rummy, and Dragon vs Tiger gameplay in Pakistan.',
        },
        {
          loc: '/teen-patti-gold-app.webp',
          title: 'Teen Patti Gold App - Games Collection',
          caption: 'Teen Patti Gold app games collection — Rummy, Dragon Tiger, Teen Patti and more.',
        },
        {
          loc: '/teen-patti-gold-apk.webp',
          title: 'Teen Patti Gold APK 1.224 Download',
          caption: 'Teen Patti Gold APK 1.224(1) for Android — free download for Pakistan players.',
        },
        {
          loc: '/teen-patti-gold-deposit-money.webp',
          title: 'Teen Patti Gold Deposit Money via JazzCash EasyPaisa',
          caption: 'Deposit money in Teen Patti Gold using JazzCash and EasyPaisa in Pakistan.',
        },
        {
          loc: '/teen-patti-gold-refer-and-earn.webp',
          title: 'Teen Patti Gold Refer and Earn - Invite Friends',
          caption: 'Teen Patti Gold refer-and-earn screen for inviting friends in Pakistan.',
        },
        {
          loc: '/teen-patti-gold-vip-program.webp',
          title: 'Teen Patti Gold VIP Program - Recharge Rebate Bonuses',
          caption: 'Teen Patti Gold VIP program with recharge rebates and daily bonuses for Pakistan players.',
        },
        {
          loc: '/teen-patti-gold-bind-account.webp',
          title: 'Teen Patti Gold Bind Email - Account Security',
          caption: 'Secure your Teen Patti Gold account by binding your email address.',
        },
      ],
    },
    {
      pageUrl: '/download-teen-patti-gold-apk',
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold APK Latest Version Free Download 2026',
          caption: 'Download Teen Patti Gold APK latest version 1.224(1) free for Android in Pakistan. Play 100+ games.',
        },
        {
          loc: '/teen-patti-gold-apk.webp',
          title: 'Teen Patti Gold APK Download',
          caption: 'Teen Patti Gold APK 1.224(1) for Android — free download.',
        },
      ],
    },
    {
      pageUrl: '/deposit-money-in-teen-patti-gold',
      images: [
        {
          loc: '/teen-patti-gold-deposit-money.webp',
          title: 'Deposit Money in Teen Patti Gold via JazzCash EasyPaisa',
          caption: 'How to deposit money in Teen Patti Gold using JazzCash and EasyPaisa in Pakistan.',
        },
      ],
    },
    {
      pageUrl: '/withdraw-money-from-teen-patti-gold',
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Withdraw Money from Teen Patti Gold to JazzCash EasyPaisa',
          caption: 'How to withdraw money from Teen Patti Gold to JazzCash, EasyPaisa in Pakistan.',
        },
      ],
    },
    {
      pageUrl: '/teen-patti-gold-for-pc',
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold for PC - Play on Windows & Mac',
          caption: 'Play Teen Patti Gold on PC using Android Emulator on Windows and Mac.',
        },
      ],
    },
    {
      pageUrl: '/teen-patti-gold-for-ios',
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'Teen Patti Gold for iOS - iPhone and iPad',
          caption: 'Play Teen Patti Gold on iPhone and iPad. Complete iOS guide for Pakistan.',
        },
      ],
    },
    {
      pageUrl: '/about-us',
      images: [
        {
          loc: '/teen-patti-gold.webp',
          title: 'About Teen Patti Gold Pakistan',
          caption: "Learn about Teen Patti Gold Pakistan's #1 card gaming platform.",
        },
      ],
    },
    {
      // IMPORTANT: /blog must NOT claim /teen-patti-gold.webp — that asset is
      // the home page's primary brand image. Listing it here was telling
      // Google "/blog owns this image", which caused the GSC Image Sitemap
      // enhancement to attribute the brand logo to /blog instead of /.
      // Use a blog-specific screenshot instead.
      pageUrl: '/blog',
      images: [
        {
          loc: '/teen-patti-gold-game.webp',
          title: 'Teen Patti Gold Blog - Guides and Tips for Pakistan',
          caption: 'Guides, tutorials, and tips for Teen Patti Gold players in Pakistan.',
        },
      ],
    },
    {
      pageUrl: '/blog/how-to-use-teen-patti-gold-app-in-pakistan',
      images: [
        {
          loc: '/teen-patti-gold-app.webp',
          title: 'How to Use Teen Patti Gold App in Pakistan',
          caption: 'Complete beginner guide for Teen Patti Gold app in Pakistan',
        },
      ],
    },
    {
      pageUrl: '/blog/how-to-play-teen-patti-gold',
      images: [
        {
          loc: '/teen-patti-gold-game.webp',
          title: 'How to Play Teen Patti Gold - Complete Guide',
          caption: 'Complete gameplay guide for Teen Patti Gold card game',
        },
      ],
    },
    {
      pageUrl: '/blog/how-to-earn-money-from-teen-patti-gold',
      images: [
        {
          loc: '/teen-patti-gold-refer-and-earn.webp',
          title: 'How to Earn Money from Teen Patti Gold',
          caption: 'Ways to earn rewards from Teen Patti Gold in Pakistan',
        },
      ],
    },
    {
      pageUrl: '/blog/is-teen-patti-gold-real-or-fake',
      images: [
        {
          loc: '/teen-patti-gold-game.webp',
          title: 'Is Teen Patti Gold Real or Fake',
          caption: 'Complete truth guide about Teen Patti Gold legitimacy',
        },
      ],
    },
    {
      pageUrl: '/blog/create-teen-patti-gold-account-and-login',
      images: [
        {
          loc: '/teen-patti-gold-app.webp',
          title: 'Create Teen Patti Gold Account and Login',
          caption: 'Step by step account creation and login guide',
        },
      ],
    },
    {
      pageUrl: '/blog/tips-to-win-big-in-teen-patti-gold',
      images: [
        {
          loc: '/teen-patti-gold-game.webp',
          title: 'Tips to Win Big in Teen Patti Gold',
          caption: 'Expert strategies and tips to win in Teen Patti Gold',
        },
      ],
    },
    {
      pageUrl: '/blog/teen-patti-gold-old-version-features-review',
      images: [
        {
          loc: '/teen-patti-gold-app.webp',
          title: 'Teen Patti Gold Old Version Features Review',
          caption: 'Review of Teen Patti Gold old version features',
        },
      ],
    },
    {
      pageUrl: '/blog/teen-patti-gold-latest-version-2026-updates',
      images: [
        {
          loc: '/teen-patti-gold-apk.webp',
          title: 'Teen Patti Gold Latest Version 1.224 Updates 2026',
          caption: 'Latest Teen Patti Gold 1.224(1) new features and updates',
        },
      ],
    },
    {
      pageUrl: '/blog/how-to-claim-welcome-bonus-teen-patti-gold',
      images: [
        {
          loc: '/teen-patti-gold-deposit-money.webp',
          title: 'Claim Teen Patti Gold Welcome Bonus',
          caption: 'How to claim 100% first deposit welcome bonus in Teen Patti Gold',
        },
      ],
    },
    {
      pageUrl: '/blog/teen-patti-gold-login-problems-solutions',
      images: [
        {
          loc: '/teen-patti-gold-app.webp',
          title: 'Teen Patti Gold Login Problems Solutions',
          caption: 'Fix Teen Patti Gold login issues and problems',
        },
      ],
    },
    {
      pageUrl: '/blog/latest-offers-rewards-teen-patti-gold',
      images: [
        {
          loc: '/teen-patti-gold-vip-program.webp',
          title: 'Teen Patti Gold Latest Offers and Rewards 2026',
          caption: 'Latest offers, bonuses, and rewards in Teen Patti Gold',
        },
      ],
    },
    {
      pageUrl: '/blog/is-teen-patti-gold-better-for-earning-real-cash-2026',
      images: [
        {
          loc: '/teen-patti-gold-refer-and-earn.webp',
          title: 'Is Teen Patti Gold Better for Earning Real Cash 2026',
          caption: 'Analysis of Teen Patti Gold rewards and features in Pakistan',
        },
      ],
    },
    {
      pageUrl: '/blog/teen-patti-gold-free-chips-2026',
      images: [
        {
          loc: '/teen-patti-gold-refer-and-earn.webp',
          title: 'Teen Patti Gold Free Chips 2026',
          caption: 'Get free chips in Teen Patti Gold daily - complete guide for Pakistan',
        },
      ],
    },
    {
      pageUrl: '/blog/teen-patti-gold-referral-code-pakistan',
      images: [
        {
          loc: '/teen-patti-gold-refer-and-earn.webp',
          title: 'Teen Patti Gold Referral Code Pakistan 2026',
          caption: 'Earn bonus chips with Teen Patti Gold referral code in Pakistan',
        },
      ],
    },
    {
      pageUrl: '/blog/teen-patti-gold-vs-teen-patti-stars',
      images: [
        {
          loc: '/teen-patti-gold-game.webp',
          title: 'Teen Patti Gold vs Teen Patti Stars 2026',
          caption: 'Comparison of Teen Patti Gold and Teen Patti Stars for Pakistan players',
        },
      ],
    },
    {
      pageUrl: '/blog/how-to-become-referral-agent-teen-patti-gold',
      images: [
        {
          loc: '/teen-patti-gold-refer-and-earn.webp',
          title: 'How to Become a Referral Agent for Teen Patti Gold 2026',
          caption: 'Step by step guide to become a Teen Patti Gold referral agent and earn commission in Pakistan',
        },
      ],
    },
    {
      pageUrl: '/blog/responsible-gaming-guide-2026',
      images: [
        {
          loc: '/teen-patti-gold-game.webp',
          title: 'Responsible Gaming Guide 2026 - Teen Patti Gold Pakistan',
          caption: 'Play Teen Patti Gold responsibly in Pakistan — set budgets, manage bankroll, avoid chasing losses.',
        },
      ],
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${entries.map(entry => `
  <url>
    <loc>${escapeXml(`${baseUrl}${entry.pageUrl}`)}</loc>
    <lastmod>${escapeXml(lastMod)}</lastmod>
    ${entry.images.map(img => `
    <image:image>
      <image:loc>${escapeXml(`${baseUrl}${img.loc}`)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`).join('')}
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}
