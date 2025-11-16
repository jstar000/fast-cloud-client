import React from 'react';
import * as styles from './Button.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant:
    | 'home'
    | 'white'
    | 'cta-large'
    | 'cta-small'
    | 'login'
    | 'gray'
    | 'nav-login'
    | 'nav-signup'
    | 'text-medium'
    | 'text-small';
}

export const Button = ({
  variant,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.buttonStyles({ variant })} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
