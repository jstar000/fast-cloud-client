import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '12px',
  maxWidth: '400px',
});

export const checkbox = style({
  margin: '2px 0',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  marginLeft: '2px',
});

export const title = style({
  ...typographyVars.title_m_16,
  color: colors.gray200,
});

export const detail = style({
  ...typographyVars.body_r_14,
  color: colors.gray700,
});
