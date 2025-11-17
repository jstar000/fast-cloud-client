import React from 'react';
import * as styles from './StatusChip.css';
import type { StatusChipType } from '@/shared/constants/statusChip';

interface Props extends React.ComponentProps<'div'> {
  status: StatusChipType;
  children: React.ReactNode;
}

export const StatusChip = ({ status, children, ...props }: Props) => {
  return (
    <div className={styles.container({ status })} {...props}>
      <div className={styles.statusCircle({ status })} />
      <span className={styles.content}>{children}</span>
    </div>
  );
};
