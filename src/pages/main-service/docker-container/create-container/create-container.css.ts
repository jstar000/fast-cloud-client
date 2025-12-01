import { colors } from '@/shared/styles/tokens/colors.css';
import { style } from '@vanilla-extract/css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '120px 120px 0',
  alignItems: 'center',
  gap: '60px',
  width: '100%',
});

export const title = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const mainTitle = style({
  ...typographyVars.heading_sb_40,
  color: colors.gray000,
  alignSelf: 'center',
});

export const subtitle = style({
  ...typographyVars.title_sb_16,
  color: colors.gray500,
});

export const contents = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const inputRow = style({
  display: 'flex',
  gap: '16px',
});
