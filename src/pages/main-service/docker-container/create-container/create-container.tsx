import { TextField } from '@/shared/components/textField/TextField';
import * as styles from './create-container.css';
import { Button } from '@/shared/components/button/Button';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { TEXT_FIELD_TYPES } from '@/shared/constants/textField';

const CreateContainer = () => {
  return (
    <div className={styles.container}>
      <header className={styles.title}>
        <h1 className={styles.mainTitle}>New Container</h1>
        <h2 className={styles.subtitle}>
          새로운 도커 컨테이너를 빠르게 생성하고 관리해보세요.
        </h2>
      </header>

      <div className={styles.inputContainer}>
        <TextField
          type={TEXT_FIELD_TYPES.TEXT}
          label="컨테이너 이름"
          detail="컨테이너 이름을 입력해주세요."
          labelSize="large"
          placeholder="컨테이너 이름"
        />
        <TextField
          type={TEXT_FIELD_TYPES.TEXT}
          label="도커 이미지 링크"
          detail="도커 이미지의 링크를 입력해주세요."
          labelSize="large"
          textFieldSize="small"
          placeholder="도커 이미지 링크"
        />
        <div className={styles.inputRow}>
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="외부 포트"
            labelSize="large"
            textFieldSize="small"
            placeholder="외부 포트"
          />
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="내부 포트"
            labelSize="large"
            textFieldSize="small"
            placeholder="내부 포트"
          />
        </div>

        <Button variant={BUTTON_VARIANTS.LOGIN}>컨테이너 생성</Button>
      </div>
    </div>
  );
};

export default CreateContainer;
