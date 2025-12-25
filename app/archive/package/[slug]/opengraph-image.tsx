import { ImageResponse } from 'next/og';

import { allPackages } from '@contentlayer/generated';

import {containerStyle, labelStyle, titleStyle, descStyle } from '@provider/style/opengraph';

export const dynamic = 'force-static'; 
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return allPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPackages.find((p) => p.slug === params.slug);
  
  return new ImageResponse(
    (
      <div style={containerStyle}>
        <span style={labelStyle}>PACKAGE</span>
        <h1 style={titleStyle}>{post?.title ?? 'ISA Package'}</h1>
        <p style={descStyle}>{post?.description ?? ''}</p>
      </div>
    ),
    { ...size }
  );
}