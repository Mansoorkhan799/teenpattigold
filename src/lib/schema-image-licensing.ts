/**
 * Schema.org ImageObject licensing helpers.
 *
 * Google Search Console's "Image Metadata" enhancement explicitly recommends
 * the following ImageObject properties: `license`, `creator`,
 * `acquireLicensePage`, `copyrightNotice`, `creditText`.
 *
 * Pattern adopted from cardrummyapp.com.pk (the #1 ranker for "Card Rummy
 * 2026"), which spreads `imageObjectLicensing` into every primary
 * ImageObject in its JSON-LD graph.
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata
 */

export const SITE_ORIGIN = 'https://teenpattigoldgame.com.pk';

/** Schema.org Organization node reused as the `creator` across ImageObjects. */
export const IMAGE_CREATOR = {
  '@type': 'Organization',
  name: 'Teen Patti Gold',
  url: SITE_ORIGIN,
} as const;

/**
 * Spread this object into any ImageObject JSON-LD node to declare image
 * licensing metadata in a Search-Console-friendly way.
 *
 * Example:
 *   {
 *     "@type": "ImageObject",
 *     "url": "...",
 *     ...imageObjectLicensing
 *   }
 */
/** General-audience rating for ImageObject nodes (not adult / restricted). */
export const imageObjectGeneralAudience = {
  contentRating: {
    '@type': 'Rating',
    ratingValue: 'General',
    bestRating: 'General',
    worstRating: 'Restricted',
  },
} as const;

export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: '© Teen Patti Gold. All rights reserved.',
  creditText: 'Teen Patti Gold',
  ...imageObjectGeneralAudience,
} as const;
