import Home from '@/pages/home/Home';
import CreateContainer from '@/pages/main-service/docker-container/create-container/create-container';
import CreateInstance from '@/pages/main-service/mini-pc/create-instance/create-instance';
import { TestPage } from '@/pages/Test/TestPage';
import Layout from '@/routes/layout';
import { ROUTES } from '@/routes/paths';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout hasButton={true} />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
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
        path: ROUTES.TEST,
        element: <TestPage />,
      },
    ],
  },
]);
