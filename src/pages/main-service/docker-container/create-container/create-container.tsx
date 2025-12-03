import { TextField } from '@/shared/components/textField/TextField';
import * as styles from './create-container.css';
import { Button } from '@/shared/components/button/Button';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { TEXT_FIELD_TYPES } from '@/shared/constants/textField';
import { useCreateContainerMutation } from '@/apis/mutations/use-create-container';
import { useContainerList } from '@/apis/queries/use-get-container-list';
import type { FormEvent } from 'react';

const CreateContainer = () => {
  const { mutate: createContainer } = useCreateContainerMutation();
  const { refetch: getContainerList } = useContainerList();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));

    createContainer({
      clusterName: formData.get('clusterName') as string,
      imageLink: formData.get('imageLink') as string,
      externalPort: Number(formData.get('externalPort')),
      internalPort: Number(formData.get('internalPort')),
    });
  };

  const handleContainerButtonClick = async () => {
    const result = await getContainerList();
    console.log(result.data);
  };

  return (
    <div className={styles.container}>
      <header className={styles.title}>
        <h1 className={styles.mainTitle}>New Container</h1>
        <h2 className={styles.subtitle}>
          새로운 도커 컨테이너를 빠르게 생성하고 관리해보세요.
        </h2>
      </header>

      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <TextField
          type={TEXT_FIELD_TYPES.TEXT}
          name="clusterName"
          label="컨테이너 이름"
          detail="컨테이너 이름을 입력해주세요."
          labelSize="large"
          placeholder="컨테이너 이름"
          required
        />
        <TextField
          type={TEXT_FIELD_TYPES.TEXT}
          name="imageLink"
          label="도커 이미지 링크"
          detail="도커 이미지의 링크를 입력해주세요."
          labelSize="large"
          textFieldSize="large"
          placeholder="도커 이미지 링크"
          required
        />
        <div className={styles.inputRow}>
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            name="externalPort"
            label="외부 포트"
            labelSize="large"
            textFieldSize="small"
            placeholder="외부 포트"
            required
          />
          <TextField
            type={TEXT_FIELD_TYPES.TEXT}
            name="internalPort"
            label="내부 포트"
            labelSize="large"
            textFieldSize="small"
            placeholder="내부 포트"
            required
          />
        </div>

        <Button type="submit" variant={BUTTON_VARIANTS.LOGIN}>
          컨테이너 생성
        </Button>

        <Button
          type="button"
          variant={BUTTON_VARIANTS.LOGIN}
          onClick={handleContainerButtonClick}
        >
          컨테이너 조회
        </Button>
      </form>
    </div>
  );
};

export default CreateContainer;
