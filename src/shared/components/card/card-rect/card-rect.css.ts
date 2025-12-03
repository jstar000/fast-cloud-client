import { colors } from '@/shared/styles/tokens/colors.css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '32px',
    justifyContent: 'space-between',
    borderRadius: '20px',
    outline: `1px solid ${colors.gray000_06}`,
    outlineOffset: '-1px',
    minHeight: '430px',
    transition: 'all 0.4s ease',
    userSelect: 'none',
    selectors: {
      '&:hover': {
        background: colors.cardGradPrimary,
        outline: `1px solid ${colors.gray000_02}`,
        outlineOffset: '-1px',
        transform: 'translateY(-20px)',
      },
    },
  },
  variants: {
    size: {
      large: {
        width: '324px',
      },
      small: {
        width: '260px',
      },
    },
  },
  defaultVariants: {},
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const title = style({
  ...typographyVars.heading_sb_22,
  color: colors.gray000,
});

export const detail = style({
  ...typographyVars.body_r_14,
  color: colors.gray600,
});

export const divider = style({
  margin: '24px 0',
});

// 추천, 설명 컨테이너
export const recommendationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

// 설명 컨테이너
export const purposeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const purposeRow = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
});

export const purposeText = style({
  ...typographyVars.body_r_14,
  color: colors.gray600,
});
