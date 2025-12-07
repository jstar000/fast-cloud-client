import React from 'react';
import * as styles from './Tag.css';
import type { TagType } from '@/shared/constants/tag';

interface Props extends React.ComponentProps<'div'> {
  tagType: TagType;
  children: React.ReactNode;
}

export const Tag = ({ tagType, children, ...props }: Props) => {
  return (
    <div className={styles.container({ tagType })} {...props}>
      {children}
    </div>
  );
};
