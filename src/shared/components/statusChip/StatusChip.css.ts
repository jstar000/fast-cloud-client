import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';
import { style } from '@vanilla-extract/css';

export const container = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 10px',
    borderRadius: '99px',
    gap: '4px',
    whiteSpace: 'nowrap',
  },

  variants: {
    status: {
      inProgress: {
        backgroundColor: colors.green_14,
      },
    },
  },
});

export const statusCircle = recipe({
  base: {
    width: '8px',
    height: '8px',
    borderRadius: '9999px',
    flexShrink: 0,
  },

  variants: {
    status: {
      inProgress: {
        backgroundColor: colors.green,
      },
    },
  },
});

export const content = style({
  ...typographyVars.caption_m_12,
  color: colors.gray000,
  margin: '0 2px',
});
