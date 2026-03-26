import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LOGO_URL, LOGO_PATH_VERSIONED, DOWNLOAD_URL } from '@/lib/site-images';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_DOWNLOAD } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'Download Teen Patti Gold Game Free APK For Android | Latest Version 2026',
  description: 'Download Teen Patti Gold APK free for Android. Play Teen Patti, Rummy, Dragon Tiger & more. Earn real cash with JazzCash & EasyPaisa. Latest version V1.656(0) - 49MB.',
  keywords: [
    'Download Teen Patti Gold',
    'Teen Patti Gold APK download',
    'Teen Patti Gold Android',
    'Teen Patti download',
    'Free card game APK',
    'Teen Patti Gold latest version',
    'Download Teen Patti Gold Game'
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
    canonical: "https://teenpattigoldgame.com.pk/download-teen-patti-gold",
  },
  openGraph: {
    title: 'Download Teen Patti Gold Game Free APK For Android',
    description: 'Download Teen Patti Gold APK free. Play Teen Patti, Rummy & more. Earn real cash with secure payments. 600K+ downloads!',
    url: "https://teenpattigoldgame.com.pk/download-teen-patti-gold",
    siteName: "Teen Patti Gold",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "Download Teenpatti Gold APK",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Download Teen Patti Gold Game Free APK For Android',
    description: 'Download Teen Patti Gold APK free. Play Teen Patti, Rummy & more. Earn real cash with secure payments. 600K+ downloads!',
    images: [LOGO_URL],
  },
};

const breadcrumbLd = getBreadcrumbSchema([BREADCRUMB_HOME, BREADCRUMB_DOWNLOAD]);

export default function DownloadPage() {
  // Schema.org structured data for download page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Teen Patti Gold",
    "operatingSystem": "Android 5.0+",
    "applicationCategory": "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PKR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "300000",
      "bestRating": "5"
    },
    "downloadUrl": DOWNLOAD_URL,
    "softwareVersion": "V1.656(0)",
    "fileSize": "49MB",
    "datePublished": "2026-01-05",
    "description": "Download Teen Patti Gold APK free for Android. Play Teen Patti, Rummy, Dragon Tiger & more. Earn real cash with JazzCash & EasyPaisa.",
    "screenshot": [
      "https://teenpattigoldgame.com.pk/1.webp",
      "https://teenpattigoldgame.com.pk/2.webp",
      "https://teenpattigoldgame.com.pk/3.webp"
    ],
    "image": LOGO_URL,
    "author": {
      "@type": "Organization",
      "name": "Teen Patti Gold",
      "url": "https://teenpattigoldgame.com.pk"
    },
    "inLanguage": ["en", "ur"],
    "countriesSupported": "PK"
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is Teen Patti Gold free to download?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Teen Patti Gold is completely free to download. Visit teenpattigoldgame.com.pk, click the download button, and install the APK on your Android device at no cost."
              }
            },
            {
              "@type": "Question",
              "name": "Which Android version is required to run Teen Patti Gold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Teen Patti Gold requires Android 5.0 or above. It runs smoothly on most modern Android smartphones and tablets."
              }
            },
            {
              "@type": "Question",
              "name": "How do I install Teen Patti Gold APK on Android?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Download the APK from teenpattigoldgame.com.pk, enable Install from unknown sources in your device settings, locate the downloaded APK, tap it, and follow the on-screen steps."
              }
            },
            {
              "@type": "Question",
              "name": "Is Teen Patti Gold safe to download?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Downloading from the official site teenpattigoldgame.com.pk ensures you get a clean, verified APK. Avoid unofficial third-party sources to stay safe."
              }
            },
            {
              "@type": "Question",
              "name": "What is the latest version of Teen Patti Gold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The latest version is V1.656 (2026), with a file size of 49MB. It requires Android 5.0+ and is free to download."
              }
            },
            {
              "@type": "Question",
              "name": "Can I play Teen Patti Gold on PC?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You can play Teen Patti Gold on PC using an Android emulator like LDPlayer or BlueStacks. Download the APK and load it inside the emulator."
              }
            }
          ]
        }) }}
      />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Download </span>
            <span className="text-[#FFA500]">Teen Patti Gold Game</span>
            <span className="text-white"> Free APK For Android</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Gold</Link> is a hub of the top popular casino games like cards, poker, Rummy, Crash, Dragon Tiger, and much more. You can download this game for free of cost.
          </p>
        </div>

        {/* Download Button - Prominent */}
        <div className="flex justify-center my-12">
          <a 
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center px-12 py-6 text-white font-bold text-xl rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
          >
            <span className="mr-4">DOWNLOAD NOW</span>
            <div className="bg-[#f97316] rounded-full p-3 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
        </div>

        <div className="flex justify-center mb-8">
          <span className="bg-[#0A1029] text-[#4ade80] px-6 py-2 rounded-full text-sm font-semibold">
            ⚡ Download Now Fast APK
          </span>
        </div>

        {/* Logo/Image Section */}
        <div className="flex justify-center mb-12">
          <div className="relative w-[320px] h-[320px] max-w-full">
            <Image
              src={LOGO_PATH_VERSIONED}
              alt="Teen Patti Gold Logo"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl rounded-3xl w-full h-full"
              priority={true}
              fetchPriority="high"
              quality={75}
            />
          </div>
        </div>
      </section>

      {/* Download Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">Teen Patti Gold</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Version</td>
                  <td className="py-4 px-6 text-left text-white">V1.656</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">49MB</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">5 january 2026</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button After Table */}
        <div className="flex justify-center mt-8">
          <a 
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
          >
            <span className="text-lg">DOWNLOAD NOW</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Download & Install Process */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
            Process to Download & Install Teen Patti Gold
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Step 01 */}
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">Step 01</h3>
              <p className="text-gray-300 leading-relaxed">
                Click on the download button to get Teen Patti Gold Game APK. Wait for automatic download completion.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">Step 02</h3>
              <p className="text-gray-300 leading-relaxed">
                Go to device privacy settings and allow "install from unknown resources".
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">Step 03</h3>
              <p className="text-gray-300 leading-relaxed">
                Locate the downloaded file, tab on it, and click on install. Let this process be done automatically.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">Step 04</h3>
              <p className="text-gray-300 leading-relaxed">
                Finally, Teen Patti Gold is successfully installed on your device, open it and start your journey with your first deposit in this earning app, and grab the opportunity to earn a lot of money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
          Why Download Teen Patti Gold?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Real Money Earning</h3>
            <p className="text-gray-300">Earn real cash by playing your favorite card games</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Multiple Games</h3>
            <p className="text-gray-300">Teen Patti, Rummy, Dragon Tiger, and many more</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Fast Withdrawals</h3>
            <p className="text-gray-300">Quick withdrawals through JazzCash & EasyPaisa</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Daily Bonuses</h3>
            <p className="text-gray-300">Get daily login bonuses and rewards</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Safe & Secure</h3>
            <p className="text-gray-300">Protected transactions and data security</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Easy to Use</h3>
            <p className="text-gray-300">Simple interface and smooth gameplay</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            {
              q: "Is Teen Patti Gold free to download?",
              a: "Yes, Teen Patti Gold is completely free to download. Visit teenpattigoldgame.com.pk, click the download button, and install the APK on your Android device at no cost."
            },
            {
              q: "Which Android version is required to run Teen Patti Gold?",
              a: "Teen Patti Gold requires Android 5.0 or above. It runs smoothly on most modern Android smartphones and tablets."
            },
            {
              q: "How do I install Teen Patti Gold APK on Android?",
              a: "Download the APK from teenpattigoldgame.com.pk, go to your device Settings and enable 'Install from unknown sources', locate the downloaded APK file, tap it, and follow the on-screen installation steps."
            },
            {
              q: "Is Teen Patti Gold safe to download?",
              a: "Yes. Downloading from the official site teenpattigoldgame.com.pk ensures you get a clean, verified APK. Avoid unofficial third-party sources to stay safe."
            },
            {
              q: "What is the latest version of Teen Patti Gold?",
              a: "The latest version is V1.656 (2026), with a file size of 49MB. Updates are released regularly with new games, bug fixes, and performance improvements."
            },
            {
              q: "Can I play Teen Patti Gold on PC?",
              a: "Yes. You can play Teen Patti Gold on PC using an Android emulator like LDPlayer or BlueStacks. Download the APK and load it inside the emulator."
            }
          ].map((item, idx) => (
            <details key={idx} className="group bg-secondary rounded-xl border border-gray-700/50 overflow-hidden">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer select-none text-white font-semibold text-lg list-none">
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
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </>
  );
}

