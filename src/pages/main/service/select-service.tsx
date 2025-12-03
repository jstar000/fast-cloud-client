import CardRect from '@/shared/components/card/card-rect/card-rect';
import * as styles from './select-service.css';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/routes/paths';

const SelectService = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Service</h1>
        <p className={styles.subtitle}>
          개발자를 위한 완벽한 클라우드 인프라를 가장 쉽게 이용해보세요.
        </p>
      </div>

      <div className={styles.selections}>
        <CardRect
          size="large"
          title="미니PC 대여"
          detail="설명을 입력하는 공간입니다. 최대 세 줄까지 쓸 수 있어요."
          explanations={[
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.SELECT_INSTANCE_TYPE)}
        />
        <CardRect
          size="large"
          title="컨테이너 서비스"
          detail="설명을 입력하는 공간입니다. 최대 세 줄까지 쓸 수 있어요."
          explanations={[
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_CONTAINER)}
        />
        <CardRect
          size="large"
          title="오브젝트 스토리지"
          detail="설명을 입력하는 공간입니다. 최대 세 줄까지 쓸 수 있어요."
          explanations={[
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.NEW_INSTANCE)}
        />
      </div>
    </div>
  );
};

export default SelectService;
