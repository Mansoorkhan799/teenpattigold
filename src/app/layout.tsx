import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTop from "@/components/ScrollToTop";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://teenpattigoldgame.com.pk'),
  title: {
    default: "Teenpatti Gold Game Download | New Earning App in Pakistan 2026",
    template: "%s | Teenpatti Gold"
  },
  description: "Download Teenpatti Gold APK, Pakistan's premier card game platform. Play Teen Patti, Rummy, Dragon vs Tiger & more. Win real cash with JazzCash & EasyPaisa. Join 600K+ players!",
  keywords: [
    "Teenpatti Gold",
    "Teen Patti Gold",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan"
  ],
  authors: [{ name: "Teenpatti Gold Team" }],
  creator: "Teenpatti Gold",
  publisher: "Teenpatti Gold",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/teen-patti-gold.webp', type: 'image/webp', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/teen-patti-gold.webp', sizes: '180x180', type: 'image/webp' }
    ]
  },
  manifest: '/manifest.json',
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://teenpattigoldgame.com.pk",
  },
  openGraph: {
    title: "Teenpatti Gold Game Download | New Earning App in Pakistan 2026",
    description: "Join 600K+ players on Pakistan's premier card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://teenpattigoldgame.com.pk",
    siteName: "Teenpatti Gold",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://teenpattigoldgame.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Teenpatti Gold - Premier Card Gaming Platform",
      },
      {
        url: "https://teenpattigoldgame.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "Teenpatti Gold - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teenpatti Gold Game Download | New Earning App in Pakistan 2026",
    description: "Join 600K+ players on Pakistan's premier card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@teenpattigold",
    images: [
      {
        url: "https://teenpattigoldgame.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "Teenpatti Gold - Premier Card Gaming Platform",
      }
    ],
  },
  applicationName: "Teenpatti Gold",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/teen-patti-gold.webp" type="image/webp" sizes="any" />
        <link rel="apple-touch-icon" href="/teen-patti-gold.webp" />
        <meta property="og:image" content="/teen-patti-gold.webp" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTop />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Teenpatti Gold",
              "url": "https://teenpattigoldgame.com.pk",
              "logo": "https://teenpattigoldgame.com.pk/teen-patti-gold.webp",
              "description": "Teenpatti Gold is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, and many other card games with real cash rewards.",
              "sameAs": [
                "https://facebook.com/teenpattigold",
                "https://twitter.com/teenpattigold"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Teenpatti Gold",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "300000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
