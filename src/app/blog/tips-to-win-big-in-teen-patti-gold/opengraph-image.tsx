import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'How to Win Big at Teen Patti Gold Pakistan in 2026?';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'How to Win Big at Teen Patti Gold Pakistan in 2026?',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'Tips', 'Pakistan'],
  });
}
