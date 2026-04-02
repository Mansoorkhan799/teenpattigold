import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'How to Play Teen Patti Gold in Pakistan — Full Guide';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'How to Play Teen Patti Gold in Pakistan — Full Guide',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'How-to', 'Pakistan'],
  });
}
