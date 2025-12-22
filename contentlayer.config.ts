import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    period: { type: 'string', required: true },
    stack: { type: 'list', of: { type: 'string' } },
    role: { type: 'string' },
    repository: { type: 'string' },
    homepage: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
    order: { type: 'number' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

export const Package = defineDocumentType(() => ({
  name: 'Package',
  filePathPattern: `packages/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    period: { type: 'string', required: true },
    version: { type: 'string', required: true },
    stack: { type: 'list', of: { type: 'string' } },
    repository: { type: 'string' },
    homepage: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
    order: { type: 'number' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

export const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: `works/*.mdx`,
  contentType: 'mdx',
  fields: {
    /** 전시용 타이틀 */
    title: { type: 'string', required: true },
    /** Work 리스트 / 카드에 쓰는 한 줄 요약 */
    summary: { type: 'string', required: true },
    /** 대표 작업 여부 (Work 메인에서 강조용) */
    featured: { type: 'boolean', default: false },
    /** Work 분류 (optional, 확장 대비) */
    category: {
      type: 'enum',
      options: ['product', 'system', 'experiment'],
      default: 'product',
    },
    /** 썸네일 (전시용) */
    thumbnail: {
      type: 'string',
    },
    /** 정렬용 */
    order: { type: 'number' },
    /** 기술 태그 (가볍게만, 필터용) */
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Work, Package],
});
