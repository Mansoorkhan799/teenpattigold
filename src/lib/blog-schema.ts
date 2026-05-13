/**
 * BlogPosting + WebPage + BreadcrumbList + (optional) FAQPage schema for
 * blog posts. Pattern aligned with cardrummyapp.com.pk (the #1 ranker for
 * "Card Rummy 2026"), with these card-rummy-derived improvements:
 *
 *   • `safeJsonLd()` escapes `<` to `\u003c` so user-supplied strings can
 *     never break the JSON-LD island or open an HTML-injection vector.
 *   • `imageObjectLicensing` spread into the publisher logo so Google
 *     Search Console "Image Metadata" enhancement is satisfied.
 *   • `articleBody` is supported as an optional summary — improves AI
 *     Overview / featured-snippet eligibility.
 *
 * Trimmed away from the previous over-engineered version:
 *   • `mentions` (circular self-reference to Organization — no SEO value)
 *   • `locationCreated` (intended for Events/Photos, not Articles)
 *   • `about: SoftwareApplication` (created topical mismatch on every
 *     post; replaced with a per-post `Thing` topic, like card-rummy does).
 */

import { imageObjectLicensing } from '@/lib/schema-image-licensing';

export const BASE_URL = 'https://teenpattigoldgame.com.pk';

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

export interface BlogPostSchemaOptions {
  /** Full canonical URL of the post */
  url: string;
  /** Article headline (matches <h1> and metadata title) */
  headline: string;
  /** Short description (matches meta description) */
  description: string;
  /** ISO-8601 datetime with +05:00 timezone */
  datePublished: string;
  /** ISO-8601 datetime with +05:00 timezone – set to today when you update content */
  dateModified: string;
  /** Primary image URL for the article (use a unique screenshot or OG image per post) */
  image?: string | string[];
  /** Word count estimate */
  wordCount?: number;
  /** Comma-separated keyword string */
  keywords?: string;
  /** Article section / category */
  articleSection?: string;
  /**
   * What the article is *about* — short noun-phrase like
   * "Teen Patti Gold withdrawal" or "Teen Patti Gold welcome bonus".
   * Used for the schema.org `about: { @type: Thing }` node.
   */
  topic?: string;
  /**
   * Optional 1–3 paragraph summary used as the schema.org `articleBody`.
   * Helpful for AI Overviews / Bing Copilot / featured snippets that
   * read the JSON-LD island instead of parsing rendered HTML.
   */
  articleBody?: string;
  /** Optional FAQ entities for rich results */
  faq?: Array<{ question: string; answer: string }>;
}

/**
 * Escape `<` characters in JSON-LD output so a stray angle-bracket inside
 * a string field can never close the surrounding `<script>` tag or open
 * an HTML-injection vector. This is the same hardening pattern card-rummy
 * uses in its `BlogPostSchema` component.
 */
export function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

/**
 * Builds a complete BlogPosting schema graph with E-E-A-T signals.
 * Returns the raw object — wrap with `safeJsonLd()` before injecting
 * into a `<script type="application/ld+json">` tag.
 */
export function getBlogPostingSchema(opts: BlogPostSchemaOptions) {
  const postId = `${opts.url}#article`;
  const webpageId = `${opts.url}#webpage`;

  // Default fallback intentionally avoids the home-page brand logo
  // (`/teen-patti-gold.webp`). When that URL was the default, every blog
  // post that didn't pass `image` ended up declaring the brand logo as its
  // primary image, and Google attributed the logo to the blog cluster
  // instead of the home page in Search Console's Image enhancement.
  const images = opts.image
    ? Array.isArray(opts.image)
      ? opts.image
      : [opts.image]
    : [`${BASE_URL}/teen-patti-gold-game.webp`];

  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: opts.headline, item: opts.url },
  ];

  const blogPosting: Record<string, unknown> = {
    '@type': 'BlogPosting',
    '@id': postId,
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      '@type': 'Organization',
      name: 'Teen Patti Gold Editorial Team',
      url: `${BASE_URL}/about-us`,
    },
    publisher: { '@id': ORG_ID },
    image: images,
    mainEntityOfPage: { '@id': webpageId },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-PK',
    articleSection: opts.articleSection ?? 'Gaming',
    about: {
      '@type': 'Thing',
      name: opts.topic ?? opts.headline,
    },
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    ...(opts.articleBody ? { articleBody: opts.articleBody } : {}),
  };

  const breadcrumbId = `${opts.url}#breadcrumb`;

  const graph: object[] = [
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: breadcrumbItems,
    },
    {
      '@type': 'WebPage',
      '@id': webpageId,
      url: opts.url,
      name: opts.headline,
      description: opts.description,
      isPartOf: { '@id': WEBSITE_ID },
      inLanguage: 'en-PK',
      datePublished: opts.datePublished,
      dateModified: opts.dateModified,
      breadcrumb: { '@id': breadcrumbId },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: images[0],
        contentUrl: images[0],
        ...imageObjectLicensing,
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro', '.article-intro'],
      },
    },
    blogPosting,
  ];

  if (opts.faq && opts.faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: opts.faq.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
