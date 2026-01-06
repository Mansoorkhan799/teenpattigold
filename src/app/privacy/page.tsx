import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Teen Patti Gold | Your Privacy Matters',
  description: 'Read our privacy policy to understand how Teen Patti Gold collects, uses, and protects your personal information. We are committed to your data security.',
  keywords: ['Teen Patti Gold privacy policy', 'privacy', 'data protection', 'user privacy', 'data security'],
  openGraph: {
    title: 'Privacy Policy - Teen Patti Gold',
    description: 'Learn how Teen Patti Gold protects your personal information and data.',
    url: 'https://teenpattigoldgame.com.pk/privacy',
    siteName: 'Teen Patti Gold',
    type: 'website',
  },
  alternates: {
    canonical: 'https://teenpattigoldgame.com.pk/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-lg text-gray-400">Last Updated: January 5, 2026</p>
          </div>
          
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-[#0A1029] border-l-4 border-accent rounded-r-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Privacy Policy for Teen Patti Gold</h2>
                <p className="text-gray-300 mb-0">
                  At <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Gold</Link>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit or use our platform.
                </p>
              </div>
              
              {/* 1. Information We Collect */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-accent">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
                      <p className="text-gray-300 mb-4">We may collect the following types of information:</p>
                      
                      <div className="space-y-4">
                        <div className="bg-secondary rounded-lg p-4 border-l-4 border-blue-500">
                          <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                          <p className="text-gray-300 mb-0">
                            Such as name, email address, and device details, only when you choose to provide it.
                          </p>
              </div>
              
                        <div className="bg-secondary rounded-lg p-4 border-l-4 border-green-500">
                          <h3 className="text-lg font-semibold text-white mb-2">Usage Data</h3>
                          <p className="text-gray-300 mb-0">
                            Including game activity, IP address, browser type, and time spent on the platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 2. How We Use Your Information */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-blue-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
                      <p className="text-gray-300 mb-4">We use your data to:</p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 font-bold">•</span>
                          <span>Improve gameplay experience</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 font-bold">•</span>
                          <span>Provide customer support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 font-bold">•</span>
                          <span>Analyze usage trends</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2 font-bold">•</span>
                          <span>Prevent fraud and maintain security</span>
                        </li>
                </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 3. Cookies */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-purple-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Cookies</h2>
                      <p className="text-gray-300 mb-0">
                        Our website/app may use cookies to enhance your experience. You can disable cookies through your browser settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 4. Data Sharing */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-green-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Data Sharing</h2>
                      <p className="text-gray-300 mb-0">
                        We <strong className="text-white">do not sell or share</strong> your personal data with third parties, except when required by law or to provide necessary services.
                </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 5. Children's Privacy */}
              <div className="mb-8">
                <div className="bg-red-900/20 border-2 border-red-500 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      5
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Children's Privacy</h2>
                      <p className="text-gray-300 mb-0">
                        Teen Patti Gold is intended for users <strong className="text-white">18 years or older</strong>. We do not knowingly collect data from minors.
                </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 6. Security */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-yellow-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-primary rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      6
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Security</h2>
                      <p className="text-gray-300 mb-0">
                        We implement appropriate measures to protect your information from unauthorized access or misuse.
                </p>
              </div>
                  </div>
                </div>
              </div>
              
              {/* 7. Changes to Policy */}
              <div className="mb-8">
                <div className="bg-[#0A1029] rounded-xl p-6 border-2 border-pink-500">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      7
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Changes to Policy</h2>
                      <p className="text-gray-300 mb-0">
                        We may update this Privacy Policy from time to time. Please review this page regularly for any changes.
                </p>
              </div>
                  </div>
                </div>
              </div>
              
              {/* 8. Contact Us */}
              <div className="mb-8">
                <div className="bg-accent/10 border-2 border-accent rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-primary rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      8
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                        For any questions or concerns regarding this Privacy Policy, please contact us at:
                </p>
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <a href="mailto:support@3pattigoldgame.com.pk" className="text-accent hover:underline text-lg font-semibold">
                          support@3pattigoldgame.com.pk
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer Links */}
              <div className="mt-12 p-6 bg-secondary rounded-xl border-2 border-accent">
                <h2 className="text-2xl font-bold mb-4 text-white">Related Legal Pages</h2>
                <p className="text-gray-300 mb-6">
                  Learn more about our policies and terms:
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/terms" 
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Terms & Conditions
                  </Link>
                  <Link 
                    href="/disclaimer" 
                    className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Disclaimer
                  </Link>
                  <Link 
                    href="/contact-us" 
                    className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              
              {/* Consent Footer */}
              <div className="bg-[#0A1029] rounded-xl p-6 mt-8 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  By using Teen Patti Gold, you consent to this Privacy Policy and agree to its terms.
                </p>
                <p className="text-gray-400 text-sm">
                  © 2026 Teen Patti Gold. All rights reserved.
                </p>
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
            "name": "Privacy Policy - Teen Patti Gold",
            "description": "Privacy policy explaining how Teen Patti Gold collects, uses, and protects user data.",
            "url": "https://teenpattigoldgame.com.pk/privacy"
          })
        }}
      />
    </div>
  );
}
