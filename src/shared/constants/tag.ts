export const TAG_TYPES = {
  BLUE: 'blue',
  WHITE: 'white',
  GRAY: 'gray',
} as const;

export type TagType = (typeof TAG_TYPES)[keyof typeof TAG_TYPES];
