import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Contact Teen Patti Gold support Pakistan';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Contact Teen Patti Gold — Support & Help Pakistan 2026',
    subheading: 'Support · Pakistan',
    pills: ['Contact', 'Support', 'Pakistan'],
  });
}
