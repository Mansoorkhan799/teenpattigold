import type { Metadata } from 'next';
import Link from 'next/link';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_TERMS } from '@/lib/breadcrumb-schema';
import Breadcrumbs from '@/components/Breadcrumbs';

const termsBreadcrumbLd = getBreadcrumbSchema([BREADCRUMB_HOME, BREADCRUMB_TERMS]);

export const metadata: Metadata = {
  title: {
    absolute: 'Teen Patti Gold Terms — User Agreement Pakistan 2026',
  },
  description:
    'Teen Patti Gold terms in Pakistan: accounts, bonuses & fair play. Read before deposit — rules for our site, official app and real-money Teen Patti tables.',
  keywords: ['Teen Patti Gold terms', 'terms and conditions', 'user agreement', 'terms of service', 'game rules'],
  openGraph: {
    title: 'Teen Patti Gold Terms — User Agreement Pakistan 2026',
    description:
      'Teen Patti Gold terms in Pakistan: accounts, bonuses & fair play. Read before deposit — rules for our site, official app and real-money Teen Patti tables.',
    url: 'https://teenpattigoldgame.com.pk/terms',
    siteName: 'Teen Patti Gold',
    type: 'website',
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/teen-patti-gold-game.webp',
        width: 512, height: 512,
        alt: 'Teen Patti Gold terms Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Patti Gold Terms — User Agreement Pakistan 2026',
    description:
      'Teen Patti Gold terms in Pakistan: accounts, bonuses & fair play. Read before deposit — rules for our site, official app and real-money Teen Patti tables.',
    images: ['https://teenpattigoldgame.com.pk/teen-patti-gold-game.webp'],
  },
  alternates: {
    canonical: 'https://teenpattigoldgame.com.pk/terms',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsAndConditions() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(termsBreadcrumbLd) }} />
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Terms and Conditions' },
              ]}
              className="mb-6 text-left"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Terms and Conditions</h1>
            <p className="text-lg text-gray-400">Please read these terms carefully before using our platform</p>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-[#0A1029] border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <p className="text-gray-300 leading-relaxed mb-0">
                  Welcome to <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Gold</Link>, your online source for entertainment and card gaming fun. By accessing or using our website/app, you agree to the following terms and conditions. Please read them carefully before continuing.
                </p>
              </div>

              {/* 1. User Agreement */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-accent">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">User Agreement</h2>
                      <p className="text-gray-300 leading-relaxed mb-0">
                        By using Teen Patti Gold, you confirm that you are <strong className="text-white">18 years of age or older</strong>. Use of our platform for any illegal or unauthorized purpose is strictly prohibited.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Game for Entertainment */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-blue-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Game for Entertainment</h2>
                      <p className="text-gray-300 leading-relaxed mb-0">
                        Teen Patti Gold is a card game app meant purely for <strong className="text-white">entertainment purposes</strong>. No real money is involved, and the app does not offer real gambling or betting. All coins and rewards are virtual and hold no real-world value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. User Responsibility */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-green-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">User Responsibility</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        You are responsible for maintaining the confidentiality of your account and ensuring all information you provide is accurate.
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-0">
                        Misuse or manipulation of the game for unfair advantage may lead to <strong className="text-white">suspension or termination</strong> of your access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Privacy */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-purple-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Privacy</h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        We respect your privacy. Basic user data may be collected for game performance, updates, or support. We do not share personal data with third parties without your consent.
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-0">
                        For full details, refer to our <Link href="/privacy" className="text-accent hover:underline font-semibold">Privacy Policy</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Content & Ownership */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-yellow-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-primary rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      5
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Content & Ownership</h2>
                      <p className="text-gray-300 leading-relaxed mb-0">
                        All images, logos, game design, and content within Teen Patti Gold are the property of their respective owners. Unauthorized use or duplication of our content is not allowed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Changes to Terms */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-pink-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      6
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Changes to Terms</h2>
                      <p className="text-gray-300 leading-relaxed mb-0">
                        We reserve the right to update or change these terms at any time. Continued use of the platform after changes means you accept the updated terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Limitation of Liability */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-red-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      7
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
                      <p className="text-gray-300 leading-relaxed mb-0">
                        Teen Patti Gold will not be held responsible for any loss, damage, or issues arising from the use of our game. <strong className="text-white">Use the app at your own risk</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-lg p-6 mb-8">
                <div className="flex items-start">
                  <svg className="w-8 h-8 text-red-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Important Notice</h3>
                    <p className="text-red-300 mb-0">
                      <strong>Note:</strong> If you do not agree with any of the terms above, please discontinue using Teen Patti Gold.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-secondary rounded-xl border-2 border-accent">
                <h2 className="text-2xl font-bold mb-4 text-white">Questions About Our Terms?</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms and Conditions, please feel free to contact us.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact-us" 
                    className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/privacy" 
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/disclaimer" 
                    className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Disclaimer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions - Teen Patti Gold",
            "description": "Terms and conditions for using Teen Patti Gold card game platform.",
            "url": "https://teenpattigoldgame.com.pk/terms"
          })
        }}
      />
    </div>
    </>
  );
}

