import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Teen Patti Gold - Pakistan's #1 Card Game App";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/jpeg';

export default async function Image() {
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
        {/* Decorative background circles */}
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

        {/* Logo — next/image not available in ImageResponse, raw img required */}
        <img
          src="https://teenpattigoldgame.com.pk/teen-patti-gold.webp"
          alt="Teen Patti Gold Logo"
          width={150}
          height={150}
          style={{ borderRadius: 24, marginBottom: 32 }}
        />

        {/* Headline */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: '#FFA500',
            textAlign: 'center',
            lineHeight: 1.15,
            marginBottom: 16,
            letterSpacing: '-1px',
          }}
        >
          Teen Patti Gold
        </div>

        {/* Sub-headline */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: 28,
          }}
        >
          Pakistan&apos;s #1 Card Game App
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
          {['30+ Games', 'Real Money', 'JazzCash & EasyPaisa', 'Free Download'].map((pill) => (
            <div
              key={pill}
              style={{
                background: 'rgba(255,165,0,0.15)',
                border: '1px solid rgba(255,165,0,0.4)',
                borderRadius: 100,
                padding: '8px 20px',
                color: '#FFA500',
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {pill}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: 20,
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          teenpattigoldgame.com.pk
        </div>
      </div>
    ),
    { ...size }
  );
}
