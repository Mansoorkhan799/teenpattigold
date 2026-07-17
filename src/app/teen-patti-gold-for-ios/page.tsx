import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LOGO_PATH_VERSIONED, DOWNLOAD_URL } from '@/lib/site-images';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_IOS } from '@/lib/breadcrumb-schema';
import { imageObjectLicensing } from '@/lib/schema-image-licensing';
import FaqAccordion from '@/components/FaqAccordion';

const IOS_PAGE_URL = 'https://teenpattigoldgame.com.pk/teen-patti-gold-for-ios';
const SITE_ORIGIN = 'https://teenpattigoldgame.com.pk';

// Licensed ImageObject for the brand image actually rendered on this page
// (LOGO_PATH_VERSIONED → /teen-patti-gold.webp). Re-uses the canonical
// `teen-patti-gold.webp#primary` @id so Google merges this with the
// matching node already declared on the home and APK pages.
const iosImageGraphLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold.webp#primary`,
      url: `${SITE_ORIGIN}/teen-patti-gold.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold.webp`,
      name: 'Teen Patti Gold for iOS - iPhone and iPad',
      description: 'Play Teen Patti Gold on iPhone and iPad. Complete iOS guide for Pakistan.',
      width: 512,
      height: 512,
      ...imageObjectLicensing,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: 'Teen Patti Gold for iOS — Download Info Pakistan 2026',
  },
  description:
    'Teen Patti Gold on iPhone in Pakistan: limited iOS support. Prefer Android APK or PC — avoid fake apps and protect your Teen Patti Gold wallet and login.',
  keywords: [
    'Teen Patti Gold for iOS',
    'Teen Patti Gold iPhone',
    'Teen Patti Gold iPad',
    'Teen Patti iOS download',
    'Card games iOS',
    'Teen Patti Gold Apple',
    'iOS card game'
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
    canonical: "https://teenpattigoldgame.com.pk/teen-patti-gold-for-ios",
  },
  openGraph: {
    title: 'Teen Patti Gold for iOS — Download Info Pakistan 2026',
    description:
      'Teen Patti Gold on iPhone in Pakistan: limited iOS support. Prefer Android APK or PC — avoid fake apps and protect your Teen Patti Gold wallet and login.',
    url: "https://teenpattigoldgame.com.pk/teen-patti-gold-for-ios",
    siteName: "Teen Patti Gold",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp',
        width: 512, height: 512,
        alt: 'Teen Patti Gold iOS Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Patti Gold for iOS — Download Info Pakistan 2026',
    description:
      'Teen Patti Gold on iPhone in Pakistan: limited iOS support. Prefer Android APK or PC — avoid fake apps and protect your Teen Patti Gold wallet and login.',
    images: ['https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp'],
  },
};

const iosBreadcrumbLd = getBreadcrumbSchema([BREADCRUMB_HOME, BREADCRUMB_IOS]);

const iosFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is it free to download and install Teen Patti Gold on iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Teen Patti Gold is free to download and install on iOS. You do not need to pay to download or install the app.' } },
    { '@type': 'Question', name: 'Is Teen Patti Gold secure to play on iOS devices?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Teen Patti Gold uses a modern security system to protect your account and funds. iOS devices also offer strong built-in security to protect your Teen Patti Gold account.' } },
    { '@type': 'Question', name: 'Is Teen Patti Gold a legit game to earn real money?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Teen Patti Gold is a legitimate game for earning real money. Players in Pakistan regularly withdraw their winnings via JazzCash and EasyPaisa with a minimum withdrawal of Rs 100.' } },
  ],
};

const iosHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Download and Install Teen Patti Gold on iOS',
  description: 'Step-by-step guide to download and install Teen Patti Gold on an iPhone or iPad running iOS 12 or higher.',
  totalTime: 'PT10M',
  supply: [
    { '@type': 'HowToSupply', name: 'iPhone or iPad (iOS 12+)' },
    { '@type': 'HowToSupply', name: 'Stable internet connection' },
  ],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Open Safari Browser', text: 'Open your browser (e.g. Safari) on your iOS device.' },
    { '@type': 'HowToStep', position: 2, name: 'Visit the Official Website', text: 'Search for the official Teen Patti Gold website and open it.' },
    { '@type': 'HowToStep', position: 3, name: 'Tap the Download Button', text: 'Tap the Download button on the website to begin downloading the Teen Patti Gold app.' },
    { '@type': 'HowToStep', position: 4, name: 'Trust the Developer Profile', text: 'Go to Settings > General > Device Management, find the Teen Patti Gold developer profile, and tap "Trust".' },
    { '@type': 'HowToStep', position: 5, name: 'Open the App', text: 'Return to your home screen, tap the Teen Patti Gold app icon, and open it.' },
    { '@type': 'HowToStep', position: 6, name: 'Register and Start Playing', text: 'Create an account or log in, make your first deposit, and start playing games.' },
  ],
};

export default function TeenPattiGoldForIOSPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-for-ios#article",
    "headline": "Teen Patti Gold For iOS Download Latest Version For Free 2026",
    "description": "Complete guide to download and play Teen Patti Gold on iOS devices including iPhone and iPad.",
    "image": { "@id": `${SITE_ORIGIN}/teen-patti-gold.webp#primary` },
    "author": { "@id": "https://teenpattigoldgame.com.pk/#organization" },
    "publisher": { "@id": "https://teenpattigoldgame.com.pk/#organization" },
    "datePublished": "2026-01-05",
    "dateModified": "2026-04-11",
    "mainEntityOfPage": { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-for-ios#webpage" },
    "isPartOf": { "@id": "https://teenpattigoldgame.com.pk/#website" },
    "about": { "@type": "SoftwareApplication", "name": "Teen Patti Gold", "operatingSystem": "iOS 12 or higher", "applicationCategory": "GameApplication" },
    "articleSection": "Gaming",
    "keywords": "Teen Patti Gold for iOS, Teen Patti iPhone, iOS card game",
    "inLanguage": "en-PK"
  };

  const tocItems = [
    { href: '#ios-info', label: 'Download Info Table' },
    { href: '#ios-features', label: 'Key Features on iOS' },
    { href: '#ios-how-to', label: 'How to Download on iOS' },
    { href: '#ios-sysreq', label: 'System Requirements' },
    { href: '#ios-conclusion', label: 'Conclusion' },
    { href: '#ios-faq', label: 'Frequently Asked Questions' },
  ];

  const features = [
    {
      color: '#FFA500',
      title: 'Comfortable Gameplay',
      desc: 'Teen Patti Gold for iOS offers a smooth, comfortable gameplay experience for players of all skill levels. You can fully control options, menus, and games without any technical knowledge.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      color: '#4ade80',
      title: 'Live Gaming Rooms',
      desc: 'Live multiplayer rooms let you play Teen Patti with real players from around the world. Real opponents keep the action fresh and competitive.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
    },
    {
      color: '#60a5fa',
      title: 'Regular Prize Offers',
      desc: 'Daily and weekly prize offers, bonuses, and rewards help boost your balance. Improve your chances of winning without depositing extra funds.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
    },
    {
      color: '#a855f7',
      title: 'Reliable & Simple Platform',
      desc: 'A secure platform that protects your account details and funds from theft. Easy account creation and intuitive navigation make it perfect for beginners.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
    {
      color: '#f97316',
      title: 'High-Quality Visuals',
      desc: 'Appealing graphics and an easy-to-use interface. Tables, cards, and animated visuals look stunning on Retina displays — making every session more enjoyable.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
    },
    {
      color: '#ec4899',
      title: 'iCloud Account Sync',
      desc: 'Your Teen Patti Gold profile, wallet, and progress sync seamlessly across iPhone and iPad — pick up where you left off on any iOS device.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />,
    },
  ];

  const steps = [
    {
      color: '#FFA500',
      title: 'Open Safari Browser',
      desc: 'First, open your browser (e.g. Safari) on your iPhone or iPad to begin the download process.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12l2 2 4-4" />,
    },
    {
      color: '#0ea5e9',
      title: 'Visit the Official Website',
      desc: 'Search for the official Teen Patti Gold website (teenpattigoldgame.com.pk) and open it. Always use the official source to avoid fake apps.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    },
    {
      color: '#4ade80',
      title: 'Tap the Download Button',
      desc: 'Once the website loads, tap the prominent Download button to start downloading Teen Patti Gold automatically to your device.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />,
    },
    {
      color: '#a855f7',
      title: 'Open Device Management',
      desc: 'Go to Settings → General → Device Management. Find the Teen Patti Gold developer profile in the list.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />,
    },
    {
      color: '#ec4899',
      title: 'Trust the Developer Profile',
      desc: 'Tap the Teen Patti Gold profile and choose "Trust This App". This authorises iOS to run the app on your device.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
    {
      color: '#f97316',
      title: 'Open the App',
      desc: 'Return to your home screen, tap the Teen Patti Gold app icon, and open the app. The login screen will appear.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    },
    {
      color: '#06b6d4',
      title: 'Register & Start Playing',
      desc: 'Create a new account or log in to your existing one, make your first deposit using JazzCash or EasyPaisa, and start playing games to earn real money.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
  ];

  const sysReqs = [
    { color: '#FFA500', label: 'Device', value: 'iPhone or iPad (iOS 12 or higher)' },
    { color: '#0ea5e9', label: 'Memory', value: 'At least 500 MB free space' },
    { color: '#4ade80', label: 'RAM', value: '4 GB recommended' },
    { color: '#a855f7', label: 'Internet', value: 'Strong Wi-Fi or 4G/5G connection' },
    { color: '#ec4899', label: 'Security', value: 'Trust developer profile in Settings' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iosBreadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iosHowToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iosFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iosImageGraphLd) }} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between md:gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#FFA500] border border-[#FFA500]/30">iOS 12+</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#0ea5e9] border border-[#0ea5e9]/30">iPhone &amp; iPad</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#4ade80] border border-[#4ade80]/30">Free</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#a855f7] border border-[#a855f7]/30">600k+ Downloads</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#FFA500]">Teen Patti Gold for iOS</span>
              <br />
              <span className="text-white">iPhone &amp; iPad Install Guide</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-[#FFA500] font-semibold hover:underline">Teen Patti Gold for iOS</Link> is a widely recognized online platform for playing card games like Teen Patti. Players love it for the easy interface, quick gameplay, and amazing features. The app works smoothly on every iOS device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
              >
                <span>DOWNLOAD FOR iOS</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
              <span className="self-center text-sm text-[#4ade80] font-semibold bg-[#0A1029] border border-[#4ade80]/30 px-4 py-2 rounded-full inline-flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                Quick install
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-10 md:mt-0 md:w-1/2">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/20 to-[#0ea5e9]/10 rounded-3xl blur-3xl pointer-events-none"></div>
              <Image
                src={LOGO_PATH_VERSIONED}
                alt="Teen Patti Gold for iOS"
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

      {/* Table of Contents */}
      <section id="toc" className="px-4 md:px-8 max-w-7xl mx-auto">
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
      </section>

      {/* Download Info Table */}
      <section id="ios-info" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFA500] to-[#f97316] flex items-center justify-center shadow-md shadow-[#FFA500]/20">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFA500] text-center">Download Info Table</h2>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto bg-secondary">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                {[
                  ['App Name', 'Teen Patti Gold'],
                  ['Developer', 'Teen Patti Gold dev'],
                  ['Category', 'Cards, Game'],
                  ['Size', '49 MB'],
                  ['Update', 'Today'],
                  ['Downloads', '600k+'],
                  ['Rating Count', '300,000+'],
                  ['Price', 'Free (Rs 0)'],
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

      {/* Key Features */}
      <section id="ios-features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Key Features of Teen Patti Gold for iOS</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Everything you need for a smooth, secure and rewarding card-game experience on iPhone and iPad.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ color, title, desc, icon }) => (
            <div key={title} className="group bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}0d)`, border: `1px solid ${color}40` }}>
                <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color }}>{title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Download on iOS */}
      <section id="ios-how-to" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">How to Download Teen Patti Gold on iOS?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Follow this 7-step guide to install Teen Patti Gold on your iPhone or iPad in under 10 minutes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(({ color, title, desc, icon }) => (
            <div key={title} className="group bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}0d)`, border: `1px solid ${color}40` }}>
                <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color }}>{title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{desc}</p>
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
            <span>DOWNLOAD NOW</span>
            <div className="ml-3 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* System Requirements */}
      <section id="ios-sysreq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">System Requirements</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Make sure your iOS device meets these specifications for smooth gameplay.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-secondary rounded-2xl p-6 md:p-8 border border-gray-800">
          <ul className="space-y-4">
            {sysReqs.map(({ color, label, value }) => (
              <li key={label} className="flex items-start gap-4 p-4 rounded-xl bg-[#0a1029]/60 border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}33, ${color}0d)`, border: `1px solid ${color}40` }}>
                  <svg className="w-5 h-5" fill="none" stroke={color} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-0.5">{label}</p>
                  <p className="text-gray-300 text-sm">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section id="ios-conclusion" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-8 md:p-10 border border-[#4ade80]/20 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#4ade80] to-[#16a34a]"></span>
              <h2 className="text-3xl font-bold text-[#4ade80]">Conclusion</h2>
            </div>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              Teen Patti Gold for iOS is a fun and thrilling card game for gaming fans in 2026. Downloading and installing it on iOS devices is a straightforward process if you follow all the steps correctly — and the app is free. Many iOS users love it for the smooth gaming experience. Always use the official website to get the real Teen Patti Gold app on iOS, play wisely, and set a fixed budget to avoid significant losses. With patience and a smart strategy, Teen Patti Gold on iOS can be both fun and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="ios-faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-2xl p-8 border border-gray-800">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center shadow-md shadow-[#0ea5e9]/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#FFA500] text-center">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion
            items={[
              { question: 'Is it free to download and install Teen Patti Gold on iOS?', answer: 'Yes, Teen Patti Gold is free to download and install on iOS. You do not need to pay anything to download or install the app.' },
              { question: 'Is Teen Patti Gold secure to play on iOS devices?', answer: 'Yes, Teen Patti Gold uses a modern security system to protect your account and funds. iOS devices also offer strong built-in security to protect your Teen Patti Gold account.' },
              { question: 'Is Teen Patti Gold a legit game to earn real money?', answer: 'Yes, Teen Patti Gold is a legitimate game for earning real money. Players in Pakistan regularly withdraw winnings via JazzCash and EasyPaisa with a minimum withdrawal of Rs 100.' },
              { question: 'Why does iOS show "Untrusted Developer" when I open the app?', answer: 'This is a normal iOS security check for apps installed outside the App Store. Go to Settings → General → Device Management, find the Teen Patti Gold profile, and tap "Trust" to authorise it.' },
              { question: 'Can I sync my Teen Patti Gold account between iPhone and iPad?', answer: 'Yes. Log in with the same registered phone number on both devices and your wallet, history, and chips will sync automatically.' },
            ]}
          />
        </div>
      </section>

      {/* Related Guides */}
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
              ['/download-teen-patti-gold-apk', 'Download Teen Patti Gold APK Latest Version'],
              ['/teen-patti-gold-for-pc', 'Teen Patti Gold for PC — Windows Guide'],
              ['/deposit-money-in-teen-patti-gold', 'How to Deposit Money in Teen Patti Gold'],
              ['/withdraw-money-from-teen-patti-gold', 'How to Withdraw Money from Teen Patti Gold'],
              ['/blog/create-teen-patti-gold-account-and-login', 'How to Create Teen Patti Gold Account'],
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
