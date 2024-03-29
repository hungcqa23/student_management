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
import AddCourse from './pages/add_course';
import CourseInfo from './pages/course_info';
import { useAppContext } from './contexts/app.contexts';
import StudentInfo from './pages/Student/student_info';
import Notification from './pages/notification';
import Grades from './pages/grade';
import AddGrade from './pages/add_grade';
import AddStudent from './pages/Student/add_student';
import Recovery from './pages/Recovery';
import AddAttendance from './pages/add_attendance';
import Course from './pages/course';
import Fee from './pages/fee';
import CollectFee from './pages/fee_info';

function ProtectedRoute() {
  const { isAuthenticated } = useAppContext();
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

function RejectedRoute() {
  const { isAuthenticated } = useAppContext();
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
            },
            {
              path: path.course,
              element: <Course />
            },
            {
              path: path.add_course,
              element: <AddCourse />
            },
            {
              path: path.course + '/:id',
              element: <CourseInfo />
            },
            {
              path: path.student + '/:id',
              element: <StudentInfo />
            },
            {
              path: path.add_student + '/:id?',
              element: <AddStudent />
            },
            {
              path: path.notifications,
              element: <Notification />
            },
            {
              path: path.grades,
              element: <Grades />
            },
            {
              path: path.grades + '/:id',
              element: <AddGrade />
            },
            {
              path: path.attendance,
              element: <Grades />
            },
            {
              path: path.attendance + '/:id',
              element: <AddAttendance />
            },
            {
              path: path.recovery,
              element: <Recovery />
            },
            {
              path: path.recovery + '/students',
              element: <Recovery />
            },
            {
              path: path.fee,
              element: <Fee />
            },
            {
              path: path.fee + '/:id',
              element: <CollectFee />
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
