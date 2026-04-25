import { Metadata } from 'next';
import Link from 'next/link';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_DEPOSIT } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: {
    absolute: 'How to Deposit Money in Teen Patti Gold APK Pakistan?',
  },
  description:
    'Add chips to your Teen Patti Gold wallet from Rs 100 in seconds. JazzCash, EasyPaisa and bank card top-ups, with welcome and reload bonus eligibility for Pakistan players.',
  keywords: ['deposit money teen patti gold', 'teen patti gold payment methods', 'jazzcash deposit teen patti gold', 'easypaisa deposit teen patti gold', 'add funds teen patti gold', 'teen patti gold recharge', 'teen patti gold deposit pakistan'],
  openGraph: {
    title: 'How to Deposit Money in Teen Patti Gold APK Pakistan?',
    description:
      'Add chips to your Teen Patti Gold wallet from Rs 100 in seconds. JazzCash, EasyPaisa and bank card top-ups, with welcome and reload bonus eligibility for Pakistan players.',
    url: 'https://teenpattigoldgame.com.pk/deposit-money-in-teen-patti-gold',
    siteName: 'Teen Patti Gold',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/teen-patti-gold.webp?v=2',
        width: 512, height: 512,
        alt: 'Deposit money Teen Patti Gold Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Deposit Money in Teen Patti Gold APK Pakistan?',
    description:
      'Add chips to your Teen Patti Gold wallet from Rs 100 in seconds. JazzCash, EasyPaisa and bank card top-ups, with welcome and reload bonus eligibility for Pakistan players.',
    images: ['https://teenpattigoldgame.com.pk/teen-patti-gold.webp?v=2'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://teenpattigoldgame.com.pk/deposit-money-in-teen-patti-gold',
  },
};

const depositBreadcrumbLd = getBreadcrumbSchema([BREADCRUMB_HOME, BREADCRUMB_DEPOSIT]);

const DOWNLOAD_URL = 'https://teenpattigold99.com?from_gameid=8442895&channelCode=100000';

export default function DepositMoneyPage() {
  const tocItems = [
    { href: '#deposit-intro', label: 'Introduction to Deposits' },
    { href: '#deposit-steps', label: 'Steps to Deposit Money' },
    { href: '#deposit-methods', label: 'Supported Payment Methods' },
    { href: '#deposit-tips', label: 'Tips for Secure Deposits' },
    { href: '#deposit-conclusion', label: 'Conclusion' },
    { href: '#deposit-faq', label: 'Frequently Asked Questions' },
  ];

  const steps = [
    {
      color: '#FFA500',
      title: 'Open Teen Patti Gold App',
      desc: 'First, open the Teen Patti Gold app on your Android device. Your internet connection must be stable to open the app. Log in to your account by entering your registered phone number and password.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    },
    {
      color: '#0ea5e9',
      title: 'Click on Shop Option',
      desc: 'After logging in, your dashboard will appear, where you can see many options and different games. Click on the shop button to start the depositing process.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
    },
    {
      color: '#4ade80',
      title: 'Select Payment Method',
      desc: 'After clicking the shop button, a deposit page opens, showing payment methods and options. Choose a payment method, like JazzCash, EasyPaisa, or Bank Card where shown, that you can use easily.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    },
    {
      color: '#a855f7',
      title: 'Choose Amount',
      desc: 'After selecting the payment method, choose the amount you can afford. There are many options like Rs 200, Rs 500, Rs 1,000, or Rs 2,000.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      color: '#ec4899',
      title: 'Click on Add Chips',
      desc: 'After entering the deposit details, click the Add Chips option. You will be redirected to the payment page, where you need to enter the account number that you want to use for payment. Click on the submit button to confirm the deposit.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      color: '#f97316',
      title: 'Approve Payment',
      desc: 'After clicking the submit button, you will receive a payment request on your selected account. Log in to your account and approve the payment request that you have received from Teen Patti Gold.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
    {
      color: '#06b6d4',
      title: 'Wait for Payment to Complete',
      desc: 'After approving the payment request, the deposit will be added to your Teen Patti Gold account instantly. Sometimes it can take longer due to payment delays or network issues. Once received, you can use it to play games without any hurdles.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
  ];

  const methods = [
    {
      color: '#FFA500',
      name: 'JazzCash',
      desc: 'Pakistan\u2019s most widely used mobile wallet. Approve the deposit from your JazzCash app and chips arrive in seconds.',
      meta: 'Min: Rs 200',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    },
    {
      color: '#4ade80',
      name: 'EasyPaisa',
      desc: 'Telenor\u2019s trusted digital wallet. Quick OTP confirmation makes it ideal for fast top-ups before a Teen Patti or Rummy session.',
      meta: 'Min: Rs 200',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    },
    {
      color: '#60a5fa',
      name: 'Bank Card',
      desc: 'Use your bank card to top up larger amounts when you need a bigger bankroll. Subject to bank limits.',
      meta: 'Per txn: up to Rs 20,000',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    },
  ];

  const tips = [
    {
      color: '#FFA500',
      title: 'Use Your Own Wallet',
      desc: 'Always use your own personal mobile wallet to add funds. Never deposit on behalf of someone else.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    },
    {
      color: '#0ea5e9',
      title: 'Strong Internet Connection',
      desc: 'Use a stable Wi-Fi or 4G connection during the deposit so the payment confirmation does not time out.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />,
    },
    {
      color: '#4ade80',
      title: 'Never Share Your PIN',
      desc: 'Do not share your mobile wallet PIN, OTP, or login password with anyone — not even Teen Patti Gold staff.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
    },
    {
      color: '#a855f7',
      title: 'Start Small as a Beginner',
      desc: 'If you are new, start with the minimum Rs 200 deposit so you can learn the table dynamics without risking too much.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
    },
    {
      color: '#ec4899',
      title: 'Manage Your Funds Wisely',
      desc: 'Set a daily play limit and stop when you hit it. Responsible bankroll management keeps the game fun.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(depositBreadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the minimum deposit amount in Teen Patti Gold?", "acceptedAnswer": { "@type": "Answer", "text": "The minimum deposit amount in Teen Patti Gold is Rs 200. You can deposit Rs 200, Rs 500, Rs 1000, or Rs 2000 using JazzCash or EasyPaisa." } },
          { "@type": "Question", "name": "How long does it take for the deposit to reflect in Teen Patti Gold?", "acceptedAnswer": { "@type": "Answer", "text": "Deposits in Teen Patti Gold are processed instantly. After approving the payment in your JazzCash or EasyPaisa wallet, the chips are added to your account within a few seconds." } },
          { "@type": "Question", "name": "Which payment methods are supported for Teen Patti Gold deposits in Pakistan?", "acceptedAnswer": { "@type": "Answer", "text": "Teen Patti Gold supports JazzCash and EasyPaisa for deposits in Pakistan. These are the safest and fastest payment methods available for Pakistani players." } },
          { "@type": "Question", "name": "Is it safe to deposit money in Teen Patti Gold?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, depositing money in Teen Patti Gold is completely safe. The platform uses secure payment gateways and your transaction data is fully encrypted. Always use the official app from teenpattigoldgame.com.pk." } },
          { "@type": "Question", "name": "Can I get a refund on my deposit in Teen Patti Gold?", "acceptedAnswer": { "@type": "Answer", "text": "Deposits are generally non-refundable once processed. If you face any issues with a deposit, contact customer support immediately with your transaction reference number." } }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Deposit Money in Teen Patti Gold",
        "description": "Step-by-step guide to deposit money in Teen Patti Gold using JazzCash, EasyPaisa, or Bank Card.",
        "step": steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.title, "text": s.desc })),
      }) }} />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#FFA500] border border-[#FFA500]/30">JazzCash</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#4ade80] border border-[#4ade80]/30">EasyPaisa</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#60a5fa] border border-[#60a5fa]/30">Bank Card</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#a855f7] border border-[#a855f7]/30">Min Rs 200</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#FFA500]">How to Deposit Money</span>
            <br />
            <span className="text-white">in Teen Patti Gold?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Quick, safe and easy top-ups using <strong className="text-white">JazzCash</strong>, <strong className="text-white">EasyPaisa</strong> and <strong className="text-white">Bank Card</strong>. Add chips and start playing real-money games on <Link href="/" className="text-[#FFA500] font-semibold hover:underline">Teen Patti Gold</Link> in under a minute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
            >
              <span>DOWNLOAD &amp; DEPOSIT</span>
              <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </Link>
            <span className="text-sm text-[#4ade80] font-semibold bg-[#0A1029] border border-[#4ade80]/30 px-4 py-2 rounded-full inline-flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              Instant chip credit
            </span>
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

      {/* Introduction */}
      <section id="deposit-intro" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-8 md:p-10 border border-[#FFA500]/20 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#FFA500] to-[#f97316]"></span>
              <h2 className="text-3xl font-bold text-[#FFA500]">Introduction to Deposits</h2>
            </div>
            <div className="space-y-5 text-gray-200 leading-relaxed text-base md:text-lg">
              <p>
                <Link href="/" className="text-[#FFA500] hover:underline font-semibold">Teen Patti Gold</Link> is an exciting online card game platform where users can play many amazing games daily. You need to deposit money to enjoy the real-money tables. Adding funds to Teen Patti Gold is very easy because the app offers quick and safe payment methods including <strong className="text-white">JazzCash</strong> and <strong className="text-white">EasyPaisa</strong>. For withdrawals you can also use <strong className="text-white">Bank Card</strong> to receive winnings in your bank account (up to PKR 20,000 per transaction) — see our <Link href="/withdraw-money-from-teen-patti-gold" className="text-[#FFA500] hover:underline font-semibold">withdrawal guide</Link> for details.
              </p>
              <p>
                Teen Patti Gold offers a simple deposit method that all new players can use without any confusion. It takes only a few minutes and your money will be added immediately. The 7-step flow below walks you through the entire process from opening the app to chips arriving in your wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Deposit Money */}
      <section id="deposit-steps" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Steps to Deposit Money in Teen Patti Gold</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Follow these 7 simple steps to top up your Teen Patti Gold wallet in under a minute.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
      </section>

      {/* Supported Payment Methods */}
      <section id="deposit-methods" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Supported Payment Methods</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Teen Patti Gold supports Pakistan&apos;s most trusted payment platforms. All transactions are encrypted and processed securely.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map(({ color, name, desc, meta, icon }) => (
            <div key={name} className="group relative bg-secondary rounded-2xl p-6 text-center border transition-all duration-300 hover:-translate-y-1" style={{ borderColor: `${color}33` }}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-md transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}0d)`, border: `1px solid ${color}40` }}>
                <svg className="w-6 h-6" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color }}>{name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 inline-flex text-[#4ade80] text-xs font-semibold bg-[#4ade80]/10 border border-[#4ade80]/30 px-3 py-1.5 rounded-full">{meta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips for Secure Deposits */}
      <section id="deposit-tips" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Tips for Secure Deposits</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Follow these five rules to keep every top-up safe and your account protected.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map(({ color, title, desc, icon }) => (
            <div key={title} className="group bg-secondary rounded-2xl p-6 border border-gray-800 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${color}33, ${color}0d)`, border: `1px solid ${color}40` }}>
                <svg className="w-5 h-5" fill="none" stroke={color} viewBox="0 0 24 24">{icon}</svg>
              </div>
              <h3 className="text-white font-bold mb-1.5">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section id="deposit-conclusion" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-8 md:p-10 border border-[#4ade80]/20 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4ade80]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#4ade80] to-[#16a34a]"></span>
              <h2 className="text-3xl font-bold text-[#4ade80]">Conclusion</h2>
            </div>
            <div className="space-y-5 text-gray-200 leading-relaxed text-base md:text-lg">
              <p>
                Adding funds to Teen Patti Gold is a fast and easy process if you follow all the steps correctly. You simply need to open the app, tap the Shop button, choose a payment method, enter your account details, and approve the request to deposit money into your account.
              </p>
              <p>
                Always use real, secure payment methods so your top-up stays safe and chips reach your wallet instantly. New users can easily fund their accounts and start playing real-money games by following the proper steps above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="deposit-faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
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
              { q: "What is the minimum deposit amount in Teen Patti Gold?", a: "The minimum deposit amount in Teen Patti Gold is Rs 200. You can choose from Rs 200, Rs 500, Rs 1,000, or Rs 2,000 using JazzCash or EasyPaisa." },
              { q: "How can we add money to our Teen Patti Gold account?", a: "Open the app, tap the Shop option, select your payment method (JazzCash or EasyPaisa), choose an amount, tap Add Chips, enter your account number, and approve the payment request. Chips are credited instantly." },
              { q: "How long does it take for the deposit to reflect?", a: "Deposits are processed instantly. After approving the payment in your JazzCash or EasyPaisa wallet, chips appear in your account within seconds." },
              { q: "Which payment methods are supported in Pakistan?", a: "Teen Patti Gold supports JazzCash and EasyPaisa for deposits in Pakistan. These are the fastest and most secure options for Pakistani players." },
              { q: "Is it safe to deposit money in Teen Patti Gold?", a: "Yes. Teen Patti Gold uses encrypted, secure payment gateways. Always download the app from the official site teenpattigoldgame.com.pk to stay protected." },
              { q: "Can I get a refund if the deposit fails?", a: "If money is deducted but chips are not credited, contact customer support immediately with your transaction reference number for a quick resolution." }
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
              ['/withdraw-money-from-teen-patti-gold', 'How to Withdraw Money from Teen Patti Gold'],
              ['/teen-patti-gold-for-pc', 'Teen Patti Gold for PC — Windows Guide'],
              ['/teen-patti-gold-for-ios', 'Teen Patti Gold for iOS — iPhone Guide'],
              ['/blog/create-teen-patti-gold-account-and-login', 'How to Create Teen Patti Gold Account'],
              ['/blog/how-to-earn-money-from-teen-patti-gold', 'How to Earn Money on Teen Patti Gold'],
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
