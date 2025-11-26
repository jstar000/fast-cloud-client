import { Title } from '@/assets/svg';
import * as styles from './Header.css';
import { Button } from '@/shared/components/button/Button';
import { BUTTON_VARIANTS } from '@/shared/constants/button';

interface Props {
  hasButton?: boolean;
}

export const Header = ({ hasButton = false }: Props) => {
  return (
    <header className={styles.container}>
      <Title />
      {hasButton && (
        <div className={styles.buttonContainer}>
          <Button variant={BUTTON_VARIANTS.NAV_LOGIN}>Log in</Button>
          <Button variant={BUTTON_VARIANTS.NAV_SIGNUP}>Sign up</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
