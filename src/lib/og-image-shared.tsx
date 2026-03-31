import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = 'image/jpeg';

export type OgImageInput = {
  headline: string;
  subheading: string;
  pills: string[];
};

function headlineFontSize(text: string): number {
  const len = text.length;
  if (len <= 42) return 48;
  if (len <= 64) return 40;
  if (len <= 80) return 34;
  return 30;
}

export function ogImageResponse({ headline, subheading, pills }: OgImageInput) {
  const fs = headlineFontSize(headline);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #06091F 0%, #0A1029 50%, #0d1540 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,165,0,0.15) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,200,100,0.1) 0%, transparent 70%)',
          }}
        />

        <img
          src="https://teenpattigoldgame.com.pk/teen-patti-gold.webp"
          alt=""
          width={100}
          height={100}
          style={{ borderRadius: 20, marginBottom: 20 }}
        />

        <div
          style={{
            fontSize: fs,
            fontWeight: 800,
            color: '#FFA500',
            textAlign: 'center',
            lineHeight: 1.15,
            marginBottom: 12,
            letterSpacing: '-0.5px',
            maxWidth: 1080,
            padding: '0 48px',
          }}
        >
          {headline}
        </div>

        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: 22,
            opacity: 0.95,
          }}
        >
          {subheading}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 1000, padding: '0 40px' }}>
          {pills.map((pill) => (
            <div
              key={pill}
              style={{
                background: 'rgba(255,165,0,0.15)',
                border: '1px solid rgba(255,165,0,0.4)',
                borderRadius: 100,
                padding: '6px 16px',
                color: '#FFA500',
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {pill}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 18,
            color: 'rgba(255,255,255,0.45)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          teenpattigoldgame.com.pk
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
