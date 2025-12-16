import { colors } from '@/shared/styles/tokens/colors.css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  outline: `1px solid ${colors.gray000_06}`,
  outlineOffset: '-1px',
  padding: '28px',
  width: 'fit-content',
  height: '340px',
  transition: 'background 0.3s ease, transform 0.3s ease, outline 0.3s ease',

  ':hover': {
    background: colors.cardGradGray,
    transform: 'translateY(-20px)',
    outline: `1px solid ${colors.gray000_10}`,
  },
});

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  marginBottom: '12px',
});

export const title = style({
  ...typographyVars.heading_sb_22,
  color: colors.gray000,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const templateRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const templateName = style({
  ...typographyVars.body_m_14,
  color: colors.gray200,
});

export const templateSize = style({
  ...typographyVars.body_r_14,
  color: colors.gray500,
});

export const createdAt = style({
  ...typographyVars.body_r_14,
  color: colors.gray600,
});

export const divider = style({
  margin: '16px 0',
});

export const ipContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ipLabel = style({
  ...typographyVars.title_m_16,
  color: colors.gray200,
});

export const ipValue = style({
  ...typographyVars.body_r_14,
  color: colors.gray500,
  padding: '4px 10px',
  background: colors.gray000_04,
  borderRadius: '8px',
});
