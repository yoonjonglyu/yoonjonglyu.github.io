import { ImageResponse } from 'next/og';

import { allProjects } from '@contentlayer/generated';

import {containerStyle, labelStyle, titleStyle, descStyle } from '@provider/style/opengraph';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allProjects.find((p) => p.slug === params.slug);
  
  return new ImageResponse(
    (
      <div style={containerStyle}>
        <span style={labelStyle}>PROJECT</span>
        <h1 style={titleStyle}>{post?.title ?? 'ISA Project'}</h1>
        <p style={descStyle}>{post?.description ?? ''}</p>
      </div>
    ),
    { ...size }
  );
}