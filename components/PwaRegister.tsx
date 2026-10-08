'use client';
import { useEffect } from 'react';

export default function PwaRegister() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('PWA Service Worker registered successfully:', registration.scope);
        })
        .catch((error) => {
          console.error('PWA Service Worker registration failed:', error);
        });
    }
  }, []);

  return null;
}
