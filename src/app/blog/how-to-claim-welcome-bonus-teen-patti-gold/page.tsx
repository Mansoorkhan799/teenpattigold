import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPostingSchema } from '@/lib/blog-schema';

export const metadata: Metadata = {
  title: 'How to Claim Your Welcome Bonus on Teen Patti Gold (2026 Guide)',
  description: 'Step-by-step guide to claim your Teen Patti Gold welcome bonus in 2026. Get 100% recharge bonus on first deposit. Learn eligibility, process, and tips.',
  keywords: ['Teen Patti Gold welcome bonus', 'Teen Patti Gold first deposit bonus', 'claim bonus Teen Patti Gold', 'Teen Patti Gold 100% bonus', 'Teen Patti Gold new player bonus'],
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
    canonical: 'https://teenpattigoldgame.com.pk/blog/how-to-claim-welcome-bonus-teen-patti-gold',
  },
  openGraph: {
    title: 'How to Claim Your Welcome Bonus on Teen Patti Gold (2026 Guide)',
    description: 'Step-by-step guide to claim your Teen Patti Gold welcome bonus. Get 100% recharge bonus on first deposit.',
    url: 'https://teenpattigoldgame.com.pk/blog/how-to-claim-welcome-bonus-teen-patti-gold',
    siteName: 'Teen Patti Gold',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-02-24T00:00:00Z',
    authors: ['Teen Patti Gold Team'],
    images: [{ url: 'https://teenpattigoldgame.com.pk/opengraph-image', width: 1200, height: 630, alt: 'How to Claim Teen Patti Gold Welcome Bonus 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Claim Your Welcome Bonus on Teen Patti Gold (2026 Guide)',
    description: 'Step-by-step guide to claim your Teen Patti Gold welcome bonus. Get 100% recharge bonus on first deposit.',
    images: ['https://teenpattigoldgame.com.pk/opengraph-image'],
  },
};

export default function HowToClaimWelcomeBonusPage() {
  const schemaData = getBlogPostingSchema({
    url: 'https://teenpattigoldgame.com.pk/blog/how-to-claim-welcome-bonus-teen-patti-gold',
    headline: 'How to Claim Your Welcome Bonus on Teen Patti Gold (2026 Guide)',
    description: 'Step-by-step guide to claim your Teen Patti Gold welcome bonus in 2026. Get 100% recharge bonus on first deposit. Learn eligibility, process, and tips.',
    datePublished: '2026-01-25T09:00:00+05:00',
    dateModified: '2026-03-27T12:00:00+05:00',
    image: ['https://teenpattigoldgame.com.pk/teen-patti-gold-deposit-money.webp', 'https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp'],
    keywords: 'teen patti gold welcome bonus, teen patti gold first deposit bonus, claim bonus teen patti gold, teen patti gold 100% bonus',
    wordCount: 900,
  });

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Claim Your Welcome Bonus on Teen Patti Gold',
    description: 'Step-by-step guide to claim your Teen Patti Gold welcome bonus on first deposit.',
    totalTime: 'PT5M',
    step: [
      { '@type': 'HowToStep', name: 'Download and Register', text: 'Download Teen Patti Gold app and create a new account with your mobile number.' },
      { '@type': 'HowToStep', name: 'Make First Deposit', text: 'Go to Wallet, tap Deposit, and add funds using JazzCash or EasyPaisa.' },
      { '@type': 'HowToStep', name: 'Receive Bonus', text: 'The 100% welcome bonus is credited automatically to your account.' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
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
              How to Claim Your Welcome Bonus on <Link href="/" className="text-accent">Teen Patti Gold</Link> (2026 Guide)
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <span>📅 February 24, 2026</span>
              <span>•</span>
              <span>⏱️ 6 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Teen Patti Gold</strong> offers a 100% recharge bonus for all new players on their first deposit. This 2026 guide explains exactly how to claim your welcome bonus, eligibility requirements, and tips to maximize your bonus.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Step-by-Step: How to Claim Welcome Bonus</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0A1029] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">1</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">Download and Register</h3>
                      <p className="text-gray-300">Download the Teen Patti Gold app from the <Link href="/download-teen-patti-gold" className="text-accent hover:underline">official download page</Link>. Create a new account with your mobile number. Only new, fresh users are eligible for the welcome bonus.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0A1029] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">2</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">Make Your First Deposit</h3>
                      <p className="text-gray-300">Open the app, go to Wallet, and tap Deposit. Choose JazzCash or EasyPaisa. Enter the amount (minimum 100 PKR). Complete the transaction. The welcome bonus is credited automatically. Need more detail? Use our <Link href="/deposit-money-in-teen-patti-gold" className="text-accent hover:underline">full deposit guide</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0A1029] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">3</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">Start Playing</h3>
                      <p className="text-gray-300">Your balance will show deposit + bonus. Use it to play Teen Patti, Rummy, Dragon Tiger, or any game. Win real money and cash out via JazzCash, EasyPaisa, or bank—see <Link href="/withdraw-money-from-teen-patti-gold" className="text-accent hover:underline">how to withdraw</Link> and <Link href="/blog/how-to-play-teen-patti-gold" className="text-accent hover:underline">gameplay basics</Link> if you are new.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Welcome Bonus Table (2026)</h2>
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
                <p className="text-gray-300 mt-4">3Patti offers 100% recharge bonus for new users on first deposit. Deposit 1000 PKR, get 1000 PKR bonus—double your playing power!</p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Tips to Maximize Your Welcome Bonus</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><span className="text-[#FFA500] mr-2">•</span> Use the bonus on low-stakes tables first to learn the games</li>
                  <li className="flex items-start"><span className="text-[#FFA500] mr-2">•</span> Combine with daily login rewards for extra chips</li>
                  <li className="flex items-start"><span className="text-[#FFA500] mr-2">•</span> Read game rules before playing to avoid mistakes</li>
                  <li className="flex items-start"><span className="text-[#FFA500] mr-2">•</span> Withdraw winnings when you reach your target</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#FFA500] to-[#f97316] rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Claim Your Bonus?</h2>
                <p className="text-white text-lg mb-6">Download Teen Patti Gold, register, make your first deposit, and get 100% welcome bonus. Start playing and earning today!</p>
                <Link href="/download-teen-patti-gold" className="inline-block bg-white text-[#FFA500] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Download Now</Link>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4 text-white">Related Guides</h2>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/blog/create-teen-patti-gold-account-and-login" className="text-accent hover:underline">→ How to Create a Teen Patti Gold Account and Login</Link></li>
                  <li><Link href="/blog/latest-offers-rewards-teen-patti-gold" className="text-accent hover:underline">→ Latest Offers and Rewards on Teen Patti Gold</Link></li>
                  <li><Link href="/deposit-money-in-teen-patti-gold" className="text-accent hover:underline">→ How to Deposit Money in Teen Patti Gold</Link></li>
                  <li><Link href="/blog/how-to-earn-money-from-teen-patti-gold" className="text-accent hover:underline">→ How to Earn Money from Teen Patti Gold</Link></li>
                  <li><Link href="/blog/is-teen-patti-gold-real-or-fake" className="text-accent hover:underline">→ Is Teen Patti Gold Real or Fake?</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
