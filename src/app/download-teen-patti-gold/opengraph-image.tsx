import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Download Teen Patti Gold APK - Free Card Game for Android';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Download Teen Patti Gold APK Free | Android Pakistan',
    subheading: 'Official APK · Android',
    pills: ['Download', 'APK', 'Pakistan'],
  });
}
