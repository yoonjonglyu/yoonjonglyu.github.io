'use client';
import React from 'react';
import { RecoilRoot } from 'recoil';

export interface ConfigureStore {
  children: React.ReactNode;
}

const ConfigureStore: React.FC<ConfigureStore> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default ConfigureStore;
