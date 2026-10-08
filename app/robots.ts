import { MetadataRoute } from 'next';

const BASE_URL = 'https://yoonjonglyu.github.io';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Explicit allowance for AI Search & Generative Engines (GEO)
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
