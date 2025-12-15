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
    github: { type: 'string' },
    demo: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

export const Archive = defineDocumentType(() => ({
  name: 'Archive',
  filePathPattern: `archive/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '') },
  },
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Project, Archive],
});
