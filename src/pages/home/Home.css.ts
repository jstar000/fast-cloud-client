import { style } from '@vanilla-extract/css';
import { colors } from '../../shared/styles/tokens/colors.css';
import { typography } from '../../shared/styles/tokens/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: colors.gray050,
  padding: '2rem',
});

export const card = style({
  backgroundColor: colors.gray000,
  padding: '3rem',
  borderRadius: '12px',
  boxShadow: `0 4px 12px ${colors.gray000_10}`,
  border: `1px solid ${colors.gray200}`,
  maxWidth: '600px',
  width: '100%',
});

export const title = typography.heading_sb_60;

export const subtitle = typography.heading_sb_22;

export const description = typography.body_r_14;

export const button = style({
  backgroundColor: colors.primary,
  color: colors.gray000,
  padding: '12px 24px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  marginTop: '1.5rem',

  ':hover': {
    backgroundColor: colors.primaryDark,
  },

  ':active': {
    transform: 'scale(0.98)',
  },
});

export const buttonText = typography.caption_m_12;

export const badge = style({
  display: 'inline-block',
  backgroundColor: colors.green_14,
  color: colors.green,
  padding: '4px 12px',
  borderRadius: '4px',
  marginTop: '1rem',
});

export const errorText = style({
  color: colors.error,
  backgroundColor: colors.error_08,
  padding: '8px 16px',
  borderRadius: '6px',
  marginTop: '1rem',
});
