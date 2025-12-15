import { ImageResponse } from 'next/og';

export const GET = async (req) => {
  const title = req.nextUrl.searchParams.get("title") ?? "ISA.dev";
  return new ImageResponse(
    (
      <div style={{ fontSize: 48, padding: 40 }}>
        {title}
      </div>
    ),
    { width: 1200, height: 630 }
  );
};
