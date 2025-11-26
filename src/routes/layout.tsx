import Header from '@/shared/components/header/Header';
import { Outlet } from 'react-router';

interface Props {
  hasButton?: boolean;
}

const Layout = ({ hasButton = false }: Props) => {
  return (
    <>
      <Header hasButton={hasButton} />
      <Outlet />
    </>
  );
};

export default Layout;
