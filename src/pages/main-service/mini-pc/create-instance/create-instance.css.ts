import { colors } from '@/shared/styles/tokens/colors.css';
import { style } from '@vanilla-extract/css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '100px 120px',
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

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const instance = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '24px',
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '24px',
});

export const summary = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const tagContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const tagRow = style({
  display: 'flex',
  gap: '8px',
});

export const tagText = style({
  ...typographyVars.title_r_16,
  color: colors.gray200,
});

export const buttonContainer = style({
  marginTop: '48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});
