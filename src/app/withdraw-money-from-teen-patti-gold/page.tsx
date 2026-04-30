import { Metadata } from 'next';
import Link from 'next/link';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_WITHDRAW } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: {
    absolute: 'How to Withdraw Money from Teen Patti Gold APK Pakistan?',
  },
  description:
    'Cash out your Teen Patti Gold winnings from Rs 100. Send payouts straight to JazzCash, EasyPaisa or your Pakistani bank — typical processing in 3 to 24 hours.',
  keywords: ['withdraw money teen patti gold', 'teen patti gold withdrawal', 'jazzcash withdrawal teen patti gold', 'easypaisa withdrawal teen patti gold', 'cash out teen patti gold', 'teen patti gold payout pakistan', 'teen patti gold minimum withdrawal'],
  openGraph: {
    title: 'How to Withdraw Money from Teen Patti Gold APK Pakistan?',
    description:
      'Cash out your Teen Patti Gold winnings from Rs 100. Send payouts straight to JazzCash, EasyPaisa or your Pakistani bank — typical processing in 3 to 24 hours.',
    url: 'https://teenpattigoldgame.com.pk/withdraw-money-from-teen-patti-gold',
    siteName: 'Teen Patti Gold',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/teen-patti-gold.webp?v=2',
        width: 512, height: 512,
        alt: 'Withdraw Teen Patti Gold Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Withdraw Money from Teen Patti Gold APK Pakistan?',
    description:
      'Cash out your Teen Patti Gold winnings from Rs 100. Send payouts straight to JazzCash, EasyPaisa or your Pakistani bank — typical processing in 3 to 24 hours.',
    images: ['https://teenpattigoldgame.com.pk/teen-patti-gold.webp?v=2'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    canonical: 'https://teenpattigoldgame.com.pk/withdraw-money-from-teen-patti-gold',
  },
};

const withdrawBreadcrumbLd = getBreadcrumbSchema([BREADCRUMB_HOME, BREADCRUMB_WITHDRAW]);

const DOWNLOAD_URL = 'https://teenpattigold99.com?from_gameid=8442895&channelCode=100000';

export default function WithdrawMoneyPage() {
  const tocItems = [
    { href: '#withdraw-intro', label: 'Introduction to Withdrawals' },
    { href: '#withdraw-steps', label: 'Step-By-Step Withdrawal Guide' },
    { href: '#withdraw-methods', label: 'Withdrawal Payment Methods' },
    { href: '#withdraw-tips', label: 'Tips for Efficient Payouts' },
    { href: '#withdraw-conclusion', label: 'Conclusion' },
    { href: '#withdraw-faq', label: 'Frequently Asked Questions' },
  ];

  const steps = [
    {
      color: '#FFA500',
      title: 'Open Teen Patti Gold App',
      desc: 'First, open the Teen Patti Gold app on your phone and log in to your account using your registered mobile number and password. You must have a strong internet connection to avoid login issues.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    },
    {
      color: '#0ea5e9',
      title: 'Click on Wallet Option',
      desc: 'After logging in to your Teen Patti Gold account, click on the Wallet option. You will see your current balance and other options such as the Withdraw and Deposit buttons.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    },
    {
      color: '#4ade80',
      title: 'Choose Withdraw Button',
      desc: 'After clicking on the Wallet option, choose the Withdraw button to start the withdrawal process. You will see different options such as payment methods and payment amounts.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
    },
    {
      color: '#a855f7',
      title: 'Type the Amount',
      desc: 'Type the amount you want to cash out. It must be within withdrawal limits. Review your winnings before typing the withdrawal amount.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      color: '#ec4899',
      title: 'Select Payment Method',
      desc: 'Teen Patti Gold provides many payment methods including EasyPaisa, JazzCash, and Bank Card (bank transfer). Select the payment method that you want to use.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    },
    {
      color: '#f97316',
      title: 'Enter Payment Details',
      desc: 'Now enter your account information including account number and name. Enter the correct payment details to avoid problems in the withdrawal process.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
    },
    {
      color: '#06b6d4',
      title: 'Confirm Payout',
      desc: 'Re-check all withdrawal details carefully. If the information is correct, confirm your withdrawal by clicking on the Withdraw button.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
    {
      color: '#facc15',
      title: 'Wait for Processing',
      desc: 'After confirming the withdrawal, Teen Patti Gold will start processing your request. It usually takes 24 hours or less. It may take longer due to network issues or payment delays.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      color: '#4ade80',
      title: 'Check Your Account',
      desc: 'After the withdrawal is processed successfully, you will receive your payment in your personal account. Check your account, and once you have received the money, you can use it however you like.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
    },
  ];

  const methods = [
    {
      color: '#FFA500',
      name: 'JazzCash',
      desc: 'Cash out winnings to your JazzCash mobile wallet. Fast processing and instant access to funds without needing a bank account.',
      meta: 'Min Rs 100 · Fastest',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    },
    {
      color: '#4ade80',
      name: 'EasyPaisa',
      desc: 'Send earnings to your EasyPaisa wallet for quick collection. Trusted by millions of Pakistani users for digital payments.',
      meta: 'Min Rs 100 · Fast',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
    },
    {
      color: '#60a5fa',
      name: 'Bank Card',
      desc: 'Bank Card lets you send winnings directly to your bank account. Choose your bank, enter account number, name, and email, then submit. Ideal for larger payouts.',
      meta: 'Max Rs 20,000 / txn',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
    },
  ];

  const tips = [
    {
      color: '#FFA500',
      title: 'Match Account Details',
      desc: 'Use the same account information that you used to create your Teen Patti Gold account. Mismatched names cause payout failures.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
    },
    {
      color: '#0ea5e9',
      title: 'Avoid Tiny Amounts',
      desc: 'Do not cash out very small amounts repeatedly to save processing time. Batch your winnings into fewer larger withdrawals.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />,
    },
    {
      color: '#4ade80',
      title: 'Keep the App Updated',
      desc: 'Run the latest version of the Teen Patti Gold app to ensure smooth payouts and access to the newest payment improvements.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
    },
    {
      color: '#a855f7',
      title: 'Verify Your Account',
      desc: 'Make sure your Teen Patti Gold account is fully verified. Unverified accounts may face delays or be unable to withdraw.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
    {
      color: '#ec4899',
      title: 'Contact Support if Delayed',
      desc: 'If you do not receive payment within the expected window, contact customer support with your transaction reference number.',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(withdrawBreadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the minimum withdrawal amount in Teen Patti Gold?", "acceptedAnswer": { "@type": "Answer", "text": "The minimum withdrawal amount in Teen Patti Gold is Rs 100. You can withdraw through JazzCash, EasyPaisa, or Bank Card (up to Rs 20,000 per bank transaction)." } },
          { "@type": "Question", "name": "How long does it take to receive a withdrawal from Teen Patti Gold?", "acceptedAnswer": { "@type": "Answer", "text": "Teen Patti Gold typically processes withdrawals within 3 to 24 hours. JazzCash and EasyPaisa withdrawals are usually faster than bank transfers." } },
          { "@type": "Question", "name": "Which payment methods support Teen Patti Gold withdrawals in Pakistan?", "acceptedAnswer": { "@type": "Answer", "text": "Teen Patti Gold supports three withdrawal methods in Pakistan: JazzCash, EasyPaisa, and Bank Card (bank transfer). JazzCash and EasyPaisa are the fastest options." } },
          { "@type": "Question", "name": "What is the maximum withdrawal per transaction in Teen Patti Gold?", "acceptedAnswer": { "@type": "Answer", "text": "For bank card withdrawals, the maximum per transaction is PKR 20,000. JazzCash and EasyPaisa have their own transaction limits set by the mobile wallet provider." } },
          { "@type": "Question", "name": "What should I do if my withdrawal fails in Teen Patti Gold?", "acceptedAnswer": { "@type": "Answer", "text": "If your withdrawal fails, first verify your payment details are correct. If the issue persists, contact Teen Patti Gold customer support with your transaction reference number for assistance." } }
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Withdraw Money from Teen Patti Gold",
        "description": "Step-by-step guide to withdraw money from Teen Patti Gold using JazzCash, EasyPaisa, and Bank Transfer.",
        "totalTime": "PT10M",
        "supply": [
          { "@type": "HowToSupply", "name": "Teen Patti Gold app with available balance" },
          { "@type": "HowToSupply", "name": "JazzCash, EasyPaisa, or Bank Card account" },
          { "@type": "HowToSupply", "name": "Minimum Rs 100 withdrawal balance" },
        ],
        "step": steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.title, "text": s.desc })),
      }) }} />

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#FFA500] border border-[#FFA500]/30">JazzCash</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#4ade80] border border-[#4ade80]/30">EasyPaisa</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#60a5fa] border border-[#60a5fa]/30">Bank Card</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#0A1029] text-[#a855f7] border border-[#a855f7]/30">Min Rs 100</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#FFA500]">How to Withdraw Money</span>
            <br />
            <span className="text-white">from Teen Patti Gold?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Fast, secure cash-outs via <strong className="text-white">JazzCash</strong>, <strong className="text-white">EasyPaisa</strong> and <strong className="text-white">Bank Card</strong>. Cash out your <Link href="/" className="text-[#FFA500] font-semibold hover:underline">Teen Patti Gold</Link> winnings in 3–24 hours with our step-by-step guide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-white font-bold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
            >
              <span>DOWNLOAD &amp; EARN</span>
              <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </Link>
            <span className="text-sm text-[#4ade80] font-semibold bg-[#0A1029] border border-[#4ade80]/30 px-4 py-2 rounded-full inline-flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              Payouts in 3–24 hours
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
      <section id="withdraw-intro" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-secondary via-secondary to-[#0a1029] rounded-2xl p-8 md:p-10 border border-[#FFA500]/20 shadow-xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#FFA500] to-[#f97316]"></span>
              <h2 className="text-3xl font-bold text-[#FFA500]">Introduction to Withdrawals</h2>
            </div>
            <div className="space-y-5 text-gray-200 leading-relaxed text-base md:text-lg">
              <p>
                <Link href="/" className="text-[#FFA500] hover:underline font-semibold">Teen Patti Gold</Link> is a well-known online card game that offers many variants of Teen Patti and allows players to earn real money. Many players play it to earn extra income. Once you win, the first step is to cash out your funds securely.
              </p>
              <p>
                New players sometimes feel confused when they try to withdraw cash from Teen Patti Gold, but the withdrawal process is straightforward — anyone can do it without confusion. You can send your earnings to your personal accounts via <strong className="text-white">EasyPaisa</strong>, <strong className="text-white">JazzCash</strong>, or <strong className="text-white">Bank Card</strong> to your bank account. Follow all steps correctly and provide accurate information to receive your winnings without issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step */}
      <section id="withdraw-steps" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Step-By-Step Guide to Withdraw Money</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Follow these 9 simple steps to cash out your Teen Patti Gold winnings safely.</p>
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
      </section>

      {/* Withdrawal Payment Methods */}
      <section id="withdraw-methods" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Withdrawal Payment Methods</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Three secure ways to cash out your earnings — pick the one that suits you best.</p>
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

      {/* Tips */}
      <section id="withdraw-tips" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFA500] mb-3">Tips for Efficient Payouts</h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">Follow these five rules to keep every withdrawal smooth and quick.</p>
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
      <section id="withdraw-conclusion" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
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
                Cashing out funds from Teen Patti Gold is very easy if you know the proper steps. Always re-check your account information and select a real payment method. You can enjoy your earnings without trouble if you follow the whole process correctly.
              </p>
              <p>
                Follow all rules and withdrawal limits to avoid problems. Teen Patti Gold provides safe, quick withdrawals to all its users. You can securely collect your winnings and continue enjoying your favorite games by following the simple steps above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="withdraw-faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
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
              { q: "What is the minimum withdrawal amount in Teen Patti Gold?", a: "The minimum withdrawal in Teen Patti Gold is Rs 100. You can cash out via JazzCash, EasyPaisa, or Bank Card (up to Rs 20,000 per bank transaction)." },
              { q: "How long does it take to receive a withdrawal?", a: "Withdrawals are typically processed within 3 to 24 hours. JazzCash and EasyPaisa payments are usually faster than bank transfers." },
              { q: "Which payment methods support withdrawals in Pakistan?", a: "Teen Patti Gold supports JazzCash, EasyPaisa, and Bank Card (bank transfer) for withdrawals in Pakistan. JazzCash and EasyPaisa are the quickest options." },
              { q: "What is the maximum withdrawal per transaction?", a: "For bank card withdrawals, the maximum per transaction is PKR 20,000. JazzCash and EasyPaisa limits depend on your wallet tier." },
              { q: "What should I do if my withdrawal fails?", a: "First verify your payment details are correct. If the issue persists, contact Teen Patti Gold customer support with your transaction reference number for a quick resolution." }
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
              ['/deposit-money-in-teen-patti-gold', 'How to Deposit Money in Teen Patti Gold'],
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
