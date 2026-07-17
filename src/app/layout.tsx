import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTop from "@/components/ScrollToTop";
import { LOGO_URL, FAVICON_URL, OG_IMAGE_URL, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT } from "@/lib/site-images";
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
  // `keywords` meta is ignored by Google since 2009 and inflated keyword
  // lists can be a quality signal against the site — removed intentionally.
  authors: [{ name: "Teen Patti Gold Editorial Team" }],
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
    // The source asset is 512×512; declaring its real size avoids the
    // Lighthouse "icons declared size doesn't match actual size" warning.
    apple: [
      { url: LOGO_URL, sizes: '512x512' }
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
    url: "https://teenpattigoldgame.com.pk",
    siteName: "Teen Patti Gold",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: OG_IMAGE_URL,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: "Teen Patti Gold - Pakistan's #1 card game app for Teen Patti, Rummy, and Dragon Tiger",
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
        url: OG_IMAGE_URL,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: "Teen Patti Gold - Pakistan's #1 card game app for Teen Patti, Rummy, and Dragon Tiger",
      }
    ],
  },
  applicationName: "Teen Patti Gold",
  category: "Gaming",
  classification: "Card Gaming Platform",
  alternates: {
    // No trailing slash — Next.js (`trailingSlash: false`, the default)
    // strips it from the rendered <link rel="canonical">, and the sitemap
    // loc is emitted in the same form so Google sees one consistent URL.
    canonical: "https://teenpattigoldgame.com.pk",
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
        {/* `language` removed — site is English-only; previous "English, Urdu"
            value was misleading because no Urdu pages exist. */}
        {/* `rating: adult` was previously declared here and was telling Google
            the entire site is adult-rated — that is exactly what triggers the
            SafeSearch "Blur" filter on every image in Google Image Search,
            even though the site is a card-gaming app, not adult content.
            Card gaming is allowed under SafeSearch's "general audience" tier
            so this tag is removed. */}
        <meta name="rating" content="general" />
        
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
        <link rel="image_src" href={OG_IMAGE_URL} />
        
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
                    "availableLanguage": ["English"]
                  },
                  "sameAs": [
                    "https://www.facebook.com/teenpattigold",
                    "https://twitter.com/teenpattigold",
                    "https://www.youtube.com/@teenpattigold",
                    "https://www.instagram.com/teenpattigold"
                  ]
                },
                {
                  "@type": "DefinedTerm",
                  "@id": "https://teenpattigoldgame.com.pk/#teen-patti-gold",
                  "name": "Teen Patti Gold",
                  "alternateName": ["Teen Patti Gold APK", "Teen Patti Gold Pakistan", "TeenPattiGold", "3 Patti Gold", "TPG"],
                  "description": "Teen Patti Gold is Pakistan's most popular online card game app where players can play 30+ games including Teen Patti, Rummy, Dragon Tiger, Andar Bahar, and Poker to earn real money. Available as a free APK for Android (Android 5.0+), it supports deposits and withdrawals via JazzCash and EasyPaisa with a minimum withdrawal of Rs 100. The app offers a 100% welcome bonus on the first deposit, daily login rewards, referral earnings, and a VIP program. It is not on the Google Play Store and is downloaded directly as an APK.",
                  "url": "https://teenpattigoldgame.com.pk/",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Teen Patti Gold Pakistan Glossary",
                    "url": "https://teenpattigoldgame.com.pk/"
                  }
                },
                {
                  "@type": "DefinedTerm",
                  "@id": "https://teenpattigoldgame.com.pk/#teen-patti-gold-apk",
                  "name": "Teen Patti Gold APK",
                  "alternateName": ["Teen Patti Gold APK Download", "Teen Patti Gold Latest Version APK"],
                  "description": "Teen Patti Gold APK is the Android application package file for the Teen Patti Gold card game app. The latest version is 1.224(1), with a file size of 47.21MB, requiring Android 5.0 or higher. Since the app is not listed on the Google Play Store, Pakistani players download it directly as an APK from the official website at teenpattigoldgame.com.pk and install it by enabling 'Install from Unknown Sources' in their device settings. The APK is free to download.",
                  "url": "https://teenpattigoldgame.com.pk/download-teen-patti-gold-apk",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Teen Patti Gold Pakistan Glossary",
                    "url": "https://teenpattigoldgame.com.pk/"
                  }
                },
                {
                  "@type": "DefinedTerm",
                  "@id": "https://teenpattigoldgame.com.pk/#teen-patti-gold-pakistan",
                  "name": "Teen Patti Gold Pakistan",
                  "alternateName": ["Teen Patti Gold PK", "Teen Patti Gold Pakistan APK"],
                  "description": "Teen Patti Gold Pakistan refers to the Teen Patti Gold card game platform as used in Pakistan. It is specially tailored for Pakistani players with JazzCash and EasyPaisa payment support, Urdu language option, and a minimum withdrawal of Rs 100. It is Pakistan's #1 online card game app with over 500,000 downloads and 30+ games. Players across Pakistan use it to play Teen Patti, Rummy, Dragon Tiger, and other card games to earn real money.",
                  "url": "https://teenpattigoldgame.com.pk/",
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Teen Patti Gold Pakistan Glossary",
                    "url": "https://teenpattigoldgame.com.pk/"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://teenpattigoldgame.com.pk/#website",
                  "url": "https://teenpattigoldgame.com.pk/",
                  "name": "Teen Patti Gold Pakistan",
                  "description": "Download Teen Patti Gold APK for Pakistan. Play Ludo, Cards, Mines, Rummy & Sports — earn real cash with JazzCash & EasyPaisa. Official 1.224(1) — secure & free.",
                  "publisher": { "@id": "https://teenpattigoldgame.com.pk/#organization" },
                  "inLanguage": "en-PK",
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
