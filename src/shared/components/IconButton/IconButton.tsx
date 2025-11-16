import React from 'react';
import * as styles from './IconButton.css';

interface IconButtonProps extends React.ComponentProps<'button'> {
  icon: 'chevron-down' | 'chevron-up' | 'copy' | 'folder' | 'meatball';
}

export const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  return (
    <button
      className={`${styles.iconButton({ icon })} ${className || ''}`}
      {...props}
    />
  );
};
