import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 2px',
  gap: '2px',
});

export const label = recipe({
  base: {
    color: colors.gray500,
  },
  variants: {
    size: {
      small: {
        ...typographyVars.body_m_14,
      },
      large: {
        ...typographyVars.title_m_16,
      },
    },
  },
});

export const detail = recipe({
  base: {
    color: colors.gray700,
  },
  variants: {
    size: {
      small: {
        ...typographyVars.caption_r_12,
      },
      large: {
        ...typographyVars.body_r_14,
      },
    },
  },
});
