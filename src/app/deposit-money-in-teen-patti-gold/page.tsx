import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getBreadcrumbSchema, BREADCRUMB_HOME, BREADCRUMB_DEPOSIT } from '@/lib/breadcrumb-schema';

export const metadata: Metadata = {
  title: {
    absolute: 'How to Deposit Money in Teen Patti Gold APK Pakistan?',
  },
  description:
    'Deposit on Teen Patti Gold with JazzCash, EasyPaisa or card in Pakistan. Bonuses, minimums & a safe top-up flow before Teen Patti or Rummy real-money play.',
  keywords: ['deposit money teen patti gold', 'teen patti gold payment methods', 'jazzcash deposit teen patti gold', 'easypaisa deposit teen patti gold', 'add funds teen patti gold', 'teen patti gold recharge', 'teen patti gold deposit pakistan'],
  openGraph: {
    title: 'How to Deposit Money in Teen Patti Gold APK Pakistan?',
    description:
      'Deposit on Teen Patti Gold with JazzCash, EasyPaisa or card in Pakistan. Bonuses, minimums & a safe top-up flow before Teen Patti or Rummy real-money play.',
    url: 'https://teenpattigoldgame.com.pk/deposit-money-in-teen-patti-gold',
    siteName: 'Teen Patti Gold',
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Deposit money Teen Patti Gold Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Deposit Money in Teen Patti Gold APK Pakistan?',
    description:
      'Deposit on Teen Patti Gold with JazzCash, EasyPaisa or card in Pakistan. Bonuses, minimums & a safe top-up flow before Teen Patti or Rummy real-money play.',
    images: ['https://teenpattigoldgame.com.pk/opengraph-image'],
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

export default function DepositMoneyPage() {
  return (
    <>
      <Script
        id="deposit-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(depositBreadcrumbLd) }}
      />
      <Script
        id="deposit-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the minimum deposit amount in Teen Patti Gold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The minimum deposit amount in Teen Patti Gold is Rs 200. You can deposit Rs 200, Rs 500, Rs 1000, or Rs 2000 using JazzCash or EasyPaisa."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take for the deposit to reflect in Teen Patti Gold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Deposits in Teen Patti Gold are processed instantly. After approving the payment in your JazzCash or EasyPaisa wallet, the chips are added to your account within a few seconds."
              }
            },
            {
              "@type": "Question",
              "name": "Which payment methods are supported for Teen Patti Gold deposits in Pakistan?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Teen Patti Gold supports JazzCash and EasyPaisa for deposits in Pakistan. These are the safest and fastest payment methods available for Pakistani players."
              }
            },
            {
              "@type": "Question",
              "name": "Is it safe to deposit money in Teen Patti Gold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, depositing money in Teen Patti Gold is completely safe. The platform uses secure payment gateways and your transaction data is fully encrypted. Always use the official app from teenpattigoldgame.com.pk."
              }
            },
            {
              "@type": "Question",
              "name": "Can I get a refund on my deposit in Teen Patti Gold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Deposits are generally non-refundable once processed. If you face any issues with a deposit, contact customer support immediately with your transaction reference number."
              }
            }
          ]
        }) }}
      />
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How to Deposit Money in Teen Patti Gold?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Quick, Safe & Easy Payment Methods with JazzCash and EasyPaisa
            </p>
            <Link
              href="https://teenpattigold99.com?from_gameid=8442895&channelCode=100000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Download & Deposit Now
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <Link href="/" className="text-accent hover:underline font-semibold">Teen Patti Gold</Link> is an exciting online game where users can play many amazing games daily. You need to deposit money to enjoy it without any problems. Adding funds to the Teen Patti Gold Game is very easy, as it offers quick and safe payment methods, including JazzCash and Easy Paisa. For withdrawals, you can also use Bank Card to receive winnings in your bank account (up to PKR 20,000 per transaction)—see our <Link href="/withdraw-money-from-teen-patti-gold" className="text-accent hover:underline font-semibold">withdrawal guide</Link> for details.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Teen Patti Gold offers a simple deposit method that all new players can use without any confusion. It takes only a few minutes, and your money will be added immediately. It is essential to learn how to deposit money into Teen Patti Gold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Deposit Money */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Steps to Deposit Money in Teen Patti Gold
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A1029]0 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Open Teen Patti Gold App</h3>
                    <p className="text-gray-300 leading-relaxed">
                      First, open the Teen Patti Gold app on your Android device. Your internet connection must be stable to open the app. Log in to your account by entering your registered phone number and password. Enter your login details correctly to log in successfully.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A1029]0 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Click on Shop Option</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After logging in, your dashboard will appear, where you can see many options and different games. Click on the shop button to start the depositing process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A1029]0 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Select Payment Method</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After clicking the shop button, a deposit page opens, showing payment methods and options. Choose a payment method, like JazzCash, Easy Paisa, or Bank Card where shown, that you can use easily.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A1029]0 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Choose Amount</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After selecting the payment method, choose the amount you can afford to lose. There are many options like Rs 200, Rs 500, Rs 1000, or Rs 2000.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A1029]0 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Click on Add Chips</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After entering the deposit details, click the Add Chips option. You will be redirected to the payment page, where you need to enter the account number that you want to use for payment. Click on the submit button to confirm the deposit.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A1029]0 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Approve Payment</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After clicking on the submit button, you will receive a payment request on your selected account. Log in to your account and approve the payment request that you have received from Teen Patti Gold.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="bg-secondary rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A1029]0 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Wait for Complete Payment</h3>
                    <p className="text-gray-300 leading-relaxed">
                      After approving the payment request, a deposit will be added to your Teen Patti Gold account instantly. Sometimes it can take longer due to payment delays or network issues. When you receive payment, you can use it to play games without any hurdles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Secure Deposits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Tips for Secure Deposits
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Use your own mobile wallet to add funds.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Use a strong internet connection during the deposit process.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Do not share your mobile wallet pin or login password with anyone.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Add a small amount if you are a beginner in Teen Patti Gold.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Play games wisely and manage your funds.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Conclusion</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Adding funds to Teen Patti Gold is a fast and easy method if you follow all the steps correctly. You are required to open the app, tap the shop button, enter the correct payment details, and approve payment requests to deposit money into your Teen Patti Gold account.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                You must use secure and real payment methods to deposit money safely and enjoy games instantly. New users can easily add funds to their accounts and play games by following the proper steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the minimum deposit amount in Teen Patti Gold?",
                  a: "The minimum deposit amount in Teen Patti Gold is Rs 200. You can choose from Rs 200, Rs 500, Rs 1000, or Rs 2000 using JazzCash or EasyPaisa."
                },
                {
                  q: "How can we add money to our Teen Patti Gold account?",
                  a: "Open the app, tap the Shop option, select your payment method (JazzCash or EasyPaisa), choose an amount, tap Add Chips, enter your account number, and approve the payment request. Chips are credited instantly."
                },
                {
                  q: "How long does it take for the deposit to reflect?",
                  a: "Deposits are processed instantly. After approving the payment in your JazzCash or EasyPaisa wallet, chips appear in your account within seconds."
                },
                {
                  q: "Which payment methods are supported in Pakistan?",
                  a: "Teen Patti Gold supports JazzCash and EasyPaisa for deposits in Pakistan. These are the fastest and most secure options for Pakistani players."
                },
                {
                  q: "Is it safe to deposit money in Teen Patti Gold?",
                  a: "Yes. Teen Patti Gold uses encrypted, secure payment gateways. Always download the app from the official site teenpattigoldgame.com.pk to stay protected."
                },
                {
                  q: "Can I get a refund if the deposit fails?",
                  a: "If money is deducted but chips are not credited, contact customer support immediately with your transaction reference number for a quick resolution."
                }
              ].map((item, idx) => (
                <details key={idx} className="group bg-secondary rounded-xl border border-gray-700/50 overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer select-none text-white font-semibold text-lg list-none">
                    <span>{item.q}</span>
                    <svg className="w-5 h-5 ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Playing?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Download Teen Patti Gold now and deposit money to start earning real cash!
            </p>
            <Link
              href="https://teenpattigold99.com?from_gameid=8442895&channelCode=100000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Download Teen Patti Gold Now
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Deposit Money in Teen Patti Gold",
            "description": "Step-by-step guide to deposit money in Teen Patti Gold using JazzCash and EasyPaisa",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Open Teen Patti Gold App",
                "text": "Open the Teen Patti Gold app on your Android device and log in to your account."
              },
              {
                "@type": "HowToStep",
                "name": "Click on Shop Option",
                "text": "After logging in, click on the shop button to start the depositing process."
              },
              {
                "@type": "HowToStep",
                "name": "Select Payment Method",
                "text": "Choose a payment method like JazzCash or EasyPaisa."
              },
              {
                "@type": "HowToStep",
                "name": "Choose Amount",
                "text": "Select the amount you want to deposit (Rs 200, Rs 500, Rs 1000, or Rs 2000)."
              },
              {
                "@type": "HowToStep",
                "name": "Click on Add Chips",
                "text": "Click the Add Chips option and enter your account number."
              },
              {
                "@type": "HowToStep",
                "name": "Approve Payment",
                "text": "Log in to your mobile wallet and approve the payment request."
              },
              {
                "@type": "HowToStep",
                "name": "Wait for Complete Payment",
                "text": "Wait for the deposit to be added to your Teen Patti Gold account."
              }
            ]
          })
        }}
      />
    </div>
    </>
  );
}

