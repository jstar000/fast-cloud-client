import { Title } from '@/assets/svg';
import * as styles from './Header.css';
import { Button } from '@/shared/components/button/Button';
import { BUTTON_VARIANTS } from '@/shared/constants/button';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/routes/paths';

interface Props {
  hasButton?: boolean;
}

export const Header = ({ hasButton = false }: Props) => {
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <button type="button" onClick={() => navigate(ROUTES.HOME)}>
        <Title />
      </button>
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
