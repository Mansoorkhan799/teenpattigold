import { ogImageResponse, OG_CONTENT_TYPE, OG_SIZE } from '@/lib/og-image-shared';

export const runtime = 'edge';
export const alt = 'About Teen Patti Gold - Premier Card Gaming Platform Pakistan';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImageResponse({
    headline: 'About Teen Patti Gold — Pakistan Card Game Platform',
    subheading: 'About · Pakistan',
    pills: ['About', 'Platform', 'Pakistan'],
  });
}
