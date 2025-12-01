import { Check, Divider_Medium } from '@/assets/svg';
import * as styles from './card-rect.css';
import { Tag } from '../tag/Tag';
import { TAG_TYPES } from '@/shared/constants/tag';
import { Button } from '../button/Button';
import { BUTTON_VARIANTS } from '@/shared/constants/button';

interface Props {
  size: 'large' | 'small';
  title: string;
  detail: string;
  explanations: string[];
  buttonName: string;
}

const CardRect = ({ size, title, detail, explanations, buttonName }: Props) => {
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
          <Tag tagType={TAG_TYPES.GRAY}>추천</Tag>
          {explanations.map((explanation) => (
            <div className={styles.purposeRow}>
              <Check />
              <span>{explanation}</span>
            </div>
          ))}
        </div>
      </div>

      <Button type="button" variant={BUTTON_VARIANTS.CTA_LARGE}>
        {buttonName}
      </Button>
    </div>
  );
};

export default CardRect;
