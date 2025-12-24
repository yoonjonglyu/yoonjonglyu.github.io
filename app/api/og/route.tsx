import { ImageResponse } from 'next/og';

export const runtime = 'chrome';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') ?? 'ISA Work';
  const desc = searchParams.get('desc') ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0b1020',
          color: '#fff',
        }}
      >
        <h1 style={{ fontSize: 64 }}>{title}</h1>
        <p style={{ fontSize: 28, opacity: 0.7 }}>{desc}</p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
