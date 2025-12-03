import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    size: {
      small: {
        gap: '8px',
      },
      large: {
        gap: '12px',
      },
    },
    // label과 detail이 TextField를 벗어나지 않도록 TextField의 container에도 maxWidth 적용
    textFieldSize: {
      small: {
        maxWidth: '200px',
      },
      large: {
        maxWidth: '400px',
      },
    },
  },
});

export const textField = recipe({
  base: {
    width: '100%',
    height: '44px',
    ...typographyVars.body_r_14,
    color: colors.gray000,
    padding: '0 16px',
    backgroundColor: colors.gray000_02,
    borderRadius: '10px',
    border: '1px solid transparent',
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
    outline: 'none',

    '::placeholder': {
      color: colors.gray800,
    },

    ':hover': {
      backgroundColor: colors.gray000_04,
    },

    ':active': {
      backgroundColor: colors.gray000_02,
    },

    // focused/typing
    ':focus': {
      backgroundColor: colors.gray000_04,
      borderColor: colors.gray800,
    },

    // filled (값이 입력된 상태)
    selectors: {
      '&:not(:placeholder-shown)': {
        backgroundColor: colors.gray000_02,
      },
    },
  },

  variants: {
    textFieldSize: {
      small: {
        maxWidth: '200px',
      },
      large: {
        maxWidth: '400px',
      },
    },
    error: {
      true: {
        backgroundColor: colors.error_08,
        color: colors.error,

        '::placeholder': {
          color: colors.error,
        },

        ':focus': {
          backgroundColor: colors.error_08,
          color: colors.error,
        },
      },
      false: {},
    },
  },
});
