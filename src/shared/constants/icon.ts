export const ICON_TYPES = {
  CHEVRON_DOWN: 'chevron-down',
  CHEVRON_UP: 'chevron-up',
  COPY: 'copy',
  FOLDER: 'folder',
  MEATBALL: 'meatball',
} as const;

export type IconType = (typeof ICON_TYPES)[keyof typeof ICON_TYPES];
