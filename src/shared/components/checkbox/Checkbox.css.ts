import { style } from '@vanilla-extract/css';
import {
  Checkbox_Default_Url,
  Checkbox_Hover_Url,
  Checkbox_Pressed_Url,
  Checkbox_Selected_Url,
} from '@svg/index';

export const checkbox = style({
  appearance: 'none',
  width: '20px',
  height: '20px',
  minWidth: '20px',
  minHeight: '20px',
  margin: 0,
  cursor: 'pointer',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url("${Checkbox_Default_Url}")`,
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundImage: `url("${Checkbox_Hover_Url}")`,
  },

  ':active': {
    backgroundImage: `url("${Checkbox_Pressed_Url}")`,
  },

  ':checked': {
    backgroundImage: `url("${Checkbox_Selected_Url}")`,
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: 0.4,
  },
});
