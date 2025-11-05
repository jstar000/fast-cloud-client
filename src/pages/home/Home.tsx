import * as styles from './Home.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>CLOUD STANDARD</h1>
        <h2 className={styles.subtitle}>입문자용 클라우드 서비스</h2>

        <p className={styles.description}>
          복잡하고 반복적인 인프라 설정 과정을 추상화하고, 사용 목적에 맞는
          표준화된 템플릿을 제공합니다.
        </p>

        <div className={styles.badge}>
          <span className={styles.buttonText}>디자인 토큰 적용 완료</span>
        </div>

        <div>
          <button className={styles.button}>
            <span className={styles.buttonText}>시작하기</span>
          </button>
        </div>

        <div className={styles.errorText}>
          <span className={styles.description}>에러 발생 시 이렇게 표시</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
