export const TOAST_TYPES = {
  SUCCESS: 'success',
  FAILURE: 'failure',
} as const;

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];
