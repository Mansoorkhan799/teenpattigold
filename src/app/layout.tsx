import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTop from "@/components/ScrollToTop";
import { LOGO_URL, FAVICON_URL } from "@/lib/site-images";
import {
  META_HOME_DESCRIPTION,
  META_HOME_TITLE,
  META_TITLE_TEMPLATE,
} from "@/lib/seo-metadata";

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
    default: META_HOME_TITLE,
    template: META_TITLE_TEMPLATE,
  },
  description: META_HOME_DESCRIPTION,
  keywords: [
    "teen patti gold",
    "teen patti gold pakistan",
    "teen patti gold apk",
    "teen patti gold download",
    "teen patti gold app",
    "teen patti gold withdrawal",
    "teen patti gold jazzcash",
    "teen patti gold easypaisa",
    "teen patti gold referral",
    "online card games pakistan",
    "earn money playing cards pakistan",
    "best card game pakistan",
    "rummy game pakistan",
    "dragon tiger pakistan",
    "earn money games pakistan",
    "casino card game pakistan",
    "play cards online pakistan",
  ],
  authors: [{ name: "Teen Patti Gold Team" }],
  creator: "Teen Patti Gold",
  publisher: "Teen Patti Gold",
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
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  openGraph: {
    title: META_HOME_TITLE,
    description: META_HOME_DESCRIPTION,
    url: "https://teenpattigoldgame.com.pk/",
    siteName: "Teen Patti Gold",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Teen Patti Gold - Play Card Games and Earn Real Money in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_HOME_TITLE,
    description: META_HOME_DESCRIPTION,
    site: "@teenpattigold",
    creator: "@teenpattigold",
    images: [
      {
        url: 'https://teenpattigoldgame.com.pk/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Teen Patti Gold - Play Card Games and Earn Real Money in Pakistan",
      }
    ],
  },
  applicationName: "Teen Patti Gold",
  category: "Gaming",
  classification: "Card Gaming Platform",
  alternates: {
    canonical: "https://teenpattigoldgame.com.pk/",
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
        {/* Critical CSS - minimal above-the-fold styles to prevent FOUC while full CSS loads */}
        <style dangerouslySetInnerHTML={{ __html: 'body{color:rgb(255,255,255);background:#06091f;margin:0;min-height:100vh;display:flex;flex-direction:column}main{flex:1;min-height:1px}footer{min-height:350px}' }} />
        {/* Hreflang: set per-page via metadata (homepage only) — avoid fake ur same-URL alternates */}
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
        
        {/* DNS Prefetch and Preconnect - only when GA is used to avoid unused preconnect warning */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
          </>
        )}
        
        {/* Icons, manifest, and PWA meta come from `metadata` (Next injects <link>/<meta>). */}
        {/* Note: logo LCP preload is handled automatically by Next.js Image priority={true} in Header */}
        {/* Image hint for older scrapers that don't read OG tags */}
        <link rel="image_src" href="https://teenpattigoldgame.com.pk/opengraph-image" />
        
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
        <ScrollToTop />
        
        {/* Site-wide Organization + WebSite only — home page adds Person, SoftwareApplication, FAQ, etc. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://teenpattigoldgame.com.pk/#organization",
                  "name": "Teen Patti Gold",
                  "alternateName": ["Teen Patti Gold Pakistan", "TeenPattiGold"],
                  "url": "https://teenpattigoldgame.com.pk/",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://teenpattigoldgame.com.pk/#logo",
                    "url": LOGO_URL,
                    "contentUrl": LOGO_URL,
                    "width": 512,
                    "height": 512,
                    "caption": "Teen Patti Gold - Pakistan's #1 Card Game"
                  },
                  "image": { "@id": "https://teenpattigoldgame.com.pk/#logo" },
                  "description": "Teen Patti Gold is Pakistan's #1 card gaming platform, offering Teen Patti, Rummy, Dragon Tiger and 30+ card games with real cash rewards via JazzCash and EasyPaisa.",
                  "foundingDate": "2023",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "PK",
                    "addressLocality": "Pakistan"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Pakistan",
                    "identifier": "PK"
                  },
                  "knowsAbout": [
                    "Teen Patti",
                    "Rummy",
                    "Dragon Tiger",
                    "Online Card Games",
                    "Mobile Gaming Pakistan",
                    "JazzCash Payments",
                    "EasyPaisa Payments"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "support@teenpattigoldgame.com.pk",
                    "contactType": "customer service",
                    "areaServed": "PK",
                    "availableLanguage": ["English", "Urdu"]
                  },
                  "sameAs": [
                    "https://www.facebook.com/teenpattigold",
                    "https://twitter.com/teenpattigold",
                    "https://www.youtube.com/@teenpattigold",
                    "https://www.instagram.com/teenpattigold"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://teenpattigoldgame.com.pk/#website",
                  "url": "https://teenpattigoldgame.com.pk/",
                  "name": "Teen Patti Gold Pakistan",
                  "description": "Download Teen Patti Gold APK for Pakistan. Play 30+ card games, earn real cash, and withdraw fast with JazzCash & EasyPaisa. Official v1.656 — secure & free.",
                  "publisher": { "@id": "https://teenpattigoldgame.com.pk/#organization" },
                  "inLanguage": ["en-PK", "ur-PK"],
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://teenpattigoldgame.com.pk/blog?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
