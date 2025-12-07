import { Check, Divider_Medium } from '@/assets/svg';
import * as styles from './card-rect.css';
import { Tag } from '../../tag/Tag';
import { TAG_TYPES } from '@/shared/constants/tag';
import { Button } from '../../button/Button';
import { BUTTON_VARIANTS } from '@/shared/constants/button';

interface Props {
  size: 'large' | 'small';
  title: string;
  detail: string;
  tag?: string;
  explanations: string[];
  buttonName: string;
  onSelect: () => void;
}

const CardRect = ({
  size,
  title,
  detail,
  tag,
  explanations,
  buttonName,
  onSelect,
}: Props) => {
  return (
    <div className={styles.container({ size })}>
      <div>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.detail}>{detail}</p>
        </div>

        <div className={styles.divider}>
          <Divider_Medium />
        </div>

        <div className={styles.recommendationContainer}>
          {tag && <Tag tagType={TAG_TYPES.GRAY}>{tag}</Tag>}
          {/* TODO: key값 explanation으로 변경 */}
          {explanations.map((explanation, index) => (
            <div key={index} className={styles.purposeRow}>
              <Check />
              <span className={styles.purposeText}>{explanation}</span>
            </div>
          ))}
        </div>
      </div>

      <Button
        type="button"
        variant={
          size === 'large'
            ? BUTTON_VARIANTS.CTA_LARGE
            : BUTTON_VARIANTS.CTA_SMALL
        }
        onClick={onSelect}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default CardRect;
