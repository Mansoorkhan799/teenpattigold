import { Metadata } from 'next';
import Link from 'next/link';
import { LOGO_URL } from '@/lib/site-images';
import Script from 'next/script';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_BLOG } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Teen Patti Gold Referral Code Pakistan 2026 | Earn Bonus with Referrals',
  description: 'Use the Teen Patti Gold referral code in Pakistan to earn bonus chips and cash. Complete guide on how to use, share, and maximize Teen Patti Gold referral rewards in 2026.',
  keywords: ['teen patti gold referral code', 'teen patti gold referral code pakistan', 'teen patti gold refer and earn', 'teen patti gold invitation code', 'teen patti gold bonus code 2026'],
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
    canonical: 'https://teenpattigoldgame.com.pk/blog/teen-patti-gold-referral-code-pakistan',
  },
  openGraph: {
    title: 'Teen Patti Gold Referral Code Pakistan 2026 | Earn Bonus with Referrals',
    description: 'Complete guide on Teen Patti Gold referral codes in Pakistan. Learn how to share your code, earn chips, and maximize referral rewards.',
    type: 'article',
    publishedTime: '2026-03-05T00:00:00Z',
    authors: ['Teen Patti Gold Team'],
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: 'Teen Patti Gold Referral Code Pakistan 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Patti Gold Referral Code Pakistan 2026',
    description: 'Complete guide on Teen Patti Gold referral codes in Pakistan. Learn how to share your code and earn bonus chips.',
    images: [LOGO_URL],
  }
};

export default function ReferralCodePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    BREADCRUMB_HOME,
    BREADCRUMB_BLOG,
    { name: 'Teen Patti Gold Referral Code Pakistan', url: 'https://teenpattigoldgame.com.pk/blog/teen-patti-gold-referral-code-pakistan' },
  ]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Teen Patti Gold Referral Code Pakistan 2026 | Earn Bonus with Referrals",
    "description": "Complete guide on Teen Patti Gold referral codes in Pakistan. Learn how to share your code, earn chips, and maximize referral rewards.",
    "datePublished": "2026-03-05",
    "dateModified": "2026-03-05",
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
      "@id": "https://teenpattigoldgame.com.pk/blog/teen-patti-gold-referral-code-pakistan"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Teen Patti Gold referral code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Teen Patti Gold referral code is a unique personal code assigned to every player. When you share it with a friend and they register using your code, both you and your friend receive bonus chips as a reward."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find my Teen Patti Gold referral code in Pakistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open the Teen Patti Gold app, go to the Refer & Earn or Invitation section, and you will find your unique referral code or shareable link. You can share it directly via WhatsApp, SMS, or social media."
        }
      },
      {
        "@type": "Question",
        "name": "How many chips do I earn per referral in Teen Patti Gold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The referral reward varies based on active promotions, but typically you earn between 10,000 to 30,000 chips per successful referral. Some special events offer higher referral bonuses."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a limit to how many friends I can refer in Teen Patti Gold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, there is no limit. You can refer as many friends as you want. Each successful referral earns you bonus chips, making it one of the best ways to build your chip balance for free."
        }
      }
    ]
  };

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
              Referral Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Teen Patti Gold Referral Code Pakistan 2026 — Earn Bonus Chips by Inviting Friends
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Gold</Link> referral program is one of the easiest ways to earn free chips in Pakistan. Every player gets a unique referral code. Share it with friends, and when they register and play, both of you get rewarded. This guide explains exactly how the referral system works, how to find your code, and how to maximize your referral earnings.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>📅 Published: March 2026</span>
              <span>⏱ 5 min read</span>
              <span>🇵🇰 Pakistan Guide</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">

            {/* What is Referral Code */}
            <div className="bg-secondary rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">What is a Teen Patti Gold Referral Code?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A referral code (also called an invitation code) is a unique identifier assigned to your Teen Patti Gold account. When someone new registers using your code, they are linked to your account, and both you and the new player receive a chip bonus as a reward.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This system benefits everyone: new players get bonus chips to start with, and experienced players grow their chip balance by building a referral network. In Pakistan, where WhatsApp and Facebook groups are widely used, sharing referral codes is extremely effective.
              </p>
            </div>

            {/* How to Find Your Code */}
            <div className="bg-secondary rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">How to Find Your Referral Code</h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Open the Teen Patti Gold App", desc: "Launch the app and log in to your account. Make sure your internet connection is stable." },
                  { step: "2", title: "Go to the Refer & Earn Section", desc: "Look for the 'Refer & Earn' or 'Invitation' button in the main menu or your profile page." },
                  { step: "3", title: "Copy Your Referral Code", desc: "Your unique referral code or a shareable invitation link will be displayed. Tap to copy it." },
                  { step: "4", title: "Share with Friends", desc: "Send your code via WhatsApp, Facebook, SMS, or any social media platform to invite friends." },
                  { step: "5", title: "Earn Chips When They Join", desc: "When your friend registers using your code and starts playing, your chip bonus is credited automatically." }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 bg-[#0A1029] rounded-xl p-5">
                    <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Enter a Referral Code (New Player) */}
            <div className="bg-secondary rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">How to Enter a Referral Code (New Player)</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you received a referral code from a friend, here is how to use it when creating your Teen Patti Gold account:
              </p>
              <div className="space-y-3">
                {[
                  "Download Teen Patti Gold from the official site — visit the download page for the latest APK.",
                  "Open the app and tap on Register or Create Account.",
                  "During registration, look for the Invitation Code or Referral Code field.",
                  "Enter your friend's referral code in that field before completing registration.",
                  "Once your account is created, the welcome bonus chips from the referral are credited to your balance."
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/download-teen-patti-gold" className="inline-block bg-accent text-primary px-6 py-3 rounded-full font-bold hover:bg-accent/90 transition-all">
                  Download Teen Patti Gold →
                </Link>
              </div>
            </div>

            {/* Referral Rewards Table */}
            <div className="bg-secondary rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">Referral Rewards Overview</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-accent font-semibold">Action</th>
                      <th className="text-left py-3 px-4 text-accent font-semibold">Who Gets Reward</th>
                      <th className="text-left py-3 px-4 text-accent font-semibold">Estimated Chips</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-[#0A1029]/50">
                      <td className="py-3 px-4 text-white">Friend registers with your code</td>
                      <td className="py-3 px-4 text-gray-300">Referrer (you)</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">10,000–30,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">New player uses a referral code</td>
                      <td className="py-3 px-4 text-gray-300">New player (friend)</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">5,000–15,000</td>
                    </tr>
                    <tr className="bg-[#0A1029]/50">
                      <td className="py-3 px-4 text-white">Special event referral bonus</td>
                      <td className="py-3 px-4 text-gray-300">Both</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">Up to 50,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Referral milestone (5 friends)</td>
                      <td className="py-3 px-4 text-gray-300">Referrer (you)</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">Bonus reward</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-xs mt-4">* Exact chip amounts depend on current promotions. Check the Refer & Earn section in the app for the latest rewards.</p>
            </div>

            {/* Tips for Sharing */}
            <div className="bg-[#0A1029] rounded-2xl p-8 mb-10 border border-accent/30">
              <h2 className="text-2xl font-bold text-white mb-6">Tips to Maximize Your Referral Earnings</h2>
              <ul className="space-y-4">
                {[
                  "Share in active WhatsApp groups — game enthusiast groups in Pakistan are the best audience.",
                  "Post on Facebook gaming pages or Pakistani gaming communities for wider reach.",
                  "Share during special events when referral bonuses are doubled or tripled.",
                  "Remind friends to enter your code during registration — it cannot be added after signup.",
                  "Track your referrals in the app to see how many friends have joined and what you've earned.",
                  "Combine referral chips with daily login bonuses for a big free chip stack."
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
                  q: "What is the Teen Patti Gold referral code?",
                  a: "A referral code is your unique personal invitation code. When a friend registers using your code, both of you receive bonus chips as a reward."
                },
                {
                  q: "Where do I find my referral code?",
                  a: "Open the app, go to the Refer & Earn or Invitation section, and your unique code or shareable link will be displayed there."
                },
                {
                  q: "How many chips do I earn per referral?",
                  a: "Typically 10,000–30,000 chips per successful referral. Amounts may vary based on current promotions. Check the Refer & Earn section for the latest rewards."
                },
                {
                  q: "Is there a limit to how many friends I can refer?",
                  a: "No limit. You can refer as many friends as you want, and each successful referral earns you chips."
                },
                {
                  q: "Can I enter a referral code after registration?",
                  a: "No. The referral code must be entered during registration. Once an account is created without a referral code, it cannot be added afterward."
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
              <h2 className="text-2xl font-bold text-white mb-4">Start Earning with Referrals Today</h2>
              <p className="text-gray-300 mb-6">
                Download Teen Patti Gold, find your referral code, and start sharing. Every friend you invite earns you free chips — no deposit required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/download-teen-patti-gold"
                  className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-xl"
                >
                  Download Teen Patti Gold
                </Link>
                <Link
                  href="/blog/teen-patti-gold-free-chips-2026"
                  className="inline-block border border-accent text-accent px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/10 transition-all duration-300"
                >
                  More Ways to Get Free Chips
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
