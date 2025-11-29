import { colors } from '@/shared/styles/tokens/colors.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '24px 60px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 1000,
  backgroundColor: colors.gray999,
});

export const buttonContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
});
