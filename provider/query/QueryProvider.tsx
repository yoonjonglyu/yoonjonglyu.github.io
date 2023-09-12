'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

export interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({
  children,
}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
export default ReactQueryProvider;
