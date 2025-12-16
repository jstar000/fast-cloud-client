import { colors } from '@/shared/styles/tokens/colors.css';
import { style } from '@vanilla-extract/css';
import { typographyVars } from '@/shared/styles/tokens/typography.css';

// 최상위 컨테이너
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '120px 120px 0',
  gap: '40px',
  width: '100%',
});

// 헤더 (제목 + 설명)
export const title = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignSelf: 'center',
  alignItems: 'center',
});

export const mainTitle = style({
  ...typographyVars.heading_sb_40,
  color: colors.gray000,
});

export const subtitle = style({
  ...typographyVars.title_sb_16,
  color: colors.gray500,
});

// 전체 페이지 컨테이너 (2컬럼 레이아웃)
export const pageContainer = style({
  display: 'flex',
  gap: '60px',
  width: '100%',
});

// 왼쪽 사이드바
export const sidebar = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  minWidth: '320px',
});

// 오른쪽 메인 콘텐츠
export const mainContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  flex: 1,
});

// 헤더 (버킷 생성, 폴더 생성 버튼)
export const header = style({
  display: 'flex',
  gap: '16px',
});

export const createButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 20px',
  borderRadius: '999px',
  border: `1px solid ${colors.gray000_10}`,
  background: 'transparent',
  color: colors.gray000,
  ...typographyVars.body_m_14,
  cursor: 'pointer',
  transition: 'background 0.2s ease',

  ':hover': {
    background: colors.gray000_06,
  },
});

export const createButtonSecondary = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 20px',
  borderRadius: '999px',
  border: 'none',
  background: 'transparent',
  color: colors.gray500,
  ...typographyVars.body_m_14,
  cursor: 'pointer',
  transition: 'color 0.2s ease',

  ':hover': {
    color: colors.gray300,
  },
});

// 현재 버킷 섹션
export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const sectionTitle = style({
  ...typographyVars.title_sb_16,
  color: colors.gray000,
});

export const bucketCard = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '20px',
  borderRadius: '16px',
  background: colors.gray000_06,
});

export const bucketHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const bucketName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  ...typographyVars.body_m_14,
  color: colors.gray000,
});

export const bucketInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const bucketInfoRow = style({
  display: 'flex',
  gap: '16px',
});

export const bucketInfoLabel = style({
  ...typographyVars.body_r_14,
  color: colors.gray500,
  minWidth: '50px',
});

export const bucketInfoValue = style({
  ...typographyVars.body_r_14,
  color: colors.gray300,
});

export const fileCount = style({
  ...typographyVars.body_r_14,
  color: colors.gray500,
  padding: '4px 12px',
  background: colors.gray000_06,
  borderRadius: '8px',
});

// 폴더 목록 섹션
export const folderList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const folderItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '16px 20px',
  borderRadius: '12px',
  background: colors.gray000_06,
  cursor: 'pointer',
  transition: 'background 0.2s ease',

  ':hover': {
    background: colors.gray000_10,
  },
});

export const folderItemSelected = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '16px 20px',
  borderRadius: '12px',
  background: colors.gray000,
  cursor: 'pointer',
});

export const folderName = style({
  ...typographyVars.body_m_14,
  color: colors.gray300,
});

export const folderNameSelected = style({
  ...typographyVars.body_m_14,
  color: colors.gray900,
});

// 모달 스타일
export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const modalContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '32px',
  borderRadius: '20px',
  background: colors.gray900,
  minWidth: '400px',
});

export const modalTitle = style({
  ...typographyVars.title_sb_16,
  color: colors.gray000,
  textAlign: 'center',
});

export const modalInput = style({
  padding: '16px',
  borderRadius: '12px',
  border: 'none',
  background: colors.gray000_06,
  color: colors.gray000,
  ...typographyVars.body_r_14,
  outline: 'none',

  '::placeholder': {
    color: colors.gray600,
  },
});

export const modalButtons = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
});

export const modalButtonCancel = style({
  padding: '12px 24px',
  borderRadius: '999px',
  border: 'none',
  background: 'transparent',
  color: colors.gray400,
  ...typographyVars.body_m_14,
  cursor: 'pointer',

  ':hover': {
    color: colors.gray200,
  },
});

export const modalButtonSubmit = style({
  padding: '12px 24px',
  borderRadius: '999px',
  border: 'none',
  background: colors.gray000,
  color: colors.gray900,
  ...typographyVars.body_m_14,
  cursor: 'pointer',

  ':hover': {
    background: colors.gray200,
  },
});

// 오른쪽 메인 콘텐츠 스타일
export const uploadLocation = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const uploadLocationTitle = style({
  ...typographyVars.title_sb_16,
  color: colors.gray000,
});

export const uploadLocationPath = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 16px',
  borderRadius: '8px',
  background: colors.gray000_06,
  ...typographyVars.body_r_14,
  color: colors.gray300,
});

// 파일 목록 섹션
export const fileSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const fileSectionHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const fileSectionTitle = style({
  ...typographyVars.title_sb_16,
  color: colors.gray000,
});

export const fileCountBadge = style({
  ...typographyVars.body_r_14,
  color: colors.gray500,
});

// 검색 인풋
export const searchContainer = style({
  position: 'relative',
  width: '100%',
});

export const searchIcon = style({
  position: 'absolute',
  left: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: colors.gray500,
});

export const searchInput = style({
  width: '100%',
  padding: '12px 16px 12px 44px',
  borderRadius: '8px',
  border: 'none',
  background: colors.gray000_06,
  color: colors.gray000,
  ...typographyVars.body_r_14,
  outline: 'none',

  '::placeholder': {
    color: colors.gray600,
  },
});

// 파일 테이블
export const fileTable = style({
  width: '100%',
  borderCollapse: 'collapse',
});

export const tableHeader = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1.5fr 1.5fr',
  gap: '16px',
  padding: '12px 16px',
  borderBottom: `1px solid ${colors.gray000_10}`,
});

export const tableHeaderCell = style({
  ...typographyVars.body_r_14,
  color: colors.gray500,
  textAlign: 'left',
});

export const tableBody = style({
  display: 'flex',
  flexDirection: 'column',
});

export const tableRow = style({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1.5fr 1.5fr',
  gap: '16px',
  padding: '16px',
  borderBottom: `1px solid ${colors.gray000_06}`,
  transition: 'background 0.2s ease',

  ':hover': {
    background: colors.gray000_04,
  },
});

export const tableCell = style({
  ...typographyVars.body_r_14,
  color: colors.gray300,
  display: 'flex',
  alignItems: 'center',
});

export const fileName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const folderPath = style({
  color: colors.gray500,
});

export const fileNameText = style({
  color: colors.gray000,
});
