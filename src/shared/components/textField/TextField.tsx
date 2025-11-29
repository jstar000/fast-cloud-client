import * as styles from './TextField.css';
import type { TextFieldType } from '@/shared/constants/textField';
import { FieldLabel } from '@/shared/components/fieldLabel/FieldLabel';
import type React from 'react';

interface Props extends Omit<React.ComponentProps<'input'>, 'type'> {
  // input element의 모든 props를 상속하되, type prop만 제외
  // input의 type은 개발자가 제어(TextFieldType으로 제한)
  type: TextFieldType;
  error?: boolean;
  label?: string;
  detail?: string;
  labelSize?: 'small' | 'large';
}

export const TextField = ({
  type,
  error = false,
  label,
  detail,
  labelSize = 'small',
  ...props
}: Props) => {
  return (
    <div className={styles.container({ size: labelSize })}>
      <FieldLabel label={label} detail={detail} size={labelSize} />
      <input
        type={type}
        className={`${styles.textField({ error })}`}
        aria-invalid={error}
        {...props}
      />
    </div>
  );
};
