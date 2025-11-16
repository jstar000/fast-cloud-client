import { Button } from '@/shared/components/Button/Button';
import * as styles from './TestPage.css';

export const TestPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Button Components Test</h1>

      <section className={styles.section}>
        <h2>Home Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="home">버튼</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>White Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="white">버튼 이름</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>CTA Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="cta-large">버튼 이름 → (Large)</Button>
          <Button variant="cta-small">버튼 이름 → (Small)</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Login Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="login">버튼 이름</Button>
          <Button variant="login" disabled>
            버튼 이름 (disabled)
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Gray Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="gray">버튼 이름</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Nav Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="nav-login">Log in</Button>
          <Button variant="nav-signup">Sign up</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Text Button</h2>
        <div className={styles.buttonGrid}>
          <Button variant="text-medium">텍스트 버튼 (Medium)</Button>
          <Button variant="text-small">텍스트 버튼 (Small)</Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Click Test</h2>
        <div className={styles.buttonGrid}>
          <Button variant="cta-large" onClick={() => alert('CTA 버튼 클릭!')}>
            클릭해보세요
          </Button>
        </div>
      </section>
    </div>
  );
};
