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
    formats: ['image/webp'],
    qualities: [70, 75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 280, 320, 384, 400],
    minimumCacheTTL: 60,
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
      // Sitemap API route
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
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
      // Immutable cache for versioned Next.js static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Immutable cache for public static files (images, icons)
      {
        source: '/:path(.*\\.(?:webp|png|jpg|jpeg|ico|svg|woff2|woff)$)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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