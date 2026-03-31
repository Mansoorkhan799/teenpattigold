import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'How to Use Teen Patti Gold APK in Pakistan?';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'How to Use Teen Patti Gold APK in Pakistan?',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'Guide', 'Pakistan'],
  });
}
