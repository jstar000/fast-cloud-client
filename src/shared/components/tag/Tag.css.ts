import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';

export const container = recipe({
  base: {
    ...typographyVars.caption_m_12,
    padding: '2px 6px',
    borderRadius: '4px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
  },

  variants: {
    tagType: {
      blue: {
        backgroundColor: colors.primary_20,
        color: colors.primary,
      },
      white: {
        backgroundColor: colors.gray000_10,
        color: colors.gray400,
      },
      gray: {
        backgroundColor: colors.gray000_06,
        color: colors.gray600,
      },
    },
  },
});
