/**
 * Generates a complete, Google-eligible BlogPosting schema for all blog posts.
 * Uses @id references to the global Organization and WebSite nodes defined in layout.tsx.
 */

import { LOGO_URL } from '@/lib/site-images';

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
  /** Optional FAQ entities for rich results */
  faq?: Array<{ question: string; answer: string }>;
}

/**
 * Builds a complete BlogPosting schema with E-E-A-T signals.
 * Returns the raw object ready to be JSON.stringify-ed.
 */
export function getBlogPostingSchema(opts: BlogPostSchemaOptions) {
  const postId = `${opts.url}#article`;
  const webpageId = `${opts.url}#webpage`;

  const images = opts.image
    ? Array.isArray(opts.image)
      ? opts.image
      : [opts.image]
    : [LOGO_URL, `${BASE_URL}/teen-patti-gold-game.webp`];

  const graph: object[] = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': webpageId,
      url: opts.url,
      name: opts.headline,
      isPartOf: { '@id': WEBSITE_ID },
      inLanguage: 'en-PK',
      datePublished: opts.datePublished,
      dateModified: opts.dateModified,
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      ]},
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: images[0],
        contentUrl: images[0],
      },
    },
    {
      '@type': 'BlogPosting',
      '@id': postId,
      headline: opts.headline,
      description: opts.description,
      url: opts.url,
      datePublished: opts.datePublished,
      dateModified: opts.dateModified,
      author: {
        '@type': 'Person',
        name: 'Teen Patti Gold Editorial Team',
        url: `${BASE_URL}/about-us`,
      },
      publisher: { '@id': ORG_ID },
      image: images,
      mainEntityOfPage: { '@id': webpageId },
      isPartOf: { '@id': WEBSITE_ID },
      inLanguage: 'en-PK',
      ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
      ...(opts.keywords ? { keywords: opts.keywords } : {}),
      articleSection: opts.articleSection ?? 'Gaming',
      about: {
        '@type': 'SoftwareApplication',
        name: 'Teen Patti Gold',
        operatingSystem: 'Android 5.0+',
        applicationCategory: 'GameApplication',
      },
      mentions: { '@id': ORG_ID },
    },
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
