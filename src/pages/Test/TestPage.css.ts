import { style } from '@vanilla-extract/css';
import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';

export const container = style({
  padding: '64px',
  maxWidth: '1400px',
  margin: '0 auto',
  backgroundColor: colors.gray900,
  minHeight: '100vh',
});

export const title = style({
  ...typographyVars.heading_sb_60,
  color: colors.gray000,
  marginBottom: '64px',
  textAlign: 'center',
});

export const section = style({
  marginBottom: '48px',
  padding: '48px',
  backgroundColor: colors.gray800,
  borderRadius: '16px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
});

export const buttonGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  alignItems: 'center',
});
