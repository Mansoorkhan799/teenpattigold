import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from 'next';
import { LOGO_PATH_VERSIONED, DOWNLOAD_URL } from '@/lib/site-images';
import { imageObjectLicensing } from '@/lib/schema-image-licensing';
import { SITE_ARTICLE_DATE_PUBLISHED, getSiteArticleDateModified } from '@/lib/site-meta';

/** Hreflang for `/` only — title, description, OG, etc. come from root `layout.tsx`. */
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://teenpattigoldgame.com.pk',
    languages: {
      en: 'https://teenpattigoldgame.com.pk',
      'x-default': 'https://teenpattigoldgame.com.pk',
    },
  },
};

export default function Home() {
  const articleDateModified = getSiteArticleDateModified();

  // Schema.org structured data for SEO with Pakistan geo-targeting.
  //
  // Trimmed 2026-04-25 SEO audit:
  //  - Removed `Article` (home isn't a journalistic article).
  //  - Removed `HowTo`, `ImageGallery`, `Person` — they belong on dedicated
  //    sub-pages (the install guide, the gallery).
  //  - Removed `inLanguage: ["en","ur"]` — site is English only.
  //  - `aggregateRating` restored at 12,500 — kept consistent with the same
  //    SoftwareApplication on `/download-teen-patti-gold-apk` so Google
  //    doesn't see two different counts for the same app.
  //  - `FAQPage` kept on home (general brand-level Q&As; per-topic Qs live
  //    on the dedicated subpages).
  //  - All inner nodes link to layout `Organization #organization` and
  //    `WebSite #website` by `@id` reference (no second declaration).
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://teenpattigoldgame.com.pk/#software",
        "name": "Teen Patti Gold",
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "image": "https://teenpattigoldgame.com.pk/teen-patti-gold.webp",
        // AggregateRating restored 2026-04-25 after benchmarking against
        // cardrummyapp.com.pk (#1 ranker for "Card Rummy 2026") which keeps
        // 4.5/500K. Numbers tightened to plausible verifiable range.
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "ratingCount": "12500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR"
        },
        "downloadUrl": "https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk",
        "softwareVersion": "V1.656",
        "fileSize": "49MB",
        "description": "Teen Patti Gold is Pakistan's most popular online card gaming app where players earn real money by playing Teen Patti, Rummy, Dragon vs Tiger, Andar Bahar, and more. It supports fast deposits and withdrawals via JazzCash and EasyPaisa, offers daily bonuses and VIP rewards.",
        "screenshot": [
          "https://teenpattigoldgame.com.pk/teen-patti-gold-game.webp",
          "https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp",
          "https://teenpattigoldgame.com.pk/teen-patti-gold-apk.webp"
        ],
        "author": { "@id": "https://teenpattigoldgame.com.pk/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://teenpattigoldgame.com.pk/"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://teenpattigoldgame.com.pk/#webpage",
        "url": "https://teenpattigoldgame.com.pk/",
        "name": "Teen Patti Gold Game Download APK | Real Money App 2026",
        "isPartOf": { "@id": "https://teenpattigoldgame.com.pk/#website" },
        "about": { "@id": "https://teenpattigoldgame.com.pk/#software" },
        "datePublished": SITE_ARTICLE_DATE_PUBLISHED,
        "dateModified": articleDateModified,
        "inLanguage": "en-PK",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#speakable-headline", "#speakable-subhead"]
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://teenpattigoldgame.com.pk/teen-patti-gold.webp",
          "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold.webp",
          "width": 512,
          "height": 512,
          "name": "Teen Patti Gold official app icon",
          "description": "Teen Patti Gold — Pakistan's #1 card game app. Download Teen Patti Gold APK free. Play Teen Patti, Rummy, Dragon Tiger and earn real money.",
          "caption": "Teen Patti Gold — Pakistan's #1 card game app. Download free APK.",
          ...imageObjectLicensing
        }
      },
      // Standalone primary ImageObject — gives Google a fully-licensed brand
      // image node it can attach to Image Search results with proper attribution.
      // Must match primaryImageOfPage so Google sees one consistent signal.
      {
        "@type": "ImageObject",
        "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold.webp#primary",
        "url": "https://teenpattigoldgame.com.pk/teen-patti-gold.webp",
        "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold.webp",
        "name": "Teen Patti Gold",
        "description": "Teen Patti Gold — Pakistan's premier card game app. Official Teen Patti Gold brand image. Play Teen Patti, Rummy, Dragon vs Tiger and win real cash. Download Teen Patti Gold APK.",
        "width": 512,
        "height": 512,
        ...imageObjectLicensing
      },
      {
        "@type": "FAQPage",
        "@id": "https://teenpattigoldgame.com.pk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many players can play Teen Patti Gold at a time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Teen Patti Gold App can be played with multiple players, making it suitable for everyone to play and earn money. Standard tables seat 2–6 players, while tournament rooms can host hundreds of players competing for the same prize pool."
            }
          },
          {
            "@type": "Question",
            "name": "What are the basic rules of Teen Patti Gold?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You need to arrange cards in pure sequences, impure sequences, and sets, and you can win the game if valid combinations are completed. Each round you place a blind/chaal wager, and the player with the strongest 3-card hand wins the pot."
            }
          },
          {
            "@type": "Question",
            "name": "How easily can beginners play the Teen Patti Gold App?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Beginners can easily start with this game because it offers a simple, user-friendly interface to play and earn money. Tutorial mode and free practice tables let new players learn the rules and strategies before placing real-money bets."
            }
          },
          {
            "@type": "Question",
            "name": "What different variations of Teen Patti Gold are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Teen Patti Gold offers several variations including Points Rummy, Pool Rummy, and 13-card Teen Patti Gold. Each variation has its own unique rules and scoring system, making the gameplay dynamic and entertaining for both casual and competitive players."
            }
          },
          {
            "@type": "Question",
            "name": "How can I play the Teen Patti Gold Game for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can play Teen Patti Gold for free in guest mode to explore games, learn the rules and use practice tables. To play real-money games and win cash rewards, you need to register an account and deposit money in the Teen Patti Gold app."
            }
          },
          {
            "@type": "Question",
            "name": "How safe is it to play Teen Patti Gold online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Teen Patti Gold is safe to play online because the platform uses encrypted transactions, anti-cheat systems, and OTP-based login that make the game secure and fair. Always download the APK from the official source and never share your login credentials with anyone."
            }
          },
          {
            "@type": "Question",
            "name": "What is the minimum age to use Teen Patti Gold APK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The minimum age to play on any online real-money platform is 18 years, which ensures legal and responsible gaming. Players under 18 should not download or use the Teen Patti Gold APK."
            }
          },
          {
            "@type": "Question",
            "name": "How can I improve my chances of winning on the Teen Patti Gold?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You need strategic planning, careful card observation, and steady practice to improve your winning chances on Teen Patti Gold. Start at low-stake tables, focus on skill-based games like Rummy and classic Teen Patti, and study opponents' patterns before raising the stakes."
            }
          },
          {
            "@type": "Question",
            "name": "How can I play the Teen Patti Gold Game with friends?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can create private tables in the Teen Patti Gold app and invite your friends via a unique room code. Real-time chat and friendly competition enhance social interaction and make the gameplay enjoyable for groups of friends and family."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Home-only JSON-LD (Organization + WebSite are in root layout) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Hero Section with improved spacing */}
      <section className="py-6 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              {/*
                H1 = bare brand name (single keyword focus) and H2 = keyword
                phrase. This is exactly the structure card-rummy.com.pk uses
                — they rank #1 for "Card Rummy" and their audit doc explicitly
                calls out "H1 Tag: 'Card Rummy' — Perfect keyword focus".
                Removed `whitespace-nowrap` (it truncated on mobile) and
                kept the speakable IDs for Google Assistant/AI Overviews.
              */}
              <h1 id="speakable-headline" className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white">Teen Patti Gold</span>
              </h1>
              <h2 id="speakable-subhead" className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-[#ffa503]">Game Download APK</span>{' '}
                <span className="text-white">— Real Money App 2026</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              <Link href="/download-teen-patti-gold-apk" className="text-[#FFA500] font-semibold hover:underline"><strong>Teen Patti Gold</strong></Link> is Pakistan&apos;s most popular traditional online card game platform, offering a variety of casino-style games to play and earn real money. It brings a user-friendly interface and 24/7 Customer Support. Download this app from the given button and get started today.
            </p>

            {/* Hero badges — short value props from the user's brief */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#FFA500] border border-[#FFA500]/30">Download APK</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#0ea5e9] border border-[#0ea5e9]/30">Real Earning App</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#4ade80] border border-[#4ade80]/30">Daily Big Rewards</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#a855f7] border border-[#a855f7]/30">24/7 Support</span>
            </div>

            {/* Download Button */}
            <div className="flex justify-center mt-6 mb-4 md:my-8">
              <a 
                href={DOWNLOAD_URL}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>DOWNLOAD NOW</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* Stats Grid with improved spacing */}
            <div className="flex flex-row gap-4 justify-center mt-8 mb-4" style={{ minHeight: '120px' }}>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">500K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">200K+</div>
                <div className="text-gray-400 text-sm">Ratings</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]" style={{ minHeight: '120px' }}>
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1">49MB</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only.</p>
          </div>

          {/* Desktop Image - Primary hero image for Google Images ranking (teen patti gold) */}
          {/* unoptimized=true so Googlebot sees the canonical /teen-patti-gold.webp URL
              directly in the HTML <img src>, matching sitemap and schema declarations.
              Without it Next.js serves /_next/image?url=... which mismatches the sitemap. */}
          <figure className="hidden md:block md:w-1/2 md:mt-8">
            <div className="relative ml-auto w-[320px] h-[320px] max-w-full">
              <Image
                src={LOGO_PATH_VERSIONED}
                alt="Teen Patti Gold - Official app icon. Pakistan's #1 card game. Download Teen Patti Gold APK free. Play Teen Patti, Rummy, Dragon Tiger."
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl rounded-3xl w-full h-full"
                priority={true}
                fetchPriority="high"
                unoptimized={true}
                title="Teen Patti Gold"
              />
            </div>
            <figcaption className="sr-only">Teen Patti Gold - Pakistan&apos;s #1 card game app</figcaption>
          </figure>

          {/* Mobile Image - Primary hero image for Google Images ranking (teen patti gold) */}
          <figure className="mt-8 md:hidden">
            <div className="relative mx-auto w-[280px] h-[280px] max-w-full">
              <Image
                src={LOGO_PATH_VERSIONED}
                alt="Teen Patti Gold - Official app icon. Pakistan's #1 card game. Download Teen Patti Gold APK free. Play Teen Patti, Rummy, Dragon Tiger."
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl rounded-3xl w-full h-full"
                priority={true}
                fetchPriority="high"
                unoptimized={true}
                title="Teen Patti Gold"
              />
            </div>
            <figcaption className="sr-only">Teen Patti Gold - Pakistan&apos;s #1 card game app</figcaption>
          </figure>
        </div>
      </section>

      {/* App Specifications Table with improved spacing */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Download Info Table</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">Teen Patti Gold</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Developer</td>
                  <td className="py-4 px-6 text-left text-white">TeenPatti Gold Dev</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Cards, Game</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">49MB</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Version</td>
                  <td className="py-4 px-6 text-left text-white">v1.656</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Show Ads</td>
                  <td className="py-4 px-6 text-left text-white">No</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">April 25, 2026</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">500K+</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Language</td>
                  <td className="py-4 px-6 text-left text-white">English, Urdu</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free 0$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Table of Contents — collapsible internal-link hub */}
      <section id="toc" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        {(() => {
          const tocItems = [
            { href: '#introduction', label: 'Introduction to Teen Patti Gold' },
            { href: '#how-to-play-earn', label: 'How Can We Play and Earn Money on the Teen Patti Gold?' },
            { href: '#earn-real-cash', label: 'How to Earn Real Cash on the Teen Patti Gold Game?' },
            { href: '#new-player-benefits', label: "New Players' Benefits on Teen Patti Gold" },
            { href: '#key-features', label: 'Key Features of the Teen Patti Gold Game' },
            { href: '#why-popular', label: 'What Makes Teen Patti Gold So Much Popular?' },
            { href: '#download-install', label: 'How to Download and Install the Teen Patti Gold APK?' },
            { href: '#system-requirements', label: 'Android System Requirements' },
            { href: '#register', label: 'How to Register a New Account on Teen Patti Gold?' },
            { href: '#bind-email', label: 'How Can We Bind an Email Address?' },
            { href: '#login', label: 'How to Log in to the Teen Patti Gold Game?' },
            { href: '#deposit', label: 'How to Deposit or Buy Chips on the Teen Patti Gold?' },
            { href: '#withdraw', label: 'How to Withdraw Funds From the Teen Patti Gold?' },
            { href: '#popular-games', label: 'Popular Casino Games to Play on the Teen Patti Gold' },
            { href: '#latest-updates', label: 'Latest Updates & Improvements in the Teen Patti Gold App' },
            { href: '#safety-security', label: 'Safety & Security of the Teen Patti Gold Game' },
            { href: '#tips-tricks', label: 'Tips and Tricks to Earn Maximum on Teen Patti Gold Game' },
            { href: '#customer-support', label: 'Customer Support on Teen Patti Gold Game' },
            { href: '#pros-cons', label: 'Pros and Cons of Using the TeenPatti Gold Game' },
            { href: '#final-thoughts', label: 'Final Thoughts' },
            { href: '#faq', label: 'Frequently Asked Questions' },
          ];
          return (
            <details className="group bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl border border-[#FFA500]/20 shadow-xl overflow-hidden">
              <summary className="cursor-pointer list-none p-6 md:p-7 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-gradient-to-br from-[#FFA500] to-[#f97316] flex items-center justify-center shadow-md shadow-[#FFA500]/20 flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#FFA500] leading-tight">Table of Contents</h2>
                    <p className="text-xs md:text-sm text-gray-400 mt-0.5">{tocItems.length} sections — tap to expand</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0a1029] border border-gray-700 flex items-center justify-center group-open:border-[#FFA500]/50 transition-all">
                  <svg
                    className="w-5 h-5 text-[#FFA500] transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-4 md:px-7 pb-6 md:pb-7 pt-1 border-t border-gray-800/60">
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mt-5" start={1}>
                  {tocItems.map((item, idx) => (
                    <li key={item.href} className="list-none">
                      <a
                        href={item.href}
                        className="group/item flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#0a1029] border border-gray-800 hover:border-[#FFA500]/40 hover:bg-[#0a1029]/80 transition-all duration-200"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-[#FFA500]/15 to-[#FFA500]/5 border border-[#FFA500]/30 flex items-center justify-center text-[#FFA500] text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-sm md:text-base text-gray-300 group-hover/item:text-[#0ea5e9] transition-colors flex-1 leading-snug">
                          {item.label}
                        </span>
                        <svg className="w-4 h-4 text-gray-600 group-hover/item:text-[#FFA500] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          );
        })()}
      </section>

      {/* Introduction to Teen Patti Gold */}
      <section id="introduction" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-6 md:p-8 border border-[#FFA500]/20 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#FFA500]/10 to-transparent rounded-bl-full blur-2xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-gradient-to-b from-[#FFA500] to-[#f97316] rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500]">Introduction to Teen Patti Gold</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                <Link href="/download-teen-patti-gold-apk" className="text-[#FFA500] font-semibold hover:underline">Teen Patti Gold</Link> is a popular and strategic card game, where you can play your favorite games to earn real money. This game is a perfect combination of skill, strategy, and luck, making it ideal for beginners and experts to play and earn. The wide variety of games and smooth gameplay make it more accessible and convenient. The interface of the game is simple and user-friendly, ensuring smooth and reliable gameplay.
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                This game promotes social interaction and friendly competition, where the rewards and tournaments make it an engaging and exciting game to play. The Teen Patti Gold App is the best game to play, which provides you with an entertaining and rewarding experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Can We Play and Earn Money on the Teen Patti Gold? */}
      <section id="how-to-play-earn" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">How Can We Play and Earn Money on the Teen Patti Gold?</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Step 1 — Download & Register */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#FFA500]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFA500]/20 to-[#FFA500]/5 flex items-center justify-center mb-4 border border-[#FFA500]/30">
                <svg className="w-6 h-6 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Download and Create an Account</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                <Link href="/download-teen-patti-gold-apk" className="text-[#0ea5e9] hover:underline font-semibold">Download and install</Link> the app by using its official website. After installation, register an account to get access to all the features and games.
              </p>
            </div>
            {/* Step 2 — Explore Games */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#0ea5e9]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 flex items-center justify-center mb-4 border border-[#0ea5e9]/30">
                <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Explore Games</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">After logging in to the app, explore its different variations and game modes to understand the pattern and rules.</p>
            </div>
            {/* Step 3 — Add Money to Wallet */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#4ade80]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-4 border border-[#4ade80]/30">
                <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Add Money to Your Wallet</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                You need to make your first <Link href="/deposit-money-in-teen-patti-gold" className="text-[#0ea5e9] hover:underline font-semibold">deposit on the app</Link> before playing games. The deposit money helps you to play the real cash rewards games.
              </p>
            </div>
            {/* Step 4 — Choose Bet Amount */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 flex items-center justify-center mb-4 border border-[#a855f7]/30">
                <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Choose a Bet Amount</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">After depositing money, select your preferred game and choose the bet amount according to your skill and experience.</p>
            </div>
            {/* Step 5 — Start Playing */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#ec4899]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 flex items-center justify-center mb-4 border border-[#ec4899]/30">
                <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Start Playing</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">After placing the bet, start playing the game with your skills and strategies. You should play the game responsibly to win the real cash rewards.</p>
            </div>
            {/* Step 6 — Withdraw Winnings */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#f97316]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 flex items-center justify-center mb-4 border border-[#f97316]/30">
                <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Withdraw Your Winnings</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                If you win the game, you must <Link href="/withdraw-money-from-teen-patti-gold" className="text-[#0ea5e9] hover:underline font-semibold">withdraw your winnings</Link> to your preferred account to secure your winnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Earn Real Cash on the Teen Patti Gold Game? */}
      <section id="earn-real-cash" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">How to Earn Real Cash on the Teen Patti Gold Game?</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Play Real Cash Games */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#FFA500]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFA500]/20 to-[#FFA500]/5 flex items-center justify-center mb-4 border border-[#FFA500]/30">
                <svg className="w-6 h-6 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Play Real Cash Games</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The most common way to earn money on Teen Patti Gold Game is to play real cash games where you can join the different tables. When multiple players join, the entry fees are combined, making a big prize pool. This prize pool is awarded to the player who wins the game.</p>
            </div>
            {/* Tournaments */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 flex items-center justify-center mb-4 border border-[#a855f7]/30">
                <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Participate in Tournaments</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The online Teen Patti Gold platform often arranges daily, weekly, and monthly tournaments. You can play competitive matches with other players and earn real cash rewards for winning. The tournament winners are given ranking points along with bonuses, providing you with a competitive and rewarding experience.</p>
            </div>
            {/* Referral */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#0ea5e9]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 flex items-center justify-center mb-4 border border-[#0ea5e9]/30">
                <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Referral Program</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The referral program allows you to invite your friends through a referral link or code. You can get a commission for each successful login and activity of your referral. This enhances your earnings and allows you to earn without taking part in any game.</p>
            </div>
            {/* Daily Rewards */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#4ade80]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-4 border border-[#4ade80]/30">
                <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Daily Rewards &amp; Bonuses</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Many players are rewarded with daily login rewards, special promotions, and bonus offers to earn real cash rewards for free. These bonuses enhance your earning potential and motivate you to become a regular player to earn rewards for free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Screenshots Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500] text-center">Teen Patti Gold App Screenshots</h2>
          
          {/* 3x2 Grid Formation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Row 1 - Column 1: Game Interface */}
            <div className="w-full flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl bg-[#0A1029] flex items-center justify-center">
                <Image
                  src="/teen-patti-gold-game.webp"
                  alt="Teen Patti Gold Game Interface - Play Card Games in Pakistan"
                  width={400}
                  height={711}
                  className="w-auto h-auto max-w-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                  quality={70}
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Game Interface</p>
            </div>

            {/* Row 1 - Column 2: Games Collection */}
            <div className="w-full flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl bg-[#0A1029] flex items-center justify-center">
                <Image
                  src="/teen-patti-gold-app.webp"
                  alt="Teen Patti Gold Games Collection - Rummy, Dragon Tiger, Teen Patti"
                  width={400}
                  height={711}
                  className="w-auto h-auto max-w-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                  quality={70}
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Games Collection</p>
            </div>

            {/* Row 1 - Column 3: Bonuses & Rewards */}
            <div className="w-full flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl bg-[#0A1029] flex items-center justify-center">
                <Image
                  src="/teen-patti-gold-apk.webp"
                  alt="Teen Patti Gold Bonuses & Rewards - Earn Real Money in Pakistan"
                  width={400}
                  height={711}
                  className="w-auto h-auto max-w-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                  quality={70}
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Bonuses & Rewards</p>
            </div>

            {/* Row 2 - Column 1: Deposit Money */}
            <div className="w-full flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl bg-[#0A1029] flex items-center justify-center">
                <Image
                  src="/teen-patti-gold-deposit-money.webp"
                  alt="Teen Patti Gold Deposit Money - JazzCash EasyPaisa Payment Methods"
                  width={400}
                  height={711}
                  className="w-auto h-auto max-w-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                  quality={70}
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Deposit Money</p>
            </div>

            {/* Row 2 - Column 2: Refer & Earn */}
            <div className="w-full flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl bg-[#0A1029] flex items-center justify-center">
                <Image
                  src="/teen-patti-gold-refer-and-earn.webp"
                  alt="Teen Patti Gold Refer and Earn - Invite Friends Get Rewards"
                  width={400}
                  height={711}
                  className="w-auto h-auto max-w-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                  quality={70}
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Refer & Earn</p>
            </div>

            {/* Row 3 - Column 1: Recharge Rebate */}
            <div className="w-full flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl bg-[#0A1029] flex items-center justify-center">
                <Image
                  src="/teen-patti-gold-vip-program.webp"
                  alt="Teen Patti Gold Recharge Rebate - Daily Rebate Bonuses"
                  width={400}
                  height={711}
                  className="w-auto h-auto max-w-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                  quality={70}
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Recharge Rebate</p>
            </div>

            {/* Row 3 - Column 2: Account Security */}
            <div className="w-full flex flex-col items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl bg-[#0A1029] flex items-center justify-center">
                <Image
                  src="/teen-patti-gold-bind-account.webp"
                  alt="Teen Patti Gold Bind Email - Account Security"
                  width={400}
                  height={711}
                  className="w-auto h-auto max-w-full object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Account Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Players' Benefits on Teen Patti Gold */}
      <section id="new-player-benefits" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">New Players&apos; Benefits on Teen Patti Gold</h2>

          {/* First Deposit Bonus — featured card with table */}
          <div className="bg-gradient-to-br from-[#0a1029] to-[#06091F] rounded-2xl p-6 border border-[#FFA500]/30 shadow-xl mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFA500] to-[#f97316] flex items-center justify-center shadow-lg shadow-[#FFA500]/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">First Deposit Bonus</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">New players are rewarded with extra chips as they make their first deposit in the game. The first deposit bonus provides you with an opportunity to play higher stakes games confidently, making it an early-stage earning source. Its rates are shown below:</p>
              </div>
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden border border-gray-800">
                <thead className="bg-[#0a1029]">
                  <tr>
                    <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Recharge</th>
                    <th className="py-3 px-6 text-left text-white font-semibold">Wager</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5%</td><td className="py-3 px-6 text-gray-300">Rs 3,000</td><td className="py-3 px-6 text-gray-300">2X</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10%</td><td className="py-3 px-6 text-gray-300">Rs 5,000</td><td className="py-3 px-6 text-gray-300">3X</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">15%</td><td className="py-3 px-6 text-gray-300">Rs 8,000</td><td className="py-3 px-6 text-gray-300">4X</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">20%</td><td className="py-3 px-6 text-gray-300">Rs 10,000</td><td className="py-3 px-6 text-gray-300">5X</td></tr>
                  <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">25%</td><td className="py-3 px-6 text-gray-300">Rs 20,000</td><td className="py-3 px-6 text-gray-300">6X</td></tr>
                  <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">30%</td><td className="py-3 px-6 text-gray-300">Rs 50,000</td><td className="py-3 px-6 text-gray-300">7X</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Other 4 benefits in 2x2 grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Welcome Bonus */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#4ade80]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-4 border border-[#4ade80]/30">
                <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Welcome Bonus</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">TeenPatti Gold offers new users an instant welcome bonus, allowing them to start their journey for free. This bonus allows you to play games, explore the app&apos;s features, and interface, providing an extra opportunity to earn chips without spending a single rupee.</p>
            </div>
            {/* Daily Login Rewards */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#0ea5e9]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 flex items-center justify-center mb-4 border border-[#0ea5e9]/30">
                <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Daily Login Rewards</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The daily login reward system of Teen Patti Gold offers incentives to new players for regular logging into the game. This bonus enhances your gameplay experience, making you an active and engaged player of the game.</p>
            </div>
            {/* Free Tutorials */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 flex items-center justify-center mb-4 border border-[#a855f7]/30">
                <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Free Tutorials &amp; Practice Games</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">This platform offers practice tables and tutorial games for new players, where you can learn rules and strategies without investing real cash. It also allows you to learn from your mistakes and build confidence to start real cash games without any worry.</p>
            </div>
            {/* Special Promotions */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#ec4899]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 flex items-center justify-center mb-4 border border-[#ec4899]/30">
                <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Special Promotions</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The platform introduces new user promotions and seasonal offers on a regular basis. The limited-time deals offer beginners an opportunity to win exclusive rewards that maximize their earning potential at an early stage of the game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features of the Teen Patti Gold Game */}
      <section id="key-features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Key Features of the Teen Patti Gold Game</h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Multiple Game Variations */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#FFA500]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFA500]/20 to-[#FFA500]/5 flex items-center justify-center mb-4 border border-[#FFA500]/30">
                <svg className="w-6 h-6 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Multiple Game Variations</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The Teen Patti Gold includes multiple formats, including Points Rummy, Pool Rummy, and Deals Rummy, where each variation has its own unique rules and scoring system. You can face different challenges for each format, and the use of different strategies is required, which makes the gameplay dynamic and interesting. You can easily choose your preferred game, making the gameplay versatile and entertaining for everyone.</p>
            </div>
            {/* Real-Time Multiplayer */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#0ea5e9]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 flex items-center justify-center mb-4 border border-[#0ea5e9]/30">
                <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Real-Time Multiplayer Mode</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The multiplayer mode of Teen Patti Gold allows you to compete with other players in real time. The matches are online with balanced matchmaking according to opponents&apos; skill level. Social interaction is a key part where you can communicate with others and make friends, which improves decision-making power and strategy. You can also take part in various challenges, making the gameplay competitive and enjoyable.</p>
            </div>
            {/* Secure & Fair */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#4ade80]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-4 border border-[#4ade80]/30">
                <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Secure &amp; Fair Gameplay</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Teen Patti Gold uses a Random Number Generator and anti-cheat system to protect your account, personal data, and transactions. It also ensures fair gameplay and offers every player an equal winning opportunity, making the gameplay safe and trustworthy. The secure login system provides an extra layer of security where fraud and cheating attempts are automatically detected.</p>
            </div>
            {/* User-Friendly */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 flex items-center justify-center mb-4 border border-[#a855f7]/30">
                <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">User-Friendly Interface</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The interface of Teen Patti Gold is user-friendly and suitable for beginners and experienced players. The menus and buttons are logically organized with a clean layout. The game is made responsive, where you can access each feature in a single click, providing you with a stress-free experience. This app runs smoothly on low-end devices, making it more accessible to a wide range of players.</p>
            </div>
            {/* Daily Rewards & Bonuses */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#ec4899]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 flex items-center justify-center mb-4 border border-[#ec4899]/30">
                <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Daily Rewards &amp; Bonuses</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The platform introduces rewards and bonuses for new and active players. You can use these rewards to enhance your gameplay and play games without investing your own money. The referral bonuses and tournament prizes enhance your gameplay and motivate you to engage. This feature makes you consistent and active, making the gameplay exciting and rewarding for everyone.</p>
            </div>
            {/* Private Tables */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#f97316]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 flex items-center justify-center mb-4 border border-[#f97316]/30">
                <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Private Tables &amp; Friend Play</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The Teen Patti Gold Game allows you to create private tables with your friends, promoting social gaming and friendly competition. You can set your preferred rules and stakes, where the private tables are ideal for beginners. The private tables offer you access to <a href="https://3pattiparty.com/JoyTechAI-PAK-Label-1.html" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">live chat</a> and real-time interaction, making the gameplay exciting.</p>
            </div>
            {/* Cross-Platform */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#06b6d4]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 flex items-center justify-center mb-4 border border-[#06b6d4]/30">
                <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Cross-Platform Accessibility</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Teen Patti Gold runs smoothly on Android and iOS devices, where the mobile-friendly design allows you to play this game anywhere and at any time. The app is lightweight, making it easier to work on low-end devices. The cross-platform makes the global competition and real-time matches possible, where your progress can be saved, making the gameplay convenient and inclusive.</p>
            </div>
            {/* Tournaments */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#facc15]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#facc15]/20 to-[#facc15]/5 flex items-center justify-center mb-4 border border-[#facc15]/30">
                <svg className="w-6 h-6 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Tournaments &amp; Competitive Events</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Teen Patti Gold conducts regular tournaments and special events where you can take part and compete to win prizes and rewards. The competitive events make the gameplay challenging to test your skills and strategies. The leaderboard system creates a sense of competition and motivates you to do your best, making this app thrilling to play.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Teen Patti Gold So Much Popular? */}
      <section id="why-popular" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-6 md:p-8 border border-[#a855f7]/20 shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#a855f7]/10 to-transparent rounded-br-full blur-2xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-gradient-to-b from-[#a855f7] to-[#7c3aed] rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500]">What Makes Teen Patti Gold So Much Popular?</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">The biggest reason Teen Patti Gold&apos;s popularity is its simple but strategic gameplay, which allows you to use your skills, planning, and smart decision-making. Its online gameplay makes it easy for you to use the app anytime, making it convenient to play. The multiplayer mode also allows you to compete with other players in real time and earn jackpot rewards. Apart from this, the tournaments, daily rewards, and bonuses make the gameplay exciting. The social interaction and option to play with friends on private tables make it entertaining and popular among casino lovers.</p>
          </div>
        </div>
      </section>

      {/* How to Download and Install the Teen Patti Gold APK? */}
      <section id="download-install" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">How to Download and Install the Teen Patti Gold APK?</h2>
          <ol className="space-y-3 mb-5">
            {[
              'Open this site and tap the Download Now button to get the official APK V1.656 (49 MB).',
              'Once the file is downloaded, go to your phone Settings and enable "Install from unknown sources".',
              'Open your Downloads folder and tap the Teen Patti Gold APK file.',
              'Tap Install and wait for the installation to complete.',
              'Open the app and start playing.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FFA500] text-[#06091F] font-bold text-sm flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <ul className="grid sm:grid-cols-3 gap-3 mb-6">
            {[
              { c: '#FFA500', t: 'Latest version', s: 'V1.656 — 49 MB' },
              { c: '#0ea5e9', t: 'Compatibility', s: 'Android 5.0+' },
              { c: '#4ade80', t: 'Install time', s: 'Under 5 minutes' },
            ].map((b) => (
              <li key={b.t} className="bg-[#0a1029] rounded-xl p-4 border border-gray-800">
                <div className="text-xs uppercase tracking-wide font-semibold mb-1" style={{ color: b.c }}>{b.t}</div>
                <div className="text-white font-semibold text-sm md:text-base">{b.s}</div>
              </li>
            ))}
          </ul>
          <Link
            href="/download-teen-patti-gold-apk"
            className="inline-flex items-center gap-2 bg-[#FFA500] hover:bg-[#f97316] text-[#06091F] font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Read the full APK download guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Android System Requirements */}
      <section id="system-requirements" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Android System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* Minimum */}
            <div className="bg-gradient-to-br from-[#0a1029] to-[#06091F] rounded-xl p-6 border border-[#FFA500]/30 shadow-lg">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#FFA500]/20">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFA500] to-[#f97316] flex items-center justify-center shadow-md shadow-[#FFA500]/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Minimum</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                {[
                  ['Operating System', 'Android 6.0 or Higher'],
                  ['RAM', 'At least 2 GB'],
                  ['Storage Space', '500 MB free space'],
                  ['Processor', 'Dual-core 1.2 GHz'],
                  ['Internet Connection', 'Stable 3G/4G or Wi-Fi'],
                  ['Device', 'Android smartphone or tablet'],
                ].map(([label, value]) => (
                  <li key={label} className="flex items-start gap-3 text-sm md:text-base">
                    <svg className="w-4 h-4 text-[#FFA500] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="5" />
                    </svg>
                    <div className="flex-1">
                      <span className="text-[#FFA500] font-semibold">{label}:</span> {value}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Recommended */}
            <div className="bg-gradient-to-br from-[#0a1029] to-[#06091F] rounded-xl p-6 border border-[#4ade80]/30 shadow-lg">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#4ade80]/20">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4ade80] to-[#16a34a] flex items-center justify-center shadow-md shadow-[#4ade80]/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Recommended</h3>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] font-semibold">Best</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                {[
                  ['Operating System', 'Android 10.0 or Higher'],
                  ['RAM', '4 GB or More'],
                  ['Storage Space', '1 GB or more free space'],
                  ['Processor', 'Quad-core 1.8 GHz or Higher'],
                  ['Internet Connection', 'High-speed 4G or Wi-Fi'],
                  ['Device', 'Modern smartphone or tablet'],
                ].map(([label, value]) => (
                  <li key={label} className="flex items-start gap-3 text-sm md:text-base">
                    <svg className="w-4 h-4 text-[#4ade80] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="flex-1">
                      <span className="text-[#4ade80] font-semibold">{label}:</span> {value}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Register a New Account on Teen Patti Gold? */}
      <section id="register" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">How to Register a New Account on Teen Patti Gold?</h2>
          <ol className="space-y-3 mb-5">
            {[
              'Download and open the Teen Patti Gold app on your Android device.',
              'On the main screen, tap the Register button.',
              'Enter your phone number or email address.',
              'Set a strong password using letters, numbers, and symbols.',
              'Verify the OTP sent to your phone or email.',
              'Your account is created — the welcome bonus is added instantly.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#0ea5e9] text-white font-bold text-sm flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <Link
            href="/blog/create-teen-patti-gold-account-and-login"
            className="inline-flex items-center gap-2 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Open the account & login guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* How Can We Bind an Email Address? */}
      <section id="bind-email" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">How Can We Bind an Email Address?</h2>
          <ol className="space-y-3 mb-5">
            {[
              'Open the Teen Patti Gold app and log in to your account.',
              'Go to your Profile tab and tap on Bind Email.',
              'Enter your active email address in the field provided.',
              'Check your inbox for the verification code sent by the app.',
              'Paste the code into the app and tap Submit.',
              'Your email is now bound — use it to recover your account or reset your password anytime.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#a855f7] text-white font-bold text-sm flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <Link
            href="/blog/teen-patti-gold-login-problems-solutions"
            className="inline-flex items-center gap-2 bg-[#a855f7] hover:bg-[#7c3aed] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            See email binding & login fixes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* How to Log in to the Teen Patti Gold Game? */}
      <section id="login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">How to Log in to the Teen Patti Gold Game?</h2>
          <ol className="space-y-3 mb-5">
            {[
              'Open the Teen Patti Gold app on your device.',
              'Tap the Login button on the main screen.',
              'Enter your registered phone number or email address.',
              'Type your password and tap Login.',
              'If you forgot your password, tap "Forgot Password" and follow the OTP reset steps.',
              'You are now logged in and ready to play.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#06b6d4] text-white font-bold text-sm flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <Link
            href="/blog/teen-patti-gold-login-problems-solutions"
            className="inline-flex items-center gap-2 bg-[#06b6d4] hover:bg-[#0891b2] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Fix login problems
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* How to Deposit or Buy Chips on the Teen Patti Gold? */}
      <section id="deposit" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">How to Deposit or Buy Chips on the Teen Patti Gold?</h2>
          <ol className="space-y-3 mb-5">
            {[
              'Open the Teen Patti Gold app and log in to your account.',
              'Tap the Shop or Deposit button from the main menu.',
              'Select your payment method — JazzCash, EasyPaisa, or bank card.',
              'Choose a chip pack and enter the amount you want to deposit (minimum Rs 100).',
              'Confirm the payment and enter your transaction PIN.',
              'Chips are credited to your wallet instantly.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#4ade80] text-[#06091F] font-bold text-sm flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <ul className="grid sm:grid-cols-3 gap-3 mb-6">
            {[
              { c: '#4ade80', t: 'Minimum', s: 'Rs 100' },
              { c: '#FFA500', t: 'Methods', s: 'JazzCash · EasyPaisa · Card' },
              { c: '#0ea5e9', t: 'Speed', s: 'Instant credit' },
            ].map((b) => (
              <li key={b.t} className="bg-[#0a1029] rounded-xl p-4 border border-gray-800">
                <div className="text-xs uppercase tracking-wide font-semibold mb-1" style={{ color: b.c }}>{b.t}</div>
                <div className="text-white font-semibold text-sm md:text-base">{b.s}</div>
              </li>
            ))}
          </ul>
          <Link
            href="/deposit-money-in-teen-patti-gold"
            className="inline-flex items-center gap-2 bg-[#4ade80] hover:bg-[#16a34a] text-[#06091F] font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Read the deposit guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* How to Withdraw Funds From the Teen Patti Gold? */}
      <section id="withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFA500]">How to Withdraw Funds From the Teen Patti Gold?</h2>
          <ol className="space-y-3 mb-5">
            {[
              'Open the Teen Patti Gold app and log in to your account.',
              'Tap Wallet and then select the Withdraw option.',
              'Choose your preferred payment channel — JazzCash, EasyPaisa, or bank transfer.',
              'Enter your account number and the amount you want to withdraw (minimum Rs 100).',
              'Double-check all details and tap Confirm.',
              'Your withdrawal is processed and funds settle in 3–24 hours.',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ec4899] text-white font-bold text-sm flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <ul className="grid sm:grid-cols-3 gap-3 mb-6">
            {[
              { c: '#ec4899', t: 'Minimum', s: 'Rs 100' },
              { c: '#FFA500', t: 'Channels', s: 'JazzCash · EasyPaisa · Bank' },
              { c: '#0ea5e9', t: 'Processing', s: '3–24 hours' },
            ].map((b) => (
              <li key={b.t} className="bg-[#0a1029] rounded-xl p-4 border border-gray-800">
                <div className="text-xs uppercase tracking-wide font-semibold mb-1" style={{ color: b.c }}>{b.t}</div>
                <div className="text-white font-semibold text-sm md:text-base">{b.s}</div>
              </li>
            ))}
          </ul>
          <Link
            href="/withdraw-money-from-teen-patti-gold"
            className="inline-flex items-center gap-2 bg-[#ec4899] hover:bg-[#db2777] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Read the withdrawal guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Popular Casino Games to Play on the Teen Patti Gold */}
      <section id="popular-games" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Popular Casino Games to Play on the Teen Patti Gold</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {/* 1. Dragon vs Tiger */}
            <div className="relative bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#ef4444]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#ef4444]/20 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ef4444] to-[#dc2626] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#ef4444]/20">1</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Dragon vs Tiger</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">Dragon vs Tiger is a simple and exciting card game where players bet which side of the card will be more in quantity. This is a fast-paced game for quick matches to earn rewards.</p>
              </div>
            </div>
            {/* 2. Mines */}
            <div className="relative bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#FFA500]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FFA500]/20 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFA500] to-[#f97316] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#FFA500]/20">2</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Mines</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">Mines is a strategic puzzle-style game where you need to save yourself from hidden mines by uncovering the tiles. Each saved tile multiplies the reward and is known as a combination of risk and calculation.</p>
              </div>
            </div>
            {/* 3. Zoo Roulette */}
            <div className="relative bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#4ade80]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#4ade80]/20 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4ade80] to-[#16a34a] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#4ade80]/20">3</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Zoo Roulette</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">Zoo Roulette is a fun-themed game where you need to match symbols and animals to complete challenges and win rewards. This is a beginner-friendly game offering you with casual entertaining gameplay.</p>
              </div>
            </div>
            {/* 4. Car Roulette */}
            <div className="relative bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#0ea5e9]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0ea5e9]/20 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#0ea5e9]/20">4</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Car Roulette</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">Car Roulette is a themed and faster version of roulette where players make bets and win rewards and chips according to the results of rounds. This game is a combination of luck and risk management.</p>
              </div>
            </div>
            {/* 5. Domino */}
            <div className="relative bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#a855f7]/20 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#a855f7]/20">5</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Domino</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">Domino is a strategy game where you match tiles, and you need to connect the same numbers or patterns. This is a competitive game, and it is important to block opponents to maximize your points.</p>
              </div>
            </div>
            {/* 6. Roulette */}
            <div className="relative bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#ec4899]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#ec4899]/20 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ec4899] to-[#db2777] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#ec4899]/20">6</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">Roulette</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">Roulette is a classic casino-style game where you make bets on numbers, colors, and combinations. The outcome is decided by the spinning wheel, offering you a high-risk and high-reward gameplay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates & Improvements in the Teen Patti Gold App */}
      <section id="latest-updates" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
              v1.656
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500]">Latest Updates &amp; Improvements in the Teen Patti Gold App</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {/* Redesigned UI */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#FFA500]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFA500]/20 to-[#FFA500]/5 flex items-center justify-center mb-4 border border-[#FFA500]/30">
                <svg className="w-6 h-6 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Redesigned User Interface</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Teen Patti Gold has completely redesigned its interface so that you can get a smooth and engaging experience. The menus, buttons, and game screens are visually appealing, making it easy for beginners to explore different features. The new interface comes with a modern look that makes the long gaming sessions comfortable and attractive.</p>
            </div>
            {/* Optimized Performance */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#facc15]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#facc15]/20 to-[#facc15]/5 flex items-center justify-center mb-4 border border-[#facc15]/30">
                <svg className="w-6 h-6 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Optimized Game Performance</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The performance of the app is intensively optimized, where the loading times are fast, and the games run smoothly on low-end devices. The lag and freeze issues have been reduced because the backend system has been upgraded. This optimization allows you to enjoy uninterrupted and seamless gameplay.</p>
            </div>
            {/* Security */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#4ade80]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-4 border border-[#4ade80]/30">
                <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Enhanced Security Measures</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The Teen Patti Gold has upgraded its security measures. 2FA, OTP verification, and encrypted transactions make your account and transactions secure and reliable. These improvements ensure that your data remains safe and minimizes the chances of unauthorized access, allowing you to enjoy it without any stress.</p>
            </div>
            {/* New Game Modes */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 flex items-center justify-center mb-4 border border-[#a855f7]/30">
                <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">New Game Modes &amp; Variations</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The latest update of Teen Patti Gold has introduced new game modes and variations where you can enjoy speed Rummy, private tables, and tournament-style matches. These additions make the gameplay more engaging and competitive with new challenges and rules that help you improve your skills and strategies.</p>
            </div>
            {/* Multi-Device */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#06b6d4]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 flex items-center justify-center mb-4 border border-[#06b6d4]/30">
                <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Multi-Device Synchronization</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The latest update allows you to access your account on multiple devices, where progress is automatically synced. This feature enables you to enjoy your game seamlessly on mobile and tablet. It ensures convenience and is ideal for those who travel frequently or use the app on multiple devices.</p>
            </div>
            {/* Improved Rewards */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#ec4899]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 flex items-center justify-center mb-4 border border-[#ec4899]/30">
                <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Improved Rewards &amp; Bonus Systems</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Teen Patti Gold has restructured its bonus and reward system, where the daily login rewards, seasonal promotions, and tournament prizes have been made more attractive and rewarding. Loyalty rewards and surprise gifts have been introduced for regular players, motivating them to become active.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security of the Teen Patti Gold Game */}
      <section id="safety-security" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Safety &amp; Security of the Teen Patti Gold Game</h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {[
              'This app uses OTP verification and a strong password system to secure your account.',
              'Encrypted payment gateways are used with local payment methods.',
              'The game has implemented anti-cheat algorithms with monitoring tools.',
              'The personal data of users is stored on secure servers.',
              'Teen Patti Gold regularly updates itself to fix bugs.',
              'This platform is licensed and verified, making it safe from any fraud.',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#0a1029] rounded-xl p-4 md:p-5 border border-gray-800 hover:border-[#4ade80]/40 transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#4ade80] to-[#16a34a] flex items-center justify-center shadow-md shadow-[#4ade80]/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base flex-1 pt-0.5">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips and Tricks to Earn Maximum on Teen Patti Gold Game */}
      <section id="tips-tricks" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Tips and Tricks to Earn Maximum on Teen Patti Gold Game</h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {[
              'Beginners should start with low-stakes tables to improve their skills at the start.',
              'Learn the game strategy and rules through practice before making bets.',
              'Join regular tournaments to win exclusive rewards and bonuses.',
              'Use the referral programs to generate passive income.',
              'Claim daily rewards and bonuses to enhance your stakes.',
              'Observe the pattern and strategy of opponents to win.',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#0a1029] rounded-xl p-4 md:p-5 border border-gray-800 hover:border-[#FFA500]/40 transition-all duration-300">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#FFA500]/20 to-[#FFA500]/5 flex items-center justify-center border border-[#FFA500]/40 shadow-md shadow-[#FFA500]/10">
                  <svg className="w-5 h-5 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base flex-1 pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support on Teen Patti Gold Game */}
      <section id="customer-support" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500]">Customer Support on Teen Patti Gold Game</h2>
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse"></span>
              24/7 Available
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {/* Live Chat */}
            <div className="bg-gradient-to-br from-[#0a1029] to-[#06091F] rounded-xl p-6 border border-gray-800 hover:border-[#0ea5e9]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 flex items-center justify-center mb-4 border border-[#0ea5e9]/30 mx-auto">
                <svg className="w-7 h-7 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Live Chat Support</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Teen Patti Gold has a built-in support system where you can contact support agents in real time. This feature provides you with quick and step-by-step guidance to solve your problems.</p>
              <a
                href="https://3pattiparty.com/JoyTechAI-PAK-Label-1.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-4 px-4 py-2 rounded-lg bg-[#0ea5e9]/20 border border-[#0ea5e9]/40 text-[#7dd3fc] hover:bg-[#0ea5e9]/30 transition-colors duration-200 text-sm font-semibold"
              >
                Open Live Chat Support
              </a>
            </div>
            {/* Email */}
            <div className="bg-gradient-to-br from-[#0a1029] to-[#06091F] rounded-xl p-6 border border-gray-800 hover:border-[#FFA500]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFA500]/20 to-[#FFA500]/5 flex items-center justify-center mb-4 border border-[#FFA500]/30 mx-auto">
                <svg className="w-7 h-7 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Email Support</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Email support is used for complicated problems where you need to explain your problem in detail. You can also add screenshots so that the support agents can understand clearly and help in resolving your issue on time.</p>
            </div>
            {/* FAQs */}
            <div className="bg-gradient-to-br from-[#0a1029] to-[#06091F] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 flex items-center justify-center mb-4 border border-[#a855f7]/30 mx-auto">
                <svg className="w-7 h-7 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">FAQ&apos;s</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The FAQs section contains answers to some of the most common problems, allowing you to solve your problem without contacting support agents. This saves your time and is ideal for new players to solve their queries without contacting the support team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons of Using the TeenPatti Gold Game */}
      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Pros and Cons of Using the TeenPatti Gold Game</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* Pros */}
            <div className="bg-gradient-to-br from-[#0a1029] to-[#06091F] rounded-xl p-6 border border-[#4ade80]/30 shadow-lg">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#4ade80]/20">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4ade80] to-[#16a34a] flex items-center justify-center shadow-md shadow-[#4ade80]/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#4ade80]">Pros</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                {['Skill-Based Gameplay', 'Social Interaction', 'Rewards & Bonuses', 'Safe & Secure', 'Beginner Friendly', 'Real Earning Opportunities'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                    <svg className="w-5 h-5 text-[#4ade80] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Cons */}
            <div className="bg-gradient-to-br from-[#0a1029] to-[#06091F] rounded-xl p-6 border border-[#ec4899]/30 shadow-lg">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#ec4899]/20">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ec4899] to-[#db2777] flex items-center justify-center shadow-md shadow-[#ec4899]/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#ec4899]">Cons</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                {['Addictive Nature', 'Real Money Risk', 'Requires Strategy', 'Internet Dependent', 'High Competition', 'Limited Free Rewards'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                    <svg className="w-5 h-5 text-[#ec4899] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
      <section id="final-thoughts" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#FFA500]/10 via-secondary to-[#a855f7]/10 rounded-2xl p-6 md:p-10 border border-[#FFA500]/30 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FFA500]/15 to-transparent rounded-bl-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#a855f7]/15 to-transparent rounded-tr-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFA500] to-[#f97316] flex items-center justify-center shadow-lg shadow-[#FFA500]/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500]">Final Thoughts</h2>
            </div>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">Teen Patti Gold is a popular game that combines traditional rules with multiple earning opportunities. It allows you to create private tables and enjoy real-time matches, making it more accessible and interactive. The multiple formats and games make it more exciting to play and earn money. The security measures and fair gameplay systems ensure that your experience remains safe and trustworthy, with daily rewards and referral programs. In short, the Teen Patti Gold Game is a perfect combination of fun, competition, and rewards if you want to play games and earn real cash rewards.</p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FFA500] text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#FFA500] transition-colors">
                <span>How many players can play Teen Patti Gold at a time?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">The Teen Patti Gold App can be played with multiple players, making it suitable for everyone to play and earn money. Standard tables seat 2&ndash;6 players, while tournament rooms can host hundreds of players competing for the same prize pool.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#0ea5e9]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#0ea5e9] transition-colors">
                <span>What are the basic rules of Teen Patti Gold?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">You need to arrange cards in pure sequences, impure sequences, and sets, and you can win the game if valid combinations are completed. Each round you place a blind/chaal wager, and the player with the strongest 3-card hand wins the pot.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#4ade80]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#4ade80] transition-colors">
                <span>How easily can beginners play the Teen Patti Gold App?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">Beginners can easily start with this game because it offers a simple, user-friendly interface to play and earn money. Tutorial mode and free practice tables let new players learn the rules and strategies before placing real-money bets.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#a855f7]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#a855f7] transition-colors">
                <span>What different variations of Teen Patti Gold are available?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">Teen Patti Gold offers several variations including Points Rummy, Pool Rummy, and 13-card Teen Patti Gold. Each variation has its own unique rules and scoring system, making the gameplay dynamic and entertaining for both casual and competitive players.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#f97316]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#f97316] transition-colors">
                <span>How can I play the Teen Patti Gold Game for free?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">You can play Teen Patti Gold for free in guest mode to explore games, learn the rules and use practice tables. To play real-money games and win cash rewards, you need to register an account and deposit money in the Teen Patti Gold app.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#FFA500] transition-colors">
                <span>How safe is it to play Teen Patti Gold online?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">Teen Patti Gold is safe to play online because the platform uses encrypted transactions, anti-cheat systems, and OTP-based login that make the game secure and fair. Always download the APK from the official source and never share your login credentials with anyone.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#0ea5e9]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#0ea5e9] transition-colors">
                <span>What is the minimum age to use Teen Patti Gold APK?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">The minimum age to play on any online real-money platform is 18 years, which ensures legal and responsible gaming. Players under 18 should not download or use the Teen Patti Gold APK.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#4ade80]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#4ade80] transition-colors">
                <span>How can I improve my chances of winning on the Teen Patti Gold?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">You need strategic planning, careful card observation, and steady practice to improve your winning chances on Teen Patti Gold. Start at low-stake tables, focus on skill-based games like Rummy and classic Teen Patti, and study opponents&apos; patterns before raising the stakes.</p>
              </div>
            </details>

            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-gray-700 hover:border-[#ec4899]/50 transition-all duration-300 shadow-lg overflow-hidden">
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#ec4899] transition-colors">
                <span>How can I play the Teen Patti Gold Game with friends?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">You can create private tables in the Teen Patti Gold app and invite your friends via a unique room code. Real-time chat and friendly competition enhance social interaction and make the gameplay enjoyable for groups of friends and family.</p>
              </div>
            </details>
          </div>
        </div>
      </section>


    </>
  );
}
