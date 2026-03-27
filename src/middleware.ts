import { NextResponse } from 'next/server';

export function middleware() {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  // X-Frame-Options removed — frame-ancestors in CSP is the modern equivalent and takes precedence
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // CSP: frame-ancestors 'none' blocks all framing (replaces X-Frame-Options)
  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self';` +
    `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com;` +
    `style-src 'self' 'unsafe-inline';` +
    `img-src 'self' data: https: blob:;` +
    `font-src 'self';` +
    `connect-src 'self' https://www.google-analytics.com;` +
    `manifest-src 'self';` +
    `frame-ancestors 'none';`
  );

  return response;
} 