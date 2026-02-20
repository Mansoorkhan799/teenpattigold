import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import { LOGO_URL, FAVICON_URL, LOGO_PATH_VERSIONED } from "@/lib/site-images";

// Dynamically import non-critical components to reduce initial bundle size
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true, // Keep SSR for SEO
});

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
    default: "Download Teen Patti Gold APK Free | Play & Earn Real Money in Pakistan 2026",
    template: "%s | Teen Patti Gold Pakistan"
  },
  description: "Download Teen Patti Gold APK free now. Play Teen Patti, Rummy & Dragon Tiger. Earn real money with JazzCash & EasyPaisa. 800K+ downloads. Safe & secure. Get the official APK today!",
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
      { url: FAVICON_URL, type: 'image/x-icon', sizes: 'any' },
      { url: LOGO_URL, type: 'image/webp', sizes: '512x512' }
    ],
    shortcut: [
      { url: FAVICON_URL, type: 'image/x-icon' }
    ],
    apple: [
      { url: LOGO_URL, sizes: '180x180' }
    ]
  },
  manifest: '/manifest.json',
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  openGraph: {
    title: "Download Teen Patti Gold APK Free | Play & Earn Real Money in Pakistan 2026",
    description: "Download Teen Patti Gold APK free now. Play Teen Patti, Rummy & Dragon Tiger. Earn real money with JazzCash & EasyPaisa. 800K+ downloads. Get the official APK today!",
    url: "https://teenpattigoldgame.com.pk",
    siteName: "Teen Patti Gold",
    locale: "en_US",
    alternateLocale: ["ur_PK"],
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "Teenpatti Gold - Premier Card Gaming Platform",
      },
      {
        url: LOGO_URL,
        width: 800,
        height: 800,
        alt: "Teenpatti Gold - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Teen Patti Gold APK Free | Play & Earn Real Money in Pakistan 2026",
    description: "Download Teen Patti Gold APK free now. Play Teen Patti, Rummy & Dragon Tiger. Earn real money with JazzCash & EasyPaisa. 800K+ downloads.",
    creator: "@teenpattigold",
    images: [
      {
        url: LOGO_URL,
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
    canonical: "https://teenpattigoldgame.com.pk/",
    languages: {
      'en': 'https://teenpattigoldgame.com.pk/',
      'ur': 'https://teenpattigoldgame.com.pk/'
    }
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
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
        
        {/* Preload LCP image (logo used in header and hero) for faster First Contentful Paint */}
        <link rel="preload" as="image" href={LOGO_PATH_VERSIONED} />
        {/* DNS Prefetch and Preconnect for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href={FAVICON_URL} type="image/x-icon" sizes="any" />
        <link rel="shortcut icon" href={FAVICON_URL} type="image/x-icon" />
        <link rel="icon" href={LOGO_URL} type="image/webp" sizes="512x512" />
        <link rel="apple-touch-icon" href={LOGO_URL} sizes="180x180" />
        <meta property="og:image" content={LOGO_URL} />
        <meta property="og:image:secure_url" content={LOGO_URL} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Teen Patti Gold - Best Card Game App in Pakistan - Download APK Free" />
        
        {/* Additional image meta tags for better indexing */}
        <meta name="image" content={LOGO_URL} />
        <link rel="image_src" href={LOGO_URL} />
        
        {/* Google Analytics - Set NEXT_PUBLIC_GA_ID in .env.local to enable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className="antialiased bg-primary text-white min-h-screen flex flex-col"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed"
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
        <ScrollToTopWrapper />
        
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
                "url": LOGO_URL,
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
