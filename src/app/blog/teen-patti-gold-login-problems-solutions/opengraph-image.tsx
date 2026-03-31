import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'How to fix Login Problem of Teen Patti Gold?';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'How to fix Login Problem of Teen Patti Gold?',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'Support', 'Pakistan'],
  });
}
