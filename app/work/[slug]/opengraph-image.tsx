import { ImageResponse } from 'next/og';

import { allWorks } from '@contentlayer/generated';
import {containerStyle, labelStyle, titleStyle, descStyle } from '@provider/style/opengraph';

export const dynamic = 'force-static'; 
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return allWorks.map((work) => ({
    slug: work.slug,
  }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allWorks.find((p) => p.slug === params.slug);
  
  return new ImageResponse(
    (
      <div style={containerStyle}>
        <span style={labelStyle}>WORK</span>
        <h1 style={titleStyle}>{post?.title ?? 'ISA Work'}</h1>
        <p style={descStyle}>{post?.summary ?? ''}</p>
      </div>
    ),
    { ...size }
  );
}

// 스타일 상수는 파일 하단에 공통 정의 (아래 참고)