import { type CSSProperties } from "react";

export const containerStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '80px',
  background: '#0b1020', // 프로젝트 테마색
  color: '#fff',
};

export const labelStyle: CSSProperties = {
  fontSize: 24,
  color: '#3b82f6', // 포인트 컬러
  marginBottom: 20,
  fontWeight: 'bold',
  letterSpacing: '0.1em',
};

export const titleStyle: CSSProperties = {
  fontSize: 64,
  fontWeight: 'bold',
  margin: 0,
  marginBottom: 20,
};

export const descStyle: CSSProperties = {
  fontSize: 28,
  opacity: 0.7,
  margin: 0,
};