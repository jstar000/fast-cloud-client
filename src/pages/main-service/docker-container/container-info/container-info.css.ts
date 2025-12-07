import { colors } from '@/shared/styles/tokens/colors.css';
import { style } from '@vanilla-extract/css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '100px 120px',
  alignItems: 'center',
  gap: '60px',
  width: '100%',
});

export const title = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center',
});

export const mainTitle = style({
  ...typographyVars.heading_sb_40,
  color: colors.gray000,
  alignSelf: 'center',
});

export const subtitle = style({
  ...typographyVars.title_sb_16,
  color: colors.gray500,
});

// 총 컨테이너, 실행 중인 컨테이너, ...
export const containerInfo = style({
  display: 'flex',
  borderRadius: '999px',
  padding: '16px 24px',
  backgroundColor: colors.gray000_06,
});

// 총 컨테이너
export const detailBox = style({
  display: 'flex',
  gap: '8px',
});

export const detailBoxText = style({
  ...typographyVars.body_r_14,
  color: colors.gray400,
  marginTop: '1px', // TODO: marginTop: detailBoxNum과 정렬 맞도록 임시 처리, 원인 알아보기
});

export const detailBoxNum = style({
  ...typographyVars.title_sb_16,
  color: colors.gray000,
});

export const divider = style({
  margin: '0 16px',
});

export const cardGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
});
