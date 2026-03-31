import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Latest Teen Patti Gold Offers and Rewards 2026';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Teen Patti Gold Offers & Rewards — Pakistan Deals 2026',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'Offers', 'Pakistan'],
  });
}
