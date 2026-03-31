import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Teen Patti Gold privacy policy Pakistan';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Teen Patti Gold Privacy Policy — Data Protection PK',
    subheading: 'Legal · Pakistan',
    pills: ['Legal', 'Privacy', 'Pakistan'],
  });
}
