/**
 * Central URLs for site logo and favicon.
 *
 * IMPORTANT for Google Images ranking:
 * Use the clean path `/teen-patti-gold.webp` (no `?v=`) in <img src>,
 * image sitemap, and ImageObject schema so Google sees ONE canonical URL.
 * Cache-busting query strings split ranking signals across two URLs.
 */
const SITE_BASE = 'https://teenpattigoldgame.com.pk';
export const LOGO_VERSION = '2';

export const LOGO_PATH = '/teen-patti-gold.webp';
/** Canonical public path — prefer this for SEO / Google Images. */
export const LOGO_PATH_VERSIONED = LOGO_PATH;
export const LOGO_URL = `${SITE_BASE}${LOGO_PATH}`;

/** Open Graph / Twitter / WhatsApp link preview — same canonical brand image. */
export const OG_IMAGE_URL = LOGO_URL;
export const OG_IMAGE_WIDTH = 512;
export const OG_IMAGE_HEIGHT = 512;

export const FAVICON_PATH = '/favicon.ico';
export const FAVICON_PATH_VERSIONED = `${FAVICON_PATH}?v=${LOGO_VERSION}`;
export const FAVICON_URL = `${SITE_BASE}${FAVICON_PATH}?v=${LOGO_VERSION}`;

/** Main download URL for Teen Patti Gold APK */
export const DOWNLOAD_URL = 'https://teenpattigold99.com/?from_gameid=8736537&channelCode=8442895';
