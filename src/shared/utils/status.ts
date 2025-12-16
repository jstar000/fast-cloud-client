import {
  STATUS_CHIP_TYPES,
  type StatusChipType,
} from '@/shared/constants/statusChip';

export const getStatusChipType = (status: string): StatusChipType => {
  switch (status.toUpperCase()) {
    case 'ACTIVE':
    case 'RUNNING':
      return STATUS_CHIP_TYPES.IN_PROGRESS;
    case 'BUILD':
    case 'PENDING':
      return STATUS_CHIP_TYPES.PENDING;
    case 'SHUTOFF':
    case 'STOPPED':
      return STATUS_CHIP_TYPES.STOP;
    case 'ERROR':
      return STATUS_CHIP_TYPES.FAIL;
    default:
      return STATUS_CHIP_TYPES.IN_PROGRESS;
  }
};

export const getStatusLabel = (status: string): string => {
  switch (status.toUpperCase()) {
    case 'ACTIVE':
    case 'RUNNING':
      return '실행중';
    case 'BUILD':
    case 'PENDING':
      return '대기중';
    case 'SHUTOFF':
    case 'STOPPED':
      return '중지됨';
    case 'ERROR':
      return '오류';
    default:
      return status;
  }
};
