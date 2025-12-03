import Home from '@/pages/main/home/home';
import CreateContainer from '@/pages/main-service/docker-container/create-container/create-container';
import CreateInstance from '@/pages/main-service/mini-pc/create-instance/create-instance';
import { TestPage } from '@/pages/Test/TestPage';
import Layout from '@/routes/layout';
import { ROUTES } from '@/routes/paths';
import { createBrowserRouter, Navigate } from 'react-router';
import SelectService from '@/pages/main/service/select-service';
import SelectInstanceType from '@/pages/main-service/mini-pc/select-instance-type/select-instance-type';
import ContainerInfo from '@/pages/main-service/docker-container/container-info/container-info';

// TODO: 라우터 정리
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout hasButton={true} />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SELECT_SERVICE,
        element: <SelectService />,
      },
      {
        path: ROUTES.SELECT_INSTANCE_TYPE,
        element: <SelectInstanceType />,
      },
      {
        path: ROUTES.CREATE_INSTANCE,
        element: <CreateInstance />,
      },
      {
        path: ROUTES.CREATE_CONTAINER,
        element: <CreateContainer />,
      },
      {
        path: ROUTES.CONTAINER_INFO,
        element: <ContainerInfo />,
      },
      {
        path: ROUTES.TEST,
        element: <TestPage />,
      },
    ],
  },
]);
