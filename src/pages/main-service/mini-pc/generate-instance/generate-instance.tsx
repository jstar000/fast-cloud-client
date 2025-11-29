import { FieldLabel } from '@/shared/components/fieldLabel/FieldLabel';
import * as styles from './generate-instance.css';
import { TextField } from '@/shared/components/textField/TextField';
import { CheckboxTextField } from '@/shared/components/checkboxTextField/CheckboxTextField';
import { Tag } from '@/shared/components/tag/Tag';
import { TAG_TYPES } from '@/shared/constants/tag';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { Button } from '@/shared/components/button/Button';
import { TEXT_FIELD_TYPES } from '@/shared/constants/textField';

const GenerateInstance = () => {
  return (
    <div className={styles.container}>
      <header className={styles.title}>
        <h1 className={styles.mainTitle}>New Instance</h1>
        <h2 className={styles.subtitle}>
          인스턴스 이름과 템플릿 ID를 설정하면 인스턴스가 생성돼요.
        </h2>
      </header>

      <div className={styles.inputContainer}>
        <div className={styles.instance}>
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="인스턴스 이름"
            detail="인스턴스 이름을 입력해주세요."
            labelSize="large"
            placeholder="인스턴스 이름"
          />
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="템플릿 ID"
            detail="템플릿 ID를 입력해주세요."
            labelSize="large"
            placeholder="템플릿 ID"
          />
        </div>

        <div className={styles.optionContainer}>
          <FieldLabel
            label="추가 옵션"
            detail="프로젝트에 필요한 추가 기능을 선택하세요."
            size="large"
          />
          <CheckboxTextField
            title="대규모 파일 저장 (이미지, 영상 등)"
            detail="선택 시 저장공간(100GB)이 할당되며, 이미지나 동영상 등 큰 파일을 안전하게 저장할 수 있어요."
          />
        </div>

        <div className={styles.summary}>
          <FieldLabel
            label="요약"
            detail="인스턴스에 적용된 설정을 확인해주세요."
            size="large"
          />
          <div className={styles.tagContainer}>
            <div className={styles.tagRow}>
              <Tag tagType={TAG_TYPES.GRAY}>템플릿</Tag>
              <div className={styles.tagText}>해커톤</div>
            </div>
          </div>
          <div className={styles.tagContainer}>
            <div className={styles.tagRow}>
              <Tag tagType={TAG_TYPES.GRAY}>운영체제</Tag>
              <div className={styles.tagText}>Ubuntu 22.04 LTS (자동선택)</div>
            </div>
          </div>
          <div className={styles.tagContainer}>
            <div className={styles.tagRow}>
              <Tag tagType={TAG_TYPES.GRAY}>네트워크</Tag>
              <div className={styles.tagText}>
                공인 IP 할당됨 / 보안 포트 열림
              </div>
            </div>
          </div>
          <div className={styles.tagContainer}>
            <div className={styles.tagRow}>
              <Tag tagType={TAG_TYPES.GRAY}>스토리지</Tag>
              <div className={styles.tagText}>20GB SSD</div>
            </div>
          </div>
          <div className={styles.tagContainer}>
            <div className={styles.tagRow}>
              <Tag tagType={TAG_TYPES.GRAY}>보안</Tag>
              <div className={styles.tagText}>표준 규칙 적용됨</div>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <Button variant={BUTTON_VARIANTS.LOGIN}>컨테이너 생성</Button>
        </div>
      </div>
    </div>
  );
};

export default GenerateInstance;
