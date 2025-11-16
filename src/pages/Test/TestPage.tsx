import { Button } from '@/shared/components/button/Button';
import { IconButton } from '@/shared/components/iconButton/IconButton';
import { Checkbox } from '@/shared/components/checkbox/Checkbox';
import { TextField } from '@/shared/components/textField/TextField';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { ICON_TYPES } from '@/shared/constants/icon';
import { TEXT_FIELD_TYPES } from '@/shared/constants/textField';
import * as styles from './TestPage.css';

export const TestPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Home Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant={BUTTON_VARIANTS.HOME}>버튼</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>White Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant={BUTTON_VARIANTS.WHITE}>버튼 이름</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>CTA Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant={BUTTON_VARIANTS.CTA_LARGE}>
            버튼 이름 → (Large)
          </Button>
          <Button variant={BUTTON_VARIANTS.CTA_SMALL}>
            버튼 이름 → (Small)
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Login Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant={BUTTON_VARIANTS.LOGIN}>버튼 이름</Button>
          <Button variant={BUTTON_VARIANTS.LOGIN} disabled>
            버튼 이름 (disabled)
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Gray Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant={BUTTON_VARIANTS.GRAY}>버튼 이름</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Nav Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant={BUTTON_VARIANTS.NAV_LOGIN}>Log in</Button>
          <Button variant={BUTTON_VARIANTS.NAV_SIGNUP}>Sign up</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Text Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant={BUTTON_VARIANTS.TEXT_MEDIUM}>
            텍스트 버튼 (Medium)
          </Button>
          <Button variant={BUTTON_VARIANTS.TEXT_SMALL}>
            텍스트 버튼 (Small)
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Icon Button</h2>
        <div className={styles.buttonGrid}>
          <IconButton icon={ICON_TYPES.CHEVRON_DOWN} />
          <IconButton icon={ICON_TYPES.CHEVRON_UP} />
          <IconButton icon={ICON_TYPES.COPY} />
          <IconButton icon={ICON_TYPES.FOLDER} />
          <IconButton icon={ICON_TYPES.MEATBALL} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Checkbox</h2>
        <div className={styles.buttonGrid}>
          <Checkbox />
          <Checkbox checked />
          <Checkbox disabled />
          <Checkbox checked disabled />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Click Test</h2>
        <div className={styles.buttonGrid}>
          <Button
            variant={BUTTON_VARIANTS.CTA_LARGE}
            onClick={() => alert('CTA 버튼 클릭!')}
          >
            클릭해보세요
          </Button>
          <IconButton
            icon={ICON_TYPES.COPY}
            onClick={() => alert('복사 버튼 클릭!')}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>TextField</h2>
        <div className={styles.buttonGrid}>
          <TextField
            type={TEXT_FIELD_TYPES.ID}
            label="아이디 (small)"
            placeholder="아이디를 입력하세요"
            labelSize="small"
          />
          <TextField
            type={TEXT_FIELD_TYPES.PASSWORD}
            label="비밀번호 (small)"
            detail="6~16자, 영어 소문자, 숫자 조합"
            placeholder="비밀번호를 입력하세요"
            labelSize="small"
          />
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            label="텍스트 (large)"
            detail="Large 사이즈 예시"
            placeholder="텍스트를 입력하세요"
            labelSize="large"
          />
          <TextField
            type={TEXT_FIELD_TYPES.ID}
            label="에러 상태"
            placeholder="에러 예시"
            error
          />
        </div>
      </section>
    </div>
  );
};
