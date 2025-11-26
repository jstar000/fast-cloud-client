import { Header } from '@/shared/components/header/Header';
import { Button } from '@/shared/components/button/Button';
import { IconButton } from '@/shared/components/iconButton/IconButton';
import { Checkbox } from '@/shared/components/checkbox/Checkbox';
import { TextField } from '@/shared/components/textField/TextField';
import { CheckboxTextField } from '@/shared/components/checkboxTextField/CheckboxTextField';
import { Toast } from '@/shared/components/toast/Toast';
import { Tag } from '@/shared/components/tag/Tag';
import { StatusChip } from '@/shared/components/statusChip/StatusChip';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { ICON_TYPES } from '@/shared/constants/icon';
import { TEXT_FIELD_TYPES } from '@/shared/constants/textField';
import { TOAST_TYPES } from '@/shared/constants/toast';
import { TAG_TYPES } from '@/shared/constants/tag';
import { STATUS_CHIP_TYPES } from '@/shared/constants/statusChip';
import * as styles from './TestPage.css';

export const TestPage = () => {
  return (
    <>
      <Header hasButton />
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

        <section className={styles.section}>
          <h2 className={styles.title}>CheckboxTextField</h2>
          <div className={styles.buttonGrid}>
            <CheckboxTextField
              title="텍스트박스 내용을 입력하는 공간입니다"
              detail="설명을 입력하는 공간입니다"
            />
            <CheckboxTextField
              title="전체 동의"
              detail="모든 약관에 동의합니다"
              checked
            />
            <CheckboxTextField
              title="비활성화"
              detail="비활성화 상태"
              disabled
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Toast</h2>
          <div className={styles.buttonGrid}>
            <Toast
              type={TOAST_TYPES.SUCCESS}
              content="컨테이너가 생성되었어요."
            />
            <Toast
              type={TOAST_TYPES.FAILURE}
              content="컨테이너를 생성하지 못했어요. 다시 시도해주세요."
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Tag</h2>
          <div className={styles.buttonGrid}>
            <Tag tagType={TAG_TYPES.BLUE}>Blue Tag</Tag>
            <Tag tagType={TAG_TYPES.WHITE}>White Tag</Tag>
            <Tag tagType={TAG_TYPES.GRAY}>Gray Tag</Tag>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>StatusChip</h2>
          <div className={styles.buttonGrid}>
            <StatusChip status={STATUS_CHIP_TYPES.IN_PROGRESS}>
              실행 중
            </StatusChip>
            <StatusChip status={STATUS_CHIP_TYPES.IN_PROGRESS}>
              In Progress
            </StatusChip>
          </div>
        </section>
      </div>
    </>
  );
};
