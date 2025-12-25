import { type CSSProperties } from 'react';

export const containerStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '80px',
  background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)', // 그라데이션 배경
  position: 'relative',
};

export const labelStyle: CSSProperties = {
  position: 'absolute',
  bottom: '-100px',
  right: '-100px',
  width: '400px',
  height: '400px',
  background: 'rgba(59, 130, 246, 0.15)',
  borderRadius: '100%',
  filter: 'blur(80px)',
  color: '#3b82f6', // 포인트 컬러
  fontSize: 28,
  fontWeight: 700,
  marginBottom: 24,
  letterSpacing: '0.1em',
};

export const titleStyle: CSSProperties = {
  fontSize: 84, // 크기를 더 키움
  fontWeight: 900,
  color: 'white',
  lineHeight: 1.1,
  wordBreak: 'keep-all',
};

export const descStyle: CSSProperties = {
  fontSize: 32,
  color: '#94a3b8',
  marginTop: 32,
  maxWidth: '800px',
  lineHeight: 1.5,
};
