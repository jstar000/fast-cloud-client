import React from 'react';
import * as styles from './IconButton.css';
import type { IconType } from '@/shared/constants/icon';

interface Props extends React.ComponentProps<'button'> {
  icon: IconType;
}

export const IconButton = ({ icon, className, ...props }: Props) => {
  return (
    <button
      className={`${styles.iconButton({ icon })} ${className || ''}`}
      {...props}
    />
  );
};
