import { useRoutes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
          // action: loginAction
        },
        {
          path: '/forgot-password',
          element: <ForgotPassword />
        },
        {
          path: '/reset-password',
          element: <ResetPassword />
        }
      ]
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    },
    {
      element: <NotFound />,
      path: '*'
    }
  ]);

  return routeElement;
}
