import { StatusChip } from '../../statusChip/StatusChip';
import * as styles from './card-square.css';
import { formatDateTime } from '@/shared/utils/format-date';
import { getStatusChipType, getStatusLabel } from '@/shared/utils/status';
import { Divider_Large, Divider_Vertical } from '@/assets/svg';

interface Props {
  instanceId: string;
  instanceName: string;
  status: string;
  templateName: string;
  templateDesc: string;
  ipAddress: string;
  createdAt: string;
  onClick?: () => void;
}

const CardSquare = ({
  // instanceId,
  instanceName,
  status,
  templateName,
  templateDesc,
  ipAddress,
  createdAt,
  onClick,
}: Props) => {
  return (
    <div
      className={styles.container}
      onClick={() => onClick?.()}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{instanceName}</h3>
        <StatusChip status={getStatusChipType(status)}>
          {getStatusLabel(status)}
        </StatusChip>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.templateRow}>
          <span className={styles.templateName}>{templateName}</span>
          <Divider_Vertical />
          <span className={styles.templateSize}>{templateDesc}</span>
        </div>
        <span className={styles.createdAt}>{formatDateTime(createdAt)}</span>
      </div>

      <div className={styles.divider}>
        <Divider_Large />
      </div>

      <div className={styles.ipContainer}>
        <span className={styles.ipLabel}>공인 IP</span>
        <span className={styles.ipValue}>{ipAddress}</span>
      </div>
    </div>
  );
};

export default CardSquare;
