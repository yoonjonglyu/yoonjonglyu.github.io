import { ImageResponse } from 'next/og';
import { pascalCase } from 'isa-util';

import { allWorks } from '@contentlayer/generated';
import { getLocalizedDocBySlug, getUniqueSlugs } from '@lib/content';
import {
  containerStyle,
  labelStyle,
  titleStyle,
  descStyle,
} from '@provider/style/opengraph';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return getUniqueSlugs(allWorks).map((slug) => ({
    slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getLocalizedDocBySlug(allWorks, slug, 'en');

  return new ImageResponse(
    (
      <div style={containerStyle}>
        <span style={labelStyle}>WORK</span>
        <h1 style={titleStyle}>{pascalCase(post?.title) ?? 'ISA Work'}</h1>
        <p style={descStyle}>{post?.summary ?? ''}</p>
      </div>
    ),
    { ...size },
  );
}

// 스타일 상수는 파일 하단에 공통 정의 (아래 참고)
