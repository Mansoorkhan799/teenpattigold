import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LOGO_PATH_VERSIONED, DOWNLOAD_URL } from '@/lib/site-images';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_PC } from '@/lib/breadcrumb-schema';
import { imageObjectLicensing } from '@/lib/schema-image-licensing';
import FaqAccordion from '@/components/FaqAccordion';

const PC_PAGE_URL = 'https://teenpattigoldgame.com.pk/teen-patti-gold-for-pc';
const SITE_ORIGIN = 'https://teenpattigoldgame.com.pk';

// Licensed ImageObject for the brand image actually rendered on this page
// (LOGO_PATH_VERSIONED → /teen-patti-gold.webp). Re-uses the canonical
// `teen-patti-gold.webp#primary` @id so Google merges this with the
// matching node already declared on the home and APK pages.
const pcImageGraphLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageObject',
      '@id': `${SITE_ORIGIN}/teen-patti-gold.webp#primary`,
      url: `${SITE_ORIGIN}/teen-patti-gold.webp`,
      contentUrl: `${SITE_ORIGIN}/teen-patti-gold.webp`,
      name: 'Teen Patti Gold for PC - Play on Windows & Mac',
      description: 'Play Teen Patti Gold on PC using Android Emulator on Windows and Mac.',
      width: 512,
      height: 512,
      ...imageObjectLicensing,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: 'Teen Patti Gold for PC — Windows Play Guide Pakistan',
  },
  description:
    'Teen Patti Gold on PC in Pakistan via Android emulator. Bigger screen, same wallet — quick setup and official APK link for safer Teen Patti Gold play at home.',
  keywords: [
    'Teen Patti Gold for PC',
    'Teen Patti Gold PC download',
    'Teen Patti Gold Windows',
    'Teen Patti PC',
    'Card games for PC',
    'BlueStacks Teen Patti Gold',
    'Android Emulator card games'
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
    canonical: "https://teenpattigoldgame.com.pk/teen-patti-gold-for-pc",
  },
  openGraph: {
    title: 'Teen Patti Gold for PC — Windows Play Guide Pakistan',
    description:
      'Teen Patti Gold on PC in Pakistan via Android emulator. Bigger screen, same wallet — quick setup and official APK link for safer Teen Patti Gold play at home.',
    url: "https://teenpattigoldgame.com.pk/teen-patti-gold-for-pc",
    siteName: "Teen Patti Gold",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp',
        width: 400,
        height: 711,
        alt: 'Teen Patti Gold PC Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Patti Gold for PC — Windows Play Guide Pakistan',
    description:
      'Teen Patti Gold on PC in Pakistan via Android emulator. Bigger screen, same wallet — quick setup and official APK link for safer Teen Patti Gold play at home.',
    images: ['https://teenpattigoldgame.com.pk/teen-patti-gold-app.webp'],
  },
};

const pcBreadcrumbLd = getBreadcrumbSchema([BREADCRUMB_HOME, BREADCRUMB_PC]);

const pcFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is an emulator safe to use on a PC?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, emulators are generally safe if you download them from official websites such as bluestacks.com or ldplayer.net. Always download from the official source and keep the emulator updated.' } },
    { '@type': 'Question', name: 'Why is the APK not installing in the emulator?', acceptedAnswer: { '@type': 'Answer', text: 'If the Teen Patti Gold APK is not installing, make sure your emulator is properly configured and has enough storage space. Also ensure you have downloaded the latest version V1.656 from the official site and that your emulator supports Android 5.0 or higher.' } },
    { '@type': 'Question', name: 'Which emulator is best for Teen Patti Gold?', acceptedAnswer: { '@type': 'Answer', text: 'BlueStacks is the most recommended emulator for Teen Patti Gold due to its high performance, user-friendly interface, and excellent compatibility. For low-end PCs, LD Player is a great lightweight alternative that offers smooth gameplay.' } },
  ],
};

const pcHowToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Download and Play Teen Patti Gold on PC',
  description: 'Step-by-step guide to install and play Teen Patti Gold on a Windows PC using an Android emulator.',
  totalTime: 'PT15M',
  supply: [
    { '@type': 'HowToSupply', name: 'Windows 7 or higher PC' },
    { '@type': 'HowToSupply', name: 'Android Emulator (e.g. BlueStacks, LDPlayer)' },
    { '@type': 'HowToSupply', name: 'Teen Patti Gold APK' },
  ],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Visit the Official Website', text: 'Open the official Teen Patti Gold website at www.teenpattigoldgame.com.pk to get the latest APK.' },
    { '@type': 'HowToStep', position: 2, name: 'Install an Android Emulator', text: 'Download and install an Android emulator such as BlueStacks, LDPlayer, or Nox Player on your Windows PC.' },
    { '@type': 'HowToStep', position: 3, name: 'Download Teen Patti Gold APK', text: 'Download the latest version of the Teen Patti Gold APK from the official website.' },
    { '@type': 'HowToStep', position: 4, name: 'Install APK in the Emulator', text: 'Open the emulator, locate the "Install APK" option, and select the downloaded Teen Patti Gold APK file.' },
    { '@type': 'HowToStep', position: 5, name: 'Register and Start Playing', text: 'Once installed, open Teen Patti Gold inside the emulator, register or log in, and start playing on your PC.' },
  ],
};

export default function TeenPattiGoldForPCPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-for-pc#article",
    "headline": "Teen Patti Gold for PC Download Latest Version for free 2026",
    "description": "Complete guide to download and play Teen Patti Gold on PC using Android emulator. Learn about system requirements, best emulators, and features.",
    "image": { "@id": `${SITE_ORIGIN}/teen-patti-gold.webp#primary` },
    "author": { "@id": "https://teenpattigoldgame.com.pk/#organization" },
    "publisher": { "@id": "https://teenpattigoldgame.com.pk/#organization" },
    "datePublished": "2026-01-05",
    "dateModified": "2026-04-11",
    "mainEntityOfPage": { "@id": "https://teenpattigoldgame.com.pk/teen-patti-gold-for-pc#webpage" },
    "isPartOf": { "@id": "https://teenpattigoldgame.com.pk/#website" },
    "about": { "@type": "SoftwareApplication", "name": "Teen Patti Gold", "operatingSystem": "Windows 7 or higher", "applicationCategory": "GameApplication" },
    "articleSection": "Gaming",
    "keywords": "Teen Patti Gold for PC, Teen Patti Gold PC download, BlueStacks, Android Emulator, Teen Patti PC",
    "inLanguage": "en-PK"
  };

  const tocItems = [
    { href: '#pc-info', label: 'Download Info Table' },
    { href: '#pc-what-is', label: 'What is Teen Patti Gold?' },
    { href: '#pc-features', label: 'Key Features on PC' },
    { href: '#pc-how-to', label: 'How to Download on PC' },
    { href: '#pc-emulators', label: 'Top Emulators for Teen Patti Gold' },
    { href: '#pc-sysreq', label: 'System Requirements' },
    { href: '#pc-pros-cons', label: 'Pros and Cons of PC Play' },
    { href: '#pc-conclusion', label: 'Conclusion' },
    { href: '#pc-faq', label: 'Frequently Asked Questions' },
  ];

  const features = [
    {
      color: '#FFA500',
      title: 'Large Screen',
      desc: 'Playing 3 Patti games on a larger PC screen gives you a better, easier-to-view experience and less eye strain.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7 21.75h10l-1.121-1.371A3 3 0 0115 18.257V17.25m6-12V15a2 2 0 01-2 2H5a2 2 0 01-2-2V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />,
    },
    {
      color: '#4ade80',
      title: 'Better Performance',
      desc: 'PCs offer significantly more processing power and memory than phones, reducing lag, stutters, and crashes.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
    {
      color: '#60a5fa',
      title: 'Smooth Gameplay',
      desc: 'A mouse and keyboard give you more precise and comfortable control over the cards compared to touch.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />,
    },
    {
      color: '#f97316',
      title: 'Multitasking Support',
      desc: 'On PC you can play games while running other apps — chat, browse, or stream while you play Teen Patti Gold.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />,
    },
  ];

  const steps = [
    {
      color: '#FFA500',
      title: 'Visit the Official Website',
      desc: 'First, find the official website of Teen Patti Gold at teenpattigoldgame.com.pk to make sure you get a clean, verified APK file.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    },
    {
      color: '#0ea5e9',
      title: 'Install an Android Emulator',
      desc: 'Download and install a trusted Android emulator (BlueStacks, LDPlayer, or Nox Player) on your Windows PC from its official site.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
    {
      color: '#4ade80',
      title: 'Download Teen Patti Gold APK',
      desc: 'Download the latest version (V1.656) of the Teen Patti Gold APK from the official website to your PC.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />,
    },
    {
      color: '#a855f7',
      title: 'Install APK in the Emulator',
      desc: 'Open the emulator and locate the "Install APK" option (usually in the sidebar). Select the downloaded Teen Patti Gold APK file to install it.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      color: '#f97316',
      title: 'Register and Start Playing',
      desc: 'Once installed, open Teen Patti Gold inside the emulator, register a new account or log in to your existing one, and start playing on the big screen.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
  ];

  const emulators = [
    {
      color: '#FFA500',
      name: 'BlueStacks',
      desc: 'The most popular Android emulator for Windows. High performance, beginner-friendly interface, and excellent card-game compatibility.',
      tag: 'Recommended',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
    },
    {
      color: '#4ade80',
      name: 'LD Player',
      desc: 'Lightweight and fast. The best option for low-end PCs that still want smooth Teen Patti Gold gameplay without heavy resource usage.',
      tag: 'Lightweight',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
    {
      color: '#60a5fa',
      name: 'Nox Player',
      desc: 'Easy installation and good compatibility with card games. A solid alternative if BlueStacks does not work well on your machine.',
      tag: 'Easy Setup',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M9 12l2 2 4-4" />,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pcBreadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pcHowToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pcFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pcImageGraphLd) }} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between md:gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#FFA500] border border-[#FFA500]/30">v1.656</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#0ea5e9] border border-[#0ea5e9]/30">Windows 7+</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#4ade80] border border-[#4ade80]/30">Free</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#a855f7] border border-[#a855f7]/30">Emulator</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#FFA500]">Teen Patti Gold for PC</span>
              <br />
              <span className="text-white">Windows Emulator Setup Guide</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              The <Link href="/" className="text-[#FFA500] font-semibold hover:underline">Teen Patti Gold</Link> app is a popular platform where you can enjoy playing card games anytime. The platform offers a wide range of games like Classic Teen Patti, Andar Bahar, Dragon Tiger, Rummy, Poker, and other mini-games to play and earn real cash. Daily bonuses help you boost your balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
              >
                <span>DOWNLOAD APK</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </a>
              <span className="self-center text-sm text-[#4ade80] font-semibold bg-[#0A1029] border border-[#4ade80]/30 px-4 py-2 rounded-full inline-flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                Runs via emulator
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">*Run the official Android APK inside an emulator like BlueStacks.</p>
          </div>

          <div className="flex justify-center mt-10 md:mt-0 md:w-1/2">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/20 to-[#0ea5e9]/10 rounded-3xl blur-3xl pointer-events-none"></div>
              <Image
                src={LOGO_PATH_VERSIONED}
                alt="Teen Patti Gold for PC"
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
      <section id="pc-info" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
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
                  ['Category', 'Cards, Game'],
                  ['Size', '49 MB'],
                  ['Latest Version', 'V1.656(0)'],
                  ['Update', 'Today'],
                  ['Downloads', '600k+'],
                  ['Language', 'English, Urdu'],
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

      {/* What is Teen Patti Gold */}
      <section id="pc-what-is" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-8 md:p-10 border border-[#FFA500]/20 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#FFA500] to-[#f97316]"></span>
              <h2 className="text-3xl font-bold text-[#FFA500]">What is Teen Patti Gold?</h2>
            </div>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              The Teen Patti Gold app is available as an APK and is widely used on Android devices. You can also run the app on your PC for a better experience. The platform aims to make every session engaging so you never get bored. The official app is not available natively on PC, so you can use an Android emulator to run the app on Windows and enjoy the game on a bigger screen.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features on PC */}
      <section id="pc-features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Key Features of Teen Patti Gold on PC</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Using Teen Patti Gold on PC offers several advantages over a mobile-only setup.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map(({ color, title, desc, icon }) => (
            <div key={title} className="group bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}0d)`, border: `1px solid ${color}40` }}>
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

      {/* How to Download on PC */}
      <section id="pc-how-to" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">How to Download Teen Patti Gold on PC?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Follow these 5 simple steps to install Teen Patti Gold on your Windows PC using an Android emulator.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
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
            <span>DOWNLOAD APK</span>
            <div className="ml-3 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Top Emulators */}
      <section id="pc-emulators" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Top Emulators to Run Teen Patti Gold on PC</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Three trusted Android emulators that work great with Teen Patti Gold.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emulators.map(({ color, name, desc, tag, icon }) => (
            <div key={name} className="group relative bg-secondary rounded-2xl p-6 text-center border transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `${color}33` }}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}0d)`, border: `1px solid ${color}40` }}>
                <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color }}>{name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 inline-flex text-[#4ade80] text-xs font-semibold bg-[#4ade80]/10 border border-[#4ade80]/30 px-3 py-1.5 rounded-full">{tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* System Requirements */}
      <section id="pc-sysreq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">System Requirements to Run Teen Patti Gold on PC</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Minimum specs to install the emulator and APK, plus the recommended setup for the smoothest gameplay.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                ['Operating System', 'Windows 7 or higher'],
                ['Processor', 'Intel / AMD Dual Core'],
                ['RAM', '4 GB'],
                ['Storage', '5 GB free space'],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#FFA500] mt-2"></span>
                  <span><strong className="text-white">{k}:</strong> {v}</span>
                </li>
              ))}
            </ul>
          </div>
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
                ['Operating System', 'Windows 10 or 11'],
                ['Processor', 'Intel Core i5 or higher'],
                ['RAM', '8 GB or more'],
                ['Storage', 'SSD storage for best performance'],
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

      {/* Pros and Cons */}
      <section id="pc-pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Pros and Cons of Playing Teen Patti Gold on PC</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">A balanced look at what you gain — and what to watch out for — when you play on a Windows PC.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary rounded-2xl p-6 md:p-7 border border-[#4ade80]/30">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-800">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#4ade80]/20 to-[#4ade80]/5 border border-[#4ade80]/40">
                <svg className="w-5 h-5 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4ade80]">Pros</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Better UI experience on a large screen',
                'No battery limitations during long sessions',
                'Easy multitasking with other apps',
                'Ideal for longer gaming sessions',
                'Mouse and keyboard precision',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <svg className="w-4 h-4 text-[#4ade80] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary rounded-2xl p-6 md:p-7 border border-[#ef4444]/30">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-800">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#ef4444]/20 to-[#ef4444]/5 border border-[#ef4444]/40">
                <svg className="w-5 h-5 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#ef4444]">Cons</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Requires emulator installation and setup',
                'Security risk if downloaded from unknown sources',
                'Higher RAM and CPU requirements vs phone',
                'Some animations may run slower on weaker PCs',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                  <svg className="w-4 h-4 text-[#ef4444] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section id="pc-conclusion" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-8 md:p-10 border border-[#4ade80]/20 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#4ade80] to-[#16a34a]"></span>
              <h2 className="text-3xl font-bold text-[#4ade80]">Conclusion</h2>
            </div>
            <p className="text-gray-200 leading-relaxed text-base md:text-lg">
              If you want better performance and a high-quality user interface, you can use Teen Patti Gold on PC. The emulator setup can feel confusing for beginners, but once installed you can enjoy a much better experience. Using the Teen Patti Gold APK on PC gives you a larger screen and smooth control over gameplay with fewer interruptions — perfect for long earning sessions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="pc-faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
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
              { question: 'Is an emulator safe to use on a PC?', answer: 'Yes, emulators are generally safe if you download them from official websites such as bluestacks.com or ldplayer.net. Always download from the official source and keep the emulator updated.' },
              { question: 'Why is the APK not installing in the emulator?', answer: 'If the Teen Patti Gold APK is not installing, make sure your emulator is properly configured and has enough storage space. Also ensure you have downloaded the latest version 1.224(1) from the official site and that your emulator supports Android 5.0 or higher.' },
              { question: 'Which emulator is best for Teen Patti Gold?', answer: 'BlueStacks is the most recommended emulator for Teen Patti Gold due to its high performance, user-friendly interface, and excellent compatibility. For low-end PCs, LD Player is a great lightweight alternative that offers smooth gameplay.' },
              { question: 'Can I use the same Teen Patti Gold account on PC and phone?', answer: 'Yes. Log in with the same registered phone number and password and your wallet, history, and chips sync across both devices.' },
              { question: 'Do I need a separate APK for PC?', answer: 'No. The same official Teen Patti Gold APK works inside the emulator on your PC — there is no separate Windows installer required.' },
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
              ['/deposit-money-in-teen-patti-gold', 'How to Deposit Money in Teen Patti Gold'],
              ['/withdraw-money-from-teen-patti-gold', 'How to Withdraw Money from Teen Patti Gold'],
              ['/teen-patti-gold-for-ios', 'Teen Patti Gold for iOS — iPhone Guide'],
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
