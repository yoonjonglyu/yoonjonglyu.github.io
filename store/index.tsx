'use client';
import React from 'react';
import { Provider } from 'jotai';

export interface ConfigureStore {
  children: React.ReactNode;
}

const ConfigureStore: React.FC<ConfigureStore> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default ConfigureStore;
