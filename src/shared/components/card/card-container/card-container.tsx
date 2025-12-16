import { StatusChip } from '../../statusChip/StatusChip';
import * as styles from './card-container.css';
import { Icn_Time } from '@/assets/svg';
import { formatDateTime } from '@/shared/utils/format-date';
import { getStatusChipType, getStatusLabel } from '@/shared/utils/status';
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
