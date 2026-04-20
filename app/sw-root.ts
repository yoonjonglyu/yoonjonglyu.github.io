import { type PrecacheEntry, Serwist, NetworkFirst, StaleWhileRevalidate } from 'serwist';

declare const self: ServiceWorkerGlobalScope & {
  __SW_MANIFEST: (string | PrecacheEntry)[] | undefined;
};

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  cacheId: 'isa-root-archive',
  // [추가] 내비게이션 프리로드 비활성화 (경로 충돌 방지)
  navigationPreload: false, 
  runtimeCaching: [
    {
      matcher: ({ request }) => request.mode === 'navigate',
      handler: new NetworkFirst({
        cacheName: 'pages-cache',
        networkTimeoutSeconds: 3,
        // [중요] 네트워크도 실패하고 캐시도 없을 때, 
        // 서비스 워커가 에러를 내뱉는 대신 브라우저가 직접 네트워크를 다시 시도하게 함
        fetchOptions: {
          redirect: 'follow',
        },
        plugins: [
          {
            // 핸들러가 응답을 생성하지 못했을 때(둘 다 없을 때) 
            // 마지막 수단으로 캐시된 루트 페이지(/index.html)를 반환하도록 로직을 짜거나,
            // null을 반환하여 브라우저 에러 페이지가 나오게 유도
            handlerDidError: async () => {
              return caches.match('/'); // 최후의 보루: 메인 페이지라도 보여줌
            }
          }
        ]
      }),
    },
    {
      matcher: ({ request }) => 
        request.destination === 'style' || 
        request.destination === 'script' || 
        request.destination === 'image',
      handler: new StaleWhileRevalidate({
        cacheName: 'static-resources',
        // 정적 파일들도 네트워크 과부하 시 실패할 수 있으므로 만료 설정 추가
        plugins: [{
          cacheWillUpdate: async ({ response }) => {
            return response && response.status === 200 ? response : null;
          }
        }]
      }),
    },
  ],
});

serwist.addEventListeners();