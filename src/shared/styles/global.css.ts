import { globalStyle } from '@vanilla-extract/css';
import { colors } from './tokens/colors.css';

globalStyle('body', {
  minWidth: '1280px',
  fontFamily:
    '"Pretendard Variable", Pretendard, -apple-system, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: colors.gray900,
  paddingTop: '85px', // 헤더 높이만큼 아래로 이동
});

globalStyle('#root', {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
});
