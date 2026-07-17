import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostingSchema, safeJsonLd } from '@/lib/blog-schema';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: {
    absolute: 'How to Become a Referral Agent for Teen Patti Gold 2026',
  },
  description:
    'Learn how to become a Teen Patti Gold referral agent in Pakistan. Get your unique agent link, invite players, earn commission on deposits, and withdraw via JazzCash or EasyPaisa.',
  keywords: [
    'teen patti gold referral agent',
    'teen patti gold agent program',
    'teen patti gold refer and earn',
    'teen patti gold commission',
    'teen patti gold agent pakistan',
    'how to become teen patti gold agent',
  ],
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
    canonical: 'https://teenpattigoldgame.com.pk/blog/how-to-become-referral-agent-teen-patti-gold',
  },
  openGraph: {
    title: 'How to Become a Referral Agent for Teen Patti Gold 2026',
    description:
      'Learn how to become a Teen Patti Gold referral agent in Pakistan. Get your unique agent link, invite players, earn commission on deposits, and withdraw via JazzCash or EasyPaisa.',
    url: 'https://teenpattigoldgame.com.pk/blog/how-to-become-referral-agent-teen-patti-gold',
    siteName: 'Teen Patti Gold',
    locale: 'en_PK',
    type: 'article',
    publishedTime: '2026-04-30T09:00:00+05:00',
    authors: ['Teen Patti Gold Team'],
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/teen-patti-gold-refer-and-earn.webp',
        width: 400,
        height: 711,
        alt: 'How to Become a Teen Patti Gold Referral Agent in Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Become a Referral Agent for Teen Patti Gold 2026',
    description:
      'Learn how to become a Teen Patti Gold referral agent in Pakistan. Earn commission on every player you invite.',
    images: ['https://teenpattigoldgame.com.pk/teen-patti-gold-refer-and-earn.webp'],
  },
};

export default function ReferralAgentPage() {
  const schemaData = getBlogPostingSchema({
    url: 'https://teenpattigoldgame.com.pk/blog/how-to-become-referral-agent-teen-patti-gold',
    headline: 'How to Become a Referral Agent for Teen Patti Gold 2026',
    description:
      'Learn how to become a Teen Patti Gold referral agent in Pakistan. Get your unique agent link, invite players, earn commission on deposits, and withdraw via JazzCash or EasyPaisa.',
    datePublished: '2026-04-30T09:00:00+05:00',
    dateModified: '2026-04-30T09:00:00+05:00',
    image: [
      'https://teenpattigoldgame.com.pk/teen-patti-gold-refer-and-earn.webp',
    ],
    keywords:
      'teen patti gold referral agent, teen patti gold agent program pakistan, teen patti gold refer and earn, teen patti gold commission 2026',
    wordCount: 1500,
    faq: [
      {
        question: 'How do I become a Teen Patti Gold referral agent?',
        answer:
          'Open the Teen Patti Gold app, go to the Refer & Earn or Agent Program section, register your agent account, and get your unique referral link to start inviting players.',
      },
      {
        question: 'How much commission does a Teen Patti Gold agent earn?',
        answer:
          'Agents earn commission based on how much their referred players deposit and play. The more active players you bring in, the higher your total commission earnings.',
      },
      {
        question: 'How do I withdraw my agent commission from Teen Patti Gold?',
        answer:
          'You can withdraw your agent commission via JazzCash, EasyPaisa, or bank transfer. The minimum withdrawal is typically Rs 500. Go to the wallet section in the app and request a payout.',
      },
      {
        question: 'Is there a limit on how many players I can refer as an agent?',
        answer:
          'No, there is no limit. You can refer as many players as you want. Each active referral contributes to your commission, so the more players you bring, the more you earn.',
      },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Become a Referral Agent for Teen Patti Gold',
        'description': 'Step-by-step guide to register as a Teen Patti Gold referral agent, get your agent link, invite players, earn commission, and withdraw earnings in Pakistan.',
        'totalTime': 'PT10M',
        'supply': [
          { '@type': 'HowToSupply', 'name': 'Teen Patti Gold app (Android 5.0+)' },
          { '@type': 'HowToSupply', 'name': 'Registered Teen Patti Gold account' },
          { '@type': 'HowToSupply', 'name': 'JazzCash or EasyPaisa for withdrawals' },
        ],
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Register for the Referral Program',
            'text': 'Open the Teen Patti Gold app, go to the "Refer & Earn" or "Agent Program" section, sign up with your details, and verify your phone number or email to activate your agent account.',
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Get Your Unique Referral Link',
            'text': 'Once registered, open the Agent or Refer & Earn section to find your unique referral link and agent code. Tap Copy or Share to distribute it on WhatsApp, Facebook, Instagram, and gaming forums.',
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Invite Players and Earn Commission',
            'text': 'Share your referral link with friends and online users. When they download the app, register, and start depositing and playing, commission is automatically credited to your agent account based on their activity.',
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Withdraw Your Earnings',
            'text': 'Go to the Wallet or Agent Earnings section, tap Withdraw, select JazzCash, EasyPaisa, or Bank Card, enter your account details and amount (minimum Rs 500), and confirm. Earnings are transferred within 3–24 hours.',
          },
        ],
      }) }} />

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
              Agent Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How to Become a Referral Agent for Teen Patti Gold in Pakistan 2026
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Gold</Link> is a great way to earn money by promoting the game and bringing in new players. As a referral agent, you get a unique referral link that allows you to invite friends, family, and online users to join. Every time someone registers and plays through your link, you earn commission based on their activity.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>📅 Published: April 2026</span>
              <span>⏱ 6 min read</span>
              <span>🇵🇰 Pakistan Guide</span>
            </div>

            {/* Featured image — canonical /teen-patti-gold-refer-and-earn.webp embedded
                so Google sees it on the page declared in image-sitemap.xml.
                unoptimized=true keeps <img src> on the indexable path. */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mt-8">
              <Image
                src="/teen-patti-gold-refer-and-earn.webp"
                alt="How to Become a Referral Agent for Teen Patti Gold 2026"
                fill
                className="object-cover"
                priority
                unoptimized={true}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">

            {/* What is a Referral Agent */}
            <div className="bg-secondary rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">What is a Teen Patti Gold Referral Agent?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A referral agent is a player who promotes Teen Patti Gold and earns commission by bringing new players to the platform. Unlike a regular player who only earns chips by playing, an agent earns ongoing commission every time their referred players deposit or play games.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This makes the agent program one of the best passive earning opportunities in Pakistan. You do not need to play yourself to earn — you simply share your unique agent link with others and collect commission on their activity.
              </p>
            </div>

            {/* Steps to Become an Agent */}
            <div className="bg-secondary rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">Steps to Become a Teen Patti Gold Referral Agent</h2>

              {/* Step 1 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">1</div>
                  <h3 className="text-xl font-bold text-white">Register for the Referral Program</h3>
                </div>
                <div className="pl-14 space-y-3">
                  {[
                    'Open the Teen Patti Gold app or visit the official website.',
                    'Look for the "Refer & Earn" or "Agent Program" section in the main menu.',
                    'Sign up using your details and create an agent account.',
                    'Verify your phone number or email to activate the account.',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 bg-[#0a1029] text-accent rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold border border-accent/30">{i + 1}</span>
                      <span className="text-sm md:text-base leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0ea5e9]/20 text-[#0ea5e9] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">2</div>
                  <h3 className="text-xl font-bold text-white">Get Your Unique Referral Link</h3>
                </div>
                <div className="pl-14 space-y-3">
                  {[
                    'Once registered, open the Agent or Refer & Earn section in the app.',
                    'Your unique referral link and agent code will be displayed on the screen.',
                    'Tap Copy to save your link or use the Share button to send it directly.',
                    'Share this link on WhatsApp groups, Facebook, Instagram, gaming forums, and with friends.',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 bg-[#0a1029] text-[#0ea5e9] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold border border-[#0ea5e9]/30">{i + 1}</span>
                      <span className="text-sm md:text-base leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#4ade80]/20 text-[#4ade80] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">3</div>
                  <h3 className="text-xl font-bold text-white">Invite Players and Earn Commission</h3>
                </div>
                <div className="pl-14 space-y-3">
                  {[
                    'When users click your link, download the app, and register, they are linked to your agent account.',
                    'Commission starts earning as soon as your referrals begin depositing and playing.',
                    'Commission is calculated based on how much your referrals deposit or play in the game.',
                    'The more active players you bring in, the higher your total commission earnings.',
                    'Track all your active referrals and commission history inside the agent dashboard.',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 bg-[#0a1029] text-[#4ade80] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold border border-[#4ade80]/30">{i + 1}</span>
                      <span className="text-sm md:text-base leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#ec4899]/20 text-[#ec4899] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg">4</div>
                  <h3 className="text-xl font-bold text-white">Withdraw Your Earnings</h3>
                </div>
                <div className="pl-14 space-y-3">
                  {[
                    'Open the app and go to the Wallet or Agent Earnings section.',
                    'Tap Withdraw and select your payment method — JazzCash, EasyPaisa, or bank transfer.',
                    'Enter your account details and the amount you want to withdraw.',
                    'The minimum withdrawal is usually Rs 500 — check the app for the current limit.',
                    'Confirm the request and your earnings will be transferred within 3–24 hours.',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="w-6 h-6 bg-[#0a1029] text-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold border border-[#ec4899]/30">{i + 1}</span>
                      <span className="text-sm md:text-base leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Commission Overview */}
            <div className="bg-secondary rounded-2xl p-8 mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">Agent Commission Overview</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-accent font-semibold">Activity</th>
                      <th className="text-left py-3 px-4 text-accent font-semibold">Commission Type</th>
                      <th className="text-left py-3 px-4 text-accent font-semibold">Estimated Earning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    <tr className="bg-[#0A1029]/50">
                      <td className="py-3 px-4 text-white">Referral registers and plays</td>
                      <td className="py-3 px-4 text-gray-300">Registration bonus</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">Fixed chips reward</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Referral makes a deposit</td>
                      <td className="py-3 px-4 text-gray-300">Deposit commission</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">% of deposit amount</td>
                    </tr>
                    <tr className="bg-[#0A1029]/50">
                      <td className="py-3 px-4 text-white">Referral plays actively</td>
                      <td className="py-3 px-4 text-gray-300">Activity commission</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">Ongoing earnings</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">Multiple active referrals</td>
                      <td className="py-3 px-4 text-gray-300">Milestone bonus</td>
                      <td className="py-3 px-4 text-green-400 font-semibold">Extra reward</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-400 text-xs mt-4">* Commission rates depend on current promotions. Check the Agent Program section in the app for exact rates.</p>
            </div>

            {/* Tips */}
            <div className="bg-[#0A1029] rounded-2xl p-8 mb-10 border border-accent/30">
              <h2 className="text-2xl font-bold text-white mb-6">Tips to Maximize Your Agent Earnings</h2>
              <ul className="space-y-4">
                {[
                  'Share your referral link in active WhatsApp gaming groups — Pakistani gaming communities are highly active.',
                  'Post in Facebook groups and gaming pages where real-money game enthusiasts are present.',
                  'Share during special events when agent commission rates are boosted.',
                  'Create short video tutorials on how to download and play — attach your referral link in the description.',
                  'Follow up with referred friends to make sure they complete registration with your link.',
                  'Track your agent dashboard daily to monitor active referrals and optimize your sharing strategy.',
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
            <FaqAccordion
              className="mb-12"
              items={[
                {
                  question: 'How do I become a Teen Patti Gold referral agent?',
                  answer:
                    'Open the Teen Patti Gold app and go to the Refer & Earn or Agent Program section. Sign up with your details, get your unique referral link, and start sharing it with others to earn commission.',
                },
                {
                  question: 'How much commission does a Teen Patti Gold agent earn?',
                  answer:
                    'Commission is based on how much your referred players deposit and play. The more active players you bring in, the higher your total commission. Check the Agent Program section in the app for the current commission rates.',
                },
                {
                  question: 'How do I withdraw my agent commission?',
                  answer:
                    'Go to the Wallet section in the app, tap Withdraw, choose JazzCash, EasyPaisa, or bank transfer, enter your account details, and confirm. The minimum withdrawal is typically Rs 500. Payouts process within 3–24 hours.',
                },
                {
                  question: 'Is there a limit on how many players I can refer?',
                  answer:
                    'No limit at all. You can refer as many players as you want. Every active referral earns you commission, so the bigger your network, the higher your earnings.',
                },
                {
                  question: 'Do I need to keep playing to earn as an agent?',
                  answer:
                    'No. As an agent, you earn commission from your referred players\' activity. You do not need to deposit or play yourself to earn — your earnings come from the players you invite.',
                },
              ]}
            />

            {/* CTA */}
            <div className="bg-secondary rounded-2xl p-8 text-center border border-accent/30">
              <h2 className="text-2xl font-bold text-white mb-4">Start Earning as a Teen Patti Gold Agent Today</h2>
              <p className="text-gray-300 mb-6">
                Download Teen Patti Gold, register as an agent, get your referral link, and start earning commission from every player you invite. No deposit required to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/download-teen-patti-gold-apk"
                  className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-xl"
                >
                  Download Teen Patti Gold
                </Link>
                <Link
                  href="/blog/teen-patti-gold-referral-code-pakistan"
                  className="inline-block border border-accent text-accent px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/10 transition-all duration-300"
                >
                  Referral Code Guide
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
