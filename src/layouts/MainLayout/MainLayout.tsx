import { Outlet, useLocation } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';
import clsx from 'clsx';

export default function MainLayout() {
  const path = useLocation().pathname;
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-hidden bg-neutral-900'>
      <SideNav />
      <Header />
      <div className='ml-60 mt-[6rem] flex h-[calc(100vh-6rem)] w-[calc(100%-15rem)] items-center justify-center overflow-x-hidden overflow-y-hidden'>
        <div
          className={clsx(
            'h-[calc(100%-2rem)] w-[calc(100%-2rem)] overflow-x-hidden overflow-y-hidden rounded-2xl  p-10',
            {
              'bg-neutral-950': path === '/',
              'bg-white': path !== '/'
            }
          )}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
