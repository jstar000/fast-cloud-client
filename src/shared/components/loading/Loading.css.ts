import { style, keyframes } from '@vanilla-extract/css';
import { colors } from '@/shared/styles/tokens/colors.css';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  width: '100%',
});

export const spinner = style({
  width: '40px',
  height: '40px',
  border: `3px solid ${colors.gray700}`,
  borderTop: `3px solid ${colors.gray300}`,
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
});
