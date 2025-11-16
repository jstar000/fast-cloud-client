import { recipe } from '@vanilla-extract/recipes';
import {
  Chevron_Down_Default_Url,
  Chevron_Down_Hover_Url,
  Chevron_Down_Pressed_Url,
  Chevron_Up_Default_Url,
  Chevron_Up_Hover_Url,
  Chevron_Up_Pressed_Url,
  Copy_Default_Url,
  Copy_Hover_Url,
  Copy_Pressed_Url,
  Folder_Default_Url,
  Folder_Hover_Url,
  Folder_Pressed_Url,
  Meatball_Default_Url,
  Meatball_Hover_Url,
  Meatball_Pressed_Url,
} from '@svg/index';

// 현재 방식: svg 이미지를 background image로 넣음(:hover, :active 처리 쉽지만 접근성 떨어짐)
// TODO: svg를 ?react로 가져와 react component처럼 사용(useState로 상태 체크)
export const iconButton = recipe({
  base: {
    width: '20px',
    height: '20px',
    minWidth: '20px',
    minHeight: '20px',
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    // CSS의 background-image 관련 속성들
    // SVG를 배경 이미지로 넣을 때 어떻게 표시할지 제어
    backgroundSize: 'contain', // 배경 이미지를 버튼 안에 전체가 보이도록 조정(비율 유지, 이미지 잘림 방지)
    backgroundRepeat: 'no-repeat', // 배경 이미지 반복 X
    backgroundPosition: 'center', // 배경 이미지를 버튼 정중앙에 배치
    transition: 'all 0.2s ease',
    flexShrink: 0,
  },

  variants: {
    icon: {
      'chevron-down': {
        backgroundImage: `url("${Chevron_Down_Default_Url}")`,

        ':hover': {
          backgroundImage: `url("${Chevron_Down_Hover_Url}")`,
        },

        ':active': {
          backgroundImage: `url("${Chevron_Down_Pressed_Url}")`,
        },
      },

      'chevron-up': {
        backgroundImage: `url("${Chevron_Up_Default_Url}")`,

        ':hover': {
          backgroundImage: `url("${Chevron_Up_Hover_Url}")`,
        },

        ':active': {
          backgroundImage: `url("${Chevron_Up_Pressed_Url}")`,
        },
      },

      copy: {
        backgroundImage: `url("${Copy_Default_Url}")`,

        ':hover': {
          backgroundImage: `url("${Copy_Hover_Url}")`,
        },

        ':active': {
          backgroundImage: `url("${Copy_Pressed_Url}")`,
        },
      },

      folder: {
        backgroundImage: `url("${Folder_Default_Url}")`,

        ':hover': {
          backgroundImage: `url("${Folder_Hover_Url}")`,
        },

        ':active': {
          backgroundImage: `url("${Folder_Pressed_Url}")`,
        },
      },

      meatball: {
        backgroundImage: `url("${Meatball_Default_Url}")`,

        ':hover': {
          backgroundImage: `url("${Meatball_Hover_Url}")`,
        },

        ':active': {
          backgroundImage: `url("${Meatball_Pressed_Url}")`,
        },
      },
    },
  },
});
