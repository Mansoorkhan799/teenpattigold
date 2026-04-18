import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LOGO_URL, LOGO_PATH_VERSIONED, DOWNLOAD_URL, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from '@/lib/site-images';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_APK } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: {
    absolute: 'Download Teen Patti Gold APK Latest Version Free 2026',
  },
  description:
    'Download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan. Play 30+ card games — Teen Patti, Rummy, Dragon Tiger. Earn real cash via JazzCash & EasyPaisa.',
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
    title: 'Download Teen Patti Gold APK Latest Version Free 2026',
    description:
      'Download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan. Play 30+ card games — Teen Patti, Rummy, Dragon Tiger. Earn real cash via JazzCash & EasyPaisa.',
    url: 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk',
    siteName: 'Teen Patti Gold',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: LOGO_URL,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: 'Teen Patti Gold APK Latest Version Download Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Teen Patti Gold APK Latest Version Free 2026',
    description:
      'Download Teen Patti Gold APK latest version V1.656 free for Android in Pakistan. Play 30+ card games — Teen Patti, Rummy, Dragon Tiger. Earn real cash via JazzCash & EasyPaisa.',
    images: [LOGO_URL],
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
    ratingCount: '300000',
    bestRating: '5',
  },
  downloadUrl: DOWNLOAD_URL,
  softwareVersion: 'V1.656(0)',
  fileSize: '49MB',
  datePublished: '2026-01-05',
  description:
    'Teen Patti Gold APK — Play 30+ card games including Teen Patti, Rummy, and Dragon Tiger. Earn real money with JazzCash & EasyPaisa withdrawals in Pakistan.',
  image: LOGO_URL,
  author: {
    '@type': 'Organization',
    name: 'Teen Patti Gold',
    url: 'https://teenpattigoldgame.com.pk',
  },
  inLanguage: ['en', 'ur'],
  countriesSupported: 'PK',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Download Teen Patti Gold APK Latest Version on Android',
  description: 'Step-by-step guide to download and install the latest Teen Patti Gold APK on Android devices in Pakistan.',
  totalTime: 'PT5M',
  supply: [
    { '@type': 'HowToSupply', name: 'Android device (Android 5.0+)' },
    { '@type': 'HowToSupply', name: 'Stable internet connection' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Tap the Download Button',
      text: 'Click the Download Now button on this page to start downloading the Teen Patti Gold APK V1.656 file.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Enable Unknown Sources',
      text: 'Go to Settings > Security > enable "Install from Unknown Sources" or "Allow from this source" on your Android device.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Open the APK File',
      text: 'Open your Downloads folder in the File Manager, find the Teen Patti Gold APK, and tap it to begin installation.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Install the App',
      text: 'Tap Install and wait a few seconds for the installation to complete automatically.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Register and Start Playing',
      text: 'Open Teen Patti Gold, create a new account with your mobile number, make your first deposit, and start earning real money.',
    },
  ],
};

const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk',
  'speakable': {
    '@type': 'SpeakableSpecification',
    'cssSelector': ['#apk-what-is', '#apk-why-download'],
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

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between md:gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#FFA500]">Teen Patti Gold APK</span>
              <br />
              <span className="text-white">Latest Version Free Download 2026</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-[#FFA500] font-semibold hover:underline">Teen Patti Gold</Link> is Pakistan&apos;s most popular online card game app. Download the latest APK V1.656 free for Android and play 30+ exciting games like Teen Patti, Rummy, and Dragon Tiger. Earn real cash and withdraw instantly via JazzCash & EasyPaisa.
            </p>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFA500]">500K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFA500]">4.5★</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFA500]">30+</div>
                <div className="text-gray-400 text-sm">Games</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFA500]">49MB</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
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
              <span className="self-center text-sm text-[#4ade80] font-semibold bg-[#0A1029] px-4 py-2 rounded-full">
                ✓ Free · Android 5.0+ · 49MB
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">*Available for Android devices only.</p>
          </div>

          <div className="flex justify-center mt-10 md:mt-0 md:w-1/2">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <Image
                src={LOGO_PATH_VERSIONED}
                alt="Teen Patti Gold APK Latest Version Download Pakistan"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl rounded-3xl w-full h-full"
                priority
                fetchPriority="high"
                quality={75}
              />
            </div>
          </div>
        </div>
      </section>

      {/* APK Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Teen Patti Gold APK Info</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
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
                    <td className="py-4 px-6 text-left font-medium text-white">{label}</td>
                    <td className="py-4 px-6 text-left text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What is Teen Patti Gold APK */}
      <section id="apk-what-is" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What is Teen Patti Gold APK?</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
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
      </section>

      {/* Why Download Teen Patti Gold APK */}
      <section id="apk-why-download" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why Download Teen Patti Gold APK?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">Real Money Earnings</h3>
              <p className="text-gray-300">Win real cash by playing your favorite card games. Withdraw your earnings instantly to JazzCash, EasyPaisa, or your bank account with a minimum of just Rs 100.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">30+ Games in One App</h3>
              <p className="text-gray-300">Access over 30 exciting games including Teen Patti, Rummy, Dragon Tiger, Andar Bahar, Poker, Crash, and Slots — all in a single app.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">100% Welcome Bonus</h3>
              <p className="text-gray-300">New players receive a 100% match bonus on their first deposit. Deposit Rs 500 and play with Rs 1,000 — doubling your starting power instantly.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#a855f7]">
              <h3 className="text-xl font-bold text-[#a855f7] mb-3">Secure Pakistani Payments</h3>
              <p className="text-gray-300">Deposit and withdraw with JazzCash, EasyPaisa, or Bank Card — Pakistan&apos;s most trusted payment platforms. Fast, secure, and no bank account needed.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">Daily Login Rewards</h3>
              <p className="text-gray-300">Log in every day to claim free chips and bonuses. Consistent daily logins unlock bigger and better rewards over time.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#ec4899]">
              <h3 className="text-xl font-bold text-[#ec4899] mb-3">Earn via Referrals</h3>
              <p className="text-gray-300">Invite friends with your unique referral code. Earn commission whenever your friends register, deposit, and play — a passive income stream on top of game winnings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-10 text-[#FFA500] text-center">Teen Patti Gold App Screenshots</h2>
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
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
                    quality={70}
                  />
                </div>
                <p className="text-center text-gray-300 mt-3 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Games */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Games Available in Teen Patti Gold APK</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Teen Patti Gold APK offers a massive library of 30+ games across multiple categories. Whether you prefer classic card games or fast-paced casino games, there is something for every player.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFA500] mb-4">Card Games</h3>
              <ul className="space-y-2 text-gray-300">
                {['Teen Patti (Classic)', 'Teen Patti Joker', 'Teen Patti Muflis', 'Rummy', 'Poker', 'Andar Bahar'].map(g => (
                  <li key={g} className="flex items-center"><span className="text-[#FFA500] mr-2">♠</span>{g}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#4ade80] mb-4">Casino Games</h3>
              <ul className="space-y-2 text-gray-300">
                {['Dragon Tiger', 'Dragon vs Tiger', 'Crash', 'Baccarat', 'Roulette', 'Slots'].map(g => (
                  <li key={g} className="flex items-center"><span className="text-[#4ade80] mr-2">♦</span>{g}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-4">Mini Games & More</h3>
              <ul className="space-y-2 text-gray-300">
                {['Fruit Slots', 'Jhandi Munda', 'Color Prediction', 'Fishing Games', 'Sports Betting', 'Live Dealer'].map(g => (
                  <li key={g} className="flex items-center"><span className="text-[#60a5fa] mr-2">♣</span>{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Download Steps */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">How to Download Teen Patti Gold APK Latest Version?</h2>
          <p className="text-gray-300 mb-8">Follow these simple steps to download and install the Teen Patti Gold APK on your Android device:</p>
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { color: 'border-[#FFA500]', titleColor: 'text-[#FFA500]', step: 'Step 1', title: 'Tap the Download Button', desc: 'Click the Download Now button on this page. The Teen Patti Gold APK V1.656 file (49MB) will start downloading automatically to your Android device.' },
              { color: 'border-[#4ade80]', titleColor: 'text-[#4ade80]', step: 'Step 2', title: 'Enable Unknown Sources', desc: 'Go to your Android Settings → Security (or Privacy) → enable "Install from Unknown Sources" or "Allow from this source". This is required because the APK is not from the Play Store.' },
              { color: 'border-[#60a5fa]', titleColor: 'text-[#60a5fa]', step: 'Step 3', title: 'Open the Downloaded APK', desc: 'Open your File Manager, navigate to the Downloads folder, and find the Teen Patti Gold APK file. Tap on it to begin the installation process.' },
              { color: 'border-[#a855f7]', titleColor: 'text-[#a855f7]', step: 'Step 4', title: 'Install the App', desc: 'Tap "Install" on the installation prompt and wait a few seconds for the process to complete. The app will be added to your home screen automatically.' },
              { color: 'border-[#f97316]', titleColor: 'text-[#f97316]', step: 'Step 5', title: 'Register and Start Playing', desc: 'Open Teen Patti Gold, tap Register, enter your Pakistani mobile number, set a password, verify the OTP, and log in. Make your first deposit to claim the 100% welcome bonus and start playing.' },
            ].map(({ color, titleColor, step, title, desc }) => (
              <div key={step} className={`bg-[#0A1029] rounded-lg p-6 border-l-4 ${color}`}>
                <h3 className={`text-xl font-bold mb-2 ${titleColor}`}>{step}: {title}</h3>
                <p className="text-gray-300 leading-relaxed">{desc}</p>
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
        </div>
      </section>

      {/* What's New in Latest Version */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What&apos;s New in Teen Patti Gold V1.656?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The latest version V1.656 brings several improvements and new features that make the gaming experience smoother and more rewarding for Pakistani players.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '🚀', title: 'Improved Performance', desc: 'Faster app launch, smoother game transitions, and reduced loading time across all tables.' },
              { icon: '🔒', title: 'Enhanced Security', desc: 'Upgraded data encryption and anti-fraud measures to keep your account and funds safe.' },
              { icon: '🎮', title: 'New Game Modes', desc: 'Fresh game variants and side bet options added to Teen Patti and Rummy tables.' },
              { icon: '💸', title: 'Faster Withdrawals', desc: 'Optimized payment processing for quicker JazzCash and EasyPaisa payouts.' },
              { icon: '🎁', title: 'New Bonus System', desc: 'Revamped daily reward system with higher chip values and surprise bonus events.' },
              { icon: '📱', title: 'UI Improvements', desc: 'Cleaner interface, better navigation, and improved accessibility for new players.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#0A1029] p-5 rounded-lg flex items-start gap-4">
                <span className="text-2xl mt-1">{icon}</span>
                <div>
                  <h3 className="text-white font-bold mb-1">{title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Payment Methods in Teen Patti Gold APK</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Teen Patti Gold APK supports Pakistan&apos;s most trusted payment platforms for both deposits and withdrawals. All transactions are encrypted and processed securely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg text-center border border-[#FFA500]/20">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">JazzCash</h3>
              <p className="text-gray-300 text-sm">Pakistan&apos;s most widely used mobile wallet. Fast deposits and instant withdrawals. No bank account required.</p>
              <div className="mt-4 text-[#4ade80] text-sm font-semibold">Min deposit: Rs 200 · Min withdrawal: Rs 100</div>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg text-center border border-[#4ade80]/20">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">EasyPaisa</h3>
              <p className="text-gray-300 text-sm">Telenor&apos;s trusted digital wallet. Easy to use with quick payment confirmations via OTP for both deposits and withdrawals.</p>
              <div className="mt-4 text-[#4ade80] text-sm font-semibold">Min deposit: Rs 200 · Min withdrawal: Rs 100</div>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg text-center border border-[#60a5fa]/20">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">Bank Card</h3>
              <p className="text-gray-300 text-sm">Direct bank account transfer for withdrawals. Ideal for larger payouts up to PKR 20,000 per transaction.</p>
              <div className="mt-4 text-[#4ade80] text-sm font-semibold">Max per transaction: Rs 20,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses & Rewards */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Bonuses & Rewards in Teen Patti Gold APK</h2>
          <div className="space-y-6">
            <div className="bg-[#0A1029] p-6 rounded-lg flex gap-4 items-start">
              <div className="text-3xl">🎁</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Welcome Bonus — 100% Match</h3>
                <p className="text-gray-300 leading-relaxed">New players get a 100% bonus on their very first deposit. Deposit Rs 1,000 and receive Rs 1,000 bonus — play with Rs 2,000 from day one. This is automatically credited after your first successful deposit.</p>
              </div>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg flex gap-4 items-start">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Daily Login Rewards</h3>
                <p className="text-gray-300 leading-relaxed">Log in every day to collect free chips. The reward value increases with consecutive daily logins — a 7-day streak unlocks a special bonus that boosts your balance significantly.</p>
              </div>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg flex gap-4 items-start">
              <div className="text-3xl">👥</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Referral Program</h3>
                <p className="text-gray-300 leading-relaxed">Share your unique referral code with friends and family. Earn commission every time they register and deposit. The more people you invite, the more passive income you earn — without playing a single game yourself.</p>
              </div>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg flex gap-4 items-start">
              <div className="text-3xl">👑</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">VIP Program</h3>
                <p className="text-gray-300 leading-relaxed">As you play and deposit more, you advance through VIP levels. Higher VIP tiers unlock weekly bonuses, monthly cash rewards, higher rebate percentages, and exclusive promotions not available to regular players.</p>
              </div>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg flex gap-4 items-start">
              <div className="text-3xl">🏆</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tournaments & Events</h3>
                <p className="text-gray-300 leading-relaxed">Join regular tournaments and seasonal events to win extra prizes, cash rewards, and bonus chips. Compete against players from across Pakistan and climb the leaderboard for top positions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">System Requirements for Teen Patti Gold APK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#FFA500] mb-4">Minimum Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  ['Operating System', 'Android 5.0 (Lollipop) or higher'],
                  ['RAM', '2 GB'],
                  ['Storage', '100 MB free space'],
                  ['Processor', 'Quad-core 1.4 GHz'],
                  ['Internet', 'Mobile data or Wi-Fi'],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start">
                    <span className="text-[#FFA500] mr-2">•</span>
                    <span><strong>{k}:</strong> {v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#4ade80] mb-4">Recommended Requirements</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  ['Operating System', 'Android 8.0 or higher'],
                  ['RAM', '4 GB or more'],
                  ['Storage', '500 MB free space'],
                  ['Processor', 'Octa-core 2.0 GHz or higher'],
                  ['Internet', 'Wi-Fi or 4G LTE'],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start">
                    <span className="text-[#4ade80] mr-2">•</span>
                    <span><strong>{k}:</strong> {v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teen Patti Gold vs Competitors */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Why Teen Patti Gold APK is the Best Choice in Pakistan?</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            There are several card game apps available in Pakistan, but Teen Patti Gold APK stands apart for a number of key reasons that make it the top choice for players looking to earn real money.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-xl overflow-hidden border border-gray-700">
              <thead className="bg-[#0A1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-[#FFA500] font-semibold">Feature</th>
                  <th className="py-3 px-6 text-center text-[#4ade80] font-semibold">Teen Patti Gold</th>
                  <th className="py-3 px-6 text-center text-gray-400 font-semibold">Other Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ['JazzCash & EasyPaisa', '✅ Yes', '⚠️ Limited'],
                  ['Minimum Withdrawal', '✅ Rs 100', '❌ Rs 500+'],
                  ['Number of Games', '✅ 30+', '⚠️ 10–15'],
                  ['Welcome Bonus', '✅ 100% Match', '⚠️ Varies'],
                  ['VIP Program', '✅ Multi-level', '⚠️ Basic'],
                  ['Referral Earnings', '✅ Active', '⚠️ Limited'],
                  ['24/7 Support', '✅ Live Chat', '❌ Email only'],
                  ['APK Safety', '✅ Verified', '⚠️ Unknown'],
                ].map(([feature, tpg, other], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-[#0a1029]/50' : 'bg-[#06091F]/50'}>
                    <td className="py-3 px-6 text-white font-medium">{feature}</td>
                    <td className="py-3 px-6 text-center text-gray-300">{tpg}</td>
                    <td className="py-3 px-6 text-center text-gray-400">{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
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

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Download Teen Patti Gold APK?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join 500,000+ players in Pakistan. Download the latest APK V1.656 free and start winning today!
          </p>
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#0ea5e9] hover:bg-gray-100 font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <span className="text-lg">DOWNLOAD APK FREE</span>
            <div className="ml-3 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0A1029]/60 rounded-xl p-6 border border-gray-700/50">
          <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/download-teen-patti-gold', '→ Download Teen Patti Gold APK for Android'],
              ['/deposit-money-in-teen-patti-gold', '→ How to Deposit Money in Teen Patti Gold'],
              ['/withdraw-money-from-teen-patti-gold', '→ How to Withdraw Money from Teen Patti Gold'],
              ['/teen-patti-gold-for-pc', '→ Teen Patti Gold for PC — Windows Guide'],
              ['/teen-patti-gold-for-ios', '→ Teen Patti Gold for iOS — iPhone Guide'],
              ['/blog/create-teen-patti-gold-account-and-login', '→ How to Create Teen Patti Gold Account'],
              ['/blog/how-to-earn-money-from-teen-patti-gold', '→ How to Earn Money on Teen Patti Gold'],
              ['/blog/how-to-play-teen-patti-gold', '→ How to Play Teen Patti Gold — Full Guide'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-[#FFA500] hover:text-[#ffb733] transition-colors font-medium">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
