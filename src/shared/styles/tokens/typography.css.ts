import { style } from '@vanilla-extract/css';

/**
 * Typography Design Tokens
 * 프로젝트 전역에서 사용되는 타이포그래피 토큰을 정의합니다.
 */

// 공통 스타일
const baseTypography = style({
  lineHeight: '150%',
  letterSpacing: '-0.03em',
});

// 폰트 weight 상수
const fontWeight = {
  semibold: 600,
  medium: 500,
  regular: 400,
} as const;

// Heading 스타일
export const heading_sb_60 = style([
  baseTypography,
  {
    fontSize: '3.75rem',
    fontWeight: fontWeight.semibold,
  },
]);

export const heading_sb_22 = style([
  baseTypography,
  {
    fontSize: '1.375rem',
    fontWeight: fontWeight.semibold,
  },
]);

// Title 스타일
export const title_sb_16 = style([
  baseTypography,
  {
    fontSize: '1rem',
    fontWeight: fontWeight.semibold,
  },
]);

export const title_m_16 = style([
  baseTypography,
  {
    fontSize: '1rem',
    fontWeight: fontWeight.medium,
  },
]);

export const title_r_16 = style([
  baseTypography,
  {
    fontSize: '1rem',
    fontWeight: fontWeight.regular,
  },
]);

// Body 스타일
export const body_m_14 = style([
  baseTypography,
  {
    fontSize: '0.875rem',
    fontWeight: fontWeight.medium,
  },
]);

export const body_r_14 = style([
  baseTypography,
  {
    fontSize: '0.875rem',
    fontWeight: fontWeight.regular,
  },
]);

export const body_r_14_underline = style([
  baseTypography,
  {
    fontSize: '0.875rem',
    fontWeight: fontWeight.regular,
    textDecoration: 'underline',
  },
]);

// Caption 스타일
export const caption_m_12 = style([
  baseTypography,
  {
    fontSize: '0.75rem',
    fontWeight: fontWeight.medium,
  },
]);

export const caption_r_12 = style([
  baseTypography,
  {
    fontSize: '0.75rem',
    fontWeight: fontWeight.regular,
  },
]);

export const caption_r_12_underline = style([
  baseTypography,
  {
    fontSize: '0.75rem',
    fontWeight: fontWeight.regular,
    textDecoration: 'underline',
  },
]);

// 모든 타이포그래피 스타일을 객체로 export
export const typography = {
  heading_sb_60,
  heading_sb_22,
  title_sb_16,
  title_m_16,
  title_r_16,
  body_m_14,
  body_r_14,
  body_r_14_underline,
  caption_m_12,
  caption_r_12,
  caption_r_12_underline,
} as const;

// Type for typography keys
export type TypographyToken = keyof typeof typography;
