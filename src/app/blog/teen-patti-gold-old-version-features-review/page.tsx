import { Metadata } from 'next';
import Link from 'next/link';
import { LOGO_URL } from '@/lib/site-images';
import Script from 'next/script';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_BLOG } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Teen Patti Gold Old Version: Features Review and Details 2026',
  description: 'Complete review of Teen Patti Gold old version features. Compare classic features, interface, games, and payment methods. Know what made the app popular in Pakistan.',
  keywords: ['Teen Patti Gold old version', 'Teen Patti Gold features', 'Teen Patti Gold review', '3 Patti Gold old app', 'Teen Patti Gold Pakistan'],
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
    canonical: 'https://teenpattigoldgame.com.pk/blog/teen-patti-gold-old-version-features-review',
  },
  openGraph: {
    title: 'Teen Patti Gold Old Version: Features Review and Details 2026',
    description: 'Complete review of Teen Patti Gold old version features. Compare classic features and what made the app popular in Pakistan.',
    type: 'article',
    publishedTime: '2026-02-24T00:00:00Z',
    authors: ['Teen Patti Gold Team'],
    images: [{ url: LOGO_URL, width: 1200, height: 630, alt: 'Teen Patti Gold Old Version Review' }],
  },
};

export default function TeenPattiGoldOldVersionPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    BREADCRUMB_HOME,
    BREADCRUMB_BLOG,
    { name: 'Teen Patti Gold Old Version Features Review', url: 'https://teenpattigoldgame.com.pk/blog/teen-patti-gold-old-version-features-review' },
  ]);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Teen Patti Gold Old Version: Features Review and Details 2026',
    description: 'Complete review of Teen Patti Gold old version features and what made it popular in Pakistan.',
    datePublished: '2026-02-24',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'Teen Patti Gold', url: 'https://teenpattigoldgame.com.pk' },
    publisher: { '@type': 'Organization', name: 'Teen Patti Gold', logo: { '@type': 'ImageObject', url: LOGO_URL } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://teenpattigoldgame.com.pk/blog/teen-patti-gold-old-version-features-review' },
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
              Teen Patti Gold Old Version: Features Review and Details <Link href="/" className="text-accent">2026</Link>
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <span>📅 February 24, 2026</span>
              <span>•</span>
              <span>⏱️ 8 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Teen Patti Gold</strong> has evolved significantly over the years. This review covers the classic features that made the old version popular among Pakistani players—real money earning, easy JazzCash and EasyPaisa payments, daily bonuses, referral program, and the wide variety of card games including Teen Patti, Rummy, and Dragon Tiger. For what changed since then, see <Link href="/blog/teen-patti-gold-latest-version-2026-updates" className="text-accent hover:underline">latest version and 2026 updates</Link> and install from the <Link href="/download-teen-patti-gold" className="text-accent hover:underline">official download page</Link>.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Classic Features of Teen Patti Gold Old Version</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#FFA500]">Real Money Earning</h3>
                    <p className="text-gray-300">The old version allowed players to earn real cash by playing Teen Patti, poker, and Rummy. Earnings were transferred through local payment methods safely.</p>
                  </div>
                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#FFA500]">Easy Withdraw & Deposit</h3>
                    <p className="text-gray-300">With just a few steps, players could withdraw or deposit money anytime using JazzCash or EasyPaisa with secure and quick transactions. Today&apos;s flow is covered in our <Link href="/deposit-money-in-teen-patti-gold" className="text-accent hover:underline">deposit</Link> and <Link href="/withdraw-money-from-teen-patti-gold" className="text-accent hover:underline">withdraw</Link> guides.</p>
                  </div>
                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#FFA500]">Attractive Interface</h3>
                    <p className="text-gray-300">Bright, colorful design with background music, smooth animations, and clear layout. Each section was designed for easy navigation.</p>
                  </div>
                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#FFA500]">Popular Games</h3>
                    <p className="text-gray-300">Dragon vs Tiger, poker, slots, Teen Patti, Rummy, and more. Simple rules perfect for beginners and experienced players.</p>
                  </div>
                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#FFA500]">Daily Bonus</h3>
                    <p className="text-gray-300">Free login bonuses and chips every day. Special rewards on weekly or festival occasions to keep players engaged.</p>
                  </div>
                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-[#FFA500]">Referral Earning</h3>
                    <p className="text-gray-300">Share your referral link with friends. When they join and play, you receive commission automatically—earn without playing.</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Why the Old Version Was Popular</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The 3 Patti Teen Patti Gold game became popular because it allowed earning real money while having fun. Simple rules, beautiful design, easy deposits and withdrawals via Easypaisa and Jazzcash, and exciting games like Teen Patti, Dragon vs Tiger, Poker, Rummy, and Slots kept players engaged. Daily bonuses and rewards helped earn coins and extra cash. The app was safe, secure, and ran smoothly even on low-storage devices.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#FFA500] to-[#f97316] rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Upgrade to Latest Version</h2>
                <p className="text-white text-lg mb-6">Get the newest features, improved security, and better performance. Download the latest Teen Patti Gold APK today!</p>
                <Link href="/download-teen-patti-gold" className="inline-block bg-white text-[#FFA500] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Download Now</Link>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4 text-white">Related Guides</h2>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/blog/teen-patti-gold-latest-version-2026-updates" className="text-accent hover:underline">→ Teen Patti Gold Latest Version New Features and 2026 Updates</Link></li>
                  <li><Link href="/blog/how-to-use-teen-patti-gold-app-in-pakistan" className="text-accent hover:underline">→ How to Use Teen Patti Gold App in Pakistan</Link></li>
                  <li><Link href="/blog/latest-offers-rewards-teen-patti-gold" className="text-accent hover:underline">→ Latest Offers and Rewards on Teen Patti Gold (2026)</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
