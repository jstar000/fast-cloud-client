import React from 'react';
import * as styles from './TextField.css';
import type { TextFieldType } from '@/shared/constants/textField';

interface TextFieldProps extends Omit<React.ComponentProps<'input'>, 'type'> {
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
}: TextFieldProps) => {
  return (
    <div className={styles.container({ size: labelSize })}>
      {(label || detail) && (
        <div className={styles.textContainer}>
          {label && (
            <label className={styles.label({ size: labelSize })}>{label}</label>
          )}
          {detail && (
            <p className={styles.detail({ size: labelSize })}>{detail}</p>
          )}
        </div>
      )}
      <input
        type={type}
        className={`${styles.textField({ error })}`}
        aria-invalid={error}
        {...props}
      />
    </div>
  );
};
