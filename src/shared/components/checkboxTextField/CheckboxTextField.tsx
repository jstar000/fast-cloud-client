import React from 'react';
import { Checkbox } from '@/shared/components/checkbox/Checkbox';
import * as styles from './CheckboxTextField.css';

interface CheckboxTextFieldProps
  extends Omit<React.ComponentProps<'input'>, 'type'> {
  // Checkbox 컴포넌트의 type은 'checkbox'로 고정되어 있음
  // Checkbox에 type 이외의 props(checked 등) 전달은 허용, type props 전달 시 오류 발생 -> 개발 안정성 증대
  title: string;
  detail: string;
}

export const CheckboxTextField = ({
  title,
  detail,
  ...props
}: CheckboxTextFieldProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <Checkbox {...props} />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        {detail && <p className={styles.detail}>{detail}</p>}
      </div>
    </div>
  );
};
