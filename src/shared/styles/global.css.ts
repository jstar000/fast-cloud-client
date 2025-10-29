import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  minWidth: '1280px',
  fontFamily:
    '"Pretendard Variable", Pretendard, -apple-system, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: '#ffffff',
});

globalStyle('#root', {
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
});
