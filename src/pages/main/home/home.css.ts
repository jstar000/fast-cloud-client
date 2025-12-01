import { keyframes, style } from '@vanilla-extract/css';
import { colors } from '@/shared/styles/tokens/colors.css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';

const fadeUp = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px',
  flex: 1,
  marginBottom: '80px',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const title = style({
  ...typographyVars.heading_sb_60,
  color: colors.gray000,
  opacity: 0,
  animation: `${fadeUp} 0.6s ease-out forwards`,
});

export const subtitle = style({
  ...typographyVars.title_r_16,
  color: colors.gray600,
  whiteSpace: 'pre-line',
  textAlign: 'center',
  opacity: 0,
  animation: `${fadeUp} 0.8s ease-out 0.4s forwards`,
});

export const button = style({
  opacity: 0,
  animation: `${fadeUp} 1s ease-out 0.8s forwards`,
});
