import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Responsible Gaming Guide 2026 - Teen Patti Gold Pakistan';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Responsible Gaming — Teen Patti Gold Pakistan Guide',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'Safety', 'Pakistan'],
  });
}
