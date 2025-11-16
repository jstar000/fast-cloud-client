import React from 'react';
import * as styles from './Checkbox.css';

interface CheckboxProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  checked?: boolean;
}

export const Checkbox = ({ checked, className, ...props }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      className={`${styles.checkbox} ${className || ''}`}
      {...props}
    />
  );
};
