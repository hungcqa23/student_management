import { Navigate, Outlet, RouteObject, useRoutes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import Register from './pages/Register';
import path from './constants/path';

const isAuthenticated = true;
function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}
const AuthRouteChildren: RouteObject[] = [
  {
    path: path.login,
    element: <Login />
  },
  {
    path: path.register,
    element: <Register />
  },
  {
    path: path.forgot_password,
    element: <ForgotPassword />
  },
  {
    path: path.reset_password,
    element: <ResetPassword />
  }
];
export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      element: <RejectedRoute />,
      children: [
        {
          element: <AuthLayout />,
          children: AuthRouteChildren
        }
      ]
    },
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: path.home,
              element: <Home />
            }
          ]
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
