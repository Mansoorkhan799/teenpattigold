import { Metadata } from 'next';
import Link from 'next/link';
import { LOGO_URL } from '@/lib/site-images';
import Script from 'next/script';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_BLOG } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Teen Patti Gold Free Chips 2026 | Get Daily Free Chips & Bonus',
  description: 'Get Teen Patti Gold free chips in 2026. Claim daily bonuses, login rewards, referral chips, and promo codes. Complete guide for Pakistani players to get free chips every day.',
  keywords: ['teen patti gold free chips', 'teen patti gold free chips 2026', 'teen patti gold daily bonus', 'free chips teen patti gold pakistan', 'teen patti gold bonus chips'],
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
    canonical: 'https://teenpattigoldgame.com.pk/blog/teen-patti-gold-free-chips-2026',
  },
  openGraph: {
    title: 'Teen Patti Gold Free Chips 2026 | Get Daily Free Chips & Bonus',
    description: 'Complete guide to getting free chips in Teen Patti Gold. Daily bonuses, referral rewards, and login chips for Pakistani players.',
    url: 'https://teenpattigoldgame.com.pk/blog/teen-patti-gold-free-chips-2026',
    siteName: 'Teen Patti Gold',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-03-01T00:00:00Z',
    authors: ['Teen Patti Gold Team'],
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Teen Patti Gold Free Chips 2026 - Daily Bonus Chips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Patti Gold Free Chips 2026 | Get Daily Free Chips & Bonus',
    description: 'Complete guide to getting free chips in Teen Patti Gold. Daily bonuses, referral rewards, and login chips.',
    images: ['https://teenpattigoldgame.com.pk/opengraph-image'],
  }
};

export default function FreeChipsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    BREADCRUMB_HOME,
    BREADCRUMB_BLOG,
    { name: 'Teen Patti Gold Free Chips 2026', url: 'https://teenpattigoldgame.com.pk/blog/teen-patti-gold-free-chips-2026' },
  ]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Teen Patti Gold Free Chips 2026 | Get Daily Free Chips & Bonus",
    "description": "Complete guide to getting free chips in Teen Patti Gold. Daily bonuses, referral rewards, and login chips for Pakistani players.",
    "datePublished": "2026-03-01",
    "dateModified": "2026-03-01",
    "author": {
      "@type": "Organization",
      "name": "Teen Patti Gold",
      "url": "https://teenpattigoldgame.com.pk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Teen Patti Gold",
      "logo": { "@type": "ImageObject", "url": LOGO_URL }
    },
    "image": LOGO_URL,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://teenpattigoldgame.com.pk/blog/teen-patti-gold-free-chips-2026"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I get free chips in Teen Patti Gold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get free chips in Teen Patti Gold through daily login bonuses, referral rewards, lucky spin, completing tasks, and special event promotions. Log in every day to claim your daily bonus chips."
        }
      },
      {
        "@type": "Question",
        "name": "How much are the daily login bonus chips in Teen Patti Gold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Daily login bonuses in Teen Patti Gold start from 5,000 chips and increase with consecutive logins. A 7-day streak can reward you with up to 50,000+ bonus chips."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get free chips by referring friends to Teen Patti Gold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Teen Patti Gold has a referral program where you earn free chips for every friend you invite who registers and plays. Each successful referral earns you bonus chips."
        }
      }
    ]
  };

  const freeSources = [
    {
      title: "Daily Login Bonus",
      icon: "🎁",
      chips: "5,000–50,000+",
      description: "Open the Teen Patti Gold app every day to claim your daily login bonus. Consecutive logins increase the reward — a 7-day streak can award over 50,000 chips.",
      steps: [
        "Open the Teen Patti Gold app",
        "Tap the daily bonus notification or calendar icon",
        "Claim your free chips — they are credited instantly",
        "Log in the next day to maintain your streak and earn more"
      ]
    },
    {
      title: "Referral Program",
      icon: "👥",
      chips: "10,000–30,000",
      description: "Invite friends using your unique referral link. When they register and start playing, you earn bonus chips for each successful referral.",
      steps: [
        "Go to the Refer & Earn section in the app",
        "Copy your personal referral link or code",
        "Share it with friends via WhatsApp, Facebook, or SMS",
        "Earn chips when your friend joins and plays"
      ]
    },
    {
      title: "Lucky Spin / Wheel",
      icon: "🎡",
      chips: "1,000–100,000",
      description: "Teen Patti Gold offers a free lucky spin every few hours. Spin the wheel to win random chip amounts, sometimes even jackpot prizes.",
      steps: [
        "Look for the Lucky Spin icon in the app lobby",
        "Tap to spin — each spin is free (with cooldown timer)",
        "Collect your chip reward instantly",
        "Spin multiple times per day when the timer resets"
      ]
    },
    {
      title: "Daily Tasks & Missions",
      icon: "✅",
      chips: "2,000–20,000",
      description: "Complete in-game daily tasks and missions to earn free chips. Tasks include playing a specific number of hands, winning games, or reaching score milestones.",
      steps: [
        "Open the Tasks or Mission section in the app",
        "Review your available daily tasks",
        "Play games to complete the tasks",
        "Claim your chip rewards after completing each task"
      ]
    },
    {
      title: "Special Events & Promotions",
      icon: "🎉",
      chips: "Varies",
      description: "Teen Patti Gold regularly runs special events during Pakistani holidays (Eid, Independence Day) and festivals. These events offer massive free chip bonuses.",
      steps: [
        "Check the Events section in the app regularly",
        "Participate in special event games and activities",
        "Complete event objectives to earn bonus chips",
        "Redeem event rewards before they expire"
      ]
    },
    {
      title: "Welcome Bonus for New Players",
      icon: "🌟",
      chips: "Up to 100,000",
      description: "New players receive a generous welcome bonus when they register and make their first deposit. The welcome bonus multiplies your initial chips.",
      steps: [
        "Download Teen Patti Gold and create a new account",
        "Complete your profile registration",
        "Make your first deposit to activate the welcome bonus",
        "Enjoy multiplied chips credited to your account"
      ]
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="blog-post-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-primary">
        <div className="container mx-auto px-4 py-12">

          {/* Breadcrumb */}
          <div className="mb-6">
            <Link href="/blog" className="text-accent hover:text-accent font-semibold inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Free Chips Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Teen Patti Gold Free Chips 2026 — Get Daily Bonus Chips Every Day
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Want free chips in <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Gold</Link>? You don&apos;t always need to spend money. In 2026, Teen Patti Gold offers multiple ways to earn free chips every single day — through daily login bonuses, referral programs, lucky spin, daily tasks, and seasonal events. This guide covers all the methods Pakistani players can use to build their chip balance without depositing.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>📅 Published: March 2026</span>
              <span>⏱ 6 min read</span>
              <span>🇵🇰 Pakistan Guide</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">

            {/* Intro */}
            <div className="bg-secondary rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Why Free Chips Matter</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In Teen Patti Gold, chips are your in-game currency. You need chips to join tables, participate in tournaments, and play real-money games. Running out of chips means you stop playing — which is why knowing all the free chip sources is essential for every serious player.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Pakistani players who consistently claim daily bonuses can accumulate hundreds of thousands of chips per week without spending a single rupee. The key is being consistent and knowing where to look.
              </p>
            </div>

            {/* Free Chip Sources */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">6 Ways to Get Free Chips in Teen Patti Gold</h2>

            <div className="space-y-8 mb-12">
              {freeSources.map((source, idx) => (
                <div key={idx} className="bg-secondary rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl flex-shrink-0">{source.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{idx + 1}. {source.title}</h3>
                      <span className="inline-block bg-accent/20 text-accent text-sm px-3 py-1 rounded-full mt-1">
                        🪙 {source.chips} chips
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{source.description}</p>
                  <div className="bg-[#0A1029] rounded-xl p-4">
                    <p className="text-white font-semibold mb-3 text-sm">How to claim:</p>
                    <ol className="space-y-2">
                      {source.steps.map((step, si) => (
                        <li key={si} className="flex items-start gap-3 text-gray-300 text-sm">
                          <span className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">{si + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>

            {/* Pro Tips */}
            <div className="bg-[#0A1029] rounded-2xl p-8 mb-10 border border-accent/30">
              <h2 className="text-2xl font-bold text-white mb-6">Pro Tips to Maximize Free Chips</h2>
              <ul className="space-y-4">
                {[
                  "Log in every single day — consistency compounds. Missing one day resets your streak bonus.",
                  "Share your referral code in WhatsApp groups — each referral earns you a chip bonus.",
                  "Check the Events tab daily — limited-time events often offer 5x more chips than usual.",
                  "Use free chips on low-stakes tables to practice before playing real money games.",
                  "After <Link href='/blog/how-to-claim-welcome-bonus-teen-patti-gold'>claiming your welcome bonus</Link>, combine it with daily login chips for a big starting balance."
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-12">
              {[
                {
                  q: "How can I get free chips in Teen Patti Gold?",
                  a: "You can get free chips through daily login bonuses, referral rewards, lucky spin, completing daily tasks, and participating in special events. Log in every day for the highest rewards."
                },
                {
                  q: "How much are the daily login bonus chips?",
                  a: "Daily login bonuses start from 5,000 chips and increase with consecutive logins. A 7-day streak can reward you with 50,000+ bonus chips."
                },
                {
                  q: "Can I get free chips by referring friends?",
                  a: "Yes. Teen Patti Gold has a referral program where you earn 10,000–30,000 chips for every friend you invite who registers and starts playing."
                },
                {
                  q: "Do free chips expire in Teen Patti Gold?",
                  a: "Free chips from bonuses and events may have an expiry. Always check the bonus terms. Standard chips in your balance do not expire."
                }
              ].map((item, idx) => (
                <details key={idx} className="group bg-secondary rounded-xl border border-gray-700/50 overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer select-none text-white font-semibold list-none">
                    <span>{item.q}</span>
                    <svg className="w-5 h-5 ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-2 text-gray-300 leading-relaxed border-t border-gray-700/50">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-secondary rounded-2xl p-8 text-center border border-accent/30">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Claim Your Free Chips?</h2>
              <p className="text-gray-300 mb-6">
                Download Teen Patti Gold now and start claiming your daily login bonus, referral chips, and event rewards. New players also receive a generous welcome bonus on their first deposit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/download-teen-patti-gold"
                  className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-xl"
                >
                  Download Teen Patti Gold
                </Link>
                <Link
                  href="/blog/how-to-claim-welcome-bonus-teen-patti-gold"
                  className="inline-block border border-accent text-accent px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/10 transition-all duration-300"
                >
                  Claim Welcome Bonus
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
