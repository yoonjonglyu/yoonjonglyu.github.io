import {
  defineDocumentType,
  makeSource,
  defineNestedType,
} from 'contentlayer2/source-files';

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

const Resume = defineNestedType(() => ({
  name: 'Resume',
  fields: {
    title: { type: 'string' },
    period: { type: 'string' },
    role: { type: 'string' },
    description: { type: 'string' },
    skills: { type: 'list', of: { type: 'string' } },
  },
}));

// 2. Work 타입에서 위에서 정의한 Resume 타입을 사용합니다.
export const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: `works/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },

    // nested schema 대신 of: Resume 사용
    resume: { type: 'nested', of: Resume },

    highlights: { type: 'list', of: { type: 'string' } },
    featured: { type: 'boolean', default: false },
    category: {
      type: 'enum',
      options: ['product', 'system', 'experiment'],
      default: 'product',
    },
    thumbnail: { type: 'string' },
    order: { type: 'number' },
    tags: { type: 'list', of: { type: 'string' } },
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
