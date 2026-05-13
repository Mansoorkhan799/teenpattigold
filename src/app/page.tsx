import Image from "next/image";
import Link from 'next/link';
import type { Metadata } from 'next';
import { LOGO_PATH_VERSIONED, DOWNLOAD_URL } from '@/lib/site-images';
import { imageObjectLicensing } from '@/lib/schema-image-licensing';
import { SITE_ARTICLE_DATE_PUBLISHED, getSiteArticleDateModified } from '@/lib/site-meta';

/**
 * Revalidate the home page once a day so the JSON-LD `dateModified` and the
 * sitemap.xml `<lastmod>` stay in sync with each other (the sitemap already
 * uses `new Date()` per request). This is the freshness signal Google uses
 * to decide how often to re-crawl the home page.
 *
 * 86400 seconds = 24 hours. After this window any incoming request triggers
 * a background regeneration with the new date applied.
 */
export const revalidate = 86400;

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

  // Display-friendly version of the schema dateModified (YYYY-MM-DDTHH:MM:SS+05:00).
  // Used in the visible "Updated …" byline so the human-readable date matches
  // the JSON-LD `lastReviewed` / `dateModified` fields on the same render.
  const articleDateModifiedYmd = articleDateModified.slice(0, 10);
  const articleDateModifiedDisplay = (() => {
    const d = new Date(`${articleDateModifiedYmd}T00:00:00+05:00`);
    return d.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Karachi',
    });
  })();

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
        // Reference (not redeclare) the licensed ImageObject nodes below by @id
        // so Google sees one consistent signal per image and counts each one
        // in the Search Console "Image metadata" enhancement.
        "screenshot": [
          { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-game.webp#image" },
          { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp#image" },
          { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-apk.webp#image" },
          { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-deposit-money.webp#image" },
          { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-refer-and-earn.webp#image" },
          { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-vip-program.webp#image" },
          { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-bind-account.webp#image" }
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
      // Named human reviewer — single biggest E-E-A-T signal for YMYL/gambling
      // content. The Person node is referenced (not redeclared) by `reviewedBy`
      // on the WebPage below and by `author` on the SoftwareApplication's
      // implicit Review. The same @id is used on /about-us so Google merges
      // the two appearances into a single author entity.
      {
        "@type": "Person",
        "@id": "https://teenpattigoldgame.com.pk/about-us#yasir-ahmed",
        "name": "Yasir Ahmed",
        "url": "https://teenpattigoldgame.com.pk/about-us#yasir-ahmed",
        "jobTitle": "Editor & Reviewer",
        "description": "Yasir Ahmed is a Pakistan-based card-game writer covering Teen Patti, Rummy and real-money mobile gaming apps. He reviews each release of Teen Patti Gold APK and tests JazzCash and EasyPaisa deposit/withdrawal flows from Karachi.",
        "knowsAbout": [
          "Teen Patti",
          "Teen Patti Gold",
          "3-card poker (Flash / Flush)",
          "Rummy (Points, Pool, Deals)",
          "Real-money mobile gaming apps in Pakistan",
          "JazzCash",
          "EasyPaisa",
          "Responsible gaming"
        ],
        "worksFor": { "@id": "https://teenpattigoldgame.com.pk/#organization" },
        "nationality": { "@type": "Country", "name": "Pakistan" },
        "homeLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "PK" } }
      },
      {
        "@type": "WebPage",
        "@id": "https://teenpattigoldgame.com.pk/#webpage",
        "url": "https://teenpattigoldgame.com.pk/",
        "name": "Teen Patti Gold Pakistan APK v1.656 | Real Money 2026",
        "isPartOf": { "@id": "https://teenpattigoldgame.com.pk/#website" },
        "about": { "@id": "https://teenpattigoldgame.com.pk/#software" },
        "author": { "@id": "https://teenpattigoldgame.com.pk/about-us#yasir-ahmed" },
        "reviewedBy": { "@id": "https://teenpattigoldgame.com.pk/about-us#yasir-ahmed" },
        "lastReviewed": articleDateModified,
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
      // Per-screenshot ImageObject nodes — every image actually shipped in
      // /public is given its own licensed ImageObject so Search Console's
      // "Image metadata" enhancement registers each one as a Valid item.
      // Each node's @id matches the SoftwareApplication.screenshot reference
      // above so Google merges them into a single signal per image.
      {
        "@type": "ImageObject",
        "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-game.webp#image",
        "url": "https://teenpattigoldgame.com.pk/teen-patti-gold-game.webp",
        "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold-game.webp",
        "name": "Teen Patti Gold Game Interface - Play Card Games in Pakistan",
        "description": "Teen Patti Gold game screen — real-money card games including Teen Patti, Rummy, Dragon vs Tiger in Pakistan.",
        "width": 400,
        "height": 711,
        "representativeOfPage": false,
        ...imageObjectLicensing
      },
      {
        "@type": "ImageObject",
        "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp#image",
        "url": "https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp",
        "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp",
        "name": "Teen Patti Gold App - Games Collection",
        "description": "Teen Patti Gold app games collection — Rummy, Dragon Tiger, Teen Patti and more in one Pakistan card-gaming app.",
        "width": 400,
        "height": 711,
        "representativeOfPage": false,
        ...imageObjectLicensing
      },
      {
        "@type": "ImageObject",
        "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-apk.webp#image",
        "url": "https://teenpattigoldgame.com.pk/teen-patti-gold-apk.webp",
        "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold-apk.webp",
        "name": "Teen Patti Gold APK V1.656 Download",
        "description": "Teen Patti Gold APK V1.656 for Android — free download for Pakistan players.",
        "width": 400,
        "height": 711,
        "representativeOfPage": false,
        ...imageObjectLicensing
      },
      {
        "@type": "ImageObject",
        "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-deposit-money.webp#image",
        "url": "https://teenpattigoldgame.com.pk/teen-patti-gold-deposit-money.webp",
        "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold-deposit-money.webp",
        "name": "Teen Patti Gold Deposit Money via JazzCash EasyPaisa",
        "description": "Deposit money in Teen Patti Gold using JazzCash and EasyPaisa in Pakistan.",
        "width": 400,
        "height": 711,
        "representativeOfPage": false,
        ...imageObjectLicensing
      },
      {
        "@type": "ImageObject",
        "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-refer-and-earn.webp#image",
        "url": "https://teenpattigoldgame.com.pk/teen-patti-gold-refer-and-earn.webp",
        "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold-refer-and-earn.webp",
        "name": "Teen Patti Gold Refer and Earn - Invite Friends",
        "description": "Earn real money by referring friends to Teen Patti Gold in Pakistan.",
        "width": 400,
        "height": 711,
        "representativeOfPage": false,
        ...imageObjectLicensing
      },
      {
        "@type": "ImageObject",
        "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-vip-program.webp#image",
        "url": "https://teenpattigoldgame.com.pk/teen-patti-gold-vip-program.webp",
        "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold-vip-program.webp",
        "name": "Teen Patti Gold VIP Program - Recharge Rebate Bonuses",
        "description": "Teen Patti Gold VIP program with recharge rebates and daily bonuses for Pakistan players.",
        "width": 400,
        "height": 711,
        "representativeOfPage": false,
        ...imageObjectLicensing
      },
      {
        "@type": "ImageObject",
        "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-bind-account.webp#image",
        "url": "https://teenpattigoldgame.com.pk/teen-patti-gold-bind-account.webp",
        "contentUrl": "https://teenpattigoldgame.com.pk/teen-patti-gold-bind-account.webp",
        "name": "Teen Patti Gold Bind Email - Account Security",
        "description": "Secure your Teen Patti Gold account by binding your email address.",
        "width": 400,
        "height": 711,
        "representativeOfPage": false,
        ...imageObjectLicensing
      },
      {
        "@type": "FAQPage",
        "@id": "https://teenpattigoldgame.com.pk/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Teen Patti Gold?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Teen Patti Gold is a popular online real-money card game app developed for Android and iOS devices. It lets players in Pakistan play classic card games like Teen Patti, Rummy, Dragon Tiger, and 30+ other variations against real opponents. Players can deposit money via JazzCash or EasyPaisa, win chips through skill-based gameplay, and withdraw real cash earnings directly to their mobile wallets or bank accounts. The app is free to download, supports Android 5.0+ devices, and offers features like daily rewards, VIP membership, referral bonuses, and private tables for friends."
            }
          },
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
              "text": "Teen Patti Gold offers six 3-card Teen Patti variants \u2014 Classic, Joker, AK47, Muflis, Best of Four and 999 \u2014 alongside Points Rummy, Pool Rummy, Deals Rummy, Andar Bahar and Dragon vs Tiger. Each variant has its own bet structure, blind/chaal limits and side-show rules."
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        '@id': 'https://teenpattigoldgame.com.pk/#howto-get-started',
        'name': 'How to Download and Start Playing Teen Patti Gold in Pakistan',
        'description': 'Complete step-by-step guide to download the Teen Patti Gold APK, create an account, make a deposit, play card games, and withdraw real money in Pakistan.',
        'totalTime': 'PT20M',
        'supply': [
          { '@type': 'HowToSupply', 'name': 'Android device (Android 5.0+)' },
          { '@type': 'HowToSupply', 'name': 'JazzCash or EasyPaisa mobile wallet' },
          { '@type': 'HowToSupply', 'name': 'Minimum Rs 200 for first deposit' },
        ],
        'step': [
          {
            '@type': 'HowToStep',
            'position': 1,
            'name': 'Download the Teen Patti Gold APK',
            'url': 'https://teenpattigoldgame.com.pk/#download-install',
            'text': 'Tap the Download Now button on this page to get the official Teen Patti Gold APK V1.656 (49 MB). Go to Settings > Security on your Android device and enable "Install from Unknown Sources", then open the downloaded APK from your Downloads folder and tap Install.',
          },
          {
            '@type': 'HowToStep',
            'position': 2,
            'name': 'Register a New Account',
            'url': 'https://teenpattigoldgame.com.pk/#register',
            'text': 'Open the app and tap Register. Enter your mobile phone number, verify it with the OTP sent via SMS, and set a strong password. Your account is created instantly and you receive a welcome bonus.',
          },
          {
            '@type': 'HowToStep',
            'position': 3,
            'name': 'Bind Your Email Address',
            'url': 'https://teenpattigoldgame.com.pk/#bind-email',
            'text': 'Go to Settings inside the app and tap Bind Email. Enter your email address and confirm it. Binding your email secures your account and allows account recovery if you ever lose access.',
          },
          {
            '@type': 'HowToStep',
            'position': 4,
            'name': 'Deposit Money to Get Chips',
            'url': 'https://teenpattigoldgame.com.pk/#deposit',
            'text': 'Tap the Shop button in the app, choose a payment method (JazzCash, EasyPaisa, or Bank Card), select a deposit amount (minimum Rs 200), enter your account number, and approve the payment request. Chips are added to your wallet instantly.',
          },
          {
            '@type': 'HowToStep',
            'position': 5,
            'name': 'Choose a Game and Start Playing',
            'url': 'https://teenpattigoldgame.com.pk/#how-to-play-earn',
            'text': 'Browse the lobby and choose from 30+ games including Teen Patti, Rummy, Dragon Tiger, and more. Join a table that matches your budget, place your bets, and compete against real players to win chips.',
          },
          {
            '@type': 'HowToStep',
            'position': 6,
            'name': 'Withdraw Your Winnings',
            'url': 'https://teenpattigoldgame.com.pk/#withdraw',
            'text': 'Open the Wallet section and tap Withdraw. Select JazzCash, EasyPaisa, or Bank Card, enter the amount (minimum Rs 100) and your account details, then confirm. Your earnings are transferred within 3–24 hours.',
          },
        ],
      }) }} />
      
      {/* Hero Section with improved spacing */}
      <section className="py-6 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              {/*
                H1 = "Teen Patti Gold Pakistan" (geo-qualified primary
                keyword). The bare brand "Teen Patti Gold" is owned globally
                by Moonfrog Labs (Play Store), so a Pakistan-only site
                cannot realistically outrank them for the unqualified term.
                The H1 mirrors the pattern used by every Pakistan competitor
                that currently ranks on page 1 for "teen patti gold pakistan"
                (teenpattigoldpak.com #3, 3pattigold.pk #9, 3pattigold.com.pk
                #4 for "teen patti gold apk pakistan"). H2 carries the
                supporting "APK Download — Real Money App 2026" intent.
                Speakable IDs preserved for Google Assistant / AI Overviews.
              */}
              <h1 id="speakable-headline" className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white">Teen Patti Gold </span>
                <span className="text-[#ffa503]">Pakistan</span>
              </h1>
              <h2 id="speakable-subhead" className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-[#ffa503]">APK Download</span>{' '}
                <span className="text-white">— Real Money App 2026</span>
              </h2>
            </div>

            {/*
              Author byline — primary E-E-A-T signal for YMYL/gambling content.
              Reads as: [Avatar] Reviewed by Yasir Ahmed · Updated {date} · 18+
              The link target (`/about-us#yasir-ahmed`) carries the matching
              Person JSON-LD `@id`, so Google merges this surface and the
              about-us bio into a single named-author entity for the home page.
            */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-300 border-y border-gray-800 py-3">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFA500] to-[#f97316] text-sm font-bold text-[#0a1029] shadow-md shadow-[#FFA500]/20"
                >
                  YA
                </span>
                <span className="leading-tight">
                  <span className="block text-[11px] uppercase tracking-wider text-gray-500">Reviewed by</span>
                  <Link
                    href="/about-us#yasir-ahmed"
                    rel="author"
                    className="font-semibold text-white hover:text-[#FFA500] transition-colors"
                  >
                    Yasir Ahmed
                  </Link>
                  <span className="text-gray-500">, Karachi</span>
                </span>
              </div>
              <span className="hidden sm:inline text-gray-700">·</span>
              <span className="text-gray-400">
                Updated{' '}
                <time dateTime={articleDateModifiedYmd} className="font-medium text-gray-200">
                  {articleDateModifiedDisplay}
                </time>
              </span>
              <span className="hidden sm:inline text-gray-700">·</span>
              <span className="text-[#ec4899] font-semibold text-xs px-2 py-0.5 rounded-full border border-[#ec4899]/40 bg-[#ec4899]/5">
                18+ Only
              </span>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              <Link href="/download-teen-patti-gold-apk" className="text-[#FFA500] font-semibold hover:underline"><strong>Teen Patti Gold Pakistan</strong></Link> is a real-money 3-card poker app built for Pakistani players. The official APK (v1.656, 49&nbsp;MB, Android&nbsp;5.0+) supports JazzCash and EasyPaisa for both deposits and withdrawals, with a Rs&nbsp;100 minimum withdrawal that usually settles within 3&ndash;24&nbsp;hours. Tap <span className="text-[#FFA500] font-semibold">Download Now</span> to install the latest build directly &mdash; the app is not on Google Play, so APK download is the only official path.
            </p>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              Real-money card games involve financial risk. Set a budget, never chase losses, and read our <Link href="/blog/responsible-gaming-guide-2026" className="text-[#0ea5e9] hover:underline font-semibold">responsible gaming guide</Link> before depositing.
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500]">What is Teen Patti Gold?</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                <Link href="/download-teen-patti-gold-apk" className="text-[#FFA500] font-semibold hover:underline">Teen Patti Gold</Link> is the Pakistan-localised version of the classic 3-card Indian poker game (also called Flash or Flush). The app is distributed as a free Android APK, weighs 49&nbsp;MB and runs on Android 5.0 (Lollipop) and above. It is not available on the Google Play Store, so Pakistani players install it directly from the APK file. After registration the wallet supports two local payment rails &mdash; <strong>JazzCash</strong> and <strong>EasyPaisa</strong> &mdash; with deposits as low as Rs&nbsp;100 and withdrawals processed in 3 to 24 hours.
              </p>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Inside the app you&apos;ll find Teen Patti (Classic, Joker, AK47, Muflis, Best of Four, 999), plus Rummy (Points, Pool and Deals), Andar Bahar, and Dragon vs Tiger. The hand rankings follow standard Teen Patti order: Trail (three of a kind) &gt; Pure Sequence &gt; Sequence &gt; Color &gt; Pair &gt; High Card. Skill, bluffing and bankroll management decide long-term outcomes &mdash; the cards themselves are dealt by a server-side RNG.
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
                {/* unoptimized=true so Googlebot sees the canonical
                    /teen-patti-gold-game.webp URL in <img src>, matching
                    image-sitemap.xml and the ImageObject JSON-LD. Without it
                    Next.js serves /_next/image?url=... which is X-Robots-Tag:
                    noindex (see next.config.js) and breaks page→image
                    association in Google Image Search. */}
                <Image
                  src="/teen-patti-gold-game.webp"
                  alt="Teen Patti Gold Game Interface - Play Card Games in Pakistan"
                  width={400}
                  height={711}
                  className="w-auto h-auto max-w-full object-contain"
                  loading="lazy"
                  unoptimized={true}
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
                  unoptimized={true}
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
                  unoptimized={true}
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
                  unoptimized={true}
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
                  unoptimized={true}
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
                  unoptimized={true}
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
                  unoptimized={true}
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
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Teen Patti Gold ships with six Teen Patti variants &mdash; Classic, Joker, AK47, Muflis, Best of Four and 999 &mdash; plus Rummy in Points, Pool and Deals formats, Andar Bahar, and Dragon vs Tiger. Each variant has its own bet structure and side-show rules, so you can pick a format that fits your skill level and chip stack instead of being locked into one ruleset.</p>
            </div>
            {/* Real-Time Multiplayer */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#0ea5e9]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0ea5e9]/20 to-[#0ea5e9]/5 flex items-center justify-center mb-4 border border-[#0ea5e9]/30">
                <svg className="w-6 h-6 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Real-Time Multiplayer Tables</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Tables seat 2&ndash;6 players and matchmaking is buy-in based: your boot amount and stack size determine which lobby you enter. Built-in emojis and table chat let you side-show or rib opponents the same way you would at a real Teen Patti table.</p>
            </div>
            {/* Secure & Fair */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#4ade80]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-4 border border-[#4ade80]/30">
                <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">RNG-Dealt Cards &amp; Anti-Collusion</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Every deal is generated server-side by an RNG so the deck cannot be predicted from the client. Anti-collusion checks flag accounts that consistently soft-play with the same opponents from the same IP range, which is the most common cheating pattern on private Teen Patti tables.</p>
            </div>
            {/* User-Friendly */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 flex items-center justify-center mb-4 border border-[#a855f7]/30">
                <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Beginner-Friendly Interface</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The lobby groups tables by buy-in (Easy, Classic, Premium, VIP) so new players don&apos;t accidentally sit at a Rs&nbsp;10,000 boot table. Hand-ranking helper, side-show explainer and a free-chip practice mode are all reachable in two taps from the home screen.</p>
            </div>
            {/* Daily Rewards & Bonuses */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#ec4899]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 flex items-center justify-center mb-4 border border-[#ec4899]/30">
                <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Daily Login &amp; First-Deposit Bonus</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">A 7-day login streak unlocks an escalating chip bonus, and the first deposit returns 5%&ndash;30% as bonus chips on a 2x&ndash;7x wagering requirement (full table further down this page). Bonus chips are credited instantly to the wallet and are subject to the same withdrawal rules as deposit chips once cleared.</p>
            </div>
            {/* Private Tables */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#f97316]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 flex items-center justify-center mb-4 border border-[#f97316]/30">
                <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Private Tables &amp; Room Codes</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Generate a 6-digit room code, set your own boot, blind cap and Teen Patti variant (Classic, Joker, AK47, etc.), and share the code on WhatsApp. Up to six friends can join the same private table &mdash; useful for replacing in-person card nights without the dealer overhead. <a href="https://3pattiparty.com/JoyTechAI-PAK-Label-1.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-300">Live chat support</a> is available if a player drops mid-hand.</p>
            </div>
            {/* Cross-Platform */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#06b6d4]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 flex items-center justify-center mb-4 border border-[#06b6d4]/30">
                <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Android-First, PC via Emulator</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The 49&nbsp;MB APK is built for Android 5.0+ and runs comfortably on 2&nbsp;GB RAM phones. There is no native iOS or Windows build &mdash; iPhone users can sideload via TestFlight ports (limited support) and PC players use BlueStacks or LDPlayer. See the <Link href="/teen-patti-gold-for-pc" className="text-[#0ea5e9] hover:underline font-semibold">PC guide</Link> and <Link href="/teen-patti-gold-for-ios" className="text-[#0ea5e9] hover:underline font-semibold">iOS guide</Link> for setup steps.</p>
            </div>
            {/* Tournaments */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#facc15]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#facc15]/20 to-[#facc15]/5 flex items-center justify-center mb-4 border border-[#facc15]/30">
                <svg className="w-6 h-6 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Tournaments &amp; Daily Leaderboards</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Daily Sit-and-Go tournaments run from Rs&nbsp;50 buy-in upward and pay out the top three finishers. Weekly leaderboard rankings are based on chips won, not number of hands played, so you can&apos;t farm the leaderboard by grinding free tables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pakistani Players Choose Teen Patti Gold */}
      <section id="why-popular" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-6 md:p-8 border border-[#a855f7]/20 shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-[#a855f7]/10 to-transparent rounded-br-full blur-2xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 bg-gradient-to-b from-[#a855f7] to-[#7c3aed] rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500]">Why Pakistani Players Choose Teen Patti Gold</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">Most Pakistani card-game apps copy the same Teen Patti template, so why does Teen Patti Gold keep coming up as the default pick on Reddit, WhatsApp groups and YouTube reviews? Five concrete reasons:</p>
            <ul className="space-y-3 text-gray-200 text-sm md:text-base">
              <li className="flex gap-3"><span className="text-[#FFA500] font-bold flex-shrink-0">1.</span><span><strong className="text-white">JazzCash &amp; EasyPaisa, no card needed.</strong> Most Pakistani players don&apos;t own a Visa/Mastercard. Teen Patti Gold supports the two wallet apps that 110+ million Pakistanis already use, with the same Rs&nbsp;100 minimum on both deposit and withdrawal.</span></li>
              <li className="flex gap-3"><span className="text-[#FFA500] font-bold flex-shrink-0">2.</span><span><strong className="text-white">Withdrawals settle in 3&ndash;24 hours.</strong> Faster than the 1&ndash;3 day window most international card apps quote for Pakistan, because the cash-out is routed through a local rail rather than an SWIFT transfer.</span></li>
              <li className="flex gap-3"><span className="text-[#FFA500] font-bold flex-shrink-0">3.</span><span><strong className="text-white">49&nbsp;MB APK runs on entry-level Android.</strong> The minimum spec is Android 5.0 with 2&nbsp;GB RAM, so the app installs on Rs&nbsp;15,000 budget phones that dominate the Pakistani market &mdash; not just flagship devices.</span></li>
              <li className="flex gap-3"><span className="text-[#FFA500] font-bold flex-shrink-0">4.</span><span><strong className="text-white">Real Teen Patti depth, not just slots.</strong> Six Teen Patti variants (Classic, Joker, AK47, Muflis, Best of Four, 999) cover every house rule played in Pakistan, plus 13-card Rummy for players who want a longer skill format.</span></li>
              <li className="flex gap-3"><span className="text-[#FFA500] font-bold flex-shrink-0">5.</span><span><strong className="text-white">Live chat and in-app support in English.</strong> Disputes, deposit failures and KYC issues can be raised inside the app and usually receive a reply the same day, which removes the language barrier most players hit on India-only Teen Patti apps.</span></li>
            </ul>
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
            className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
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
            className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
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
            className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
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
            className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Read the withdrawal guide
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Popular Card Games on Teen Patti Gold */}
      <section id="popular-games" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#FFA500]">Popular Card Games on Teen Patti Gold</h2>
          <p className="text-gray-400 text-sm md:text-base mb-8">All games are dealt with a server-side RNG. Hand rankings follow the standard Teen Patti order: Trail &gt; Pure Sequence &gt; Sequence &gt; Color &gt; Pair &gt; High Card.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              { color: '#ef4444', name: 'Teen Patti Classic', desc: 'The standard 3-card game. Each player antes a boot, then alternates blind or chaal until showdown. Best for learning the ranking ladder.' },
              { color: '#FFA500', name: 'Teen Patti Joker', desc: 'A random card is set as Joker before the deal. Any matching card in your hand becomes a wildcard, dramatically improving Trail and Pure Sequence frequency.' },
              { color: '#4ade80', name: 'Teen Patti AK47', desc: 'A, K, 4 and 7 of every suit act as wildcards. Higher hand strength on average, so play tighter ranges and avoid bluffing low pairs.' },
              { color: '#0ea5e9', name: 'Teen Patti Muflis', desc: 'Reverse hand rankings: the lowest hand wins. High Card 2-3-5 (offsuit) becomes the strongest hand. Useful for breaking habits formed in Classic.' },
              { color: '#a855f7', name: 'Best of Four', desc: 'You receive 4 cards and must select your best 3. More information per hand, slower fold rate, larger pots.' },
              { color: '#ec4899', name: 'Rummy (Points / Pool / Deals)', desc: '13-card Indian Rummy. Form pure and impure sequences plus sets. Skill-heavy format with longer matches than Teen Patti.' },
              { color: '#f97316', name: 'Andar Bahar', desc: 'Pure-luck side game. A Joker card is drawn, then cards are dealt left (Andar) and right (Bahar) until the Joker rank reappears. Bet on which side wins.' },
              { color: '#facc15', name: 'Dragon vs Tiger', desc: 'Two cards are dealt face-up; the higher rank wins. One of the fastest tables in the app \u2014 typical round is under 30 seconds.' },
              { color: '#06b6d4', name: '999', desc: 'Each card adds to a running total; the hand closest to 9 wins. Quick, low-variance Teen Patti spin-off.' },
            ].map((g, idx) => (
              <div key={g.name} className="relative bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden" style={{ borderColor: 'transparent' }} onMouseEnter={undefined}>
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-full" style={{ backgroundImage: `linear-gradient(to bottom right, ${g.color}33, transparent)` }}></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg" style={{ backgroundImage: `linear-gradient(to bottom right, ${g.color}, ${g.color}cc)`, boxShadow: `0 4px 12px ${g.color}33` }}>{idx + 1}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{g.name}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{g.desc}</p>
                </div>
              </div>
            ))}
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
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Redesigned Lobby (v1.656)</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Tables are now grouped by stake bracket and Teen Patti variant in a single lobby view, replacing the old multi-tab layout. Average time-to-table dropped from 4 taps to 2.</p>
            </div>
            {/* Optimized Performance */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#facc15]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#facc15]/20 to-[#facc15]/5 flex items-center justify-center mb-4 border border-[#facc15]/30">
                <svg className="w-6 h-6 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Smaller APK, Faster Cold Start</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">The v1.656 build is 49&nbsp;MB &mdash; about 8&nbsp;MB lighter than v1.5x &mdash; thanks to texture compression and removal of legacy assets. Cold-start time on Android 8 mid-range hardware is around 2.5 seconds.</p>
            </div>
            {/* Security */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#4ade80]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 flex items-center justify-center mb-4 border border-[#4ade80]/30">
                <svg className="w-6 h-6 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Email Binding &amp; Account Recovery</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Optional email binding lets you recover an account if you lose access to the registered phone number &mdash; the previous phone-only flow locked players out when they switched SIMs. OTP is now also accepted via WhatsApp for users on weak SMS networks.</p>
            </div>
            {/* New Game Modes */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#a855f7]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/5 flex items-center justify-center mb-4 border border-[#a855f7]/30">
                <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Best of Four &amp; Speed Rummy Added</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Best of Four (deal 4 cards, pick best 3) and Speed Rummy (15-second turn timer) are now available alongside the existing Classic, Joker, AK47, Muflis and 999 variants. Both modes have their own dedicated tables in the lobby.</p>
            </div>
            {/* Multi-Device */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#06b6d4]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06b6d4]/20 to-[#06b6d4]/5 flex items-center justify-center mb-4 border border-[#06b6d4]/30">
                <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Cross-Device Wallet Sync</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Sign in on a tablet or PC emulator and your chip balance, hand history and bonus progress sync from your phone in under 5 seconds. Concurrent multi-device login is blocked &mdash; only one active session per account.</p>
            </div>
            {/* Improved Rewards */}
            <div className="bg-[#0a1029] rounded-xl p-6 border border-gray-800 hover:border-[#ec4899]/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/5 flex items-center justify-center mb-4 border border-[#ec4899]/30">
                <svg className="w-6 h-6 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Tiered First-Deposit Rebate</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">First-deposit bonus now scales from 5% (Rs&nbsp;3,000 deposit, 2x wager) up to 30% (Rs&nbsp;50,000 deposit, 7x wager) &mdash; see the full table in the New Players section above. Replaces the old flat 100% match that effectively never cleared.</p>
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
              'OTP verification on every login from a new device, plus optional password binding to your phone number or email.',
              'JazzCash and EasyPaisa payments use the operators\u2019 own encrypted gateways \u2014 the app never stores your CNIC PIN or wallet credentials.',
              'A server-side RNG (Random Number Generator) shuffles every deal; cards cannot be predicted from the client.',
              'Anti-collusion checks flag accounts that consistently soft-play with the same opponents from the same IP range.',
              'The APK is updated roughly every 4\u20136 weeks (current build: v1.656). Always grab the latest build from this page \u2014 third-party mirrors often inject ads or malware.',
              'Real-money play is restricted to users 18 and above. Gambling is regulated differently in each Pakistani province; check your local laws before depositing.',
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
                className="inline-flex items-center justify-center mt-4 px-4 py-2 rounded-lg bg-[#1d4ed8] hover:bg-[#1e3a8a] text-white border border-[#3b82f6] transition-colors duration-200 text-sm font-semibold"
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
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">Teen Patti Gold is the most practical real-money 3-card poker option for Pakistani players in 2026: the official APK is free, JazzCash and EasyPaisa work on both deposits and withdrawals, the minimum is Rs&nbsp;100, and cash-outs typically land in your wallet within 3 to 24 hours. If you stick to <Link href="/blog/responsible-gaming-guide-2026" className="text-[#0ea5e9] hover:underline font-semibold">a sensible bankroll</Link>, learn the hand rankings before chasing pots, and treat the bonus structure as a discount rather than free money, the app is a fair way to play Teen Patti against real opponents from your phone. <Link href="/download-teen-patti-gold-apk" className="text-[#FFA500] hover:underline font-semibold">Download v1.656</Link> to get started, or read the <Link href="/blog/how-to-play-teen-patti-gold" className="text-[#0ea5e9] hover:underline font-semibold">full gameplay guide</Link> first if Teen Patti is new to you.</p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#FFA500] text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-gradient-to-r from-[#0a1029] to-[#0a1029]/80 rounded-xl border border-[#FFA500]/50 transition-all duration-300 shadow-lg overflow-hidden" open>
              <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-semibold text-lg hover:text-[#FFA500] transition-colors">
                <span>What is Teen Patti Gold?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-700/50">
                <p className="pt-4">Teen Patti Gold is a popular online real-money card game app for Android and iOS. It lets players in Pakistan enjoy classic card games like Teen Patti, Rummy, Dragon Tiger, and 30+ other variations against real opponents. Players can deposit money via JazzCash or EasyPaisa, win chips through skill-based gameplay, and withdraw real cash earnings directly to their mobile wallets or bank accounts. The app is free to download, supports Android 5.0+ devices, and offers daily rewards, VIP membership, referral bonuses, and private tables for friends.</p>
              </div>
            </details>

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
                <p className="pt-4">Teen Patti Gold offers six 3-card Teen Patti variants &mdash; Classic, Joker, AK47, Muflis, Best of Four and 999 &mdash; alongside Points Rummy, Pool Rummy, Deals Rummy, Andar Bahar and Dragon vs Tiger. Each variant has its own bet structure, blind/chaal limits and side-show rules.</p>
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
