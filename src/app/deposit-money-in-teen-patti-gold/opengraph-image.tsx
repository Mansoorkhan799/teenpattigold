import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'Deposit money Teen Patti Gold Pakistan';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'Deposit on Teen Patti Gold — JazzCash & EasyPaisa PK',
    subheading: 'Deposit · JazzCash & EasyPaisa',
    pills: ['Deposit', 'Wallet', 'Pakistan'],
  });
}
