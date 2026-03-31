import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Teen Patti Gold vs Teen Patti Stars Comparison';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Teen Patti Gold vs Stars — Which Wins in Pakistan?',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'Compare', 'Pakistan'],
  });
}
