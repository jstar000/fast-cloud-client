import { Button } from '@/shared/components/button/Button';
import * as styles from './home.css';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/routes/paths';

function Home() {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate(ROUTES.SELECT_SERVICE);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>모든 클라우드 서비스를 한곳에서.</h1>
        <h2 className={styles.subtitle}>
          {`미니 PC 대여부터 컨테이너 서비스, 오브젝트 스토리지까지\n필요한 모든 클라우드 인프라를 FastCloud에서 쉽고 빠르게 이용하세요.`}
        </h2>
      </div>

      <div className={styles.button}>
        <Button
          type="button"
          variant={BUTTON_VARIANTS.HOME}
          onClick={handleStartClick}
        >
          시작하기
        </Button>
      </div>
    </div>
  );
}

export default Home;
