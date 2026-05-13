import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LOGO_PATH_VERSIONED, DOWNLOAD_URL } from '@/lib/site-images';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_APK } from '@/lib/breadcrumb-schema';
import { imageObjectLicensing } from '@/lib/schema-image-licensing';

const APK_PAGE_URL = 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk';
const SITE_ORIGIN = 'https://teenpattigoldgame.com.pk';

export const metadata: Metadata = {
  title: {
    absolute: 'How to Download Teen Patti Gold APK Free 2026 — Latest Version V1.656',
  },
  description:
    'How to download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan. Step-by-step install guide — play 30+ card games, earn real cash via JazzCash & EasyPaisa.',
  keywords: [
    'Teen Patti Gold APK',
    'Teen Patti Gold APK download',
    'Teen Patti Gold latest version',
    'Teen Patti Gold APK latest version',
    'download Teen Patti Gold APK',
    'Teen Patti Gold free download',
    'Teen Patti Gold APK 2026',
    'Teen Patti Gold Pakistan APK',
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
    canonical: 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk',
  },
  openGraph: {
    title: 'How to Download Teen Patti Gold APK Free 2026 — Latest Version V1.656',
    description:
      'How to download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan. Step-by-step install guide — play 30+ card games, earn real cash via JazzCash & EasyPaisa.',
    url: 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk',
    siteName: 'Teen Patti Gold',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/teen-patti-gold-apk.webp',
        width: 400,
        height: 711,
        alt: 'Teen Patti Gold APK Latest Version Download Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Download Teen Patti Gold APK Free 2026 — Latest Version V1.656',
    description:
      'How to download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan. Step-by-step install guide — play 30+ card games, earn real cash via JazzCash & EasyPaisa.',
    images: ['https://teenpattigoldgame.com.pk/teen-patti-gold-apk.webp'],
  },
};

const breadcrumbLd = getBreadcrumbSchema([BREADCRUMB_HOME, BREADCRUMB_APK]);

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Teen Patti Gold',
  operatingSystem: 'Android 5.0+',
  applicationCategory: 'GameApplication',
  applicationSubCategory: 'Card Game',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'PKR',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    ratingCount: '12500',
    bestRating: '5',
    worstRating: '1',
  },
  downloadUrl: DOWNLOAD_URL,
  softwareVersion: 'V1.656(0)',
  fileSize: '49MB',
  datePublished: '2026-01-05',
  description:
    'Teen Patti Gold APK — Play 30+ card games including Teen Patti, Rummy, and Dragon Tiger. Earn real money with JazzCash & EasyPaisa withdrawals in Pakistan.',
  image: { '@id': `${SITE_ORIGIN}/teen-patti-gold.webp#primary` },
  // Reference (not redeclare) the licensed ImageObject nodes below by @id
  // so Google sees one consistent signal per image and counts each one in
  // the Search Console "Image metadata" enhancement report.
  screenshot: [
    { '@id': `${SITE_ORIGIN}/teen-patti-gold-game.webp#image` },
    { '@id': `${SITE_ORIGIN}/teen-patti-gold-app.webp#image` },
    { '@id': `${SITE_ORIGIN}/teen-patti-gold-apk.webp#image` },
    { '@id': `${SITE_ORIGIN}/teen-patti-gold-deposit-money.webp#image` },
    { '@id': `${SITE_ORIGIN}/teen-patti-gold-refer-and-earn.webp#image` },
    { '@id': `${SITE_ORIGIN}/teen-patti-gold-vip-program.webp#image` },
  ],
  author: { '@id': 'https://teenpattigoldgame.com.pk/#organization' },
  publisher: { '@id': 'https://teenpattigoldgame.com.pk/#organization' },
  inLanguage: 'en-PK',
  countriesSupported: 'PK',
};

// Per-image licensed ImageObject graph. Every image actually rendered on
// /download-teen-patti-gold-apk is declared here with full licensing
// metadata (license, creator, creditText, copyrightNotice,
// acquireLicensePage) so each image becomes a Valid item in the Search
// Console "Image metadata" enhancement.
const imageGraphLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold.webp#primary`,
      url: `${SITE_ORIGIN}/teen-patti-gold.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold.webp`,
      name: 'Teen Patti Gold APK Latest Version Free Download 2026',
      description:
        'Download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan. Play 30+ card games and earn real cash.',
      width: 512,
      height: 512,
      ...imageObjectLicensing,
    },
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold-game.webp#image`,
      url: `${SITE_ORIGIN}/teen-patti-gold-game.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold-game.webp`,
      name: 'Teen Patti Gold Game Interface - Play Card Games in Pakistan',
      description:
        'Teen Patti Gold game screen — real-money card games including Teen Patti, Rummy, Dragon vs Tiger in Pakistan.',
      width: 400,
      height: 711,
      representativeOfPage: false,
      ...imageObjectLicensing,
    },
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold-app.webp#image`,
      url: `${SITE_ORIGIN}/teen-patti-gold-app.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold-app.webp`,
      name: 'Teen Patti Gold App - Games Collection',
      description:
        'Teen Patti Gold app games collection — Rummy, Dragon Tiger, Teen Patti and more in one Pakistan card-gaming app.',
      width: 400,
      height: 711,
      representativeOfPage: false,
      ...imageObjectLicensing,
    },
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold-apk.webp#image`,
      url: `${SITE_ORIGIN}/teen-patti-gold-apk.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold-apk.webp`,
      name: 'Teen Patti Gold APK V1.656 Download',
      description: 'Teen Patti Gold APK V1.656 for Android — free download for Pakistan players.',
      width: 400,
      height: 711,
      representativeOfPage: false,
      ...imageObjectLicensing,
    },
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold-deposit-money.webp#image`,
      url: `${SITE_ORIGIN}/teen-patti-gold-deposit-money.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold-deposit-money.webp`,
      name: 'Teen Patti Gold Deposit Money via JazzCash EasyPaisa',
      description: 'Deposit money in Teen Patti Gold using JazzCash and EasyPaisa in Pakistan.',
      width: 400,
      height: 711,
      representativeOfPage: false,
      ...imageObjectLicensing,
    },
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold-refer-and-earn.webp#image`,
      url: `${SITE_ORIGIN}/teen-patti-gold-refer-and-earn.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold-refer-and-earn.webp`,
      name: 'Teen Patti Gold Refer and Earn - Invite Friends',
      description: 'Earn real money by referring friends to Teen Patti Gold in Pakistan.',
      width: 400,
      height: 711,
      representativeOfPage: false,
      ...imageObjectLicensing,
    },
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold-vip-program.webp#image`,
      url: `${SITE_ORIGIN}/teen-patti-gold-vip-program.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold-vip-program.webp`,
      name: 'Teen Patti Gold VIP Program - Recharge Rebate Bonuses',
      description: 'Teen Patti Gold VIP program with recharge rebates and daily bonuses for Pakistan players.',
      width: 400,
      height: 711,
      representativeOfPage: false,
      ...imageObjectLicensing,
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk#howto',
  name: 'How to Download Teen Patti Gold APK on Android',
  description: 'Step-by-step guide to download and install the latest Teen Patti Gold APK V1.656 free on any Android device in Pakistan.',
  totalTime: 'PT5M',
  supply: [
    { '@type': 'HowToSupply', name: 'Android device (Android 5.0 or higher)' },
    { '@type': 'HowToSupply', name: 'Stable internet connection (Wi-Fi or 4G)' },
    { '@type': 'HowToSupply', name: 'At least 100 MB free storage space' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Tap the Download Button',
      url: 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk#download-button',
      text: 'Tap the orange "Download Now" button on this page. The official Teen Patti Gold APK V1.656 (49 MB) will begin downloading to your Android device immediately.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Enable Install from Unknown Sources',
      url: 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk#enable-unknown-sources',
      text: 'Go to your phone\'s Settings > Security (or Privacy on newer Android). Find "Install Unknown Apps" or "Unknown Sources" and enable it for your browser or file manager. This allows you to install APK files downloaded outside the Play Store.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Open the Downloaded APK File',
      url: 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk#open-apk',
      text: 'Open your phone\'s Downloads folder using the File Manager app. Find the Teen Patti Gold APK file (teen-patti-gold.apk) and tap it to launch the installer.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Install Teen Patti Gold',
      url: 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk#install',
      text: 'Tap the "Install" button when the installer prompt appears. The app will be installed automatically within a few seconds. Do not close the screen during installation.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Open the App and Register',
      url: 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk#register',
      text: 'Tap "Open" once installation is complete, or find the Teen Patti Gold icon on your home screen. Register a free account using your mobile number, verify with the OTP, make your first deposit via JazzCash or EasyPaisa, and start playing.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${APK_PAGE_URL}#webpage`,
  url: APK_PAGE_URL,
  name: 'Download Teen Patti Gold APK Latest Version Free 2026',
  isPartOf: { '@id': 'https://teenpattigoldgame.com.pk/#website' },
  inLanguage: 'en-PK',
  primaryImageOfPage: { '@id': `${SITE_ORIGIN}/teen-patti-gold.webp#primary` },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#apk-what-is', '#apk-why-download'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the latest version of Teen Patti Gold APK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The latest version of Teen Patti Gold APK is V1.656(0), released in January 2026. The file size is 49MB and it requires Android 5.0 or higher.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Teen Patti Gold APK free to download?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Teen Patti Gold APK is completely free to download and install. You can download it from the official website at no cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Teen Patti Gold APK safe to install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, downloading from the official site teenpattigoldgame.com.pk guarantees a safe, verified APK. Always avoid third-party sources to protect your device and account.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I withdraw money from Teen Patti Gold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To withdraw money from Teen Patti Gold, open the app, go to Wallet, tap Withdraw, enter the amount, select JazzCash, EasyPaisa, or Bank Card, enter your account details, and confirm. Withdrawals are processed within 3–24 hours. Minimum withdrawal is Rs 100.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which payment methods does Teen Patti Gold support in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teen Patti Gold supports JazzCash, EasyPaisa, and Bank Card (bank transfer up to PKR 20,000 per transaction) for deposits and withdrawals in Pakistan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I play Teen Patti Gold on PC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can play Teen Patti Gold on PC using an Android emulator such as BlueStacks or LDPlayer. Download the APK and load it inside the emulator to enjoy the game on a bigger screen.',
      },
    },
  ],
};

export default function TeenPattiGoldApkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGraphLd) }} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between md:gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            {/* Badges row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#FFA500] border border-[#FFA500]/30">v1.656</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#0ea5e9] border border-[#0ea5e9]/30">Android 5.0+</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#4ade80] border border-[#4ade80]/30">49 MB</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#a855f7] border border-[#a855f7]/30">Free</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#FFA500]">How to Download</span>
              <br />
              <span className="text-white">Teen Patti Gold APK Free 2026</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-[#FFA500] font-semibold hover:underline">Teen Patti Gold</Link> is Pakistan&apos;s most popular online card game app. Download the latest APK V1.656 free for Android and play 30+ exciting games like Teen Patti, Rummy, and Dragon Tiger. Earn real cash and withdraw instantly via JazzCash & EasyPaisa.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: '500K+', label: 'Downloads' },
                { value: '4.5★', label: 'Rating' },
                { value: '30+', label: 'Games' },
                { value: '49MB', label: 'App Size' },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#0a1029] rounded-xl border border-gray-800 px-3 py-3 text-center hover:border-[#FFA500]/40 transition-colors">
                  <div className="text-xl md:text-2xl font-bold text-[#FFA500]">{value}</div>
                  <div className="text-gray-400 text-xs md:text-sm mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
              >
                <span>DOWNLOAD NOW</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
              <span className="self-center text-sm text-[#4ade80] font-semibold bg-[#0A1029] border border-[#4ade80]/30 px-4 py-2 rounded-full inline-flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                Free · Android 5.0+ · 49MB
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">*Available for Android devices only.</p>
          </div>

          <div className="flex justify-center mt-10 md:mt-0 md:w-1/2">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/20 to-[#0ea5e9]/10 rounded-3xl blur-3xl pointer-events-none"></div>
              <Image
                src={LOGO_PATH_VERSIONED}
                alt="Teen Patti Gold APK Latest Version Download Pakistan"
                width={320}
                height={320}
                className="relative object-contain drop-shadow-2xl rounded-3xl w-full h-full"
                priority
                fetchPriority="high"
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents — collapsible */}
      <section id="toc" className="px-4 md:px-8 max-w-7xl mx-auto">
        {(() => {
          const tocItems = [
            { href: '#apk-info', label: 'Teen Patti Gold APK Info' },
            { href: '#apk-what-is', label: 'What is Teen Patti Gold APK?' },
            { href: '#apk-why-download', label: 'Why Download Teen Patti Gold APK?' },
            { href: '#apk-screenshots', label: 'Teen Patti Gold App Screenshots' },
            { href: '#apk-games', label: 'Games Available in Teen Patti Gold APK' },
            { href: '#apk-how-to', label: 'How to Download Teen Patti Gold APK?' },
            { href: '#apk-whats-new', label: "What's New in V1.656?" },
            { href: '#apk-payments', label: 'Payment Methods' },
            { href: '#apk-bonuses', label: 'Bonuses & Rewards' },
            { href: '#apk-sysreq', label: 'System Requirements' },
            { href: '#apk-vs', label: 'Why Teen Patti Gold APK is the Best Choice?' },
            { href: '#apk-faq', label: 'Frequently Asked Questions' },
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
                    <h2 className="text-xl md:text-2xl font-bold text-[#FFA500] leading-tight">Table of Contents</h2>
                    <p className="text-xs md:text-sm text-gray-400 mt-0.5">{tocItems.length} sections — tap to expand</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0a1029] border border-gray-700 flex items-center justify-center group-open:border-[#FFA500]/50 transition-all">
                  <svg className="w-5 h-5 text-[#FFA500] transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="px-4 md:px-7 pb-6 md:pb-7 pt-1 border-t border-gray-800/60">
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mt-5">
                  {tocItems.map((item, idx) => (
                    <li key={item.href} className="list-none">
                      <a href={item.href} className="group/item flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#0a1029] border border-gray-800 hover:border-[#FFA500]/40 hover:bg-[#0a1029]/80 transition-all duration-200">
                        <span className="flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-[#FFA500]/15 to-[#FFA500]/5 border border-[#FFA500]/30 flex items-center justify-center text-[#FFA500] text-xs font-bold">{idx + 1}</span>
                        <span className="text-sm md:text-base text-gray-300 group-hover/item:text-[#0ea5e9] transition-colors flex-1 leading-snug">{item.label}</span>
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

      {/* APK Info Table */}
      <section id="apk-info" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFA500] to-[#f97316] flex items-center justify-center shadow-md shadow-[#FFA500]/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] text-center">Teen Patti Gold APK Info</h2>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto bg-secondary">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ['App Name', 'Teen Patti Gold'],
                  ['Developer', 'TeenPattiGold Dev'],
                  ['Latest Version', 'V1.656(0)'],
                  ['File Size', '49 MB'],
                  ['Required OS', 'Android 5.0+'],
                  ['Category', 'Card Game / Casino'],
                  ['Language', 'English, Urdu'],
                  ['Last Updated', '1st January 2026'],
                  ['Total Downloads', '500,000+'],
                  ['Rating', '4.5/5 (300K+ ratings)'],
                  ['Price', 'Free (PKR 0)'],
                  ['Payment Methods', 'JazzCash, EasyPaisa, Bank Card'],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-[#0a1029]/50' : 'bg-[#06091F]/50'}>
                    <td className="py-4 px-6 text-left font-medium text-gray-300">{label}</td>
                    <td className="py-4 px-6 text-left text-white font-semibold">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What is Teen Patti Gold APK */}
      <section id="apk-what-is" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-8 md:p-10 border border-[#FFA500]/20 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#FFA500] to-[#f97316]"></span>
              <h2 className="text-3xl font-bold text-[#FFA500]">What is Teen Patti Gold APK?</h2>
            </div>
            <div className="space-y-5 text-gray-200 leading-relaxed text-base md:text-lg">
              <p>
                <strong className="text-white">Teen Patti Gold APK</strong> is the official Android application package file for Pakistan&apos;s most-loved card game platform. Since it is not listed on the Google Play Store, players download the APK directly from the official website and install it on their Android devices. The APK format makes the installation simple — just one tap — and gives you full access to all game features without any restrictions.
              </p>
              <p>
                The app combines traditional South Asian card games like Teen Patti and Rummy with modern casino-style games including Dragon Tiger, Andar Bahar, Poker, and Slots. Whether you are a casual player looking for entertainment or a serious gamer aiming to earn real money, Teen Patti Gold APK has something for everyone. The platform is designed specifically for Pakistan, offering local payment methods and Urdu language support.
              </p>
              <p>
                With every new version release, the developers improve performance, add new games, fix bugs, and introduce fresh bonuses. The latest version — <strong className="text-white">V1.656</strong> — brings smoother gameplay, enhanced security, and new earning opportunities for players across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Download Teen Patti Gold APK */}
      <section id="apk-why-download" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Why Download Teen Patti Gold APK?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Six powerful reasons that make Teen Patti Gold APK the top choice for Pakistani players.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              color: '#FFA500',
              title: 'Real Money Earnings',
              desc: 'Win real cash by playing your favorite card games. Withdraw your earnings instantly to JazzCash, EasyPaisa, or your bank account with a minimum of just Rs 100.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
            },
            {
              color: '#4ade80',
              title: '30+ Games in One App',
              desc: 'Access over 30 exciting games including Teen Patti, Rummy, Dragon Tiger, Andar Bahar, Poker, Crash, and Slots — all in a single app.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
            },
            {
              color: '#60a5fa',
              title: '100% Welcome Bonus',
              desc: 'New players receive a 100% match bonus on their first deposit. Deposit Rs 500 and play with Rs 1,000 — doubling your starting power instantly.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 10h14a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9a1 1 0 011-1z" />
              ),
            },
            {
              color: '#a855f7',
              title: 'Secure Pakistani Payments',
              desc: 'Deposit and withdraw with JazzCash, EasyPaisa, or Bank Card — Pakistan\u2019s most trusted payment platforms. Fast, secure, and no bank account needed.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              ),
            },
            {
              color: '#f97316',
              title: 'Daily Login Rewards',
              desc: 'Log in every day to claim free chips and bonuses. Consistent daily logins unlock bigger and better rewards over time.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              ),
            },
            {
              color: '#ec4899',
              title: 'Earn via Referrals',
              desc: 'Invite friends with your unique referral code. Earn commission whenever your friends register, deposit, and play — a passive income stream on top of game winnings.',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              ),
            },
          ].map(({ color, title, desc, icon }) => (
            <div key={title} className="group bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)`, border: `1px solid ${color}40` }}>
                  <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color }}>{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Screenshots */}
      <section id="apk-screenshots" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-8 border border-gray-800 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center shadow-md shadow-[#0ea5e9]/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#FFA500] text-center">Teen Patti Gold App Screenshots</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: '/teen-patti-gold-game.webp', alt: 'Teen Patti Gold Game Interface', label: 'Game Interface' },
              { src: '/teen-patti-gold-app.webp', alt: 'Teen Patti Gold Games Collection', label: 'Games Collection' },
              { src: '/teen-patti-gold-apk.webp', alt: 'Teen Patti Gold Bonuses & Rewards', label: 'Bonuses & Rewards' },
              { src: '/teen-patti-gold-deposit-money.webp', alt: 'Teen Patti Gold Deposit Money JazzCash EasyPaisa', label: 'Deposit Money' },
              { src: '/teen-patti-gold-refer-and-earn.webp', alt: 'Teen Patti Gold Refer & Earn', label: 'Refer & Earn' },
              { src: '/teen-patti-gold-vip-program.webp', alt: 'Teen Patti Gold VIP Program', label: 'VIP Program' },
            ].map(({ src, alt, label }) => (
              <div key={src} className="flex flex-col items-center">
                <div className="rounded-lg overflow-hidden shadow-2xl bg-[#0A1029] flex items-center justify-center">
                  <Image
                    src={src}
                    alt={alt}
                    width={400}
                    height={711}
                    className="w-auto h-auto max-w-full object-contain"
                    loading="lazy"
                    unoptimized={true}
                  />
                </div>
                <p className="text-center text-gray-300 mt-3 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Games */}
      <section id="apk-games" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Games Available in Teen Patti Gold APK</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Teen Patti Gold APK offers a massive library of 30+ games across multiple categories. Whether you prefer classic card games or fast-paced casino games, there is something for every player.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              color: '#FFA500',
              title: 'Card Games',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM8 8h8M8 12h8M8 16h4" />
              ),
              games: ['Teen Patti (Classic)', 'Teen Patti Joker', 'Teen Patti Muflis', 'Rummy', 'Poker', 'Andar Bahar'],
            },
            {
              color: '#4ade80',
              title: 'Casino Games',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              ),
              games: ['Dragon Tiger', 'Dragon vs Tiger', 'Crash', 'Baccarat', 'Roulette', 'Slots'],
            },
            {
              color: '#60a5fa',
              title: 'Mini Games & More',
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              ),
              games: ['Fruit Slots', 'Jhandi Munda', 'Color Prediction', 'Fishing Games', 'Sports Betting', 'Live Dealer'],
            },
          ].map(({ color, title, icon, games }) => (
            <div key={title} className="group bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-800">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)`, border: `1px solid ${color}40` }}>
                  <svg className="w-5 h-5" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color }}>{title}</h3>
              </div>
              <ul className="space-y-2.5">
                {games.map(g => (
                  <li key={g} className="flex items-center gap-2 text-gray-300">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={color} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How to Download Steps */}
      <section id="apk-how-to" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">How to Download Teen Patti Gold APK?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Follow these 5 simple steps to download and install the Teen Patti Gold APK on your Android device.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {[
            { color: '#FFA500', title: 'Tap the Download Button', desc: 'Click the Download Now button on this page. The Teen Patti Gold APK V1.656 file (49MB) will start downloading automatically to your Android device.' },
            { color: '#4ade80', title: 'Enable Unknown Sources', desc: 'Go to your Android Settings → Security (or Privacy) → enable "Install from Unknown Sources" or "Allow from this source". This is required because the APK is not from the Play Store.' },
            { color: '#60a5fa', title: 'Open the Downloaded APK', desc: 'Open your File Manager, navigate to the Downloads folder, and find the Teen Patti Gold APK file. Tap on it to begin the installation process.' },
            { color: '#a855f7', title: 'Install the App', desc: 'Tap "Install" on the installation prompt and wait a few seconds for the process to complete. The app will be added to your home screen automatically.' },
            { color: '#f97316', title: 'Register and Start Playing', desc: 'Open Teen Patti Gold, tap Register, enter your Pakistani mobile number, set a password, verify the OTP, and log in. Make your first deposit to claim the 100% welcome bonus and start playing.' },
          ].map(({ color, title, desc }, i) => (
            <div key={i} className="group bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, color: '#0A1029' }}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color }}>{title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-4 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold text-lg rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <span>DOWNLOAD APK NOW</span>
            <div className="ml-3 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* What's New in Latest Version */}
      <section id="apk-whats-new" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFA500]/10 border border-[#FFA500]/30 mb-3">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFA500] opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFA500]"></span></span>
            <span className="text-xs font-semibold text-[#FFA500]">v1.656 — Latest Release</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">What&apos;s New in Teen Patti Gold V1.656?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The latest version brings several improvements and new features that make the gaming experience smoother and more rewarding for Pakistani players.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              color: '#FFA500',
              title: 'Improved Performance',
              desc: 'Faster app launch, smoother game transitions, and reduced loading time across all tables.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
            },
            {
              color: '#4ade80',
              title: 'Enhanced Security',
              desc: 'Upgraded data encryption and anti-fraud measures to keep your account and funds safe.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
            },
            {
              color: '#60a5fa',
              title: 'New Game Modes',
              desc: 'Fresh game variants and side bet options added to Teen Patti and Rummy tables.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
            },
            {
              color: '#a855f7',
              title: 'Faster Withdrawals',
              desc: 'Optimized payment processing for quicker JazzCash and EasyPaisa payouts.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
            },
            {
              color: '#f97316',
              title: 'New Bonus System',
              desc: 'Revamped daily reward system with higher chip values and surprise bonus events.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 10h14a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9a1 1 0 011-1z" />,
            },
            {
              color: '#ec4899',
              title: 'UI Improvements',
              desc: 'Cleaner interface, better navigation, and improved accessibility for new players.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
            },
          ].map(({ color, title, desc, icon }) => (
            <div key={title} className="group bg-secondary rounded-2xl p-5 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)`, border: `1px solid ${color}40` }}>
                <svg className="w-5 h-5" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h3 className="text-white font-bold mb-1.5">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section id="apk-payments" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Payment Methods in Teen Patti Gold APK</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Teen Patti Gold APK supports Pakistan&apos;s most trusted payment platforms for both deposits and withdrawals. All transactions are encrypted and processed securely.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              color: '#FFA500',
              name: 'JazzCash',
              desc: 'Pakistan\u2019s most widely used mobile wallet. Fast deposits and instant withdrawals. No bank account required.',
              meta: 'Min deposit: Rs 200 · Min withdrawal: Rs 100',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
            },
            {
              color: '#4ade80',
              name: 'EasyPaisa',
              desc: 'Telenor\u2019s trusted digital wallet. Easy to use with quick payment confirmations via OTP for both deposits and withdrawals.',
              meta: 'Min deposit: Rs 200 · Min withdrawal: Rs 100',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
            },
            {
              color: '#60a5fa',
              name: 'Bank Card',
              desc: 'Direct bank account transfer for withdrawals. Ideal for larger payouts up to PKR 20,000 per transaction.',
              meta: 'Max per transaction: Rs 20,000',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
            },
          ].map(({ color, name, desc, meta, icon }) => (
            <div key={name} className="group relative bg-secondary rounded-2xl p-6 text-center border transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `${color}33` }}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)`, border: `1px solid ${color}40` }}>
                <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color }}>{name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 inline-flex text-[#4ade80] text-xs font-semibold bg-[#4ade80]/10 border border-[#4ade80]/30 px-3 py-1.5 rounded-full">{meta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonuses & Rewards */}
      <section id="apk-bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Bonuses & Rewards in Teen Patti Gold APK</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Five active reward programs that make every play session more rewarding.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              color: '#FFA500',
              title: 'Welcome Bonus — 100% Match',
              desc: 'New players get a 100% bonus on their very first deposit. Deposit Rs 1,000 and receive Rs 1,000 bonus — play with Rs 2,000 from day one. This is automatically credited after your first successful deposit.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 10h14a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1v-9a1 1 0 011-1z" />,
            },
            {
              color: '#4ade80',
              title: 'Daily Login Rewards',
              desc: 'Log in every day to collect free chips. The reward value increases with consecutive daily logins — a 7-day streak unlocks a special bonus that boosts your balance significantly.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
            },
            {
              color: '#60a5fa',
              title: 'Referral Program',
              desc: 'Share your unique referral code with friends and family. Earn commission every time they register and deposit. The more people you invite, the more passive income you earn — without playing a single game yourself.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
            },
            {
              color: '#a855f7',
              title: 'VIP Program',
              desc: 'As you play and deposit more, you advance through VIP levels. Higher VIP tiers unlock weekly bonuses, monthly cash rewards, higher rebate percentages, and exclusive promotions not available to regular players.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
            },
            {
              color: '#f97316',
              title: 'Tournaments & Events',
              desc: 'Join regular tournaments and seasonal events to win extra prizes, cash rewards, and bonus chips. Compete against players from across Pakistan and climb the leaderboard for top positions.',
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
            },
          ].map(({ color, title, desc, icon }) => (
            <div key={title} className="group bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}11)`, border: `1px solid ${color}40` }}>
                  <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color }}>{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Requirements */}
      <section id="apk-sysreq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">System Requirements for Teen Patti Gold APK</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Minimum specs to run the app, plus the recommended setup for the smoothest experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Minimum */}
          <div className="bg-secondary rounded-2xl p-6 md:p-7 border border-gray-800">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-800">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#FFA500]/20 to-[#FFA500]/5 border border-[#FFA500]/40">
                <svg className="w-5 h-5 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7 21.75h10l-1.121-1.371A3 3 0 0115 18.257V17.25m6-12V15a2 2 0 01-2 2H5a2 2 0 01-2-2V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#FFA500]">Minimum Requirements</h3>
            </div>
            <ul className="space-y-3">
              {[
                ['Operating System', 'Android 5.0 (Lollipop) or higher'],
                ['RAM', '2 GB'],
                ['Storage', '100 MB free space'],
                ['Processor', 'Quad-core 1.4 GHz'],
                ['Internet', 'Mobile data or Wi-Fi'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#FFA500] mt-2"></span>
                  <span><strong className="text-white">{k}:</strong> {v}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Recommended */}
          <div className="relative bg-secondary rounded-2xl p-6 md:p-7 border border-[#4ade80]/30 shadow-md shadow-[#4ade80]/5">
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/30">Best</div>
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-800">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 border border-[#4ade80]/40">
                <svg className="w-5 h-5 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4ade80]">Recommended</h3>
            </div>
            <ul className="space-y-3">
              {[
                ['Operating System', 'Android 8.0 or higher'],
                ['RAM', '4 GB or more'],
                ['Storage', '500 MB free space'],
                ['Processor', 'Octa-core 2.0 GHz or higher'],
                ['Internet', 'Wi-Fi or 4G LTE'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <svg className="w-4 h-4 text-[#4ade80] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong className="text-white">{k}:</strong> {v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Teen Patti Gold vs Competitors */}
      <section id="apk-vs" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Why Teen Patti Gold APK is the Best Choice in Pakistan?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            There are several card game apps available in Pakistan, but Teen Patti Gold APK stands apart for the reasons below that make it the top choice for players looking to earn real money.
          </p>
        </div>
        <div className="bg-secondary rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#0A1029] to-[#06091F] border-b border-gray-700">
                  <th className="py-4 px-6 text-left text-[#FFA500] font-semibold text-sm md:text-base uppercase tracking-wide">Feature</th>
                  <th className="py-4 px-6 text-center text-[#4ade80] font-semibold text-sm md:text-base uppercase tracking-wide">Teen Patti Gold</th>
                  <th className="py-4 px-6 text-center text-gray-400 font-semibold text-sm md:text-base uppercase tracking-wide">Other Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { feature: 'JazzCash & EasyPaisa', tpg: { type: 'yes', text: 'Yes' }, other: { type: 'warn', text: 'Limited' } },
                  { feature: 'Minimum Withdrawal', tpg: { type: 'yes', text: 'Rs 100' }, other: { type: 'no', text: 'Rs 500+' } },
                  { feature: 'Number of Games', tpg: { type: 'yes', text: '30+' }, other: { type: 'warn', text: '10\u201315' } },
                  { feature: 'Welcome Bonus', tpg: { type: 'yes', text: '100% Match' }, other: { type: 'warn', text: 'Varies' } },
                  { feature: 'VIP Program', tpg: { type: 'yes', text: 'Multi-level' }, other: { type: 'warn', text: 'Basic' } },
                  { feature: 'Referral Earnings', tpg: { type: 'yes', text: 'Active' }, other: { type: 'warn', text: 'Limited' } },
                  { feature: '24/7 Support', tpg: { type: 'yes', text: 'Live Chat' }, other: { type: 'no', text: 'Email only' } },
                  { feature: 'APK Safety', tpg: { type: 'yes', text: 'Verified' }, other: { type: 'warn', text: 'Unknown' } },
                ].map((row, i) => {
                  const renderCell = (cell: { type: string; text: string }, alignCenter: boolean) => {
                    const color = cell.type === 'yes' ? '#4ade80' : cell.type === 'no' ? '#ef4444' : '#facc15';
                    const path = cell.type === 'yes'
                      ? 'M5 13l4 4L19 7'
                      : cell.type === 'no'
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
                    const sw = cell.type === 'warn' ? 2 : 3;
                    const isLiveChat = cell.text.toLowerCase() === 'live chat';
                    return (
                      <span className={`inline-flex items-center gap-1.5 ${alignCenter ? 'justify-center' : ''}`} style={{ color }}>
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke={color} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={sw} d={path} />
                        </svg>
                        {isLiveChat ? (
                          <a
                            href="https://3pattiparty.com/JoyTechAI-PAK-Label-1.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-400 underline underline-offset-2 hover:text-blue-300"
                          >
                            {cell.text}
                          </a>
                        ) : (
                          <span className="font-medium">{cell.text}</span>
                        )}
                      </span>
                    );
                  };
                  return (
                    <tr key={row.feature} className={`${i % 2 === 0 ? 'bg-[#0a1029]/30' : 'bg-transparent'} hover:bg-[#FFA500]/5 transition-colors`}>
                      <td className="py-4 px-6 text-white font-medium text-sm md:text-base">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-sm md:text-base">{renderCell(row.tpg, true)}</td>
                      <td className="py-4 px-6 text-center text-sm md:text-base">{renderCell(row.other, true)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="apk-faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-2xl p-8 border border-gray-800">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center shadow-md shadow-[#0ea5e9]/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#FFA500] text-center">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What is the latest version of Teen Patti Gold APK?', a: 'The latest version of Teen Patti Gold APK is V1.656(0), released in January 2026. The file size is 49MB and it requires Android 5.0 or higher.' },
              { q: 'Is Teen Patti Gold APK free to download?', a: 'Yes, Teen Patti Gold APK is completely free to download and install. There are no upfront costs — simply download the APK from this page and start playing.' },
              { q: 'Is Teen Patti Gold APK safe to install?', a: 'Yes. Downloading from the official site teenpattigoldgame.com.pk gives you a clean, verified APK file. Always avoid unofficial third-party sources to protect your device and account data.' },
              { q: 'How do I withdraw money from Teen Patti Gold?', a: 'Open the app, go to Wallet, tap Withdraw, enter the amount, select JazzCash, EasyPaisa, or Bank Card, provide your account details, and confirm. Withdrawals are processed within 3–24 hours. The minimum withdrawal is Rs 100.' },
              { q: 'Which payment methods are supported?', a: 'Teen Patti Gold supports JazzCash, EasyPaisa, and Bank Card (bank transfer up to PKR 20,000 per transaction) for both deposits and withdrawals in Pakistan.' },
              { q: 'Can I play Teen Patti Gold on PC?', a: 'Yes! Use an Android emulator like BlueStacks or LDPlayer on Windows to run the Teen Patti Gold APK on your PC. Visit our Teen Patti Gold for PC guide for detailed setup instructions.' },
              { q: 'Does Teen Patti Gold work on iOS (iPhone)?', a: 'Teen Patti Gold is primarily designed for Android. iOS support is limited. Android users get the best and most stable experience via the official APK.' },
            ].map((item, idx) => (
              <details key={idx} className="group bg-[#0a1029]/50 rounded-xl border border-gray-700/50 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer select-none text-white font-semibold list-none">
                  <span>{item.q}</span>
                  <svg className="w-5 h-5 ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-300 leading-relaxed border-t border-gray-700/50">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-2xl p-6 md:p-7 border border-gray-800">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FFA500]/20 to-[#FFA500]/5 border border-[#FFA500]/30 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#FFA500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">Related Guides</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              ['/deposit-money-in-teen-patti-gold', 'How to Deposit Money in Teen Patti Gold'],
              ['/withdraw-money-from-teen-patti-gold', 'How to Withdraw Money from Teen Patti Gold'],
              ['/teen-patti-gold-for-pc', 'Teen Patti Gold for PC — Windows Guide'],
              ['/teen-patti-gold-for-ios', 'Teen Patti Gold for iOS — iPhone Guide'],
              ['/blog/create-teen-patti-gold-account-and-login', 'How to Create Teen Patti Gold Account'],
              ['/blog/how-to-earn-money-from-teen-patti-gold', 'How to Earn Money on Teen Patti Gold'],
              ['/blog/how-to-play-teen-patti-gold', 'How to Play Teen Patti Gold — Full Guide'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="group flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#0a1029] border border-gray-800 hover:border-[#FFA500]/40 hover:bg-[#0a1029]/80 transition-all duration-200">
                <svg className="w-4 h-4 text-[#FFA500] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-sm text-gray-300 group-hover:text-[#FFA500] transition-colors">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
