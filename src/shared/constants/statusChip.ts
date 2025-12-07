export const STATUS_CHIP_TYPES = {
  IN_PROGRESS: 'inProgress',
  PENDING: 'pending',
  STOP: 'stop',
  FAIL: 'fail',
} as const;

export type StatusChipType =
  (typeof STATUS_CHIP_TYPES)[keyof typeof STATUS_CHIP_TYPES];
