import { type PrecacheEntry, Serwist, NetworkFirst, StaleWhileRevalidate } from 'serwist';

declare const self: ServiceWorkerGlobalScope & {
  __SW_MANIFEST: (string | PrecacheEntry)[] | undefined;
};

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  cacheId: 'isa-root-archive',
  runtimeCaching: [
    // 1. 페이지 탐색 (HTML 요청) - 오프라인 대응 핵심
    {
      matcher: ({ request }) => request.mode === 'navigate',
      handler: new NetworkFirst({
        cacheName: 'pages-cache',
        networkTimeoutSeconds: 3, // 3초 내 응답 없으면 바로 캐시 사용
      }),
    },
    // 2. 나머지 정적 자산들 (JS, CSS, 이미지)
    {
      matcher: ({ request }) => 
        request.destination === 'style' || 
        request.destination === 'script' || 
        request.destination === 'image',
      handler: new StaleWhileRevalidate({
        cacheName: 'static-resources',
      }),
    },
  ],
});

serwist.addEventListeners();