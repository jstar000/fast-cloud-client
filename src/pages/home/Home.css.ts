import { style } from '@vanilla-extract/css';
import { colors } from '../../shared/styles/tokens/colors.css';
import { typographyVars } from '../../shared/styles/tokens/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px',
  flex: 1,
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const title = style({
  ...typographyVars.heading_sb_60,
  color: colors.gray000,
});

export const subtitle = style({
  ...typographyVars.title_r_16,
  color: colors.gray600,
  whiteSpace: 'pre-line',
  textAlign: 'center',
});
