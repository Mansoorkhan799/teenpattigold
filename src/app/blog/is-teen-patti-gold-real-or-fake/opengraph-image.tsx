import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Is Teen Patti Gold Pakistan Real or Fake';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Is Teen Patti Gold Pakistan Real or Fake?',
    subheading: 'Blog · Pakistan',
    pills: ['Blog', 'Safety', 'Pakistan'],
  });
}
