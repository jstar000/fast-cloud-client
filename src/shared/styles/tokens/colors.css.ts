/**
 * Color Design Tokens
 * 프로젝트 전역에서 사용되는 색상 토큰을 정의합니다.
 */

export const colors = {
  // Grayscale
  gray999: '#000000',
  gray900: '#1B1E22',
  gray800: '#31373F',
  gray700: '#48505B',
  gray600: '#6C7789',
  gray500: '#8996A9',
  gray400: '#B7C0CD',
  gray300: '#D4DAE2',
  gray200: '#E7EAEF',
  gray100: '#F3F4F7',
  gray050: '#F9FAFB',
  gray000: '#FFFFFF',

  // Grayscale Opacity
  gray000_10: 'rgba(255, 255, 255, 0.10)',
  gray000_06: 'rgba(255, 255, 255, 0.06)',
  gray000_04: 'rgba(255, 255, 255, 0.04)',
  gray000_02: 'rgba(255, 255, 255, 0.02)',

  // Brand
  primary: '#2974FF',
  primary_20: 'rgba(41, 116, 255, 0.20)',
  primaryDark: '#1B68F8',
  bgGrad:
    'radial-gradient(ellipse 135% 78% at 50% -60%, rgba(0, 42, 140, 0.7) 0%, rgba(7, 9, 13, 0) 100%), #07090D',
  cardGradPrimary:
    'radial-gradient(574.85% 120.26% at 50% -15.34%, rgba(0, 89, 255, 0.00) 0%, rgba(0, 89, 255, 0.08) 61.09%, rgba(0, 89, 255, 0.24) 100%);',
  cardGradGray:
    'radial-gradient(116.61% 120.26% at 50% -15.34%, rgba(137, 150, 169, 0.00) 29.33%, rgba(137, 150, 169, 0.06) 61.54%, rgba(137, 150, 169, 0.15) 100%)',

  // Feedback
  error: '#FF6161',
  error_08: 'rgba(255, 97, 97, 0.08)',
  green: '#22C900',
  green_14: 'rgba(34, 201, 0, 0.14)',
  orange: '#FF9A3D',
  orange_14: 'rgba(255, 154, 61, 0.14)',
} as const;

export type ColorToken = keyof typeof colors;
