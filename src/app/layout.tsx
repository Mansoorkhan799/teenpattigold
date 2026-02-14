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
    default: "Teen Patti Gold Pakistan v1.652 | Download Official APK 2026",
    template: "%s | Teen Patti Gold Pakistan"
  },
  description: "Teen Patti Gold - Pakistan's #1 card game app. Download Teen Patti Gold APK free, play Teen Patti, Rummy, Dragon Tiger & earn real money. 800K+ downloads, 4.5/5 rating. Safe & secure with JazzCash & EasyPaisa payments.",
  keywords: [
    "teen patti gold",
    "teen patti gold pakistan",
    "teen patti gold apk",
    "teen patti gold download",
    "teen patti gold app",
    "teen patti gold game",
    "3 patti gold",
    "teen patti gold pakistan download",
    "teen patti gold apk download",
    "teen patti gold free download",
    "teen patti gold online",
    "teen patti gold earn money",
    "teen patti gold jazzcash",
    "teen patti gold easypaisa",
    "card game pakistan",
    "rummy game pakistan",
    "dragon tiger pakistan",
    "best card game pakistan",
    "earn money games pakistan",
    "online card games pakistan"
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
      { url: 'https://teenpattigoldgame.com.pk/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: 'https://teenpattigoldgame.com.pk/teen-patti-gold.webp', type: 'image/webp', sizes: '512x512' }
    ],
    shortcut: [
      { url: 'https://teenpattigoldgame.com.pk/favicon.ico', type: 'image/x-icon' }
    ],
    apple: [
      { url: 'https://teenpattigoldgame.com.pk/teen-patti-gold.webp', sizes: '180x180' }
    ]
  },
  manifest: 'https://teenpattigoldgame.com.pk/manifest.json',
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  openGraph: {
    title: "Teen Patti Gold - Download APK Free | Best Card Game in Pakistan",
    description: "Download Teen Patti Gold APK free in Pakistan. Play Teen Patti, Rummy, Dragon Tiger & earn real money. 800K+ downloads, 4.5/5 rating. Safe & secure with JazzCash & EasyPaisa.",
    url: "https://teenpattigoldgame.com.pk",
    siteName: "Teen Patti Gold",
    locale: "en_US",
    alternateLocale: ["ur_PK"],
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
    title: "Teen Patti Gold - Download APK Free | Best Card Game in Pakistan",
    description: "Download Teen Patti Gold APK free in Pakistan. Play Teen Patti, Rummy, Dragon Tiger & earn real money. 800K+ downloads, 4.5/5 rating.",
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
  applicationName: "Teen Patti Gold",
  category: "Gaming",
  classification: "Card Gaming Platform",
  alternates: {
    canonical: "https://teenpattigoldgame.com.pk",
    languages: {
      'en': 'https://teenpattigoldgame.com.pk/',
      'ur': 'https://teenpattigoldgame.com.pk/'
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for Pakistan region targeting */}
        <link rel="alternate" hrefLang="en" href="https://teenpattigoldgame.com.pk/" />
        <link rel="alternate" hrefLang="ur" href="https://teenpattigoldgame.com.pk/" />
        <link rel="alternate" hrefLang="x-default" href="https://teenpattigoldgame.com.pk/" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="30.3753;69.3451" />
        <meta name="ICBM" content="30.3753, 69.3451" />
        <meta name="language" content="English, Urdu" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* DNS Prefetch and Preconnect for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        <link rel="manifest" href="https://teenpattigoldgame.com.pk/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="https://teenpattigoldgame.com.pk/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="shortcut icon" href="https://teenpattigoldgame.com.pk/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="https://teenpattigoldgame.com.pk/teen-patti-gold.webp" type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href="https://teenpattigoldgame.com.pk/teen-patti-gold.webp" sizes="180x180" />
        <meta property="og:image" content="https://teenpattigoldgame.com.pk/teen-patti-gold.webp" />
        <meta property="og:image:secure_url" content="https://teenpattigoldgame.com.pk/teen-patti-gold.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Teen Patti Gold - Best Card Game App in Pakistan - Download APK Free" />
        
        {/* Additional image meta tags for better indexing */}
        <meta name="image" content="https://teenpattigoldgame.com.pk/teen-patti-gold.webp" />
        <link rel="image_src" href="https://teenpattigoldgame.com.pk/teen-patti-gold.webp" />
        
        {/* Google Analytics - Load after page is interactive */}
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
        <Footer />
        <DeferredStyles />
        <ScrollToTop />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Teen Patti Gold",
              "url": "https://teenpattigoldgame.com.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://teenpattigoldgame.com.pk/teen-patti-gold.webp",
                "width": 512,
                "height": 512
              },
              "description": "Teen Patti Gold is Pakistan's #1 card gaming platform, offering Teen Patti, Rummy, Dragon Tiger and many other card games with real cash rewards.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Pakistan",
                "identifier": "PK"
              },
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
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Teen Patti Gold",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "applicationSubCategory": "Card Game",
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
                "bestRating": "5",
                "worstRating": "1"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Gamers in Pakistan",
                "geographicArea": {
                  "@type": "Country",
                  "name": "Pakistan",
                  "identifier": "PK"
                }
              },
              "inLanguage": ["en", "ur"]
            })
          }}
        />
      </body>
    </html>
  );
}
