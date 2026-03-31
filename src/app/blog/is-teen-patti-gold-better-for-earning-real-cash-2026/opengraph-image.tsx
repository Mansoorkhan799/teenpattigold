import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Is Teen Patti Gold Better for Earning Real Cash 2026';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Is Teen Patti Gold Best for Real Cash in Pakistan?',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'Earning', 'Pakistan'],
  });
}
