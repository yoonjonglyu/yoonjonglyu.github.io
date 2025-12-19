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
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    stack: { type: 'list', of: { type: 'string' } },
    repository: { type: 'string' },
    homepage: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '') },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Work, Package],
});
