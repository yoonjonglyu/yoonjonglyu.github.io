'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 5, // 5분 (기본값: 5분)
      staleTime: 1000 * 60 * 1, // 1분 (데이터를 신선한 상태로 유지하는 시간)
      retry: 3, // 실패 시 재시도 횟수 (기본값: 3)
      refetchOnWindowFocus: false, // 윈도우 포커스 시 데이터 재요청 비활성화
    },
    mutations: {
      retry: 1, // Mutation 실패 시 1회만 재시도
    },
  },
});
new QueryClient();

export interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
  children,
}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
export default ReactQueryProvider;
