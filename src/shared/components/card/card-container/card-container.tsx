import { STATUS_CHIP_TYPES } from '@/shared/constants/statusChip';
import { StatusChip } from '../../statusChip/StatusChip';
import * as styles from './card-container.css';
import { Icn_Time } from '@/assets/svg';
import { formatDateTime } from '@/shared/utils/format-date';
import { TextField } from '../../textField/TextField';
import { TEXT_FIELD_TYPES } from '@/shared/constants/textField';

const CardContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>컨테이너이름</h3>
          <StatusChip status={STATUS_CHIP_TYPES.IN_PROGRESS}>
            실행 중
          </StatusChip>
        </div>
        <div className={styles.createdDateContainer}>
          <Icn_Time />
          <span className={styles.dateText}>생성일:</span>
          <span className={styles.dateText}>{formatDateTime('')}</span>
        </div>
      </div>

      <div className={styles.dockerDetailContainer}>
        <TextField
          type={TEXT_FIELD_TYPES.TEXT}
          label="도커 이미지 링크"
          value="nginx:latest"
          readOnly
        />
        <div className={styles.portContainer}>
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="외부 포트"
            value="8080"
            textFieldSize="small"
            readOnly
          />
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="내부 포트"
            value="80"
            textFieldSize="small"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
