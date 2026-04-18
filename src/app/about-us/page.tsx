import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LOGO_PATH_VERSIONED } from '@/lib/site-images';

export const metadata: Metadata = {
  title: {
    absolute: 'About Teen Patti Gold — Pakistan Card Game Platform',
  },
  description:
    'Learn about Teen Patti Gold in Pakistan: mission, fair play & support for Teen Patti fans. Know the team behind the official APK and responsible gaming values.',
  keywords: ['Teen Patti Gold about', 'about us', 'gaming company Pakistan', 'Teen Patti Gold history', 'card gaming platform', 'Teen Patti'],
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
    canonical: "https://teenpattigoldgame.com.pk/about-us",
  },
  openGraph: {
    title: 'About Teen Patti Gold — Pakistan Card Game Platform',
    description:
      'Learn about Teen Patti Gold in Pakistan: mission, fair play & support for Teen Patti fans. Know the team behind the official APK and responsible gaming values.',
    url: "https://teenpattigoldgame.com.pk/about-us",
    siteName: "Teen Patti Gold",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/teen-patti-gold.webp?v=2',
        width: 512, height: 512,
        alt: "About Teen Patti Gold - Premier Card Gaming Platform Pakistan",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Teen Patti Gold — Pakistan Card Game Platform',
    description:
      'Learn about Teen Patti Gold in Pakistan: mission, fair play & support for Teen Patti fans. Know the team behind the official APK and responsible gaming values.',
    images: ['https://teenpattigoldgame.com.pk/teen-patti-gold.webp?v=2'],
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://teenpattigoldgame.com.pk/about-us',
  'url': 'https://teenpattigoldgame.com.pk/about-us',
  'name': 'About Teen Patti Gold — Pakistan Card Game Platform',
  'description': 'Teen Patti Gold is Pakistan\'s #1 online card game app. Players across Pakistan use it to play Teen Patti, Rummy, Dragon Tiger, and 30+ games and earn real money via JazzCash and EasyPaisa.',
  'mainEntity': {
    '@type': 'Organization',
    '@id': 'https://teenpattigoldgame.com.pk/#organization',
  },
  'speakable': {
    '@type': 'SpeakableSpecification',
    'cssSelector': ['#about-what-is', '#about-mission'],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <div className="min-h-screen bg-primary py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
            </div>

            {/* What is Teen Patti Gold — speakable target */}
            <div id="about-what-is" className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="md:w-1/3">
                  <Link href="/" className="block w-full aspect-square rounded-lg overflow-hidden bg-[#0A1029] relative">
                    <Image
                      src={LOGO_PATH_VERSIONED}
                      alt="Teen Patti Gold Logo"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                      className="object-contain p-4"
                      priority
                      quality={75}
                    />
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Welcome to <a href="https://www.teenpattigoldgame.com.pk/" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">www.teenpattigoldgame.com.pk</a>, a trusted platform for the latest information about <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Gold</Link>. <strong className="text-white">Teen Patti Gold</strong> is Pakistan&apos;s #1 online card game app with <span className="font-bold text-accent">500K+ users</span>, offering 30+ games including Teen Patti, Rummy, Dragon Tiger, and more. Players earn real money and withdraw instantly via JazzCash and EasyPaisa.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Hundreds of players across Pakistan enjoy these games and earn on a daily or weekly basis using the free Teen Patti Gold APK (latest version V1.656) for Android.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission — speakable target */}
            <div id="about-mission" className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Aim!</h2>
              <p className="text-lg md:text-xl text-white leading-relaxed text-center">
                Our aim is to provide users with the latest, updated information and earning tips about Teen Patti Gold. For any information or query, visit our <Link href="/contact-us" className="underline hover:text-orange-100 font-semibold">contact us page</Link>.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                We&apos;re here to help! Contact our team for any information or queries about Teen Patti Gold.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}