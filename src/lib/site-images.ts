/**
 * Central URLs for site logo and favicon.
 * Bump LOGO_VERSION when you replace teen-patti-gold.webp or favicon.ico
 * so browsers and crawlers load the new image.
 */
const SITE_BASE = 'https://teenpattigoldgame.com.pk';
export const LOGO_VERSION = '2';

export const LOGO_PATH = '/teen-patti-gold.webp';
export const LOGO_PATH_VERSIONED = `${LOGO_PATH}?v=${LOGO_VERSION}`;
export const LOGO_URL = `${SITE_BASE}${LOGO_PATH}?v=${LOGO_VERSION}`;

/** Open Graph / Twitter / WhatsApp link preview — static logo asset (not generated). */
export const OG_IMAGE_URL = LOGO_URL;
export const OG_IMAGE_WIDTH = 512;
export const OG_IMAGE_HEIGHT = 512;

export const FAVICON_PATH = '/favicon.ico';
export const FAVICON_PATH_VERSIONED = `${FAVICON_PATH}?v=${LOGO_VERSION}`;
export const FAVICON_URL = `${SITE_BASE}${FAVICON_PATH}?v=${LOGO_VERSION}`;

/** Main download URL for Teen Patti Gold APK */
export const DOWNLOAD_URL = 'https://teenpattigold99.com?from_gameid=8442895&channelCode=100000';
