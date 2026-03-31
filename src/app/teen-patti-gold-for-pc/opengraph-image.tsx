import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Teen Patti Gold for PC Windows Pakistan';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Teen Patti Gold for PC — Windows Play Guide Pakistan',
    subheading: 'PC · Windows guide',
    pills: ['PC', 'Windows', 'Pakistan'],
  });
}
