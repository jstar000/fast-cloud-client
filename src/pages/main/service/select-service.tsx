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
          detail="원격으로 접속 가능한 가상 머신을 생성하고 자유롭게 개발 환경을 구축하세요."
          explanations={[
            '미니PC 대여',
            'Ubuntu 22.04 LTS 기본 제공',
            '다양한 사양의 인스턴스 선택 가능',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.SELECT_INSTANCE_TYPE)}
        />
        <CardRect
          size="large"
          title="컨테이너 서비스"
          detail="Docker 기반 컨테이너를 손쉽게 배포하고 관리할 수 있는 서비스입니다."
          explanations={[
            '컨테이너 서비스',
            '다양한 이미지 템플릿 제공',
            '빠른 배포 지원',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_CONTAINER)}
        />
        <CardRect
          size="large"
          title="오브젝트 스토리지"
          detail="안전하고 확장 가능한 클라우드 스토리지로 파일을 저장하고 관리하세요."
          explanations={[
            '오브젝트 스토리지',
            '폴더 기반 직관적인 파일 관리',
            '안전한 클라우드 스토리지',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.BUCKET_INFO)}
        />
      </div>
    </div>
  );
};

export default SelectService;
