import {
  STATUS_CHIP_TYPES,
  type StatusChipType,
} from '@/shared/constants/statusChip';
import { StatusChip } from '../../statusChip/StatusChip';
import * as styles from './card-container.css';
import { Icn_Time } from '@/assets/svg';
import { formatDateTime } from '@/shared/utils/format-date';
import { TextField } from '../../textField/TextField';
import { TEXT_FIELD_TYPES } from '@/shared/constants/textField';

interface Props {
  clusterName: string;
  status: string;
  image: string;
  externalPort: number;
  internalPort: string;
  createdAt: string;
}

const getStatusChipType = (status: string): StatusChipType => {
  switch (status.toLowerCase()) {
    case 'running':
      return STATUS_CHIP_TYPES.IN_PROGRESS;
    case 'pending':
      return STATUS_CHIP_TYPES.PENDING;
    case 'stopped':
      return STATUS_CHIP_TYPES.STOP;
    case 'error':
      return STATUS_CHIP_TYPES.FAIL;
    default:
      return STATUS_CHIP_TYPES.IN_PROGRESS;
  }
};

const getStatusLabel = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'running':
      return '실행 중';
    case 'pending':
      return '대기 중';
    case 'stopped':
      return '중지됨';
    case 'error':
      return '오류';
    default:
      return status;
  }
};

const CardContainer = ({
  clusterName,
  status,
  image,
  externalPort,
  internalPort,
  createdAt,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{clusterName}</h3>
          <StatusChip status={getStatusChipType(status)}>
            {getStatusLabel(status)}
          </StatusChip>
        </div>
        <div className={styles.createdDateContainer}>
          <Icn_Time />
          <span className={styles.dateText}>생성일:</span>
          <span className={styles.dateText}>{formatDateTime(createdAt)}</span>
        </div>
      </div>

      <div className={styles.dockerDetailContainer}>
        <TextField
          type={TEXT_FIELD_TYPES.TEXT}
          label="도커 이미지 링크"
          value={image}
          readOnly
        />
        <div className={styles.portContainer}>
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="외부 포트"
            value={String(externalPort)}
            textFieldSize="small"
            readOnly
          />
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="내부 포트"
            value={internalPort}
            textFieldSize="small"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
