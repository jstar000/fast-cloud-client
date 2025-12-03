import { colors } from '@/shared/styles/tokens/colors.css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  outline: `1px solid ${colors.gray800}`,
  outlineOffset: '-1px',
  padding: '28px',
  gap: '32px',
  width: 'fit-content',
});

// 클러스터 이름, 실행 status, 생성일
export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
});

// 클러스터 이름, 실행 status
export const titleContainer = style({
  display: 'flex',
  gap: '12px',
  width: '100%',
});

export const title = style({
  ...typographyVars.heading_sb_22,
  color: colors.gray000,
  flex: 1,
});

export const createdDateContainer = style({
  display: 'flex',
  gap: '4px',
  width: '100%',
  alignItems: 'center',
});

export const dateText = style({
  ...typographyVars.body_r_14,
  color: colors.gray600,
});

export const dockerDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const portContainer = style({
  display: 'flex',
  gap: '16px',
});
