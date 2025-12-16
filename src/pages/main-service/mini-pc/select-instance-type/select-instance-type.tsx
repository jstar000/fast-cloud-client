import CardRect from '@/shared/components/card/card-rect/card-rect';
import * as styles from './select-instance-type.css';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/routes/paths';

const SelectInstanceType = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>New Instance</h1>
        <p className={styles.subtitle}>
          어떤 목표를 가지고 계신가요? 필요에 맞는 템플릿을 선택하세요.
        </p>
      </div>

      <div className={styles.selections}>
        <CardRect
          size="small"
          title="기본 프로젝트 / 학습용"
          detail="개인 프로젝트나 프로그래밍 학습에 적합한 가벼운 인스턴스입니다."
          explanations={[
            '기본 프로젝트 / 학습용',
            '개인 프로젝트나 프로그래밍 학습',
            '가벼운 인스턴스',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_INSTANCE)}
        />
        <CardRect
          size="small"
          title="해커톤"
          detail="제한된 시간 내 빠르게 개발하고 배포할 수 있는 환경을 제공합니다."
          explanations={['해커톤', '제한된 시간 내', '빠르게 개발하고 배포']}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_INSTANCE)}
        />
        <CardRect
          size="small"
          title="데모데이"
          detail="발표와 시연을 위한 안정적인 서버 환경을 제공합니다."
          explanations={['데모데이', '발표와 시연', '안정적인 서버 환경 제공']}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_INSTANCE)}
        />
        <CardRect
          size="small"
          title="스프린트"
          detail="팀 협업을 위한 고성능 개발 환경을 제공합니다."
          explanations={[
            '스프린트',
            '팀 협업을 위한 환경',
            '고성능 개발 환경 제공',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_INSTANCE)}
        />
      </div>
    </div>
  );
};

export default SelectInstanceType;
