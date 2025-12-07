import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '340px',
  minHeight: '52px', // 긴 텍스트 대응
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '0 16px',
  backgroundColor: colors.gray000_10,
  borderRadius: '10px',
  transition: 'all 0.3s ease',
});

export const icon = style({
  flexShrink: 0, // 고정 크기 유지
  width: '24px',
  height: '24px',
});

export const content = style({
  ...typographyVars.body_m_14,
  color: colors.gray000,
  flex: 1, // 남은 가로 너비 모두 차지
});
