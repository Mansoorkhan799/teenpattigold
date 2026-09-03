/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // SWC is enabled by default in Next.js 15 - no need to configure separately
  
  // Optimize images
  images: {
    localPatterns: [
      {
        pathname: '/**',
        // search omitted - allows ?v=2 and other query strings for cache busting
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slotspk.com.pk',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [70, 75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 280, 320, 384, 400],
    minimumCacheTTL: 2592000,
    dangerouslyAllowSVG: false,
    // Note: quality is set per Image component (default 75), not in config
  },

  // Optimize static file serving
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/.well-known/:path*',
      },
      // API route takes precedence over static file for robots.txt
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      // Sitemap API routes
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/sitemap-index.xml',
        destination: '/api/sitemap-index',
      },
      {
        source: '/image-sitemap.xml',
        destination: '/api/image-sitemap',
      },
    ];
  },

  // 301 redirects to consolidate keyword cannibalisation.
  // /download-teen-patti-gold and /download-teen-patti-gold-apk were both
  // ranking for the same query — funnel all link equity to the APK URL.
  // Using explicit `statusCode: 301` (not `permanent: true` which returns
  // 308) so the redirect shows up correctly in third-party SEO tooling.
  async redirects() {
    return [
      {
        source: '/download-teen-patti-gold',
        destination: '/download-teen-patti-gold-apk',
        statusCode: 301,
      },
    ];
  },

  // Optimize headers
  async headers() {
    return [
      // Security headers applied globally
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self';" +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com;" +
              "style-src 'self' 'unsafe-inline';" +
              "img-src 'self' data: https: blob:;" +
              "font-src 'self';" +
              "connect-src 'self' https://www.google-analytics.com;" +
              "manifest-src 'self';" +
              "frame-ancestors 'none';",
          },
        ],
      },
      // HTML pages: short cache so content updates propagate quickly
      {
        source: '/:path((?!_next|api|.*\\..*).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, no-cache, must-revalidate',
          },
        ],
      },
      // Immutable cache for versioned Next.js static assets.
      // X-Robots-Tag: noindex tells Google not to list these CSS/JS chunks
      // in the index. Google still fetches them (needed to render the page),
      // but they stop appearing in GSC "Crawled - currently not indexed".
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      // Optimised image responses from /_next/image — also noindex so the
      // resized variants don't pollute Search Console.
      {
        source: '/_next/image',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      // Immutable cache for content images (webp/png/jpg/jpeg/gif/svg).
      // IMPORTANT: do NOT send X-Robots-Tag: noindex here — these are the
      // assets we want indexed in Google Image Search (hero logo, app
      // screenshots, OG image). Earlier this rule was bundled with favicons
      // and fonts under a single `noindex` header, which silently dropped
      // teen-patti-gold.webp and every screenshot from the image index.
      {
        source: '/:path(.*\\.(?:webp|png|jpg|jpeg|gif|svg)$)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Non-content static assets (favicon, web fonts). These are render-only
      // resources, never user-facing search results, so we keep `noindex` to
      // prevent favicon.ico?v=2 and font files from showing up in Search
      // Console as "Crawled - currently not indexed" URLs.
      {
        source: '/:path(.*\\.(?:ico|woff2|woff|ttf|otf|eot)$)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      // Manifest, browserconfig, and other non-HTML files in /public.
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
    ];
  },

  turbopack: {},

  // Handle webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable proper static file handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Target modern browsers - reduce legacy JavaScript transpilation
    if (!isServer) {
      config.target = ['web', 'es2022'];
    }
    
    // Optimize bundle splitting for better code splitting
    if (!isServer && !dev) {
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for node_modules
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'async',
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },

  // Enable experimental features - inlineCss eliminates render-blocking CSS (optimizeCss doesn't work with App Router)
  experimental: {
    inlineCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Source maps disabled in production to protect source code and reduce bundle size
  productionBrowserSourceMaps: false,
  
  // Modern module/nomodule pattern
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
};

module.exports = nextConfig 