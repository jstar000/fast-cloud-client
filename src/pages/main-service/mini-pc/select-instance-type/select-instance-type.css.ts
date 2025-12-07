import { colors } from '@/shared/styles/tokens/colors.css';
import { style } from '@vanilla-extract/css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '120px 120px 0',
  alignItems: 'center',
  gap: '48px',
  width: '100%',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center',
});

export const title = style({
  ...typographyVars.heading_sb_40,
  color: colors.gray000,
});

export const subtitle = style({
  ...typographyVars.title_r_16,
  color: colors.gray500,
});

export const selections = style({
  display: 'flex',
  gap: '20px',
});
