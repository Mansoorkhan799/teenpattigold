/**
 * Serves an image-focused XML sitemap at /image-sitemap.xml
 * Lists all pages with their associated images for Google Image Search.
 */
import { NextResponse } from 'next/server';
import { LOGO_URL } from '@/lib/site-images';

export async function GET() {
  const baseUrl = 'https://teenpattigoldgame.com.pk';
  const logoImageLoc = LOGO_URL;

  const imagePages = [
    { url: '/', images: [{ loc: logoImageLoc, title: "Teen Patti Gold - Pakistan's #1 Card Game App", caption: 'Download Teen Patti Gold APK free. Play Teen Patti, Rummy, Dragon Tiger and earn real money in Pakistan.' }, { loc: `${baseUrl}/teen-patti-gold-game.webp`, title: 'Teen Patti Gold Game Interface', caption: 'Teen Patti Gold card game interface — play and earn real money in Pakistan.' }, { loc: `${baseUrl}/teen-patti-gold-app.webp`, title: 'Teen Patti Gold Games Collection', caption: 'Teen Patti Gold app showing all available card games.' }, { loc: `${baseUrl}/teen-patti-gold-apk.webp`, title: 'Teen Patti Gold Bonuses & Rewards', caption: 'Teen Patti Gold APK bonuses and rewards system.' }] },
    { url: '/download-teen-patti-gold', images: [{ loc: logoImageLoc, title: 'Download Teen Patti Gold APK v1.656 for Android', caption: 'Download Teen Patti Gold APK latest version for Android. Free official download for Pakistan.' }] },
    { url: '/download-teen-patti-gold-apk', images: [{ loc: logoImageLoc, title: 'Teen Patti Gold APK Latest Version Free Download 2026', caption: 'Download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan.' }] },
    { url: '/deposit-money-in-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-deposit-money.webp`, title: 'Deposit Money in Teen Patti Gold via JazzCash EasyPaisa', caption: 'How to deposit money in Teen Patti Gold using JazzCash and EasyPaisa in Pakistan.' }] },
    { url: '/withdraw-money-from-teen-patti-gold', images: [{ loc: logoImageLoc, title: 'Withdraw Money from Teen Patti Gold to JazzCash EasyPaisa', caption: 'How to withdraw money from Teen Patti Gold to JazzCash, EasyPaisa in Pakistan.' }] },
    { url: '/teen-patti-gold-for-pc', images: [{ loc: logoImageLoc, title: 'Teen Patti Gold for PC - Play on Windows & Mac', caption: 'Play Teen Patti Gold on PC using Android Emulator on Windows and Mac.' }] },
    { url: '/teen-patti-gold-for-ios', images: [{ loc: logoImageLoc, title: 'Teen Patti Gold for iOS - iPhone and iPad', caption: 'Play Teen Patti Gold on iPhone and iPad. Complete iOS guide for Pakistan.' }] },
    { url: '/about-us', images: [{ loc: logoImageLoc, title: 'About Teen Patti Gold Pakistan', caption: "Learn about Teen Patti Gold Pakistan's #1 card gaming platform." }] },
    { url: '/blog', images: [{ loc: logoImageLoc, title: 'Teen Patti Gold Blog - Guides and Tips', caption: 'Guides, tutorials, and tips for Teen Patti Gold players in Pakistan.' }] },
    { url: '/blog/how-to-use-teen-patti-gold-app-in-pakistan', images: [{ loc: `${baseUrl}/teen-patti-gold-app.webp`, title: 'How to Use Teen Patti Gold App in Pakistan', caption: 'Complete beginner guide for Teen Patti Gold app in Pakistan.' }] },
    { url: '/blog/how-to-play-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-game.webp`, title: 'How to Play Teen Patti Gold - Complete Guide', caption: 'Complete gameplay guide for Teen Patti Gold card game.' }] },
    { url: '/blog/how-to-earn-money-from-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-refer-and-earn.webp`, title: 'How to Earn Money from Teen Patti Gold', caption: 'Earn real money from Teen Patti Gold in Pakistan.' }] },
    { url: '/blog/is-teen-patti-gold-real-or-fake', images: [{ loc: `${baseUrl}/teen-patti-gold-game.webp`, title: 'Is Teen Patti Gold Real or Fake', caption: 'Complete truth guide about Teen Patti Gold legitimacy.' }] },
    { url: '/blog/create-teen-patti-gold-account-and-login', images: [{ loc: `${baseUrl}/teen-patti-gold-app.webp`, title: 'Create Teen Patti Gold Account and Login', caption: 'Step by step account creation and login guide.' }] },
    { url: '/blog/tips-to-win-big-in-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-game.webp`, title: 'Tips to Win Big in Teen Patti Gold', caption: 'Expert strategies and tips to win in Teen Patti Gold.' }] },
    { url: '/blog/teen-patti-gold-latest-version-2026-updates', images: [{ loc: `${baseUrl}/teen-patti-gold-apk.webp`, title: 'Teen Patti Gold Latest Version V1.656 Updates 2026', caption: 'Latest Teen Patti Gold V1.656 new features and updates.' }] },
    { url: '/blog/how-to-claim-welcome-bonus-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-deposit-money.webp`, title: 'Claim Teen Patti Gold Welcome Bonus', caption: 'How to claim 100% first deposit welcome bonus in Teen Patti Gold.' }] },
    { url: '/blog/latest-offers-rewards-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-vip-program.webp`, title: 'Teen Patti Gold Latest Offers and Rewards 2026', caption: 'Latest offers, bonuses, and rewards in Teen Patti Gold.' }] },
    { url: '/blog/teen-patti-gold-free-chips-2026', images: [{ loc: `${baseUrl}/teen-patti-gold-refer-and-earn.webp`, title: 'Teen Patti Gold Free Chips 2026', caption: 'Get free chips in Teen Patti Gold daily - complete guide for Pakistan.' }] },
    { url: '/blog/teen-patti-gold-referral-code-pakistan', images: [{ loc: `${baseUrl}/teen-patti-gold-refer-and-earn.webp`, title: 'Teen Patti Gold Referral Code Pakistan 2026', caption: 'Earn bonus chips with Teen Patti Gold referral code in Pakistan.' }] },
    { url: '/blog/teen-patti-gold-vs-teen-patti-stars', images: [{ loc: `${baseUrl}/teen-patti-gold-game.webp`, title: 'Teen Patti Gold vs Teen Patti Stars 2026', caption: 'Comparison of Teen Patti Gold and Teen Patti Stars for Pakistan players.' }] },
    { url: '/blog/is-teen-patti-gold-better-for-earning-real-cash-2026', images: [{ loc: `${baseUrl}/teen-patti-gold-refer-and-earn.webp`, title: 'Is Teen Patti Gold Better for Earning Real Cash 2026', caption: 'Analysis of Teen Patti Gold for earning real cash in Pakistan.' }] },
    { url: '/blog/tips-to-win-big-in-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-game.webp`, title: 'Tips to Win Big in Teen Patti Gold Pakistan 2026', caption: 'Expert strategies and tips to win big at Teen Patti Gold in Pakistan.' }] },
    { url: '/blog/how-to-claim-welcome-bonus-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-deposit-money.webp`, title: 'Claim Teen Patti Gold Welcome Bonus Pakistan', caption: 'How to claim the 100% welcome bonus on first deposit in Teen Patti Gold.' }] },
    { url: '/blog/latest-offers-rewards-teen-patti-gold', images: [{ loc: `${baseUrl}/teen-patti-gold-vip-program.webp`, title: 'Teen Patti Gold Latest Offers and Rewards 2026', caption: 'Latest bonuses, offers, and rewards in Teen Patti Gold for Pakistan players.' }] },
    { url: '/blog/teen-patti-gold-old-version-features-review', images: [{ loc: `${baseUrl}/teen-patti-gold-app.webp`, title: 'Teen Patti Gold Old Version Features Review', caption: 'Review of Teen Patti Gold old version features and what changed in 2026.' }] },
    { url: '/blog/teen-patti-gold-login-problems-solutions', images: [{ loc: `${baseUrl}/teen-patti-gold-app.webp`, title: 'Fix Teen Patti Gold Login Problems Pakistan 2026', caption: 'How to fix Teen Patti Gold login problems — OTP, password, account lock solutions.' }] },
    { url: '/blog/responsible-gaming-guide-2026', images: [{ loc: logoImageLoc, title: 'Responsible Gaming Guide Teen Patti Gold 2026', caption: 'Responsible gaming tips for Teen Patti Gold players in Pakistan 2026.' }] },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imagePages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.images.map(img => `<image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n    ')}
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
