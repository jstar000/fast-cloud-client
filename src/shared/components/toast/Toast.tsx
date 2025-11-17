import React from 'react';
import * as styles from './Toast.css';
import { Icn_Success, Icn_Failure } from '@/assets/svg';
import type { ToastType } from '@/shared/constants/toast';

interface Props extends React.ComponentProps<'div'> {
  type: ToastType;
  content: string;
  onClose?: () => void; // Toast 닫을 때 사용
}

export const Toast = ({
  type,
  content,
  // onClose,
  ...props
}: Props) => {
  return (
    <div
      className={styles.container}
      role="alert"
      aria-live="polite" // 스크린 리더용, 스크린 리더가 현재 읽고 있는 내용을 모두 읽은 후 Toast의 변경사항을 읽어줌
      {...props}
    >
      {type === 'success' ? (
        <Icn_Success className={styles.icon} aria-hidden="true" /> // 로고는 스크린 리더 off
      ) : (
        <Icn_Failure className={styles.icon} aria-hidden="true" />
      )}
      <p className={styles.content}>{content}</p>
    </div>
  );
};
