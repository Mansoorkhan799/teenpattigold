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

export const FAVICON_PATH = '/favicon.ico';
export const FAVICON_PATH_VERSIONED = `${FAVICON_PATH}?v=${LOGO_VERSION}`;
export const FAVICON_URL = `${SITE_BASE}${FAVICON_PATH}?v=${LOGO_VERSION}`;
