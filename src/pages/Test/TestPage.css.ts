import { style } from '@vanilla-extract/css';
import { colors } from '@styles/tokens/colors.css';

export const container = style({
  padding: '64px',
  maxWidth: '1400px',
  margin: '0 auto',
  backgroundColor: colors.gray900,
  minHeight: '100vh',
});

export const title = style({
  color: colors.gray000,
  marginBottom: '20px',
});

export const section = style({
  marginBottom: '48px',
  padding: '48px',
  backgroundColor: colors.gray900,
  borderRadius: '16px',
  border: `1px solid white`,
});

export const buttonGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  alignItems: 'center',
});
