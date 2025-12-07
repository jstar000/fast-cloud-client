import * as styles from './FieldLabel.css';

interface Props {
  label?: string;
  detail?: string;
  size?: 'small' | 'large';
}

export const FieldLabel = ({ label, detail, size = 'small' }: Props) => {
  if (!label && !detail) {
    return null;
  }

  return (
    <div className={styles.container}>
      {label && <label className={styles.label({ size })}>{label}</label>}
      {detail && <p className={styles.detail({ size })}>{detail}</p>}
    </div>
  );
};
