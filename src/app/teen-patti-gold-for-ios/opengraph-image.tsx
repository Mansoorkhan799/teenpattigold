import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Teen Patti Gold for iOS Download Pakistan';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Teen Patti Gold for iOS — Download Info Pakistan 2026',
    subheading: 'iOS · Download info',
    pills: ['iOS', 'Download', 'Pakistan'],
  });
}
