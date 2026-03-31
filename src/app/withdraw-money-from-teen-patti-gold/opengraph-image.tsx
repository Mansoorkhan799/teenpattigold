import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Withdraw Teen Patti Gold Pakistan JazzCash EasyPaisa';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Withdraw from Teen Patti Gold — JazzCash & EasyPaisa',
    subheading: 'Withdraw · JazzCash & EasyPaisa',
    pills: ['Withdraw', 'JazzCash', 'Pakistan'],
  });
}
