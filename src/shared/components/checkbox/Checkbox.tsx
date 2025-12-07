import React from 'react';
import * as styles from './Checkbox.css';

interface Props extends Omit<React.ComponentProps<'input'>, 'type'> {
  checked?: boolean;
}

export const Checkbox = ({ checked, className, ...props }: Props) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      className={`${styles.checkbox} ${className || ''}`}
      {...props}
    />
  );
};
