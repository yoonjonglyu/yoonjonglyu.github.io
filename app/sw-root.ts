/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultCache } from "@serwist/next/worker";
import { type PrecacheEntry, Serwist } from "serwist";

declare const self: ServiceWorkerGlobalScope & {
  __SW_MANIFEST: (string | PrecacheEntry)[] | undefined;
};

// 1. 제외 로직 플러그인 정의
const exclusionPlugin = {
  handlerWillStart: async ({ request }: { request: Request }) => {
    const url = new URL(request.url);
    const excludedPaths = ["/memo", "/daoxin", "/iapp"]; 
    
    if (excludedPaths.some(path => url.pathname.startsWith(path))) {
      return undefined; 
    }
    return undefined;
  },
};

// 2. 타입 에러를 피하기 위해 'any'를 거쳐 명시적 구조 생성
const runtimeCaching = defaultCache.map((entry: any) => {
  // options가 없는 객체일 경우를 대비해 기본값 할당
  return {
    ...entry,
    options: {
      ...(entry.options || {}),
      plugins: [...(entry.options?.plugins || []), exclusionPlugin],
    },
  };
});

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  cacheId: "isa-root-archive",
  runtimeCaching: runtimeCaching as any, // Serwist 내부에서 최종적으로 타입을 검증하도록 위임
});

serwist.addEventListeners();