import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@styles/tokens/colors.css';
import { typographyVars } from '@styles/tokens/typography.css';

export const buttonStyles = recipe({
  base: {
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none', // 버튼 드래그 방지, 더블클릭 시 텍스트 파란색으로 하이라이트 방지
    whiteSpace: 'nowrap',
  },

  variants: {
    variant: {
      home: {
        ...typographyVars.heading_sb_22,
        backgroundColor: colors.gray000,
        borderRadius: '198px',
        color: colors.gray900,
        minWidth: '120px',
        height: '56px',

        ':hover': {
          color: colors.gray600,
        },

        ':active': {
          backgroundColor: colors.gray300,
          color: colors.gray900,
        },
      },

      white: {
        ...typographyVars.title_sb_16,
        backgroundColor: colors.gray000,
        color: colors.gray900,
        minWidth: '144px',
        height: '48px',
        borderRadius: '198px',

        ':hover': {
          color: colors.gray600,
        },

        ':active': {
          backgroundColor: colors.gray300,
          color: colors.gray900,
        },
      },

      'cta-large': {
        ...typographyVars.title_sb_16,
        backgroundColor: colors.gray000_06,
        color: colors.gray000,
        padding: '8px 0',
        minWidth: '260px',
        height: '48px',
        borderRadius: '10px',

        ':hover': {
          backgroundColor: colors.primary,
        },

        ':active': {
          backgroundColor: colors.primaryDark,
          transform: 'scale(0.97)', // GPU 가속
        },
      },

      'cta-small': {
        ...typographyVars.title_sb_16,
        backgroundColor: colors.gray000_06,
        color: colors.gray000,
        padding: '6px 0',
        minWidth: '196px',
        height: '48px',
        borderRadius: '10px',

        ':hover': {
          backgroundColor: colors.primary,
        },

        ':active': {
          backgroundColor: colors.primaryDark,
          transform: 'scale(0.97)', // GPU 가속
        },
      },

      login: {
        ...typographyVars.title_sb_16,
        backgroundColor: colors.gray200,
        color: colors.gray900,
        padding: '8px 0',
        minWidth: '400px',
        height: '48px',
        borderRadius: '10px',

        ':hover': {
          color: colors.gray600,
        },

        ':active': {
          backgroundColor: colors.gray300,
          color: colors.gray700,
        },

        ':disabled': {
          cursor: 'not-allowed',
          backgroundColor: colors.gray000_06,
          color: colors.gray800,
        },
      },

      gray: {
        ...typographyVars.title_m_16,
        backgroundColor: colors.gray000_06,
        color: colors.gray000,
        padding: '8px 0',
        minWidth: '122px',
        height: '48px',
        borderRadius: '8px',

        ':hover': {
          backgroundColor: colors.gray000_10,
        },

        ':active': {
          color: colors.gray300,
        },
      },

      'nav-login': {
        ...typographyVars.body_r_14,
        color: colors.gray200,
        padding: '8px 16px',
        minWidth: '68px',
        height: '37px',
        borderRadius: '99px',

        ':hover': {
          backgroundColor: colors.gray000_10,
          color: colors.gray200,
        },

        ':active': {
          backgroundColor: colors.gray000_06,
          color: colors.gray600,
        },
      },

      'nav-signup': {
        ...typographyVars.body_m_14,
        backgroundColor: colors.gray000,
        color: colors.gray900,
        padding: '8px 16px',
        minWidth: '78px',
        height: '37px',
        borderRadius: '99px',

        ':hover': {
          color: colors.gray600,
        },

        ':active': {
          backgroundColor: colors.gray300,
          color: colors.gray900,
        },
      },

      'text-small': {
        ...typographyVars.caption_r_12_underline,
        color: colors.gray400,
        padding: '4px 8px',
        minWidth: '60px',
        height: '26px',

        ':hover': {
          color: colors.gray300,
        },

        ':active': {
          color: colors.gray500,
        },
      },

      'text-medium': {
        ...typographyVars.body_r_14_underline,
        color: colors.gray400,
        padding: '4px 8px',
        minWidth: '67px',
        height: '29px',

        ':hover': {
          color: colors.gray300,
        },

        ':active': {
          color: colors.gray500,
        },
      },
    },
  },
});
