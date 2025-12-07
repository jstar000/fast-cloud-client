import Header from '@/shared/components/header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

interface Props {
  hasButton?: boolean;
}

const Layout = ({ hasButton = false }: Props) => {
  return (
    <Suspense fallback={<div>Suspense 폴백</div>}>
      <Header hasButton={hasButton} />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
