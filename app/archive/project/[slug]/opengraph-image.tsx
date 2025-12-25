import { ImageResponse } from 'next/og';
import { pascalCase } from 'isa-util';

import { allProjects } from '@contentlayer/generated';

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
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allProjects.find((p) => p.slug === slug);

  return new ImageResponse(
    (
      <div style={containerStyle}>
        <span style={labelStyle}>PROJECT</span>
        <h1 style={titleStyle}>{pascalCase(post?.title) ?? 'ISA Project'}</h1>
        <p style={descStyle}>{post?.description ?? ''}</p>
      </div>
    ),
    { ...size },
  );
}
