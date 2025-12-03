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
          detail="설명을 입력하는 공간입니다. 최대 세 줄까지 쓸 수 있어요."
          explanations={[
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_INSTANCE)}
        />
        <CardRect
          size="small"
          title="해커톤"
          detail="제한된 시간 내 빠르게 인스턴스를 생성할 수 있어요."
          explanations={[
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_INSTANCE)}
        />
        <CardRect
          size="small"
          title="데모데이"
          detail="설명을 입력하는 공간입니다. 최대 세 줄까지 쓸 수 있어요."
          explanations={[
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_INSTANCE)}
        />
        <CardRect
          size="small"
          title="스프린트"
          detail="설명을 입력하는 공간입니다. 최대 세 줄까지 쓸 수 있어요."
          explanations={[
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
            '최대 한 줄까지 쓸 수 있어요.',
          ]}
          buttonName="이동하기"
          onSelect={() => navigate(ROUTES.CREATE_INSTANCE)}
        />
      </div>
    </div>
  );
};

export default SelectInstanceType;
