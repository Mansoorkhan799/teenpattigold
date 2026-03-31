import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPostingSchema } from '@/lib/blog-schema';

export const metadata: Metadata = {
  title: {
    absolute: 'How to Play Teen Patti Gold Pakistan?',
  },
  description:
    'How to play Teen Patti Gold in Pakistan: rules, hands & table etiquette. 2026 gameplay guide — learn ranks, blinds and side bets before you risk real chips.',
  keywords: ['how to play teen patti gold', 'teen patti gold rules', 'teen patti gold gameplay', 'teen patti gold strategy', 'how to win teen patti gold', 'teen patti gold tips'],
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
    canonical: "https://teenpattigoldgame.com.pk/blog/how-to-play-teen-patti-gold",
  },
  openGraph: {
    title: 'How to Play Teen Patti Gold Pakistan?',
    description:
      'How to play Teen Patti Gold in Pakistan: rules, hands & table etiquette. 2026 gameplay guide — learn ranks, blinds and side bets before you risk real chips.',
    url: 'https://teenpattigoldgame.com.pk/blog/how-to-play-teen-patti-gold',
    siteName: 'Teen Patti Gold',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-01-11T00:00:00Z',
    authors: ['Teen Patti Gold Team'],
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'How to Play Teen Patti Gold Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Play Teen Patti Gold Pakistan?',
    description:
      'How to play Teen Patti Gold in Pakistan: rules, hands & table etiquette. 2026 gameplay guide — learn ranks, blinds and side bets before you risk real chips.',
    images: ['https://teenpattigoldgame.com.pk/opengraph-image'],
  }
};

export default function HowToPlay() {
  const schemaData = getBlogPostingSchema({
    url: 'https://teenpattigoldgame.com.pk/blog/how-to-play-teen-patti-gold',
    headline: 'How to Play Teen Patti Gold Pakistan?',
    description:
      'How to play Teen Patti Gold in Pakistan: rules, hands & table etiquette. 2026 gameplay guide — learn ranks, blinds and side bets before you risk real chips.',
    datePublished: '2026-01-11T09:00:00+05:00',
    dateModified: '2026-03-27T12:00:00+05:00',
    image: ['https://teenpattigoldgame.com.pk/teen-patti-gold-game.webp', 'https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp'],
    keywords: 'how to play teen patti gold, teen patti gold rules, teen patti gold gameplay, teen patti gold strategy, teen patti gold tips for beginners',
    wordCount: 1800,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <div className="min-h-screen bg-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <Link href="/blog" className="text-accent hover:text-accent font-semibold inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              How to Play <Link href="/" className="text-accent hover:text-accent">Teen Patti Gold</Link> Pakistan?
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
              <span>📅 January 11, 2026</span>
              <span>•</span>
              <span>⏱️ 10 min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Teen Patti Gold</strong> is one of the most popular card games in Pakistan. This comprehensive guide will teach you everything you need to know about playing Teen Patti, from basic rules to advanced strategies that can help you win real money. Once you are comfortable with the rules, <Link href="/blog/how-to-earn-money-from-teen-patti-gold" className="text-accent hover:underline">earning strategies</Link> and <Link href="/blog/tips-to-win-big-in-teen-patti-gold" className="text-accent hover:underline">expert tips</Link> help you apply them in the app.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Popular games to try first in Teen Patti Gold</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The app has 30+ tables and modes. If you are new, start with one or two simple games, then move to skill titles as you learn bankroll and timing.
                </p>
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <strong className="text-[#FFA500]">Teen Patti</strong> — The main game this guide covers. Best for learning hand rankings, blinds, and table flow before you raise stakes.
                  </li>
                  <li>
                    <strong className="text-[#FFA500]">Dragon vs Tiger</strong> — Fast rounds and simple choices; useful to get comfortable with chips and the lobby without complex rules.
                  </li>
                  <li>
                    <strong className="text-[#FFA500]">Rummy</strong> — More skill and longer games; good once you want strategy beyond pure luck.
                  </li>
                  <li>
                    <strong className="text-[#FFA500]">Andar Bahar</strong> — Easy to follow (pick a side); low mental load while you learn how deposits and tables work.
                  </li>
                  <li>
                    <strong className="text-[#FFA500]">Poker</strong> — If you already know hold&apos;em-style play, it transfers well; otherwise finish Teen Patti basics first.
                  </li>
                </ul>
                <p className="text-gray-400 text-sm mt-6 mb-0">
                  Browse the full list on the <Link href="/#best-games" className="text-accent hover:underline">homepage games section</Link> or open the app lobby and filter by multiplayer or skill games.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">What is Teen Patti?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Teen Patti, also known as "3 Patti" or "Flash," is a traditional Indian card game similar to poker. It's played with a standard 52-card deck, and the goal is to have the best three-card hand.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  In <strong className="text-white">Teen Patti Gold</strong>, you can play this classic game online against real players and earn real money when you win. New users should also read <Link href="/blog/how-to-use-teen-patti-gold-app-in-pakistan" className="text-accent hover:underline">how to use the app in Pakistan</Link> for wallet, tables, and safety basics.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Basic Rules of Teen Patti</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-accent">Card Rankings</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">The hand rankings from highest to lowest are:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                      <li><strong>Trail (Three of a Kind):</strong> Three cards of the same rank - highest wins</li>
                      <li><strong>Pure Sequence (Straight Flush):</strong> Three consecutive cards of the same suit</li>
                      <li><strong>Sequence (Straight):</strong> Three consecutive cards, not all same suit</li>
                      <li><strong>Color (Flush):</strong> Three cards of the same suit, not in sequence</li>
                      <li><strong>Pair:</strong> Two cards of the same rank</li>
                      <li><strong>High Card:</strong> Highest card wins if no other combination</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-accent">How to Play</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                      <li>Each player receives 3 cards face down</li>
                      <li>Players place bets based on their confidence in their hand</li>
                      <li>You can "See" (view cards) or "Blind" (play without seeing)</li>
                      <li>Blind players bet half the amount of seen players</li>
                      <li>Players can "Pack" (fold) or "Show" (reveal cards)</li>
                      <li>The player with the best hand wins the pot</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Gameplay Strategies</h2>
                
                <div className="space-y-4">
                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-accent">1. Start with Small Bets</h3>
                    <p className="text-gray-300 leading-relaxed">
                      When you're new, start with low-stakes tables. This helps you learn the game without risking too much money.
                    </p>
                  </div>

                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-accent">2. Play Blind Strategically</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Playing blind allows you to bet at half the rate. Use this when you want to stay in the game but aren't confident about your hand.
                    </p>
                  </div>

                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-accent">3. Know When to Fold</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Don't be afraid to pack (fold) if you have a weak hand. It's better to lose a small bet than to lose everything chasing a bad hand.
                    </p>
                  </div>

                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-accent">4. Observe Other Players</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Watch how other players bet. Aggressive betting often indicates a strong hand, while hesitation might mean weakness.
                    </p>
                  </div>

                  <div className="bg-[#0A1029] rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 text-accent">5. Manage Your Bankroll</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Set a budget for each session and stick to it. Never bet more than you can afford to lose.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-white">Advanced Tips</h2>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  <li>Learn to read your opponents' betting patterns</li>
                  <li>Use position advantage - players who act later have more information</li>
                  <li>Bluff occasionally, but not too often</li>
                  <li>Keep track of cards that have been played (if possible)</li>
                  <li>Practice regularly to improve your skills</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#FFA500] to-[#f97316] rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Play?</h2>
                <p className="text-white text-lg mb-6">
                  Now that you know how to play Teen Patti, download the app and start playing to earn real money. Grab the APK from our <Link href="/download-teen-patti-gold" className="underline font-semibold">official download page</Link> and create your account with the <Link href="/blog/create-teen-patti-gold-account-and-login" className="underline font-semibold">account setup guide</Link> if needed.
                </p>
                <Link 
                  href="/download-teen-patti-gold"
                  className="inline-block bg-white text-[#FFA500] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Download Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
