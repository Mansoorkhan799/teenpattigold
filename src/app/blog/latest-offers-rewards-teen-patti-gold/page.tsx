import { Metadata } from 'next';
import Link from 'next/link';
import { LOGO_URL } from '@/lib/site-images';
import Script from 'next/script';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_BLOG } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Latest Offers and Rewards on Teen Patti Gold (2026)',
  description: 'Discover the latest Teen Patti Gold offers 2026: 100% welcome bonus, recharge rebate, VIP rebate, daily login rewards, referral program. Complete guide to maximize rewards.',
  keywords: ['Teen Patti Gold offers', 'Teen Patti Gold rewards', 'Teen Patti Gold bonus 2026', 'Teen Patti Gold recharge rebate', 'Teen Patti Gold VIP rewards'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://teenpattigoldgame.com.pk/blog/latest-offers-rewards-teen-patti-gold',
  },
  openGraph: {
    title: 'Latest Offers and Rewards on Teen Patti Gold (2026)',
    description: 'Discover the latest Teen Patti Gold offers: welcome bonus, recharge rebate, VIP rewards, referral program.',
    type: 'article',
    publishedTime: '2026-02-24T00:00:00Z',
    authors: ['Teen Patti Gold Team'],
    images: [{ url: LOGO_URL, width: 1200, height: 630, alt: 'Teen Patti Gold Offers and Rewards 2026' }],
  },
};

export default function LatestOffersRewardsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    BREADCRUMB_HOME,
    BREADCRUMB_BLOG,
    { name: 'Latest Offers and Rewards', url: 'https://teenpattigoldgame.com.pk/blog/latest-offers-rewards-teen-patti-gold' },
  ]);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Latest Offers and Rewards on Teen Patti Gold (2026)',
    description: 'Discover the latest Teen Patti Gold offers and rewards for 2026.',
    datePublished: '2026-02-24',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'Teen Patti Gold', url: 'https://teenpattigoldgame.com.pk' },
    publisher: { '@type': 'Organization', name: 'Teen Patti Gold', logo: { '@type': 'ImageObject', url: LOGO_URL } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://teenpattigoldgame.com.pk/blog/latest-offers-rewards-teen-patti-gold' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="min-h-screen bg-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <Link href="/blog" className="text-accent hover:text-accent font-semibold inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Blog
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Latest Offers and Rewards on <Link href="/" className="text-accent">Teen Patti Gold</Link> (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <span>📅 February 24, 2026</span>
              <span>•</span>
              <span>⏱️ 8 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Teen Patti Gold</strong> offers multiple ways to earn rewards in 2026: 100% welcome bonus, recharge rebate up to 30%, VIP daily rebate, daily login bonuses, and referral commissions. This guide covers all current offers and how to maximize your rewards.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">1. New Player Welcome Bonus</h2>
                <p className="text-gray-300 mb-4">3Patti offers a 100% recharge bonus for all new users on their first deposit. Deposit and get equal bonus!</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                    <thead className="bg-[#0a1029]">
                      <tr>
                        <th className="py-3 px-6 text-left text-white font-semibold">Deposit (PKR)</th>
                        <th className="py-3 px-6 text-left text-white font-semibold">Bonus (PKR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">100</td><td className="py-3 px-6 text-gray-300">100</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">1,000</td><td className="py-3 px-6 text-gray-300">1,000</td></tr>
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5,000</td><td className="py-3 px-6 text-gray-300">5,000</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10,000</td><td className="py-3 px-6 text-gray-300">10,000</td></tr>
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">20,000</td><td className="py-3 px-6 text-gray-300">20,000</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">100,000</td><td className="py-3 px-6 text-gray-300">100,000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">2. Recharge Rebate</h2>
                <p className="text-gray-300 mb-4">Huge recharge rebate bonuses when you deposit. Higher deposits = higher rebate percentage.</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                    <thead className="bg-[#0a1029]">
                      <tr>
                        <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                        <th className="py-3 px-6 text-left text-white font-semibold">Recharge Required</th>
                        <th className="py-3 px-6 text-left text-white font-semibold">Required Wager</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5%</td><td className="py-3 px-6 text-gray-300">3,000 PKR</td><td className="py-3 px-6 text-gray-300">2x</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10%</td><td className="py-3 px-6 text-gray-300">5,000</td><td className="py-3 px-6 text-gray-300">3x</td></tr>
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">15%</td><td className="py-3 px-6 text-gray-300">8,000</td><td className="py-3 px-6 text-gray-300">4x</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">20%</td><td className="py-3 px-6 text-gray-300">10,000</td><td className="py-3 px-6 text-gray-300">5x</td></tr>
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">25%</td><td className="py-3 px-6 text-gray-300">20,000</td><td className="py-3 px-6 text-gray-300">6x</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">30%</td><td className="py-3 px-6 text-gray-300">50,000</td><td className="py-3 px-6 text-gray-300">7x</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">3. Big Rebate on Recharge (VIP)</h2>
                <p className="text-gray-300 mb-4">Daily rebate for deposits of 3,000 PKR or more. Rebate depends on VIP level. Claim every day!</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
                    <thead className="bg-[#0a1029]">
                      <tr>
                        <th className="py-3 px-6 text-left text-white font-semibold">VIP Level</th>
                        <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V1-V2</td><td className="py-3 px-6 text-gray-300">1%</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V3-V4</td><td className="py-3 px-6 text-gray-300">2%</td></tr>
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V5-V6</td><td className="py-3 px-6 text-gray-300">3%</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V7-V8</td><td className="py-3 px-6 text-gray-300">4%</td></tr>
                      <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">V9-V10</td><td className="py-3 px-6 text-gray-300">5%</td></tr>
                      <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">V11-V20</td><td className="py-3 px-6 text-gray-300">6%-10%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">4. Daily Login Rewards</h2>
                <p className="text-gray-300 mb-4">Log in every day to claim free chips and bonuses. Consistent logins unlock better rewards. Special rewards on weekly or festival occasions.</p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">5. Referral Program</h2>
                <p className="text-gray-300 mb-4">Share your referral link with friends. When they join and start playing, you earn commission automatically. The more friends you invite, the more you earn—without playing games yourself.</p>
              </div>

              <div className="bg-gradient-to-r from-[#FFA500] to-[#f97316] rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Claim All Offers Today</h2>
                <p className="text-white text-lg mb-6">Download Teen Patti Gold, claim your welcome bonus, and start earning from all these rewards. Play Teen Patti, Rummy, Dragon Tiger and win real money!</p>
                <Link href="/download-teen-patti-gold" className="inline-block bg-white text-[#FFA500] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Download Now</Link>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4 text-white">Related Guides</h2>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/blog/how-to-claim-welcome-bonus-teen-patti-gold" className="text-accent hover:underline">→ How to Claim Your Welcome Bonus on Teen Patti Gold</Link></li>
                  <li><Link href="/blog/how-to-earn-money-from-teen-patti-gold" className="text-accent hover:underline">→ How to Earn Money from Teen Patti Gold</Link></li>
                  <li><Link href="/blog/tips-to-win-big-in-teen-patti-gold" className="text-accent hover:underline">→ Tips to Win Big in Teen Patti Gold</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
